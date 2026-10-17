import type { Metadata } from "next";
import { PROCESS_STEPS } from "@/lib/data/process";
import { pageOpenGraph } from "@/lib/site";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "Survey & blind spot audit, design, legend/schedule + 3D validation, supervision & handover - the Tapcord process.",
  openGraph: pageOpenGraph("/how-we-work", { title: "How We Work | Tapcord Engineering" }),
};

export default function HowWeWorkPage() {
  return (
    <>
      <section className="bg-navy-deep py-16 text-center sm:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-orange">
            How We Work
          </p>
          <h1 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">
            A process built around site reality
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="space-y-10">
          {PROCESS_STEPS.map((step) => (
            <div key={step.number} className="flex gap-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-orange/10 font-heading text-2xl font-bold text-orange-ink ring-2 ring-orange/20">
                {step.number}
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-navy-deep">{step.title}</h2>
                <p className="mt-2 text-navy/70">{step.description}</p>
                <p className="mt-2 text-sm text-navy/65">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
