# RankPong — Product Specification

## 1. Product Overview & Context

### 1.1 Product Name
**RankPong**

### 1.2 Product Description
RankPong is a public web platform for organising table tennis clubs, matches, rankings, leagues, and tournaments. 

While the platform is publicly accessible for discovering clubs and exploring global leaderboards, individual table tennis clubs operate as **private, member-governed communities**. Club owners and administrators maintain complete authority over membership, internal scorekeeping, and club-specific events.

### 1.3 Core Product Philosophy
- **Frictionless Simplicity**: Recording a match or reviewing standings must take seconds, easily completed on mobile phones at the table.
- **Competitive Integrity**: Transparent, server-verified global ELO ratings and match confirmation ensure reliable statistics.
- **Community-First**: Clubs are autonomous private spaces designed to foster rivalries, casual play, and camaraderie.
- **Modern Sports-Tech SaaS**: A clean, responsive interface that combines athletic energy with professional SaaS polish.
- **Scalable by Design**: Built to scale seamlessly from a 4-person lunch break workplace club to multi-tiered competitive leagues with hundreds of players.

---

## 2. User Accounts & Profiles

### 2.1 Account Lifecycle & Authentication
- **Registration**: Email and password registration with required email verification (powered by Supabase Auth and Resend transactional email).
- **Global Profile**: A user profile is **global** across RankPong and not tied to any single club. 
- **Multi-Club Membership**: A single user account can join and participate in multiple independent clubs simultaneously.

### 2.2 Profile Attributes
- **Identity**: Full Name, Username/Slug, Avatar URL, Bio.
- **Table Tennis Attributes**: Handedness (Left/Right), Play Style (Attacker, Defender, All-round), Grip Type (Shakehand, Penhold).
- **Competitive Statistics**: Global ELO rating, total matches played, win/loss record, current win streak, rating progression chart.
- **Club Affiliations**: List of clubs the user belongs to, including active roles in each.

---

## 3. Clubs & Communities

### 3.1 Club Entity
Each club in RankPong represents an independent organization, workplace team, or regional table tennis collective.
- **Metadata**: Name, Unique Slug, Description, Logo/Avatar, Location/Venue details.
- **Governance**: One Owner, zero or more Admins, and Members.
- **Privacy Setting**: **Private by default**.
  - *Public visitors*: Can discover the club profile, view public metadata (name, description, logo, member count, public announcements).
  - *Private content*: Match logs, internal leaderboards, player discussions, and competition brackets are restricted strictly to active club members.

### 3.2 Membership Acquisition
Users can obtain membership through two mechanisms:
1. **Membership Request**: A registered user submits a request to join a club. The request remains in `pending` status until an Owner or Admin approves or rejects it.
2. **Club Invitation**: An Owner or Admin generates an invite link or sends an email invitation with an authorized secure token to prospective players.

### 3.3 Membership Statuses
Membership follows a strict state transition model:
- `pending`: User applied or was invited; awaiting mutual confirmation.
- `active`: Fully verified member; holds complete access to private club activities.
- `rejected`: Request denied by club administration.
- `banned`: Revoked access due to misconduct; barred from submitting new join requests.
- `left`: Voluntary resignation from the club by the user.

---

## 4. Club Roles & Permissions

A user's role is **club-specific**. A user may be an `OWNER` in their workplace club, an `ADMIN` in a community club, and a regular `MEMBER` in a weekend tournament club.

| Capability | OWNER | ADMIN | MEMBER | Public Visitor |
|---|:---:|:---:|:---:|:---:|
| Discover club public profile | Yes | Yes | Yes | Yes |
| Access private club dashboard & matches | Yes | Yes | Yes | No |
| Log friendly and ranked matches | Yes | Yes | Yes | No |
| Confirm or dispute pending matches | Yes | Yes | Yes | No |
| View internal club leaderboards | Yes | Yes | Yes | No |
| Approve / reject join requests | Yes | Yes | No | No |
| Invite prospective members | Yes | Yes | No | No |
| Remove standard members | Yes | Yes | No | No |
| Create and manage club competitions | Yes | Yes | No | No |
| Promote members to Admin / Demote Admins | Yes | No | No | No |
| Edit club settings & branding | Yes | No | No | No |
| Transfer club ownership | Yes | No | No | No |
| Delete club | Yes | No | No | No |

---

## 5. Matches

### 5.1 Structure & Scope
- **Match Formats**: The initial MVP supports **Singles (1v1)** matches. The domain model and schema are architected to accommodate **Doubles (2v2)** in future phases.
- **Club Scope**: Every match is logged within the context of a specific club where both participants are active members.

### 5.2 Match Categories
1. **FRIENDLY Match**:
   - Informal practice or warm-up games.
   - Does **not** affect player global ELO ratings.
   - Recorded in club match history and counted toward general player activity statistics.
2. **RANKED Match**:
   - Competitive official match.
   - **Directly affects global ELO ratings** upon mutual confirmation.
   - Requires valid set scores meeting standard table tennis rules (e.g. best of 3 or best of 5 sets, played to 11 points with a 2-point margin).

### 5.3 Match Lifecycle & Confirmation Flow
To prevent fraudulent score reporting, ranked matches undergo a two-party confirmation workflow:
1. **Submission**: Player A logs the match (date, opponent, category, set scores, overall winner).
2. **Pending Confirmation**: Match status is marked `pending_confirmation`.
3. **Review**: Player B receives an in-app prompt and notification.
   - **Confirm**: Player B approves. Match status transitions to `confirmed`. The server calculates and commits ELO rating changes atomically.
   - **Dispute**: Player B disputes the result. Match status transitions to `disputed` for club Admin/Owner intervention.
4. **Administrative Override**: Club Admins/Owners possess authority to resolve disputes, confirm valid results, or void fraudulent matches.

---

## 6. Global ELO Rating System

### 6.1 Principles
- **Universal Baseline**: Every user starts with a global ELO rating of **1000**.
- **Platform-Wide**: ELO is universal across RankPong and independent of individual club standings.
- **Ranked-Only**: Only confirmed ranked matches produce rating changes. Friendly matches and unconfirmed matches never alter ratings.
- **Server-Side Enforcement**: All ELO calculations are executed inside isolated server actions / database functions; client code can never pass or modify rating values.

### 6.2 Auditability & Rating History
For every confirmed ranked match, an immutable record is inserted into the `rating_history` table capturing:
- Match ID
- Player ID
- Pre-match rating
- Post-match rating
- Rating delta ($\Delta$)
- Timestamp of calculation

### 6.3 Configurable Parameters
ELO computation logic is centralized in a dedicated calculation engine (`features/rankings/`) rather than hardcoded across the app:
- **Starting Rating**: $R_0 = 1000$
- **K-Factor ($K$)**: Configurable scaling factor (e.g., $K=32$ for provisional players under 20 matches, $K=24$ for standard play).
- **Scale Factor ($D$)**: $400$ (standard logistic scaling: $E_A = \frac{1}{1 + 10^{(R_B - R_A) / 400}}$).

---

## 7. Competitions (Leagues, Tournaments & Seasons)

*Note: Competitions are designed in the core domain model and deferred to Phase 5 after the MVP.*

### 7.1 Competition Types
- **Leagues**: Multi-week round-robin competitions with scheduled weekly fixtures and point-based ladder tables.
- **Tournaments**: Knockout formats including Single Elimination, Double Elimination, and Group-to-Knockout brackets with automated seeding.
- **Seasons**: Time-boxed periods (e.g., "Fall 2026 Season") with seasonal club championships and reset rankings.

### 7.2 Independence from Global ELO
- **Decoupled Standings**: Competition standings (points, goal/point differential, ladder rank) are calculated entirely within the competition's scoring rules. A player may top a league while maintaining a moderate global ELO.
- **Optional ELO Impact**: Club administrators can configure whether matches played within a competition also count as official ranked matches that update global ELO.
