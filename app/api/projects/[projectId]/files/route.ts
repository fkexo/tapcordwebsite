import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { projectFileMetaSchema, isAllowedProjectFile } from "@/lib/validation";

// Called after a file has already landed in Supabase Storage via Uppy's direct
// browser-to-storage TUS upload - this only records the relational metadata row.
export async function POST(request: Request, { params }: { params: Promise<{ projectId: string }> }) {
  const { projectId } = await params;

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_request" }, { status: 400 });
  }

  const parsed = projectFileMetaSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "validation_failed" }, { status: 400 });
  }

  const data = parsed.data;
  if (!isAllowedProjectFile(data.fileName, data.fileSize)) {
    return NextResponse.json({ ok: false, error: "file_not_allowed" }, { status: 400 });
  }

  const supabase = await getSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ ok: false, error: "no_session" }, { status: 401 });
  }

  const { data: file, error } = await supabase
    .from("project_files")
    .insert({
      project_id: projectId,
      uploaded_by: user.id,
      category: data.category,
      version: data.version,
      description: data.description || null,
      storage_path: data.storagePath,
      file_name: data.fileName,
      file_size: data.fileSize,
      mime_type: data.mimeType || null,
    })
    .select("id")
    .single();

  if (error || !file) {
    console.error("project_files insert failed:", error?.message);
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }

  return NextResponse.json({ ok: true, fileId: file.id });
}
