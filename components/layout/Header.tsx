"use client";

import Image from "next/image";
import Link from "next/link";
import { CONTACT, NAV_LINKS } from "@/lib/site";
import { useStickyHeader } from "@/lib/hooks/useStickyHeader";
import { useAuthUser } from "@/lib/hooks/useAuthUser";
import { SignOutButton } from "@/components/dashboard/SignOutButton";
import { MobileNav } from "./MobileNav";

export function Header() {
  const scrolled = useStickyHeader();
  const { user } = useAuthUser();

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-navy/10 bg-white/80 backdrop-blur-lg"
          : "border-transparent bg-white/95 backdrop-blur-lg"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logos/Tapcord_Logo_Full_Transparent.png"
            alt="Tapcord Engineering Limited"
            height={129}
            width={300}
            priority
            className="h-10 w-auto sm:h-12"
            style={{ width: "auto" }}
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy-deep/80 transition-colors hover:text-orange-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={`tel:${CONTACT.phoneTel}`}
            className="text-sm font-semibold text-navy-deep hover:text-orange-ink"
          >
            {CONTACT.phoneDisplay}
          </a>
          {user ? (
            <>
              <Link
                href="/dashboard"
                className="text-sm font-semibold text-navy-deep hover:text-orange-ink"
              >
                Dashboard
              </Link>
              <SignOutButton />
            </>
          ) : (
            <>
              <Link
                href="/dashboard"
                className="text-sm font-semibold text-navy-deep hover:text-orange-ink"
              >
                Client Login
              </Link>
              <Link
                href="/upload"
                className="rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-orange-deep"
              >
                Get Free Audit
              </Link>
            </>
          )}
        </div>

        <MobileNav user={user} />
      </div>
    </header>
  );
}
