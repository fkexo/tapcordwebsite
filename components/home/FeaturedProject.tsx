import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ChapterViewer } from "@/components/shared/ChapterViewer";

const METRICS = [
  { label: "Site Plan", value: "1:200" },
  { label: "Ground Floor Plan", value: "6600 wall" },
  { label: "Upper Floor Plan", value: "5775 master / 6000 void" },
  { label: "Images Extracted", value: "20" },
  { label: "Key Plans", value: "4 @ 400dpi" },
  { label: "Device Catalog", value: "30+ models / 18 OBJ" },
];

export function FeaturedProject() {
  return (
    <section className="bg-light-bg-alt">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Featured Project" title="Boutique Hotel Project - Lekki, Lagos" />

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start">
          <ChapterViewer variant="mini" />

          <div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {METRICS.map((metric) => (
                <div key={metric.label} className="rounded-xl border border-navy/10 bg-white p-4">
                  <p className="font-mono text-xs text-navy/65">{metric.label}</p>
                  <p className="mt-1 font-heading text-sm font-bold text-navy-deep">{metric.value}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-relaxed text-navy/70">
              A full drawing set, device legend PDF, and JSON device catalog - validated with a 14-chapter
              walkthrough at 1.6m eye height before a single wire was pulled.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/#device-map"
                className="rounded-full bg-navy-deep px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy"
              >
                View Clean Pass
              </Link>
              <Link
                href="/#device-map"
                className="rounded-full border border-navy/20 px-5 py-2.5 text-sm font-semibold text-navy-deep hover:border-orange-ink hover:text-orange-ink"
              >
                View Annotated
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
