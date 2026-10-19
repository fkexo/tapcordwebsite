import Image from "next/image";
import Link from "next/link";
import { CONTACT, SITE_NAME } from "@/lib/site";
import { SERVICES } from "@/lib/data/services";

const COMPANY_LINKS = [
  { label: "How We Work", href: "/how-we-work" },
  { label: "Projects", href: "/projects" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
  { label: "Refund Policy", href: "/refund-policy" },
];

export function Footer() {
  return (
    <footer className="bg-navy-deep text-slate">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/assets/logos/Tapcord_Logo_Full_Navy_Background.png"
              alt={SITE_NAME}
              height={129}
              width={300}
              className="h-10 w-auto"
              style={{ width: "auto" }}
            />
            <p className="mt-4 text-sm text-slate/80">MEP + Smart + Visual</p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link href={service.href} className="text-sm text-slate/80 hover:text-orange">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate/80 hover:text-orange">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">Contact</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate/80">
              <li>
                <a href={`tel:${CONTACT.phoneTel}`} className="hover:text-orange">
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-orange">
                  {CONTACT.email}
                </a>
              </li>
              <li>{CONTACT.address}</li>
              <li>
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange"
                >
                  WhatsApp us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-slate/60">
          &copy; {new Date().getFullYear()} Tapcord Engineering Limited. All rights reserved. {CONTACT.address}.
        </div>
      </div>
    </footer>
  );
}
