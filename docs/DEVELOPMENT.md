# RankPong — Developer Guide & Conventions

## 1. Prerequisites

Ensure your local development workstation meets these minimum requirements:
- **Node.js**: `v20.x` or higher (`v26.x LTS` recommended)
- **npm**: `v10.x` or higher
- **Git**
- **Docker Desktop** (required if running Supabase locally via the Supabase CLI)

---

## 2. Installation & Local Setup

### 2.1 Clone & Install Dependencies
```bash
git clone <repository-url> rankpong
cd rankpong
npm install
```

### 2.2 Environment Variables Setup
Copy `.env.example` to create your local `.env.local` file:
```bash
cp .env.example .env.local
```

Configure the required variables in `.env.local`:
```env
# Public application URL
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Public Supabase credentials
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Server-only secrets (Never expose to client)
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
RESEND_API_KEY=re_your_resend_api_key
```

---

## 3. Available Development Scripts

All core commands run via npm scripts:

| Command | Purpose |
|---|---|
| `npm run dev` | Launches Next.js local development server with Turbopack at `http://localhost:3000` |
| `npm run build` | Compiles an optimized production build |
| `npm run start` | Runs the production build locally |
| `npm run lint` | Runs ESLint analysis across TypeScript and React code |
| `npx tsc --noEmit` | Runs TypeScript static type checking without generating output files |
| `npx prettier --write .` | Formats all code files adhering to `.prettierrc` |

---

## 4. Supabase Development Workflow

### 4.1 Local Supabase Stack
When working with local Supabase development:
```bash
# Start local Supabase containers (requires Docker)
npx supabase start

# View local service URLs and generated API keys
npx supabase status

# Stop local Supabase containers
npx supabase stop
```

### 4.2 Database Migrations
All database changes must be versioned through SQL migration files in `supabase/migrations/`:
```bash
# Create a new timestamped migration file
npx supabase migration new <migration_name>

# Apply local migrations
npx supabase migration up

# Reset local database and run seed scripts
npx supabase db reset
```

### 4.3 Automated TypeScript Type Generation
To keep frontend TypeScript interfaces synchronized with database tables:
```bash
# Generate types from local Supabase instance
npx supabase gen types typescript --local > types/supabase.ts
```

---

## 5. Coding & Architecture Conventions

### 5.1 Directory & File Naming
- **Directories**: `kebab-case` (e.g. `features/club-members`, `components/ui`).
- **React Components**: `kebab-case.tsx` for filenames (e.g. `match-card.tsx`, `club-roster.tsx`); `PascalCase` for component identifiers (`export function MatchCard()`).
- **Server Actions**: `kebab-case.ts` with explicit action verbs (e.g. `create-club.action.ts`, `submit-match.action.ts`).
- **Zod Schemas**: `kebab-case.schema.ts` (e.g. `match.schema.ts`).
- **Hooks**: `use-kebab-case.ts` (e.g. `use-mounted.ts`).

### 5.2 Server vs. Client Components
- **Default to Server Components**: Do not add `"use client"` unless the component explicitly uses React hooks (`useState`, `useEffect`), event listeners (`onClick`, `onChange`), or browser APIs.
- **Keep Client Leaf Nodes Small**: Encapsulate interactive controls in small client components rather than marking entire pages as client components.

### 5.3 Import Aliases
Always use the configured root alias `@/*`:
```ts
// Good
import { Button } from "@/components/ui/button";
import { env } from "@/config/env";
import { formatElo } from "@/lib/utils";

// Avoid relative traversal
import { Button } from "../../../components/ui/button";
```

### 5.4 Form & Mutation Pattern
- Define validation schemas with **Zod** in `features/<domain>/schemas/`.
- Manage client form state using **React Hook Form** + `@hookform/resolvers/zod`.
- Submit mutations directly to typed **Server Actions** using `useActionState` or `useTransition`.

---

## 6. Git & Version Control Conventions

### 6.1 Branch Naming
- `feature/<name>` — New feature implementation (e.g. `feature/club-invites`)
- `fix/<issue>` — Bug fixes (e.g. `fix/elo-tiebreak-calc`)
- `chore/<task>` — Tooling, dependency updates (e.g. `chore/update-shadcn`)

### 6.2 Commit Messages (Conventional Commits)
Follow standard Conventional Commits:
- `feat(clubs): implement club creation server action`
- `fix(matches): correct set score validation for deuce points`
- `docs(architecture): document RLS policy matrix`
- `refactor(rankings): extract elo formula into pure utility`

---

## 7. Secrets Management & Security Rules

1. **Never Commit Secrets**: Ensure `.env.local` is never committed. Only `.env.example` with non-sensitive placeholder values is tracked in git.
2. **Never Expose `SUPABASE_SERVICE_ROLE_KEY`**: The service role key must strictly reside in server-side functions (`lib/supabase/admin.ts`).
3. **No Dynamic SQL**: All database queries must use the Supabase query builder or parameterized stored procedures to eliminate SQL injection vulnerabilities.
