import { ContactForm } from "@/components/shared/ContactForm";
import { CONTACT } from "@/lib/site";

export function FinalCta() {
  return (
    <section
      id="final-cta"
      className="relative"
      style={{ background: "linear-gradient(135deg, #EA7D17, #13233D 65%)" }}
    >
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Send Your Floor Plan - Get Device Count &amp; Blind Spot Audit in 48hrs
          </h2>
        </div>

        <div className="mt-10 rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-lg sm:p-10">
          <ContactForm dark />
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-center text-sm text-white/80">
          <a href={`tel:${CONTACT.phoneTel}`} className="font-semibold hover:text-white">
            {CONTACT.phoneDisplay}
          </a>
          <span>|</span>
          <a href={`mailto:${CONTACT.email}`} className="font-semibold hover:text-white">
            {CONTACT.email}
          </a>
          <span>|</span>
          <span className="font-semibold">{CONTACT.address}</span>
        </div>
      </div>
    </section>
  );
}
