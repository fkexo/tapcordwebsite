import type { Metadata } from "next";
import Link from "next/link";
import { ChapterViewer } from "@/components/shared/ChapterViewer";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { pageOpenGraph } from "@/lib/site";

export const metadata: Metadata = {
  title: "3D Walkthrough Visualization",
  description:
    "A 14-chapter 3D walkthrough at 1.6m eye height, with clean and annotated passes, 4K stills and MP4 export.",
  openGraph: pageOpenGraph("/services/3d-walkthrough", {
    title: "3D Walkthrough Visualization | Tapcord Engineering",
  }),
};

export default function WalkthroughPage() {
  return (
    <>
      <section className="bg-navy-deep py-16 text-center sm:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-orange">
            3D Walkthrough Visualization
          </p>
          <h1 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">
            See the building before it&apos;s built
          </h1>
          <p className="mt-4 text-slate">
            A 14-chapter tour validated at 1.6m eye height - the height a person actually sees the
            building from. Clean pass for presentation, annotated pass for construction sign-off.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <ChapterViewer variant="full" />
      </section>

      <section className="bg-light-bg-alt">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="How It Works" title="Clean pass vs annotated pass" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
              <h3 className="font-heading text-base font-bold text-navy-deep">Clean Pass</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">
                The building as it will look and feel - for presentation, approvals and marketing.
              </p>
            </div>
            <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
              <h3 className="font-heading text-base font-bold text-navy-deep">Annotated Pass</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">
                Every device overlaid on the same shots - for your electrician, QS and fire inspector.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-bold text-navy-deep sm:text-3xl">
          Validate your build before a single wall goes up
        </h2>
        <Link
          href="/contact"
          className="mt-6 inline-flex rounded-full bg-orange px-6 py-3.5 text-sm font-semibold text-white hover:bg-orange-deep"
        >
          Request a Walkthrough
        </Link>
      </section>
    </>
  );
}
