import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
import { ProjectDetailTabs } from "@/components/dashboard/ProjectDetailTabs";
import { PortalNotConfigured } from "@/components/dashboard/PortalNotConfigured";
import { PORTAL_PROJECT_TYPE_LABELS } from "@/lib/validation";
import type { ProjectFileRow, ProjectRow, ProjectUpdateRow } from "@/lib/dashboard-types";

export const dynamic = "force-dynamic";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;

  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return <PortalNotConfigured />;
  }

  const supabase = await getSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect(`/login?next=/dashboard/${projectId}`);
  }

  const { data: project } = await supabase
    .from("projects")
    .select("id, title, project_type, location, status, client_name, created_at, updated_at")
    .eq("id", projectId)
    .single();

  if (!project) {
    notFound();
  }

  const projectRow = project as ProjectRow;

  const [{ data: files }, { data: updates }] = await Promise.all([
    supabase
      .from("project_files")
      .select("id, category, version, description, storage_path, file_name, file_size, created_at")
      .eq("project_id", projectId)
      .order("created_at", { ascending: false }),
    supabase
      .from("project_updates")
      .select("id, title, body, attachment_path, created_at")
      .eq("project_id", projectId)
      .order("created_at", { ascending: false }),
  ]);

  const fileRows = (files ?? []) as ProjectFileRow[];
  const updateRows = (updates ?? []) as ProjectUpdateRow[];

  const filesWithUrls: ProjectFileRow[] = await Promise.all(
    fileRows.map(async (file) => {
      const { data: signed } = await supabase.storage
        .from("client-plans")
        .createSignedUrl(file.storage_path, 60 * 10);
      return { ...file, signedUrl: signed?.signedUrl ?? null };
    }),
  );

  const typeLabel =
    PORTAL_PROJECT_TYPE_LABELS[projectRow.project_type as keyof typeof PORTAL_PROJECT_TYPE_LABELS] ??
    projectRow.project_type;

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <Link href="/dashboard" className="text-sm font-semibold text-navy/60 hover:text-orange-ink">
        &larr; All projects
      </Link>

      <div className="mt-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-heading text-2xl font-bold text-navy-deep sm:text-3xl">{projectRow.title}</h1>
          <p className="mt-1 text-sm text-navy/60">
            {typeLabel} &middot; {projectRow.location ?? "Lekki, Lagos"}
          </p>
        </div>
        <StatusBadge status={projectRow.status} />
      </div>

      <div className="mt-8 rounded-3xl border border-navy/10 bg-white p-6 shadow-sm sm:p-8">
        <ProjectDetailTabs files={filesWithUrls} updates={updateRows} />
      </div>
    </section>
  );
}
