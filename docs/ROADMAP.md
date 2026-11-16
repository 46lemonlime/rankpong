# RankPong — Development Roadmap

## 1. Roadmap Overview & Strategic Phases

RankPong follows a disciplined, phased execution strategy. The initial milestone delivers a rock-solid, production-grade Minimum Viable Product (MVP) centered on club communities, match logging, and verifiable ELO ratings before tackling complex tournament brackets or secondary formats.

```mermaid
flowchart LR
    P1[Phase 1: Foundation] --> P2[Phase 2: Clubs]
    P2 --> P3[Phase 3: Matches]
    P3 --> P4[Phase 4: Rankings]
    P4 -. MVP Milestone .-> P5[Phase 5: Competitions]
    P5 --> P6[Phase 6: Expansion]

    classDef mvp fill:#193C4A,stroke:#A9E34B,stroke-width:2px,color:#fff;
    classDef future fill:#142C38,stroke:#64748B,stroke-width:1px,stroke-dasharray: 5 5,color:#94a3b8;
    class P1,P2,P3,P4 mvp;
    class P5,P6 future;
```

---

## 2. Phase Breakdown

### Phase 1 — Foundation (Current & Immediate Next Step)
*Goal: Complete project scaffolding, establish authentication, database migrations, and basic user profiles.*
- [x] Initial project scaffolding (Next.js App Router, Tailwind v4, shadcn/ui, TypeScript strict mode).
- [x] Environment variable validation schema and project documentation source of truth.
- [ ] Supabase local development initialization and migration setup.
- [ ] User registration, login, and logout with Supabase Auth + `@supabase/ssr`.
- [ ] Resend integration for transactional email verification.
- [ ] User profile creation trigger on signup (`profiles` table).
- [ ] Profile management page (avatar, play style, handedness, bio).

### Phase 2 — Clubs & Membership (MVP Core)
*Goal: Empower users to create and manage private table tennis club communities.*
- [ ] Club creation flow with unique slug generation and validation.
- [ ] Club discovery directory for public exploration.
- [ ] Private club dashboard shell (restricted via RLS to active members).
- [ ] Membership join requests (user request -> pending status).
- [ ] Club invitation token engine (invitations with expiration).
- [ ] Club administration dashboard: Approve/reject requests, promote Admins, remove members.
- [ ] Ownership transfer and club settings management.

### Phase 3 — Matches (MVP Core)
*Goal: Provide seamless, mobile-friendly match logging with mutual confirmation.*
- [ ] Singles match logging form with dynamic set scores (11-point sets).
- [ ] Friendly match recording (stored for history without rating impact).
- [ ] Ranked match recording (enters `pending_confirmation` state).
- [ ] Mutual confirmation workflow (opponent accepts or disputes result).
- [ ] Club match history feed with filterable cards and score breakdowns.
- [ ] Administrative dispute resolution for club Owners and Admins.

### Phase 4 — Rankings & Global ELO (MVP Core)
*Goal: Implement a reliable, server-side ELO rating engine with full auditability.*
- [ ] Server-side atomic ELO calculation engine with configurable parameters.
- [ ] `rating_history` audit ledger recording old rating, new rating, and deltas.
- [ ] Player global ELO display and progression chart.
- [ ] Club leaderboards and ranking ladder.
- [ ] Core player statistics (win rate, win streak, head-to-head records).

> 🏁 **MVP MILESTONE COMPLETE**: At the conclusion of Phase 4, RankPong is a fully functional, production-ready table tennis platform for club management and competitive play.

---

### Phase 5 — Competitions (Post-MVP)
*Goal: Expand club activity with structured seasonal leagues and tournament brackets.*
- [ ] Competition creation interface (Leagues vs. Knockout Tournaments).
- [ ] Automated bracket generator (Single Elimination & Double Elimination with seeding).
- [ ] Round-robin league fixtures and schedule generator.
- [ ] Competition standings table (points, set differential, ladder rank independent of ELO).
- [ ] Configurable ELO toggle for competition matches.

### Phase 6 — Expansion & Advanced Features (Future Horizon)
*Goal: Introduce advanced formats, push notifications, and detailed telemetry.*
- [ ] Doubles match format (2v2) with team rating algorithms.
- [ ] Real-time in-app and email push notifications for match challenges and invites.
- [ ] Advanced performance analytics (heatmaps, set-by-set momentum analysis).
- [ ] Multi-club inter-league tournaments and regional championships.
- [ ] Exportable club statistics (CSV, PDF match sheets).

---

## 3. Explicit MVP Boundary

To maintain velocity and engineering discipline, the following features are **explicitly excluded** from the initial MVP:

| Feature | Status in MVP | Scheduled Phase |
|---|:---:|:---:|
| User authentication & profiles | **Included** | Phase 1 |
| Club creation & private roles | **Included** | Phase 2 |
| Membership requests & invites | **Included** | Phase 2 |
| Singles match recording & set scores | **Included** | Phase 3 |
| Match confirmation & dispute handling | **Included** | Phase 3 |
| Server-side Global ELO calculation | **Included** | Phase 4 |
| Club leaderboards & history | **Included** | Phase 4 |
| Elimination tournament brackets | **Deferred** | Phase 5 |
| Round-robin seasonal leagues | **Deferred** | Phase 5 |
| Doubles matches (2v2) | **Deferred** | Phase 6 |
| Push notifications | **Deferred** | Phase 6 |
| Complex statistical heatmaps | **Deferred** | Phase 6 |
