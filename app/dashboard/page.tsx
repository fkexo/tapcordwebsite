import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { ProjectCard } from "@/components/dashboard/ProjectCard";
import { SignOutButton } from "@/components/dashboard/SignOutButton";
import { PortalNotConfigured } from "@/components/dashboard/PortalNotConfigured";
import { pageOpenGraph } from "@/lib/site";
import type { ProjectRow } from "@/lib/dashboard-types";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Your Tapcord Engineering project dashboard.",
  openGraph: pageOpenGraph("/dashboard", { title: "Dashboard | Tapcord Engineering" }),
};

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return <PortalNotConfigured />;
  }

  const supabase = await getSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login?next=/dashboard");
  }

  const { data: projects } = await supabase
    .from("projects")
    .select("id, title, project_type, location, status, client_name, created_at, updated_at")
    .order("updated_at", { ascending: false });

  const projectRows = (projects ?? []) as ProjectRow[];
  const projectIds = projectRows.map((p) => p.id);

  const fileCounts: Record<string, number> = {};
  if (projectIds.length > 0) {
    const { data: files } = await supabase.from("project_files").select("project_id").in("project_id", projectIds);
    for (const f of files ?? []) {
      fileCounts[f.project_id] = (fileCounts[f.project_id] ?? 0) + 1;
    }
  }

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-orange-ink">
            Client Portal
          </p>
          <h1 className="mt-2 font-heading text-2xl font-bold text-navy-deep sm:text-3xl">Your Projects</h1>
        </div>
        <SignOutButton />
      </div>

      {projectRows.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-dashed border-navy/20 bg-white/60 p-10 text-center">
          <p className="font-heading text-lg font-bold text-navy-deep">No projects yet</p>
          <p className="mt-2 text-sm text-navy/60">Upload your plans to get started.</p>
          <Link
            href="/upload"
            className="mt-6 inline-flex rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white hover:bg-orange-deep"
          >
            Upload Your Plans
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {projectRows.map((project) => (
            <ProjectCard key={project.id} project={project} fileCount={fileCounts[project.id] ?? 0} />
          ))}
        </div>
      )}
    </section>
  );
}
