# API Route Handlers (`app/api/`)

This directory is designated for Next.js Route Handlers:
- `app/api/auth/callback/route.ts` - Supabase OAuth & magic link callback exchange
- `app/api/webhooks/resend/route.ts` - Resend webhook handlers
- `app/api/webhooks/supabase/route.ts` - Supabase database webhooks

Note: RankPong prioritizes Next.js Server Actions for standard CRUD operations and uses Route Handlers primarily for external webhooks, OAuth callbacks, and file/export streams.
