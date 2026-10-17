import type { Metadata } from "next";
import { FeaturedProject } from "@/components/home/FeaturedProject";
import { pageOpenGraph } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "Tapcord Engineering project case studies - MEP, fire, CCTV, smart automation and 3D visualization.",
  openGraph: pageOpenGraph("/projects", { title: "Projects | Tapcord Engineering" }),
};

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-navy-deep py-16 text-center sm:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-orange">Projects</p>
          <h1 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">
            Built on drawings that match site reality
          </h1>
        </div>
      </section>

      <FeaturedProject />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-dashed border-navy/20 bg-white/60 p-10 text-center">
          <p className="font-heading text-lg font-bold text-navy-deep">More projects coming soon</p>
          <p className="mt-2 text-sm text-navy/70">
            Every new build gets added here once drawings and walkthrough are complete.
          </p>
        </div>
      </section>
    </>
  );
}
