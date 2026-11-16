# Auth Feature (`features/auth`)

## Scope
User authentication, session state, profile onboarding, password management, and OAuth integrations.

## Planned Structure
- `components/` - SignInForm, SignUpForm, ResetPasswordForm, AuthCard
- `actions/` - signInAction, signUpAction, signOutAction, resetPasswordAction
- `schemas/` - authSchemas (email/password validation, profile creation)
- `types/` - AuthUser, SessionInfo
