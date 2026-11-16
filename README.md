# RankPong

> **Play. Compete. Climb.**

RankPong is a modern, full-stack web platform for organising table tennis clubs, matches, rankings, leagues, and tournaments. 

While the platform is publicly accessible for discovering clubs and viewing global leaderboards, individual table tennis clubs operate as **private, member-governed communities** with role-based access, match score tracking, and server-verified ELO rating calculations.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 19)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (powered by Base UI)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Database & Auth**: [Supabase](https://supabase.com/) (PostgreSQL with Row Level Security)
- **Session Management**: [@supabase/ssr](https://supabase.com/docs/guides/auth/server-side/nextjs)
- **Email Delivery**: [Resend](https://resend.com/)
- **Schema Validation**: [Zod](https://zod.dev/)
- **Form Management**: [React Hook Form](https://react-hook-form.com/) & `@hookform/resolvers`
- **Package Manager**: `npm`

---

## 📚 Project Documentation (Source of Truth)

All architectural, product, design, and security specifications are maintained in the root and `docs/` directories:

| Document | Description |
|---|---|
| [**docs/PRODUCT.md**](docs/PRODUCT.md) | Product scope, user accounts, clubs, roles, match categories, global ELO, and competitions |
| [**DESIGN.md**](DESIGN.md) | Visual and interaction design system, layouts, color tokens, shadcn/ui components, accessibility |
| [**BRANDING.md**](BRANDING.md) | Brand identity, personality, taglines, color palette (#142C38 / #A9E34B), and logo direction |
| [**docs/ARCHITECTURE.md**](docs/ARCHITECTURE.md) | Technical architecture, server-first principles, Supabase SSR integration, feature modularity |
| [**docs/DATA_MODEL.md**](docs/DATA_MODEL.md) | Complete database schema entities, relationships, ER diagrams, constraints, MVP vs Future scope |
| [**docs/SECURITY.md**](docs/SECURITY.md) | Access control model, Row Level Security (RLS) policies, atomic ELO updates, credential isolation |
| [**docs/ROADMAP.md**](docs/ROADMAP.md) | Implementation phases 1 to 6 with an explicit MVP boundary |
| [**docs/DEVELOPMENT.md**](docs/DEVELOPMENT.md) | Prerequisites, local setup, Supabase CLI workflows, migrations, naming conventions, scripts |
| [**docs/DECISIONS.md**](docs/DECISIONS.md) | 14 accepted Architectural Decision Records (ADRs) and open architectural topics |

---

## 🚀 Quick Start

### 1. Prerequisites
- **Node.js**: `v20.x` or higher (`v26.x LTS` recommended)
- **npm**: `v10.x` or higher

### 2. Installation
```bash
# Clone the repository
git clone <repository-url> rankpong
cd rankpong

# Install dependencies
npm install
```

### 3. Environment Configuration
Copy the template `.env.example` to create your local `.env.local`:
```bash
cp .env.example .env.local
```

Populate the required credentials in `.env.local`:
```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
RESEND_API_KEY=re_your_resend_api_key
```

### 4. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Available Scripts

| Script | Purpose |
|---|---|
| `npm run dev` | Starts local Next.js development server with Turbopack |
| `npm run build` | Compiles optimized production build |
| `npm run start` | Runs compiled production application |
| `npm run lint` | Runs ESLint validation across codebase |
| `npx tsc --noEmit` | Runs static TypeScript type checking |
| `npx prettier --write .` | Formats all code according to project `.prettierrc` |

---

## 📊 Current Development Status

- **Status**: Foundation & Initial Project Scaffolding Completed (Phase 1).
- **Current Milestone**: Complete documentation and architectural specifications established.
- **Next Milestone**: Supabase database migration scripts, authentication flows, and profile management.
