import { FAQ_ITEMS } from "@/lib/data/faq";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function FAQ() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="FAQ" title="Questions we get asked" align="center" />

      <div className="mt-10 space-y-3">
        {FAQ_ITEMS.map((item) => (
          <details
            key={item.question}
            className="group rounded-2xl border border-navy/10 bg-white p-5 open:shadow-sm"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base font-bold text-navy-deep">
              {item.question}
              <span
                className="shrink-0 text-xl leading-none text-orange-ink transition-transform group-open:rotate-45"
                aria-hidden
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-navy/70">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
