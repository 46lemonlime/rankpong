# (auth) Route Group

This directory is designated for authentication routes:
- `/login` - User sign-in
- `/register` - User registration
- `/forgot-password` - Password reset request
- `/reset-password` - Password update
- `/invitation/[token]` - Club invitation acceptance

Routes placed inside this route group share an unauthenticated layout (centered card layout, distraction-free branding) and redirect already-authenticated users to the dashboard.
