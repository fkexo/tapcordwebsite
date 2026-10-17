import Link from "next/link";
import { SERVICES } from "@/lib/data/services";
import { SERVICE_ICONS } from "@/components/icons";
import { BentoCard } from "@/components/shared/BentoCard";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function ServicesGrid({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      {showHeading ? (
        <SectionHeading
          eyebrow="What We Deliver"
          title="Eight disciplines, one coordinated build."
          subtitle="Every system on the same drawing, placed to match the site - not a generic template."
        />
      ) : (
        // Keeps the h1 -> h2 -> h3 hierarchy intact for screen readers even when the
        // visible heading is skipped (e.g. /services already has its own h1 above this).
        <h2 className="sr-only">Our services</h2>
      )}

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service) => {
          const Icon = SERVICE_ICONS[service.icon];
          return (
            <BentoCard key={service.slug} id={service.slug}>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange/10 text-orange">
                <Icon />
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-navy-deep">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">{service.benefit}</p>
              <Link
                href={service.href}
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-orange-ink hover:underline"
              >
                Learn more <span aria-hidden>&rarr;</span>
              </Link>
            </BentoCard>
          );
        })}
      </div>
    </section>
  );
}
