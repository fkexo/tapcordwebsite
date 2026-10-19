import { FILE_CATEGORIES, FILE_CATEGORY_LABELS } from "@/lib/validation";
import type { ProjectFileRow } from "@/lib/dashboard-types";

function formatSize(bytes: number) {
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function FilesTab({ files }: { files: ProjectFileRow[] }) {
  if (files.length === 0) {
    return <p className="py-10 text-center text-sm text-navy/60">No files uploaded yet.</p>;
  }

  const grouped = FILE_CATEGORIES.map((category) => ({
    category,
    files: files.filter((f) => f.category === category),
  })).filter((g) => g.files.length > 0);

  return (
    <div className="space-y-8">
      {grouped.map((group) => (
        <div key={group.category}>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-navy-deep">
            {FILE_CATEGORY_LABELS[group.category]}
          </h3>
          <ul className="mt-3 divide-y divide-navy/10 rounded-xl border border-navy/10 bg-white">
            {group.files.map((file) => (
              <li key={file.id} className="flex items-center justify-between gap-4 px-4 py-3">
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-navy-deep">{file.file_name}</p>
                  <p className="mt-0.5 font-mono text-xs text-navy/50">
                    {file.version} &middot; {formatSize(file.file_size)} &middot;{" "}
                    {new Date(file.created_at).toLocaleDateString()}
                  </p>
                  {file.description && <p className="mt-1 text-xs text-navy/60">{file.description}</p>}
                </div>
                {file.signedUrl && (
                  <a
                    href={file.signedUrl}
                    className="shrink-0 rounded-full border border-navy/15 px-3 py-1.5 text-xs font-semibold text-navy-deep hover:border-orange-ink hover:text-orange-ink"
                  >
                    Download
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
