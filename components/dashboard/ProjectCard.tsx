import Link from "next/link";
import { StatusBadge } from "./StatusBadge";
import { PORTAL_PROJECT_TYPE_LABELS } from "@/lib/validation";
import type { ProjectRow } from "@/lib/dashboard-types";

export function ProjectCard({ project, fileCount }: { project: ProjectRow; fileCount: number }) {
  const typeLabel =
    PORTAL_PROJECT_TYPE_LABELS[project.project_type as keyof typeof PORTAL_PROJECT_TYPE_LABELS] ??
    project.project_type;

  return (
    <Link
      href={`/dashboard/${project.id}`}
      className="block rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-orange/40 hover:shadow-lg"
    >
      <div className="flex items-start justify-between gap-3">
        <h2 className="font-heading text-lg font-bold text-navy-deep">{project.title}</h2>
        <StatusBadge status={project.status} />
      </div>
      <p className="mt-1 text-sm text-navy/60">{project.location ?? "Lekki, Lagos"}</p>
      <div className="mt-4 flex items-center gap-4 font-mono text-xs text-navy/50">
        <span>{typeLabel}</span>
        <span>
          {fileCount} file{fileCount === 1 ? "" : "s"}
        </span>
        <span>Updated {new Date(project.updated_at).toLocaleDateString()}</span>
      </div>
    </Link>
  );
}
