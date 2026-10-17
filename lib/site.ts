export const SITE_NAME = "Tapcord Engineering";

// Set NEXT_PUBLIC_SITE_URL in Vercel to the production domain (no trailing slash).
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://tapcordengineering.com"
).replace(/\/$/, "");

export const SITE_DESCRIPTION =
  "MEP, fire alarm, CCTV, smart home automation, electrical drawings and 3D walkthrough visualization for hotels, homes and industrial projects in Lekki, Lagos.";

export const OG_IMAGE = "/assets/logos/Tapcord_Logo_Full_Navy_Background.png";

// Single source of truth for every contact detail on the site. Never hardcode
// these values anywhere else - everything reads from here.
export const CONTACT = {
  phoneDisplay: "09129762712",
  phoneTel: "+2349129762712",
  email: "tapcordengineering@gmail.com",
  address: "Lekki, Lagos",
  whatsapp: "https://wa.me/2349129762712",
} as const;

// Page-level openGraph replaces the layout's object entirely, so pages spread this to keep shared fields.
export const pageOpenGraph = (path: string, overrides?: { title?: string; description?: string }) => ({
  type: "website" as const,
  locale: "en_NG",
  siteName: SITE_NAME,
  url: path,
  title: overrides?.title ?? SITE_NAME,
  description: overrides?.description ?? SITE_DESCRIPTION,
  images: [{ url: OG_IMAGE, alt: `${SITE_NAME} logo` }],
});

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "Projects", href: "/projects" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
] as const;
