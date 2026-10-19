import { TESTIMONIALS } from "@/lib/data/testimonials";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { BentoCard } from "@/components/shared/BentoCard";

export function Testimonials() {
  return (
    <section className="bg-light-bg-alt">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="What Clients Say" title="Trusted for the details that matter" align="center" />

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <BentoCard key={testimonial.role}>
              <p className="text-sm leading-relaxed text-navy-deep/90">&ldquo;{testimonial.quote}&rdquo;</p>
              <p className="mt-4 font-mono text-xs uppercase tracking-wide text-navy/65">{testimonial.role}</p>
            </BentoCard>
          ))}
        </div>
      </div>
    </section>
  );
}
