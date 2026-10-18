import "server-only";
import { createClient } from "@supabase/supabase-js";

const BUCKET = process.env.SUPABASE_STORAGE_BUCKET ?? "plan-uploads";

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
