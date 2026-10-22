import "server-only";
import { createClient } from "@supabase/supabase-js";

const BUCKET = process.env.SUPABASE_STORAGE_BUCKET ?? "plan-uploads";
const CLIENT_PLANS_BUCKET = process.env.SUPABASE_CLIENT_PLANS_BUCKET ?? "client-plans";

// Service-role client - bypasses RLS entirely. Only use inside server-only code
// (Route Handlers) that genuinely needs elevated privileges: the contact form
// (no login) and future webhook handlers. Never import this where a user-scoped
// session client (lib/supabase/server.ts or lib/supabase/client.ts) would do -
// the project upload flow is logged-in only and uses the session-aware client
// so RLS correctly scopes everything to the signed-in user.
//
// The Vercel<->Supabase integration names the project URL env var
// NEXT_PUBLIC_SUPABASE_URL (and sometimes also sets SUPABASE_URL depending on
// when the integration was connected), so accept either.
export function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    console.error(
      `Supabase env vars missing - url: ${url ? "set" : "MISSING"}, service role key: ${key ? "set" : "MISSING"}. ` +
        "Check SUPABASE_URL (or NEXT_PUBLIC_SUPABASE_URL) and SUPABASE_SERVICE_ROLE_KEY in the deployment's environment variables.",
    );
    return null;
  }

  return createClient(url, key, {
    auth: { persistSession: false },
  });
}

export const PLAN_UPLOADS_BUCKET = BUCKET;
export const CLIENT_PLANS_BUCKET_NAME = CLIENT_PLANS_BUCKET;
