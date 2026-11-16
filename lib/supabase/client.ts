import { createBrowserClient } from "@supabase/ssr";
import { env } from "@/config/env";

/**
 * Creates a Supabase client for use in browser / Client Components.
 * Uses public anon key and handles cookie storage in the browser automatically.
 */
export function createClient() {
  return createBrowserClient(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}
