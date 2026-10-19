import type { Metadata } from "next";
import { LoginForm } from "@/components/auth/LoginForm";
import { pageOpenGraph } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your Tapcord Engineering project dashboard.",
  openGraph: pageOpenGraph("/login", { title: "Sign In | Tapcord Engineering" }),
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string; error?: string }>;
}) {
  const params = await searchParams;
  const next = params.next ?? "/dashboard";

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-4 py-16 sm:px-6">
      <div className="text-center">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-orange-ink">
          Client Portal
        </p>
        <h1 className="mt-3 font-heading text-2xl font-bold text-navy-deep sm:text-3xl">
          Track your project
        </h1>
        <p className="mt-2 text-sm text-navy/60">Sign in to see your files, audit updates and status.</p>
      </div>

      {params.error && (
        <p className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-center text-sm text-red-600">
          Something went wrong signing you in. Please try again.
        </p>
      )}

      <div className="mt-8 rounded-3xl border border-navy/10 bg-white p-6 shadow-sm sm:p-8">
        <LoginForm next={next} />
      </div>
    </section>
  );
}
