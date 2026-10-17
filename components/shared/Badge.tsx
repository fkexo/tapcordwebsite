import { type ReactNode } from "react";

export function Badge({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.15em] ${
        dark
          ? "border-orange/40 bg-orange/10 text-orange"
          : "border-navy/10 bg-navy/5 text-navy-deep"
      }`}
    >
      {children}
    </span>
  );
}
