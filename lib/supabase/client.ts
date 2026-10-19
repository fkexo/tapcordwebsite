import { createBrowserClient } from "@supabase/ssr";

// Browser-side Supabase client, scoped by the signed-in user's session (RLS applies).
// Never import this in a server-only context that needs elevated privileges - use
// lib/supabase/server.ts's getSupabaseAdmin() for that.
export function getSupabaseBrowserClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error(
      "NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY must be set to use Supabase Auth.",
    );
  }

  return createBrowserClient(url, anonKey);
}
