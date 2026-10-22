import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { createProjectSchema, PORTAL_PROJECT_TYPE_LABELS } from "@/lib/validation";

// Uses the session-aware client (not service-role): the caller must already be
// logged in (proxy.ts gates /upload) so RLS can scope the insert to their auth.uid().
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

  const { data: project, error } = await supabase
    .from("projects")
    .insert({
      client_id: user.id,
      title: data.title || `${PORTAL_PROJECT_TYPE_LABELS[data.projectType]} - ${data.clientName}`,
      project_type: data.projectType,
      location: data.location || "Lekki, Lagos",
      client_name: data.clientName,
      client_email: data.clientEmail,
      client_phone: data.clientPhone,
    })
    .select("id")
    .single();

  if (error || !project) {
    console.error("Project creation failed:", error?.message);
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }

  return NextResponse.json({ ok: true, projectId: project.id });
}
