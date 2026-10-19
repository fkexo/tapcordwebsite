export function PortalNotConfigured() {
  return (
    <section className="mx-auto max-w-lg px-4 py-24 text-center sm:px-6">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-orange-ink">Client Portal</p>
      <h1 className="mt-3 font-heading text-2xl font-bold text-navy-deep">Not set up yet</h1>
      <p className="mt-3 text-sm text-navy/60">
        The client portal needs a Supabase project configured before it can be used. See the README for setup
        steps.
      </p>
    </section>
  );
}
