import type { Metadata } from "next";
import { ContactForm } from "@/components/shared/ContactForm";
import { CONTACT, pageOpenGraph } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Send your floor plan and get a device count and blind spot audit within 48 hours.",
  openGraph: pageOpenGraph("/contact", { title: "Contact | Tapcord Engineering" }),
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy-deep py-16 text-center sm:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-orange">Contact</p>
          <h1 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">
            Send Your Floor Plan - Get Device Count &amp; Blind Spot Audit in 48hrs
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div className="rounded-3xl border border-navy/10 bg-white p-6 shadow-sm sm:p-10">
            <ContactForm />
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold text-navy-deep">Reach us directly</h2>
            <ul className="mt-4 space-y-4 text-sm">
              <li>
                <p className="text-navy/65">Phone</p>
                <a href={`tel:${CONTACT.phoneTel}`} className="font-semibold text-navy-deep hover:text-orange-ink">
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <p className="text-navy/65">Email</p>
                <a href={`mailto:${CONTACT.email}`} className="font-semibold text-navy-deep hover:text-orange-ink">
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <p className="text-navy/65">Address</p>
                <p className="font-semibold text-navy-deep">{CONTACT.address}</p>
              </li>
              <li>
                <p className="text-navy/65">WhatsApp</p>
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-navy-deep hover:text-orange-ink"
                >
                  Chat with us
                </a>
              </li>
            </ul>

            <div className="mt-8 rounded-2xl border border-navy/10 bg-light-bg-alt p-6">
              <p className="font-mono text-xs uppercase tracking-wide text-navy/65">Service Area</p>
              <p className="mt-2 text-sm text-navy/70">
                Lekki, Lagos and surrounding areas. Hotel, residential and industrial projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
