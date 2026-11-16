# RankPong — Brand Guidelines

## 1. Brand Essence & Positioning

### 1.1 Brand Name
**RankPong**  
*(Note: Always capitalized as a single CamelCase word: "RankPong". Never write "Rankpong", "Rank Pong", or "RANKPONG".)*

### 1.2 Brand Positioning
RankPong is the definitive platform where table tennis players organise games, compete with friends, track their performance, and climb the rankings. 

It transforms casual games in offices, community centers, and local clubs into structured, verifiable sports journeys.

### 1.3 Brand Personality
- **Competitive**: Driven by fair play, skill progression, and the thrill of the match.
- **Energetic**: Fast, responsive, and engaged with the pulse of table tennis.
- **Confident**: Authoritative in rating calculations and tournament management.
- **Approachable**: Friendly and welcoming to players of any skill level, from novices to veterans.
- **Modern**: Clean, sleek, and software-native — never antiquated or clunky.
- **Community-Driven**: Empowering clubs as autonomous, thriving local hubs.

---

## 2. Brand Messaging Framework

### 2.1 Primary Tagline
> **"Play. Compete. Climb."**

### 2.2 Supporting Taglines & Micro-Copy
- *"Every match counts."*
- *"Your game. Your rank."*
- *"Challenge. Win. Rise."*
- *"Elevate your club. Master the table."*

### 2.3 Brand Voice & Tone
- **Active & Direct**: Use sharp, motivational language (*"Log your score"*, *"Accept challenge"*, *"Take the lead"*).
- **Sportsmanship-Focused**: Celebrate improvement, acknowledge rivals with respect, and uphold competitive honesty.
- **Clear & Unpretentious**: Avoid unnecessary corporate buzzwords or obscure sports jargon.

---

## 3. Logo & Visual Identity Direction

### 3.1 Design Intent
The RankPong brand mark should be **minimalist, modern, and memorable**. It must embody three core concepts:
1. **The Sport**: Subtle reference to table tennis (a ball in trajectory, a streamlined paddle silhouette, or a dynamic table grid line).
2. **Progression**: The upward climb of rankings, ELO movement, or stepped ascension.
3. **Software Precision**: Clean geometric contours that render sharply at 16x16px (favicon) and 512x512px (app store icon).

### 3.2 Visual Explorations & Elements
- **The Ascending Trajectory**: An arc resembling both table tennis ball bounce/topspin and an upward ranking trajectory.
- **The Stepped Chevron / Arrow**: Abstract geometric arrow suggesting both competitive climb and table boundary.
- **Purity of Form**: Avoid hyper-detailed paddle rubber textures, wood grains, or realistic ball shading.

### 3.3 Media Adaptability
The logo mark must function effortlessly across all formats:
- High-contrast lockup on light backgrounds (`#F7F9FA`).
- Inverted crisp lockup on dark navy backgrounds (`#142C38`).
- Compact single-glyph favicon and mobile home screen icon.
- Scalable vector format (SVG) without bitmap dependencies.

*(Note: Per initial guidelines, final production asset generation is deferred to asset production phases).*

---

## 4. Colour Palette

RankPong adopts a **dark navy and blue-grey foundation paired with a vibrant lime-green accent**, evoking both sports court lines and energetic athletic performance.

### 4.1 Core Brand Palette

```text
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│  Primary Dark   │  │ Secondary Dark  │  │  Accent Green   │
│     #142C38     │  │     #193C4A     │  │     #A9E34B     │
└─────────────────┘  └─────────────────┘  └─────────────────┘
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│Light Background │  │    Main Text    │  │ Secondary Text  │
│     #F7F9FA     │  │     #18252D     │  │     #64748B     │
└─────────────────┘  └─────────────────┘  └─────────────────┘
```

| Name | Hex | HSL / Usage |
|---|---|---|
| **Primary Dark** | `#142C38` | Deepest navy-slate; base background for dark themes, navigation headers, primary branding blocks. |
| **Secondary Dark** | `#193C4A` | Muted navy-teal; secondary card containers, table headers, dark badge backgrounds. |
| **Accent Green** | `#A9E34B` | Vibrant athletic lime-green; primary call-to-actions, active indicators, rating gains, focal highlights. |
| **Light Background**| `#F7F9FA` | Cool off-white; main page background in light mode, providing high contrast and zero eye fatigue. |
| **Main Text** | `#18252D` | Charcoal-navy; crisp, high-contrast text for headings and primary content. |
| **Secondary Text** | `#64748B` | Balanced slate grey; metadata, secondary labels, dates, placeholder text. |

### 4.2 Semantic Feedback Palette
- **Success (`#10B981`)**: Confirmed matches, rating climbs ($+\Delta$), approved membership.
- **Warning (`#F59E0B`)**: Pending match confirmation, join requests under review, disputes.
- **Error (`#EF4444`)**: Rating declines ($-\Delta$), match rejections, destructive dialogs.
- **Information (`#3B82F6`)**: System notices, tournament scheduling updates, club announcements.
- **Neutral (`#94A3B8`)**: Inactive states, friendly match badges, neutral ELO deltas ($\pm 0$).

### 4.3 Usage Rule: The Accent Ratio
The **Accent Green (`#A9E34B`)** must be used with discipline:
- Use it as an intentional focal point (primary action buttons, win tags, progress highlights).
- **Never** use it as large background fills across extensive content areas.
- Maintain high contrast against surrounding surfaces.

---

## 5. Typography

RankPong employs **Geist Sans** (with fallback to **Inter**) for primary typography, complemented by **Geist Mono** for statistical precision.

### 5.1 Typographic Roles
- **Page Titles (H1)**: Bold, tight letter-spacing (`font-extrabold tracking-tight`).
- **Section Headings (H2 / H3)**: Confident, readable (`font-bold tracking-tight`).
- **Body & Labels**: Clean, neutral, high legibility across mobile displays (`font-normal leading-normal`).
- **Statistics & ELO Scores**: Monospace numerals (`font-mono font-bold`) ensuring alignment in leaderboards and match tables.
