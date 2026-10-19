import type { Metadata } from "next";
import { CONTACT, SITE_NAME, pageOpenGraph } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: `Refund policy for ${SITE_NAME}.`,
  openGraph: pageOpenGraph("/refund-policy", { title: `Refund Policy | ${SITE_NAME}` }),
};

export default function RefundPolicyPage() {
  return (
    <>
      <section className="bg-navy-deep py-16 text-center sm:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-orange">Legal</p>
          <h1 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">Refund Policy</h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl space-y-6 px-4 py-16 text-sm leading-relaxed text-navy/80 sm:px-6 lg:px-8">
        <p className="text-navy/50">Last updated: 2026</p>

        <div>
          <h2 className="font-heading text-lg font-bold text-navy-deep">Deposits</h2>
          <p className="mt-2">
            A deposit secures your place in our audit and design queue and covers the time spent reviewing your
            plans. <strong className="text-navy-deep">Once the blind spot audit has begun, the deposit is
            non-refundable</strong> - this reflects the work already carried out, regardless of whether you proceed
            to the full drawing and visualization stage afterwards.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-lg font-bold text-navy-deep">Before Work Begins</h2>
          <p className="mt-2">
            If you change your mind before the audit has started, contact us as soon as possible and we will
            consider a full refund on a case-by-case basis.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-lg font-bold text-navy-deep">Balance Payments</h2>
          <p className="mt-2">
            Balance payments made for completed drawing sets, device legends or 3D walkthrough deliverables are
            non-refundable once the deliverable has been handed over, since the work has been fully carried out.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-lg font-bold text-navy-deep">Disputes</h2>
          <p className="mt-2">
            If you believe a deliverable does not match the agreed scope of work, contact us directly and we will
            review it with you before any refund decision is made.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-lg font-bold text-navy-deep">Contact</h2>
          <p className="mt-2">
            Refund questions can be sent to{" "}
            <a href={`mailto:${CONTACT.email}`} className="font-semibold text-orange-ink hover:underline">
              {CONTACT.email}
            </a>{" "}
            or {CONTACT.phoneDisplay}.
          </p>
        </div>
      </section>
    </>
  );
}
