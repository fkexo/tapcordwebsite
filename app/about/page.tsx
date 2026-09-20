import type { Metadata } from "next";
import { pageOpenGraph } from "@/lib/site";
import AboutPageContent from "@/components/AboutPageContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Tapcord Engineering: our mission, values, and certified team delivering MEP solutions in Lagos and Onitsha, Nigeria.",
  alternates: { canonical: "/about" },
  openGraph: pageOpenGraph("/about"),
};

export default function AboutPage() {
  return <AboutPageContent />;
}
