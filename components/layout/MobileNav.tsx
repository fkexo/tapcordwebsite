"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CONTACT, NAV_LINKS } from "@/lib/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-navy/10"
      >
        {open ? (
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-navy-deep" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        ) : (
          <Image
            src="/assets/logos/Tapcord_Logo_Icon_Transparent.png"
            alt=""
            width={24}
            height={24}
            className="h-6 w-6"
          />
        )}
      </button>

      {open && (
        <div className="fixed inset-x-0 top-[61px] z-40 border-t border-navy/10 bg-white shadow-lg">
          <nav className="flex flex-col px-4 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-navy-deep hover:bg-light-bg"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/dashboard"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-navy-deep hover:bg-light-bg"
            >
              Client Login
            </Link>
            <div className="mt-2 flex items-center justify-between gap-3 border-t border-navy/10 px-3 pt-4">
              <a href={`tel:${CONTACT.phoneTel}`} className="text-sm font-semibold text-navy-deep">
                {CONTACT.phoneDisplay}
              </a>
              <Link
                href="/upload"
                onClick={() => setOpen(false)}
                className="rounded-full bg-orange px-4 py-2 text-sm font-semibold text-white"
              >
                Get Free Audit
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
