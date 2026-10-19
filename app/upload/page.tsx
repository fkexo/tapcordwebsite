import type { Metadata } from "next";
import { UploadFlow } from "@/components/upload/UploadFlow";
import { pageOpenGraph } from "@/lib/site";

export const metadata: Metadata = {
  title: "Upload Your Plans",
  description: "Upload your floor plans, drawings and references - get a device count and blind spot audit in 48hrs.",
  openGraph: pageOpenGraph("/upload", { title: "Upload Your Plans | Tapcord Engineering" }),
};

export default function UploadPage() {
  return (
    <>
      <section className="bg-navy-deep py-16 text-center sm:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-orange">
            Start Your Project
          </p>
          <h1 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">Upload Your Plans</h1>
          <p className="mt-4 text-slate">
            Architectural, structural, electrical, mechanical, plumbing, fire, CCTV, smart home, finishes -
            upload as many files as you have. More context means a better audit.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-navy/10 bg-white p-6 shadow-sm sm:p-10">
          <UploadFlow />
        </div>
      </section>
    </>
  );
}
