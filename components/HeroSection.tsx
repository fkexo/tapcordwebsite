import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-[#0A1128]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1128] via-[#0B132B] to-[#0A1128]" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#FFB703]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FFB703]/5 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="text-center lg:text-left">
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              Building & Maintaining Efficient{" "}
              <span className="text-[#FFB703]">Infrastructure Systems</span>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl lg:mx-0">
              Expert Electrical, Plumbing, and Facility Management services for residential, commercial, and industrial projects across Lagos and Onitsha.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href="#contact"
                className="rounded-lg bg-[#FFB703] px-8 py-4 font-bold text-[#0A1128] transition-all duration-300 hover:bg-[#F4A261] hover:shadow-lg hover:shadow-[#FFB703]/20"
              >
                Request Free Assessment
              </Link>
              <a
                href="tel:08140790116"
                className="rounded-lg border-2 border-[#FFB703] px-8 py-4 font-bold text-[#FFB703] transition-all duration-300 hover:bg-[#FFB703]/10"
              >
                Call Now: 08140790116
              </a>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-400 lg:justify-start">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#FFB703]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                Safety First
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#FFB703]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                Quality Guaranteed
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#FFB703]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                24/7 Support
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-[#8A99B4]/20 bg-[#0B132B]/80 p-3 shadow-2xl shadow-[#020617]/40">
              <img
                src="/assets/automation.jpg"
                alt="A modern Tapcord automation and infrastructure project"
                className="h-auto w-full rounded-[1.5rem] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-2xl border border-[#FFB703]/30 bg-[#FFB703]/10 px-4 py-3 text-sm font-medium text-[#FFB703] shadow-lg backdrop-blur">
              Trusted by homes, offices, and growing businesses
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}