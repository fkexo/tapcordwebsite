import { INSIGHTS } from "@/lib/data/insights";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function InsightsPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Insights" title="Best practices from the field" />

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {INSIGHTS.map((insight) => (
          <div
            key={insight.slug}
            className="rounded-2xl border border-navy/10 bg-white p-6 opacity-80 shadow-sm"
          >
            <span className="inline-flex rounded-full bg-navy/5 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wide text-navy/65">
              Coming soon
            </span>
            <h3 className="mt-4 font-heading text-base font-bold text-navy-deep">{insight.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy/70">{insight.dek}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
