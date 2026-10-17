import type { Metadata } from "next";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { pageOpenGraph } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Electrical, mechanical, plumbing, fire alarm, CCTV, smart automation, electrical drawings and 3D walkthrough visualization - Tapcord Engineering, Lekki, Lagos.",
  openGraph: pageOpenGraph("/services", { title: "Services | Tapcord Engineering" }),
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy-deep py-16 text-center sm:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-orange">
            What We Do
          </p>
          <h1 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">
            Eight disciplines, one coordinated build
          </h1>
          <p className="mt-4 text-slate">
            Electrical, mechanical, plumbing, fire, CCTV, smart automation, drawings and 3D visualization -
            placed on a single drawing set that matches site reality.
          </p>
        </div>
      </section>
      <ServicesGrid showHeading={false} />
    </>
  );
}
