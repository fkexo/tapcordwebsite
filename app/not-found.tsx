import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 text-center">
      <p className="font-mono text-sm uppercase tracking-[0.2em] text-orange-ink">404</p>
      <h1 className="mt-3 font-heading text-3xl font-bold text-navy-deep">Page not found</h1>
      <p className="mt-3 text-navy/70">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <Link
        href="/"
        className="mt-6 rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white hover:bg-orange-deep"
      >
        Back to homepage
      </Link>
    </div>
  );
}
