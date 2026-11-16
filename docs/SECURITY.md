# RankPong — Security & Access Control Model

## 1. Security Architecture & Threat Model

RankPong enforces a multi-layered security model where client-side code is considered entirely untrusted. Security boundaries are defended through PostgreSQL **Row Level Security (RLS)**, server-side Zod validation, and privileged server action orchestration.

```mermaid
graph TD
    Client[Client Browser / Untrusted Input] --> API[Next.js Server Actions / Validation Layer]
    API -->|Authenticated Session Context| RLS[PostgreSQL Row Level Security Policies]
    API -->|Service Role (Protected Transactions)| DBAdmin[PostgreSQL Atomic Engine / Functions]
    RLS --> Tables[(Database Tables)]
    DBAdmin --> Tables
```

---

## 2. Core Security Principles

1. **Private Clubs by Default**:
   Public visitors may only view public club metadata (name, slug, logo, member count). All internal match feeds, player rosters, chat, and leaderboards require an active membership record.
2. **Strict Membership State Checking**:
   Only users with status `active` in `club_members` possess access to private club content. Users with `pending`, `rejected`, `banned`, or `left` are blocked at the database level.
3. **No Direct Rating Mutation**:
   Users can never update their own or an opponent's ELO rating. All rating changes are calculated server-side inside atomic database transactions upon mutual match confirmation.
4. **No Client-Side Authorization Trust**:
   Never rely solely on UI component hiding for security. Every Server Action independently verifies the caller's `auth.uid()` against the target club's membership roles before performing actions.
5. **Defense Against Score Tampering**:
   Ranked matches require mutual two-party confirmation. If Player A logs a match, Player B must confirm it before ratings are altered. In case of dispute, only club Admins or Owners may intervene.

---

## 3. Row Level Security (RLS) Policy Specifications

*Note: Per initial guidelines, SQL migration scripts are not created yet. The following specifications define the exact access rules to be implemented in Phase 1 and 2 migrations.*

### 3.1 `profiles`
- **SELECT**: Public (all authenticated and unauthenticated users can view public player profiles, usernames, and ratings).
- **INSERT**: Handled automatically via Supabase Auth database trigger upon user signup (`auth.users -> profiles`).
- **UPDATE**: Only the profile owner where `auth.uid() = profiles.id`. Cannot update `elo_rating`, `matches_played`, or `matches_won` directly (guarded by database column triggers or server-only updates).
- **DELETE**: Restricted; only cascading from `auth.users` deletion.

### 3.2 `clubs`
- **SELECT**: 
  - If `is_private = FALSE`: Public.
  - If `is_private = TRUE`: Public visitors can read basic metadata (`id`, `name`, `slug`, `logo_url`, `member_count`). Full private club records are only selectable if `EXISTS (SELECT 1 FROM club_members WHERE club_id = clubs.id AND user_id = auth.uid() AND status = 'active')`.
- **INSERT**: Any authenticated user can create a club. A trigger automatically inserts the creator into `club_members` with `role = 'owner'` and `status = 'active'`.
- **UPDATE**: Only the club owner (`owner_id = auth.uid()`).
- **DELETE**: Only the club owner (`owner_id = auth.uid()`).

### 3.3 `club_members`
- **SELECT**:
  - Active members of the club can view the roster: `EXISTS (SELECT 1 FROM club_members cm WHERE cm.club_id = club_members.club_id AND cm.user_id = auth.uid() AND cm.status = 'active')`.
  - A user can always view their own membership status across any club: `user_id = auth.uid()`.
- **INSERT**:
  - Request to join: Any authenticated user can insert a record with `user_id = auth.uid()`, `status = 'pending'`, and `role = 'member'`.
  - Owner/Admin invitation: Users with `role IN ('owner', 'admin')` in the target club can insert member records.
- **UPDATE**:
  - Role management (promoting to Admin, demoting): Strictly club `owner`.
  - Status management (approving requests, banning): Club `owner` or `admin`.
  - Self-leave: An active member can update their own status to `left`.
- **DELETE**: Only club `owner` (or self-removal).

### 3.4 `club_invitations`
- **SELECT**:
  - Club `owner` or `admin` can view all invitations for their club.
  - The invited user can read an invitation if they possess the valid `token`.
- **INSERT**: Only club `owner` or `admin`.
- **UPDATE / DELETE**: Only club `owner` or `admin`.

### 3.5 `matches`
- **SELECT**:
  - Restricted to active members of the hosting club (`club_id`).
- **INSERT**:
  - Only active club members where `auth.uid() = player1_id OR auth.uid() = player2_id`.
  - Must specify `submitted_by = auth.uid()`.
  - Initial `status` must be `pending_confirmation`.
- **UPDATE**:
  - Match confirmation: Allowed only by the opposing player (`auth.uid() <> submitted_by AND auth.uid() IN (player1_id, player2_id)`) to change status from `pending_confirmation` to `confirmed`.
  - Dispute: Allowed by either participant to change status to `disputed`.
  - Admin Resolution: Club `owner` or `admin` can update status to `confirmed` or `voided`.
- **DELETE**:
  - Only club `owner` or creator before confirmation. Once confirmed and ratings are computed, matches cannot be deleted (only voided with compensating rating adjustments).

### 3.6 `match_sets`
- **SELECT**: Follows `matches` read permissions (active members of the club).
- **INSERT**: Linked to match creation by the submitting player.
- **UPDATE / DELETE**: Follows `matches` modification permissions.

### 3.7 `rating_history`
- **SELECT**: Public (or authenticated) for displaying rating charts and audit logs.
- **INSERT / UPDATE / DELETE**: **No direct client access**. Strictly executed by trusted server functions (`adminClient` or PostgreSQL stored procedures).

---

## 4. Privileged Server Operations & Atomic Transactions

### 4.1 Atomic ELO Calculation Transaction
When a ranked match is confirmed, the rating update must execute as an **atomic, isolated transaction** to prevent race conditions:

```text
BEGIN TRANSACTION;
  1. Lock player 1 profile record: SELECT elo_rating FROM profiles WHERE id = p1 FOR UPDATE;
  2. Lock player 2 profile record: SELECT elo_rating FROM profiles WHERE id = p2 FOR UPDATE;
  3. Compute expected scores E_1 and E_2;
  4. Compute rating deltas Δ_1 and Δ_2 using configured K-factor;
  5. UPDATE profiles SET elo_rating = elo_rating + Δ_1, matches_played = matches_played + 1 WHERE id = p1;
  6. UPDATE profiles SET elo_rating = elo_rating + Δ_2, matches_played = matches_played + 1 WHERE id = p2;
  7. INSERT INTO rating_history (match_id, player_id, old_rating, new_rating, rating_delta) VALUES (...);
  8. UPDATE matches SET status = 'confirmed', confirmed_at = NOW(), confirmed_by = auth.uid() WHERE id = match_id;
COMMIT;
```

If any step fails, the entire transaction rolls back cleanly, leaving ratings completely intact.

### 4.2 Safe Handling of Service Role Credentials
- `SUPABASE_SERVICE_ROLE_KEY` bypasses all PostgreSQL RLS policies.
- It is strictly referenced in `lib/supabase/admin.ts` and called inside isolated server-side functions for operations that require elevated privileges (e.g. initial token verification, rating recalculation procedures, and webhooks).
- It is **never** prefixed with `NEXT_PUBLIC_` and never exported to client-side bundles.
