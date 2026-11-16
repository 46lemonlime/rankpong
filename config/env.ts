import { envSchema, type Env } from "@/lib/validations/env";

/**
 * Validate and export application environment variables.
 * In development and build stages without configured secrets,
 * safe fallback defaults are supplied to allow uninterrupted compilation.
 */
function getValidatedEnv(): Env {
  const rawEnv = {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  };

  const parsed = envSchema.safeParse(rawEnv);

  if (!parsed.success) {
    if (process.env.NODE_ENV === "production") {
      throw new Error(
        `Invalid environment variables: ${JSON.stringify(parsed.error.flatten().fieldErrors)}`
      );
    }
  }

  return parsed.success
    ? parsed.data
    : {
        NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
        NEXT_PUBLIC_SUPABASE_URL:
          process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder-project.supabase.co",
        NEXT_PUBLIC_SUPABASE_ANON_KEY:
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key",
        SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
        RESEND_API_KEY: process.env.RESEND_API_KEY,
      };
}

export const env = getValidatedEnv();
