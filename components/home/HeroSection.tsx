import Link from "next/link";
import { Badge } from "@/components/shared/Badge";
import { IsometricHero } from "./IsometricHero";

const METRICS = ["6+10 APs Zoned", "1.6m Eye Validation", "A3 Printable Legend"];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-navy-deep">
      <div className="led-line absolute top-0 left-0 h-1 w-full" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
        <div>
          <Badge dark>MEP &middot; FIRE &middot; CCTV &middot; SMART &middot; 3D VISUAL</Badge>
          <h1 className="mt-6 font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[3.25rem]">
            We Don&apos;t Just Install Systems. We Make Buildings Understand Themselves.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate sm:text-lg">
            Electrical, Mechanical, Plumbing, Fire Alarm, CCTV &amp; Smart Automation for hotels, homes &amp;
            industrial - with drawings that match site reality and 3D walkthroughs at 1.6m eye height.
          </p>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-slate/80">
            {METRICS.map((metric, i) => (
              <span key={metric} className="flex items-center gap-2">
                {i > 0 && <span className="text-orange">|</span>}
                {metric}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/#final-cta"
              className="rounded-full bg-orange px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange/20 transition-transform hover:-translate-y-0.5 hover:bg-orange-deep"
            >
              Upload Your Floor Plan
            </Link>
            <Link
              href="/services/3d-walkthrough"
              className="rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-orange hover:text-orange"
            >
              Watch 3D Walkthrough
            </Link>
          </div>
        </div>

        <IsometricHero />
      </div>
    </section>
  );
}
