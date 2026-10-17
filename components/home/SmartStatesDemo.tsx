"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ToggleSwitch } from "@/components/shared/ToggleSwitch";

function StateCard({
  title,
  leftLabel,
  rightLabel,
  offCopy,
  onCopy,
  footnote,
}: {
  title: string;
  leftLabel: string;
  rightLabel: string;
  offCopy: string;
  onCopy: string;
  footnote?: string;
}) {
  const [on, setOn] = useState(false);

  return (
    <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
      <h3 className="font-heading text-lg font-bold text-navy-deep">{title}</h3>
      <div
        className="mt-4 flex h-36 items-center justify-center rounded-xl transition-colors duration-700"
        style={{
          background: on
            ? "radial-gradient(circle at 50% 40%, #FFF4E0, #EA7D17 140%)"
            : "linear-gradient(135deg, #13233d, #0f1d33)",
          boxShadow: on ? "0 0 36px rgba(234,125,23,0.35) inset" : "none",
        }}
      >
        <p className={`px-4 text-center text-sm font-semibold ${on ? "text-navy-deep" : "text-slate"}`}>
          {on ? onCopy : offCopy}
        </p>
      </div>
      <div className="mt-5 flex justify-center">
        <ToggleSwitch leftLabel={leftLabel} rightLabel={rightLabel} checked={on} onChange={setOn} />
      </div>
      {footnote && <p className="mt-3 text-center text-xs text-navy/65">{footnote}</p>}
    </div>
  );
}

export function SmartStatesDemo() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Smart States" title="How Your Building Thinks" align="center" />

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        <StateCard
          title="Guest Room"
          leftLabel="Arrival"
          rightLabel="Welcome"
          offCopy="Dark. Curtains closed. Cove off."
          onCopy="Card inserted: cove glowing, monitor awake, sockets live."
          footnote="AC + water heater are never card-controlled."
        />
        <StateCard
          title="Event Hall"
          leftLabel="Meeting"
          rightLabel="Presentation"
          offCopy="Bright. Blinds open."
          onCopy="Dimmed. Blinds closed. Wood-slat ceiling glow only."
        />
        <StateCard
          title="Pool / VIP Yard"
          leftLabel="Day"
          rightLabel="Dusk Auto"
          offCopy="Daylight. Landscape visible."
          onCopy="Landscape + pool lights switch on automatically at dusk."
        />
      </div>
    </section>
  );
}
