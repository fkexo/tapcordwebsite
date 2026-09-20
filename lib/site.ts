export const SITE_NAME = "Tapcord Engineering";

// Set NEXT_PUBLIC_SITE_URL in Netlify to the production domain (no trailing slash).
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://tapcord-website.netlify.app").replace(/\/$/, "");

export const SITE_DESCRIPTION =
  "Expert Electrical, Plumbing, and Facility Management services for residential, commercial, and industrial projects across Lagos and Onitsha, Nigeria.";

export const OG_IMAGE = "/assets/facility.jpg";

// Page-level openGraph replaces the layout's object entirely, so pages spread this to keep shared fields.
export const pageOpenGraph = (path: string) => ({
  type: "website" as const,
  locale: "en_NG",
  siteName: SITE_NAME,
  url: path,
  images: [{ url: OG_IMAGE, alt: `${SITE_NAME} facility services` }],
});
