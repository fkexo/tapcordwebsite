import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { CONTACT_NOTIFICATION_EMAIL, RESEND_FROM_EMAIL, getResendClient } from "@/lib/resend";
import { FILE_CATEGORY_LABELS, PORTAL_PROJECT_TYPE_LABELS } from "@/lib/validation";

export async function POST(_request: Request, { params }: { params: Promise<{ projectId: string }> }) {
  const { projectId } = await params;
  const supabase = await getSupabaseServerClient();

  const { data: project, error: projectError } = await supabase
    .from("projects")
    .select("id, title, project_type, location, client_name, client_email, client_phone")
    .eq("id", projectId)
    .single();

  if (projectError || !project) {
    return NextResponse.json({ ok: false, error: "project_not_found" }, { status: 404 });
  }

  const { data: files } = await supabase
    .from("project_files")
    .select("file_name, category")
    .eq("project_id", projectId);

  const resend = getResendClient();
  if (!resend) {
    console.warn("RESEND_API_KEY not configured - skipping upload notification email.");
    return NextResponse.json({ ok: true, notified: false });
  }

  const fileList = (files ?? [])
    .map(
      (f) =>
        `  - ${f.file_name} (${FILE_CATEGORY_LABELS[f.category as keyof typeof FILE_CATEGORY_LABELS] ?? f.category})`,
    )
    .join("\n");

  const projectType =
    PORTAL_PROJECT_TYPE_LABELS[project.project_type as keyof typeof PORTAL_PROJECT_TYPE_LABELS] ??
    project.project_type;

  const businessText = [
    `New project upload: ${project.title}`,
    ``,
    `Client: ${project.client_name}`,
    `Phone: ${project.client_phone}`,
    `Email: ${project.client_email}`,
    `Project type: ${projectType}`,
    `Location: ${project.location}`,
    `Files (${files?.length ?? 0}):`,
    fileList || "  (none)",
  ].join("\n");

  const clientText = [
    `Hi ${project.client_name},`,
    ``,
    `We received your plans for "${project.title}" - ${files?.length ?? 0} file(s).`,
    ``,
    "We'll audit for blind spots (Wi-Fi dead zones, CCTV blind spots, DB placement, fire zoning) and get back to you within 48 hours.",
    ``,
    `- ${CONTACT_NOTIFICATION_EMAIL}`,
  ].join("\n");

  try {
    await resend.emails.send({
      from: `Tapcord Website <${RESEND_FROM_EMAIL}>`,
      to: CONTACT_NOTIFICATION_EMAIL,
      replyTo: project.client_email,
      subject: `New upload: ${project.title} - ${files?.length ?? 0} files`,
      text: businessText,
    });
    await resend.emails.send({
      from: `Tapcord Engineering <${RESEND_FROM_EMAIL}>`,
      to: project.client_email,
      subject: "We received your plans",
      text: clientText,
    });
  } catch (error) {
    console.error("Upload notification email failed (project was still saved):", error);
    return NextResponse.json({ ok: true, notified: false });
  }

  return NextResponse.json({ ok: true, notified: true });
}
