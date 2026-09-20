import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-4 py-24">
      <div className="text-center max-w-md">
        <p className="text-[#FFB703] font-semibold mb-2">404</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Page not found</h1>
        <p className="text-gray-400 mb-8">
          The page you are looking for does not exist or has moved.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-[#FFB703] text-[#0A1128] font-bold rounded-lg hover:bg-[#F4A261] transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
