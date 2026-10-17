import { PROCESS_STEPS } from "@/lib/data/process";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function ProcessSteps() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="How We Work" title="A process built around site reality" align="center" />

      <div className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="absolute top-6 right-0 left-0 hidden h-px bg-gradient-to-r from-transparent via-orange/50 to-transparent lg:block" />
        {PROCESS_STEPS.map((step) => (
          <div key={step.number} className="relative text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white font-heading text-xl font-bold text-orange-ink ring-2 ring-orange/30">
              {step.number}
            </div>
            <h3 className="mt-4 font-heading text-base font-bold text-navy-deep">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy/70">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
