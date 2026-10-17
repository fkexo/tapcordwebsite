import type { Metadata } from "next";
import { INSIGHTS } from "@/lib/data/insights";
import { pageOpenGraph } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insights",
  description: "Best practices from the field - MEP, fire zoning, smart automation and drawing standards.",
  openGraph: pageOpenGraph("/insights", { title: "Insights | Tapcord Engineering" }),
};

export default function InsightsPage() {
  return (
    <>
      <section className="bg-navy-deep py-16 text-center sm:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-orange">Insights</p>
          <h1 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">
            Best practices from the field
          </h1>
          <p className="mt-4 text-slate">
            Full articles are in progress - here&apos;s what&apos;s coming first.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {INSIGHTS.map((insight) => (
            <div key={insight.slug} className="rounded-2xl border border-navy/10 bg-white p-6 opacity-80 shadow-sm">
              <span className="inline-flex rounded-full bg-navy/5 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wide text-navy/65">
                Coming soon
              </span>
              <h2 className="mt-4 font-heading text-base font-bold text-navy-deep">{insight.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">{insight.dek}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
