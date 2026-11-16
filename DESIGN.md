# RankPong — Design System & UX Guidelines

## 1. Design Direction & Philosophy

### 1.1 Character & Aesthetic
RankPong is a **modern sports-tech SaaS platform**. It strikes a careful balance between athletic energy and high-precision software utility. The visual tone is:
- **Premium & Professional**: Grounded, high-contrast layouts reminiscent of elite sports analytics dashboards.
- **Sporty & Competitive**: Dynamic typography, sharp scorecards, and focused data visualizations.
- **Clean & Approachable**: Generous breathing room, clear typographic hierarchy, and intuitive mobile ergonomics.

### 1.2 Anti-Patterns to Avoid
- **No cartoonish sports graphics**: Avoid clip-art paddles, comic ping-pong balls, or game-show badges.
- **No excessive gradients or skeuomorphism**: Use flat and subtly elevated surfaces with subtle border delineations.
- **No distracting motion**: Animations are limited to functional transitions (e.g. modal fade-ins, accordion expansions, tab switches under 200ms).
- **No generic dashboard clutter**: Only present actionable metrics relevant to the player's matches, club, and standings.
- **No neon overload**: The vibrant accent green is deployed strictly for strategic highlights, active states, and call-to-actions.

---

## 2. Color System & Semantic Tokens

The palette is built around a **dark navy/blue-grey foundation with a vibrant lime-green accent**:

| Token Role | Hex Code | Purpose & Usage |
|---|---|---|
| **Primary Dark** | `#142C38` | Brand headers, dark mode surfaces, primary containers |
| **Secondary Dark** | `#193C4A` | Secondary surfaces, table headers, dark card backgrounds |
| **Accent Green** | `#A9E34B` | Primary CTAs, active status, win indicators, highlight accents |
| **Light Background** | `#F7F9FA` | Main light-mode canvas, body background |
| **Surface White** | `#FFFFFF` | Card backgrounds, dialog containers in light mode |
| **Main Text** | `#18252D` | Primary headings, table data, high-emphasis copy |
| **Secondary Text** | `#64748B` | Subheadings, metadata, placeholders, table column labels |
| **Border / Divider** | `#E2E8F0` / `#1E3A4B` | Clean 1px structural container borders |

### Semantic Feedback Tokens
- **Success / Rating Gain**: Emerald Green (`#10B981`) — Used for positive rating deltas ($+\Delta$), confirmed matches, and active status badges.
- **Error / Rating Loss**: Crimson Red (`#EF4444`) — Used for negative rating deltas ($-\Delta$), rejected requests, and destructive actions.
- **Warning / Pending**: Amber Yellow (`#F59E0B`) — Used for pending match confirmation, unverified email alerts, and warnings.
- **Information**: Cerulean Blue (`#3B82F6`) — Used for informational banners and neutral announcements.

---

## 3. Typography Hierarchy

RankPong uses a clean, highly legible font pairing:
- **Primary Font**: `Geist Sans` (or `Inter`) for headings, body copy, forms, and navigation.
- **Monospace Font**: `Geist Mono` for numerical scorecards, set scores, timestamps, and ELO ratings.

| Level | Size / Weight | Line Height | Application |
|---|---|---|---|
| **Display 1** | `text-4xl sm:text-5xl font-extrabold` | `leading-tight` | Hero headlines, major landing banners |
| **Heading 1** | `text-2xl sm:text-3xl font-bold` | `leading-snug` | Page titles, club hub header, leaderboard titles |
| **Heading 2** | `text-xl sm:text-2xl font-semibold` | `leading-snug` | Section titles, modal titles, tournament brackets |
| **Heading 3** | `text-base sm:text-lg font-semibold` | `leading-normal` | Card headers, table section titles, player names |
| **Body Large** | `text-base font-normal` | `leading-relaxed` | Hero lead text, introduction paragraphs |
| **Body Regular** | `text-sm font-normal` | `leading-normal` | Standard UI text, descriptions, table cells |
| **Caption / Meta** | `text-xs font-medium` | `leading-normal` | Timestamps, status badges, secondary attributes |
| **Score / Metric** | `text-base sm:text-lg font-mono font-bold` | `leading-none` | Set scores (11-9), ELO rating badges (1420) |

---

## 4. Main Application Areas

The application is structured into three discrete interaction zones:

```text
RankPong UX Zones
├── PUBLIC (Marketing & Onboarding)
│   ├── Landing Page (Value proposition, feature overview, CTA)
│   ├── Club Discovery (Directory of public club metadata & search)
│   ├── Login / Register (Email & password, email verification banner)
│   └── Legal (Terms of Service, Privacy Policy)
│
├── AUTHENTICATED (Global Player Hub)
│   ├── Personal Dashboard (Recent matches, club shortcuts, ELO card)
│   ├── My Profile (Stats, match history, handedness, play style)
│   └── My Clubs (Overview of joined clubs, pending join requests)
│
└── CLUB HUB (Private Community Workspace)
    ├── Overview (Recent matches, activity feed, upcoming events)
    ├── Club Leaderboard (Internal ELO ladder, rank position, form)
    ├── Members (Roster, roles, invite member modal)
    ├── Matches (Match logging form, pending confirmations, history)
    ├── Competitions (Leagues, tournaments, seasons — Phase 5)
    ├── Membership Management (Pending requests approval — Admin/Owner)
    └── Club Settings (Branding, invite links, permissions — Owner)
```

> **MVP Focus Boundary**: The initial MVP prioritises authentication, user profile, club creation, membership requests/invites, and match recording with score confirmation. Competitions and advanced club customization are introduced in subsequent roadmap phases.

---

## 5. Component Design Patterns (shadcn/ui Foundation)

All UI elements are implemented on top of `shadcn/ui` primitives for maximum accessibility and customization.

### 5.1 Buttons
- **Primary**: High-contrast button (solid background) for the single primary call to action per view (`Submit Score`, `Join Club`).
- **Secondary / Outline**: Bordered style with subtle hover background for secondary workflows (`Cancel`, `View Details`).
- **Ghost**: Unbordered text button for toolbars, inline filters, and table row actions.
- **Destructive**: Subdued red tint becoming vivid red on hover for irreversible actions (`Leave Club`, `Delete Match`).

### 5.2 Forms & Inputs
- **Inputs**: Floating labels or clear top-aligned labels, distinct focus rings (`ring-2 ring-primary`), and inline validation messages powered by React Hook Form + Zod.
- **Score Inputs**: Large, touch-friendly dual-number fields for table tennis set scores (e.g. `[ 11 ] - [ 9 ]`) designed for rapid thumb entry.

### 5.3 Feedback & State Containers
- **Empty States**: Centered illustration/icon, clear descriptive title, helpful explanation, and a direct action button (e.g. *"No matches recorded yet. Play a game and log your first score."*).
- **Loading States**: Skeleton placeholders mirroring the exact shape of incoming cards and table rows rather than jarring spinner overlays.
- **Error States**: Non-intrusive alert banners with actionable remedy suggestions and retry buttons.
- **Confirmation Dialogs**: Explicit modal confirmations for consequential actions (e.g. confirming a ranked match score, rejecting a member request).

### 5.4 Tables & Cards
- **Match Cards**: Dual-player comparison card highlighting winner, set scores, category badge (`RANKED` vs `FRIENDLY`), and ELO delta badge.
- **Leaderboard Tables**: Compact rows with rank indicator (`#1`, `#2`, `#3` with medal accents), player avatar, name, win/loss record, and highlighted ELO column.

---

## 6. Responsive Behaviour & Mobile-First Strategy

Table tennis matches happen at the table where players interact primarily on mobile phones. Mobile usability is a primary constraint:

### 6.1 Layout Adaptation
- **Desktop (≥ 1024px)**: Persistent left sidebar navigation for authenticated/club hubs, multi-column dashboard grid, full statistical data tables.
- **Tablet (768px - 1023px)**: Collapsible sidebar, 2-column grid layout, abbreviated secondary table columns.
- **Mobile (< 768px)**: Sticky bottom navigation bar for core destinations, single-column feeds, full-width swipeable cards.

### 6.2 Mobile-First Data Presentation
- **Leaderboards**: Rather than horizontal overflow scrolling, tables collapse into responsive cards or prioritized columns (Rank, Avatar, Name, ELO) with secondary stats visible on tap.
- **Match Recording**: Full-screen modal on mobile with large keypad-friendly score inputs, eliminating accidental zoom or missed taps.

---

## 7. Accessibility Standards (WCAG 2.1 AA)

- **Keyboard Navigation**: Complete focus management across all modals, dropdowns, and form steps using Radix / Base UI primitives.
- **Visible Focus Rings**: High-contrast focus rings (`focus-visible:ring-2 focus-visible:ring-offset-2`) across all interactive elements.
- **Contrast Ratios**: All text elements adhere strictly to WCAG AA minimums (4.5:1 for body copy, 3:1 for large headers and graphical UI tokens).
- **Screen Reader Announcements**: Match score changes, validation errors, and confirmation alerts use `aria-live="polite"` or `role="alert"`.
