export const PROJECT_STATUSES = ["received", "reviewing", "auditing", "designing", "rendering", "delivered"] as const;
export type ProjectStatus = (typeof PROJECT_STATUSES)[number];

const STATUS_STYLES: Record<ProjectStatus, { label: string; className: string }> = {
  received: { label: "Received", className: "bg-slate-100 text-slate-700" },
  reviewing: { label: "Reviewing", className: "bg-orange/10 text-orange-ink" },
  auditing: { label: "Auditing", className: "bg-orange/10 text-orange-ink" },
  designing: { label: "Designing", className: "bg-blue-50 text-blue-600" },
  rendering: { label: "Rendering", className: "bg-blue-50 text-blue-600" },
  delivered: { label: "Delivered", className: "bg-green-50 text-green-600" },
};

export function StatusBadge({ status }: { status: string }) {
  const style = STATUS_STYLES[status as ProjectStatus] ?? { label: status, className: "bg-slate-100 text-slate-700" };
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${style.className}`}>
      {style.label}
    </span>
  );
}
