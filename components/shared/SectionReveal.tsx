"use client";

import { type ReactNode } from "react";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";

export function SectionReveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref} data-reveal data-visible={visible} className={className}>
      {children}
    </div>
  );
}
