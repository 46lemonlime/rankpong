import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { env } from "@/config/env";

/**
 * Supabase Admin Client using the privileged Service Role Key.
 *
 * CAUTION:
 * - This client bypasses PostgreSQL Row Level Security (RLS) policies.
 * - It must strictly be executed on trusted server environments.
 * - NEVER expose, import, or bundle this client into browser/client code.
 */
export function createAdminClient() {
  if (!env.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error(
      "SUPABASE_SERVICE_ROLE_KEY is required to initialize the admin client."
    );
  }

  return createSupabaseClient(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.SUPABASE_SERVICE_ROLE_KEY,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  );
}
