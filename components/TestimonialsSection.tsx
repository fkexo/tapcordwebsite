const projects = [
  {
    title: "Residential Wiring",
    location: "Lekki",
    description: "Complete electrical wiring for a 5-bedroom duplex",
    image: "/assets/automation.jpg",
  },
  {
    title: "Plumbing Installation",
    location: "Onitsha",
    description: "Full plumbing system for a commercial building",
    image: "/assets/plumbing.jpg",
  },
  {
    title: "Facility Upgrade",
    location: "Lagos",
    description: "Electrical and plumbing upgrade for an office complex",
    image: "/assets/facility.jpg",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-[#0A1128]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See some of the projects we&apos;ve completed for our clients
          </p>
        </div>

        {/* Testimonial Quote */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-[#0B132B] rounded-2xl p-8 border border-[#8A99B4]/20 relative">
            <svg className="absolute top-6 left-6 w-10 h-10 text-[#FFB703]/20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-gray-300 text-lg italic mb-6 pt-8 pl-4">
              &ldquo;Tapcord Engineering delivered exceptional work on our facility upgrade. Their attention to detail, professionalism, and commitment to safety made them the perfect partner for our project. Highly recommended!&rdquo;
            </blockquote>
            <div className="flex items-center gap-4 pl-4">
              <img src="/assets/testimonial-portrait.jpg" alt="Portrait of a satisfied Tapcord client" className="h-12 w-12 rounded-full object-cover" />
              <div>
                <div className="text-white font-semibold">Michelle</div>
                <div className="text-gray-500 text-sm">Project Manager</div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Portfolio */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-[#0B132B] rounded-xl overflow-hidden border border-[#8A99B4]/20 hover:border-[#FFB703]/30 transition-colors duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold mb-1">{project.title}</h3>
                <p className="text-[#FFB703] text-sm mb-2">{project.location}</p>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}