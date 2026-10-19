import type { ProjectUpdateRow } from "@/lib/dashboard-types";

export function UpdatesTab({ updates }: { updates: ProjectUpdateRow[] }) {
  if (updates.length === 0) {
    return (
      <p className="py-10 text-center text-sm text-navy/60">
        No updates yet - we post audit findings and progress here as the project moves along.
      </p>
    );
  }

  return (
    <ol className="space-y-6 border-l border-navy/10 pl-6">
      {updates.map((update) => (
        <li key={update.id} className="relative">
          <span className="absolute top-1 -left-[29px] h-3 w-3 rounded-full border-2 border-white bg-orange" />
          <p className="font-mono text-xs text-navy/50">
            {new Date(update.created_at).toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
          <p className="mt-1 font-heading text-base font-bold text-navy-deep">{update.title}</p>
          {update.body && <p className="mt-1 text-sm leading-relaxed text-navy/70">{update.body}</p>}
        </li>
      ))}
    </ol>
  );
}
