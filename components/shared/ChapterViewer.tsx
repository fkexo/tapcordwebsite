"use client";

import { useState } from "react";
import { CHAPTERS } from "@/lib/data/chapters";

export function ChapterViewer({ variant = "full" }: { variant?: "mini" | "full" }) {
  const [active, setActive] = useState(0);
  const chapter = CHAPTERS[active];
  const isMini = variant === "mini";

  return (
    <div className={isMini ? "space-y-4" : "space-y-6"}>
      {/* Placeholder frame - real walkthrough stills/MP4 go here once rendered */}
      <div
        className={`relative overflow-hidden rounded-2xl border border-navy/10 ${
          isMini ? "aspect-[16/9]" : "aspect-video"
        }`}
        style={{
          background: `linear-gradient(135deg, #13233d, #0f1d33 55%, #2b2b2b)`,
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center text-white">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-orange">
            Chapter {chapter.index.toString().padStart(2, "0")} / 14
          </span>
          <span className={`font-heading font-bold ${isMini ? "text-lg" : "text-2xl sm:text-3xl"}`}>
            {chapter.title}
          </span>
          {!isMini && <span className="max-w-md text-sm text-slate">{chapter.note}</span>}
          <span className="mt-2 font-mono text-[11px] text-slate/70">1.6m eye height &middot; clean / annotated</span>
        </div>
        <div className="absolute top-3 left-3 rounded-full bg-black/40 px-2.5 py-1 font-mono text-[11px] text-white">
          4K STILL
        </div>
      </div>

      <div className="space-y-3">
        <input
          type="range"
          min={0}
          max={CHAPTERS.length - 1}
          value={active}
          onChange={(event) => setActive(Number(event.target.value))}
          aria-label="Walkthrough chapter scrubber"
          className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-navy/15 accent-orange"
        />
        <div className="flex gap-1.5 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {CHAPTERS.map((c, i) => (
            <button
              key={c.index}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Go to chapter ${c.index}: ${c.title}`}
              aria-current={i === active}
              className={`h-2.5 w-2.5 shrink-0 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange ${
                i === active ? "w-6 bg-orange" : "bg-navy/20 hover:bg-navy/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
