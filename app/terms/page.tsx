import type { Metadata } from "next";
import { CONTACT, SITE_NAME, pageOpenGraph } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${SITE_NAME}.`,
  openGraph: pageOpenGraph("/terms", { title: `Terms of Service | ${SITE_NAME}` }),
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-navy-deep py-16 text-center sm:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-orange">Legal</p>
          <h1 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">Terms of Service</h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl space-y-6 px-4 py-16 text-sm leading-relaxed text-navy/80 sm:px-6 lg:px-8">
        <p className="text-navy/50">Last updated: 2026</p>

        <div>
          <h2 className="font-heading text-lg font-bold text-navy-deep">1. Services</h2>
          <p className="mt-2">
            {SITE_NAME} provides electrical, mechanical, plumbing, fire alarm, CCTV, smart home automation,
            electrical drawing and 3D walkthrough visualization services for hotel, residential and industrial
            projects. The specific scope of work for any engagement is agreed in writing (email or a signed
            proposal) before work begins.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-lg font-bold text-navy-deep">2. Plan Submission</h2>
          <p className="mt-2">
            When you upload floor plans or other project files through this site, you confirm you have the right
            to share those files with us. We use submitted files solely to prepare audits, drawings and
            visualizations for your project, and treat them as confidential.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-lg font-bold text-navy-deep">3. Audit &amp; Drawings</h2>
          <p className="mt-2">
            The 48-hour blind spot audit is an initial assessment based on the plans you provide. It is not a
            substitute for a full site survey, and final device counts, drawings and schedules may be revised once
            a site visit is carried out.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-lg font-bold text-navy-deep">4. Payments</h2>
          <p className="mt-2">
            Where a deposit or milestone payment is required, this is confirmed separately before any payment is
            requested. See our <a href="/refund-policy" className="font-semibold text-orange-ink hover:underline">Refund Policy</a> for details.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-lg font-bold text-navy-deep">5. Limitation of Liability</h2>
          <p className="mt-2">
            We take reasonable care in preparing drawings, audits and visualizations, but final installation
            remains the responsibility of the contractor carrying out the physical work on site. {SITE_NAME} is
            not liable for installation errors made by third-party contractors who deviate from the supplied
            drawings and legend.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-lg font-bold text-navy-deep">6. Contact</h2>
          <p className="mt-2">
            Questions about these terms can be sent to{" "}
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
