"use client";

import { getSupabaseBrowserClient } from "@/lib/supabase/client";

export function SignOutButton() {
  async function handleSignOut() {
    const supabase = getSupabaseBrowserClient();
    await supabase.auth.signOut();
    window.location.href = "/";
  }

  return (
    <button
      type="button"
      onClick={handleSignOut}
      className="text-sm font-semibold text-navy/60 hover:text-orange-ink"
    >
      Sign out
    </button>
  );
}
