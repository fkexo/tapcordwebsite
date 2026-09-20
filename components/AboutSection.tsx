const bestPractices = [
  "Sustainability",
  "Project On Time",
  "Modern Technology",
  "Latest Designs",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#0A1128]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Committed To Keep People <span className="text-[#FFB703]">Healthy & Safe</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              At Tapcord Engineering, we&apos;re committed to sustainability. From energy-efficient electrical solutions to water-conserving plumbing systems, we help reduce environmental footprint while maximizing performance. Our team of certified professionals ensures every project meets the highest standards of safety and quality.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {bestPractices.map((practice) => (
                <div
                  key={practice}
                  className="flex items-center gap-3 px-4 py-3 bg-[#0B132B] rounded-lg border border-[#8A99B4]/20"
                >
                  <svg className="w-5 h-5 text-[#FFB703] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white font-medium text-sm">{practice}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual illustration */}
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-[#8A99B4]/20 bg-[#0B132B] p-3 shadow-2xl shadow-[#020617]/30">
              <img
                src="/about-illustration.svg"
                alt="Illustration highlighting Tapcord engineering expertise and professional service"
                className="h-auto w-full rounded-[1.5rem] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-[#FFB703]/10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}