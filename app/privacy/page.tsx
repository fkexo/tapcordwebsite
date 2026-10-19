import type { Metadata } from "next";
import { CONTACT, SITE_NAME, pageOpenGraph } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE_NAME}.`,
  openGraph: pageOpenGraph("/privacy", { title: `Privacy Policy | ${SITE_NAME}` }),
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-navy-deep py-16 text-center sm:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-orange">Legal</p>
          <h1 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">Privacy Policy</h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl space-y-6 px-4 py-16 text-sm leading-relaxed text-navy/80 sm:px-6 lg:px-8">
        <p className="text-navy/50">Last updated: 2026</p>

        <div>
          <h2 className="font-heading text-lg font-bold text-navy-deep">What We Collect</h2>
          <p className="mt-2">
            When you submit a form or upload plans on this site, we collect your name, phone number, email address,
            project type and location, any message you provide, and the files you upload.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-lg font-bold text-navy-deep">How We Use It</h2>
          <p className="mt-2">
            We use this information to respond to your enquiry, prepare audits and drawings, communicate project
            updates, and - where applicable - manage your account and project dashboard. We do not sell your data
            to third parties.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-lg font-bold text-navy-deep">Storage</h2>
          <p className="mt-2">
            Submitted files and contact details are stored securely via our database and file storage provider.
            Uploaded plans are kept private and are only accessible to the client who submitted them and the
            Tapcord Engineering team.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-lg font-bold text-navy-deep">Your Rights</h2>
          <p className="mt-2">
            You can request a copy of the data we hold about you, or ask us to delete it, at any time by emailing{" "}
            <a href={`mailto:${CONTACT.email}`} className="font-semibold text-orange-ink hover:underline">
              {CONTACT.email}
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="font-heading text-lg font-bold text-navy-deep">Contact</h2>
          <p className="mt-2">
            Questions about this policy can be sent to {CONTACT.email} or {CONTACT.phoneDisplay}, {CONTACT.address}.
          </p>
        </div>
      </section>
    </>
  );
}
