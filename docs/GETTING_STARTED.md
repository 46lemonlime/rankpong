# RankPong — Getting Started Guide

This guide walks you through setting up the RankPong development environment.

## Prerequisites

- **Node.js**: v20 or higher (v26 LTS recommended)
- **npm**: v10 or higher
- **Git**

## Setup Instructions

### 1. Clone & Install Dependencies

```bash
cd rankpong
npm install
```

### 2. Configure Environment Variables

Copy the example environment configuration:

```bash
cp .env.example .env.local
```

Populate the required credentials in `.env.local`:
- `NEXT_PUBLIC_APP_URL` — Defaults to `http://localhost:3000`
- `NEXT_PUBLIC_SUPABASE_URL` — Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — Your Supabase anon (public) key
- `SUPABASE_SERVICE_ROLE_KEY` — Your Supabase service role key (server-only)
- `RESEND_API_KEY` — Your Resend transactional email API key

### 3. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Script | Purpose |
|---|---|
| `npm run dev` | Starts the Next.js local development server (with Turbopack) |
| `npm run build` | Builds the production bundle |
| `npm run start` | Runs the built production server |
| `npm run lint` | Runs ESLint checks |
| `npx tsc --noEmit` | Runs TypeScript static type checking |
