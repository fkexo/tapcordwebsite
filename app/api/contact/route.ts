import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { getSupabaseAdmin, PLAN_UPLOADS_BUCKET } from "@/lib/supabase/server";
import { CONTACT_NOTIFICATION_EMAIL, RESEND_FROM_EMAIL, getResendClient } from "@/lib/resend";
import { contactFormSchema, isAllowedFile } from "@/lib/validation";

export async function POST(request: Request) {
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_request" }, { status: 400 });
  }

  // Honeypot: a real visitor never fills this hidden field, but most spam bots
  // autofill every input they find. Pretend success so bots don't learn to adapt.
  if ((formData.get("company") as string | null)?.trim()) {
    return NextResponse.json({ ok: true, id: "ok" });
  }

  const parsed = contactFormSchema.safeParse({
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    projectType: formData.get("projectType"),
    projectLocation: formData.get("projectLocation") ?? "",
    message: formData.get("message") ?? "",
  });

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return NextResponse.json(
      { ok: false, error: "validation_failed", fieldErrors },
      { status: 400 },
    );
  }

  const data = parsed.data;
  const file = formData.get("file");
  const hasFile = file instanceof File && file.size > 0;

  if (hasFile && !isAllowedFile(file.name, file.size)) {
    return NextResponse.json(
      {
        ok: false,
        error: "validation_failed",
        fieldErrors: { file: "File must be PDF, DWG, PNG or JPG and under 15MB." },
      },
      { status: 400 },
    );
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    console.error("Contact form submitted but SUPABASE_URL/SUPABASE_SERVICE_ROLE_KEY are not configured.");
    return NextResponse.json({ ok: false, error: "server_not_configured" }, { status: 500 });
  }

  let filePath: string | null = null;
  let fileName: string | null = null;

  if (hasFile && file instanceof File) {
    const datePrefix = new Date().toISOString().slice(0, 10);
    const sanitized = file.name.replace(/[^a-zA-Z0-9.\-_]/g, "_");
    const objectPath = `${datePrefix}/${randomUUID()}-${sanitized}`;

    const { error: uploadError } = await supabase.storage
      .from(PLAN_UPLOADS_BUCKET)
      .upload(objectPath, file, { contentType: file.type || undefined });

    if (uploadError) {
      console.error("Supabase storage upload failed:", uploadError.message);
      return NextResponse.json({ ok: false, error: "upload_failed" }, { status: 500 });
    }

    filePath = objectPath;
    fileName = file.name;
  }

  const { data: inserted, error: insertError } = await supabase
    .from("contact_submissions")
    .insert({
      name: data.name,
      phone: data.phone,
      email: data.email,
      project_type: data.projectType,
      project_location: data.projectLocation || null,
      message: data.message || null,
      file_path: filePath,
      file_name: fileName,
    })
    .select("id")
    .single();

  if (insertError || !inserted) {
    console.error("Supabase insert failed:", insertError?.message);
    if (filePath) {
      await supabase.storage.from(PLAN_UPLOADS_BUCKET).remove([filePath]).catch(() => undefined);
    }
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }

  await sendNotificationEmail({ ...data, fileName, filePath }).catch((error) => {
    console.error("Resend notification email failed (submission was still saved):", error);
  });

  return NextResponse.json({ ok: true, id: inserted.id });
}

async function sendNotificationEmail(input: {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  projectLocation?: string;
  message?: string;
  fileName: string | null;
  filePath: string | null;
}) {
  const resend = getResendClient();
  if (!resend) {
    console.warn("RESEND_API_KEY not configured - skipping notification email.");
    return;
  }

  let signedFileUrl: string | null = null;
  if (input.filePath) {
    const supabase = getSupabaseAdmin();
    const signed = await supabase?.storage
      .from(PLAN_UPLOADS_BUCKET)
      .createSignedUrl(input.filePath, 60 * 60 * 24 * 7);
    signedFileUrl = signed?.data?.signedUrl ?? null;
  }

  const lines = [
    `New enquiry from the Tapcord website`,
    ``,
    `Name: ${input.name}`,
    `Phone: ${input.phone}`,
    `Email: ${input.email}`,
    `Project type: ${input.projectType}`,
    `Project location: ${input.projectLocation || "-"}`,
    `Message: ${input.message || "-"}`,
    input.fileName ? `Uploaded plan: ${input.fileName}` : null,
    signedFileUrl ? `Download link (valid 7 days): ${signedFileUrl}` : null,
  ].filter(Boolean);

  await resend.emails.send({
    from: `Tapcord Website <${RESEND_FROM_EMAIL}>`,
    to: CONTACT_NOTIFICATION_EMAIL,
    replyTo: input.email,
    subject: `New enquiry - ${input.name} (${input.projectType})`,
    text: lines.join("\n"),
  });
}
