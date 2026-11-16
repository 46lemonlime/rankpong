# (dashboard) Route Group

This directory is designated for authenticated user workflows:
- `/dashboard` - Overview (recent matches, club activity, current ranking)
- `/clubs/[clubSlug]` - Club hub, management, member roster, club ladder
- `/matches/new` - Match logging & score submission
- `/tournaments/[id]` - Live tournament brackets and scoreboards
- `/settings` - Profile, notification preferences, security

Pages in this group are protected by Supabase authentication checks and share the dashboard shell layout (sidebar, breadcrumbs, user avatar dropdown).
