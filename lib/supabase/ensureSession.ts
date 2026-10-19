import { getSupabaseBrowserClient } from "./client";

/**
 * Ensures the browser has a Supabase Auth session before an anonymous upload
 * starts, so Route Handlers (reading the session from cookies) and direct
 * Storage uploads (reading the session's access token) both have a real
 * auth.uid() to scope RLS against - without requiring the client to log in.
 *
 * Requires "Allow anonymous sign-ins" enabled in the Supabase project's Auth
 * settings. If the client later creates a real account from the same browser
 * (supabase.auth.updateUser / signUp while still anonymous), Supabase upgrades
 * this same user id in place, so everything uploaded here stays theirs.
 */
export async function ensureSession() {
  const supabase = getSupabaseBrowserClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) return session;

  const { data, error } = await supabase.auth.signInAnonymously();
  if (error || !data.session) {
    throw new Error(
      `Could not start an upload session: ${error?.message ?? "unknown error"}. ` +
        "Make sure Anonymous Sign-ins are enabled in the Supabase project's Auth settings.",
    );
  }
  return data.session;
}
