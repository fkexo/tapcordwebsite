import { type ReactNode } from "react";

export function BentoCard({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div id={id} className={`perspective-1000 ${id ? "scroll-mt-24" : ""} ${className}`}>
      <div className="group h-full rounded-2xl border border-navy/10 bg-white/80 p-6 shadow-sm backdrop-blur transition-all duration-300 [transform-style:preserve-3d] hover:border-orange/50 hover:shadow-lg hover:shadow-orange/10 hover:[transform:translateY(-6px)_rotateX(3deg)]">
        {children}
      </div>
    </div>
  );
}
