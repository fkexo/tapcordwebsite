const featuredProjects = [
  {
    title: "Smart automation upgrades",
    description: "Modern systems that make homes and offices easier to manage and more energy efficient.",
    image: "/assets/automation.jpg",
    alt: "A modern automation installation project at Tapcord",
  },
  {
    title: "Reliable plumbing installations",
    description: "Clean, durable sanitary and water systems built for long-term comfort and performance.",
    image: "/assets/plumbing.jpg",
    alt: "A polished plumbing installation completed by Tapcord",
  },
  {
    title: "Facility maintenance support",
    description: "Preventive care and responsive support that keeps operations moving without interruptions.",
    image: "/assets/facility.jpg",
    alt: "A maintenance team supporting a facility operation",
  },
];

export default function FeaturedWorkSection() {
  return (
    <section className="bg-[#0A1128] py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#FFB703]">Featured work</p>
            <h2 className="text-3xl font-bold text-white md:text-4xl">Projects that feel familiar, practical, and dependable</h2>
          </div>
          <a href="#contact" className="inline-flex text-sm font-semibold text-[#FFB703] transition hover:text-[#F4A261]">
            Book a consultation →
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <div key={project.title} className="overflow-hidden rounded-2xl border border-[#8A99B4]/20 bg-[#0B132B]">
                <img src={project.image} alt={project.alt} className="h-48 w-full object-cover" />
                <div className="p-5">
                  <h3 className="mb-2 text-lg font-semibold text-white">{project.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-400">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#8A99B4]/20 bg-[#0B132B]">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/wIfVTAh4eWs"
                title="Tapcord Engineering project overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
            <div className="p-6">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#FFB703]">See the work</p>
              <h3 className="mb-3 text-2xl font-semibold text-white">A closer look at how Tapcord delivers dependable solutions</h3>
              <p className="text-sm leading-relaxed text-gray-400">
                From installations and maintenance to smart upgrades, the team brings practical expertise and a calm, professional approach to every project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
