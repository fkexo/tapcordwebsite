import type { Metadata } from "next";
import Link from "next/link";
import { DeviceLegendTable } from "@/components/shared/DeviceLegendTable";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { pageOpenGraph } from "@/lib/site";

export const metadata: Metadata = {
  title: "Electrical Drawings & Documentation",
  description:
    "Ground and upper floor plans, site plan, A3 device legend, CSV schedule and a JSON device catalog - drawings that match site reality.",
  openGraph: pageOpenGraph("/services/electrical-drawings", {
    title: "Electrical Drawings & Documentation | Tapcord Engineering",
  }),
};

const DELIVERABLES = [
  { title: "Ground Floor Plan", detail: "Full wall layout at 6600mm, coordinated with every device." },
  { title: "Upper Floor Plan", detail: "Master suite at 5775mm, double-height void at 6000mm." },
  { title: "Site Plan", detail: "Approach, perimeter and landscaped layout at 1:200." },
  { title: "Device Legend (A3)", detail: "Printable legend your electrician can install straight from." },
  { title: "Schedule (CSV)", detail: "Every device, zone and quantity - ready for your QS to price." },
  { title: "JSON Device Catalog", detail: "30+ models and 18 correctly-sized OBJ placeholders, in meters." },
];

export default function ElectricalDrawingsPage() {
  return (
    <>
      <section className="bg-navy-deep py-16 text-center sm:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-orange">
            Electrical Drawings &amp; Documentation
          </p>
          <h1 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">
            One drawing, one site reality
          </h1>
          <p className="mt-4 text-slate">
            Every device - DB, AP, CCTV, fire, smart automation - placed on a single coordinated drawing
            set, with a legend your electrician and QS can both work from.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="What's Included" title="The full drawing set" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DELIVERABLES.map((item) => (
            <div key={item.title} className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
              <h3 className="font-heading text-base font-bold text-navy-deep">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-light-bg-alt">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Device Legend" title="A3-style legend, color-coded by system" />
          <div className="mt-8">
            <DeviceLegendTable />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-bold text-navy-deep sm:text-3xl">
          Get a device count and blind spot audit in 48hrs
        </h2>
        <Link
          href="/contact"
          className="mt-6 inline-flex rounded-full bg-orange px-6 py-3.5 text-sm font-semibold text-white hover:bg-orange-deep"
        >
          Request Your Drawings
        </Link>
      </section>
    </>
  );
}
