"use client";

import { useState } from "react";
import { PERSONAS } from "@/lib/data/personas";
import { PillTabs } from "@/components/shared/PillTabs";
import { BentoCard } from "@/components/shared/BentoCard";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function PersonaSelector() {
  const [active, setActive] = useState(PERSONAS[0].id);
  const persona = PERSONAS.find((p) => p.id === active) ?? PERSONAS[0];

  const cards = [
    { label: "Pain", body: persona.pain },
    { label: "Question", body: persona.question },
    { label: "Clarity = Tapcord Solution", body: persona.clarity },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Who We Build For" title="Who are you building for?" align="center" />

      <div className="mt-8 flex justify-center">
        <PillTabs
          tabs={PERSONAS.map((p) => ({ id: p.id, label: p.label }))}
          active={active}
          onChange={setActive}
        />
      </div>

      <div key={active} className="mt-10 grid gap-6 sm:grid-cols-3">
        {cards.map((card) => (
          <BentoCard key={card.label}>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-orange-ink">
              {card.label}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-navy-deep/90">{card.body}</p>
          </BentoCard>
        ))}
      </div>
    </section>
  );
}
