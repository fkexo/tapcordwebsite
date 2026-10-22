import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { createProjectSchema, PORTAL_PROJECT_TYPE_LABELS } from "@/lib/validation";

// Uses the session-aware client (not service-role): the caller must already be
// logged in (proxy.ts gates /upload) so RLS can scope the insert to their auth.uid().
// Name/phone/email come from the signed-in user's own profile/session, never
// from the request body - they were captured once at signup.
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_request" }, { status: 400 });
  }

  const parsed = createProjectSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return NextResponse.json({ ok: false, error: "validation_failed", fieldErrors }, { status: 400 });
  }

  const data = parsed.data;
  const supabase = await getSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ ok: false, error: "no_session" }, { status: 401 });
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name, phone")
    .eq("id", user.id)
    .maybeSingle();

  // Self-heal: accounts created before the on_auth_user_created trigger existed
  // (or before "profiles" had an insert policy) have no profiles row at all.
  // projects.client_id has a foreign key to profiles(id), so without this the
  // insert below fails. Create a minimal row now - safe and idempotent.
  if (!profile) {
    const { error: profileInsertError } = await supabase
      .from("profiles")
      .insert({ id: user.id, email: user.email ?? null });
    if (profileInsertError) {
      console.error("Could not self-heal missing profile row:", profileInsertError.message);
    }
  }

  // Fall back to signup metadata, then a safe default - covers accounts created
  // before full_name/phone were captured, so the insert never hits a not-null
  // constraint violation even for older accounts.
  const metadataName = typeof user.user_metadata?.full_name === "string" ? user.user_metadata.full_name : undefined;
  const metadataPhone = typeof user.user_metadata?.phone === "string" ? user.user_metadata.phone : undefined;
  const clientName = profile?.full_name || metadataName || "Client";
  const clientPhone = profile?.phone || metadataPhone || "";
  const clientEmail = user.email ?? "";

  const { data: project, error } = await supabase
    .from("projects")
    .insert({
      client_id: user.id,
      title: data.title || `${PORTAL_PROJECT_TYPE_LABELS[data.projectType]} - ${clientName}`,
      project_type: data.projectType,
      location: data.location || "Lekki, Lagos",
      client_name: clientName,
      client_email: clientEmail,
      client_phone: clientPhone,
    })
    .select("id")
    .single();

  if (error || !project) {
    console.error("Project creation failed:", error?.message);
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }

  return NextResponse.json({ ok: true, projectId: project.id });
}
