"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    category: "Electrical Services",
    question: "What electrical services do you provide?",
    answer: "We provide comprehensive electrical services including installation, maintenance, repairs, testing and inspection, and design and planning for residential, commercial, and industrial properties.",
  },
  {
    category: "Electrical Services",
    question: "How often should I have my electrical system inspected?",
    answer: "We recommend having your electrical system inspected at least once every 3-5 years for residential properties, and annually for commercial and industrial properties to ensure safety and compliance.",
  },
  {
    category: "Plumbing Services",
    question: "What plumbing services do you offer?",
    answer: "Our plumbing services include installation, repairs, drain cleaning and unclogging, and water heater installation for both residential and commercial properties.",
  },
  {
    category: "Plumbing Services",
    question: "How can I prevent plumbing issues?",
    answer: "Regular maintenance, avoiding pouring grease down drains, fixing leaks promptly, and scheduling annual inspections can help prevent most plumbing issues.",
  },
  {
    category: "Facility Management",
    question: "What does facility management include?",
    answer: "Our facility management services include building maintenance, property management, asset management, facility operations management, and maintenance planning and scheduling.",
  },
  {
    category: "Facility Management",
    question: "Why is preventive maintenance important?",
    answer: "Preventive maintenance helps identify and fix issues before they become major problems, reducing costly downtime, extending equipment lifespan, and ensuring safety.",
  },
  {
    category: "Automation",
    question: "What is home automation?",
    answer: "Home automation involves integrating smart technology into your home to control lighting, temperature, security, entertainment, and more — often through a single app or voice commands.",
  },
  {
    category: "Automation",
    question: "Can I automate my existing home?",
    answer: "Yes! Most existing homes can be retrofitted with smart technology. We assess your current setup and recommend the best automation solutions for your needs and budget.",
  },
  {
    category: "HVAC",
    question: "Do you provide HVAC services?",
    answer: "Yes, we provide HVAC installation, maintenance, and repair services to ensure your heating, ventilation, and air conditioning systems run efficiently.",
  },
  {
    category: "Janitorial",
    question: "Do you offer janitorial services?",
    answer: "Yes, we offer professional janitorial and cleaning services for commercial and industrial facilities as part of our comprehensive facility management solutions.",
  },
  {
    category: "Energy Management",
    question: "How can energy management help reduce costs?",
    answer: "Energy management involves monitoring, controlling, and optimizing energy consumption. Our solutions can reduce energy costs by 15-30% through smart systems and efficient practices.",
  },
  {
    category: "General",
    question: "What areas do you serve?",
    answer: "We serve Lagos, Onitsha, and surrounding areas across Nigeria.",
  },
  {
    category: "General",
    question: "Are your services guaranteed?",
    answer: "Yes, all our work is guaranteed in writing. We stand behind the quality of our services and offer ongoing support.",
  },
];

export default function AboutPageContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-[#0A1128] overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FFB703]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FFB703]/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Your Favourite <span className="text-[#FFB703]">Home Caring Partner</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Dedicated to delivering excellence in every project, big or small.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-[#0B132B]">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">Who We Are</h2>
              <div className="prose prose-invert max-w-none">
                <p className="mb-6 leading-relaxed text-gray-300">
                  Tapcord Engineering is a leading MEP (Mechanical, Electrical, and Plumbing) services company based in Nigeria, with operations in Lagos and Onitsha. We specialize in providing comprehensive engineering solutions for residential, commercial, and industrial clients.
                </p>
                <p className="mb-6 leading-relaxed text-gray-300">
                  Our team of certified professionals brings years of experience and expertise to every project. From electrical installations and plumbing systems to facility management and smart automation, we deliver solutions that are safe, efficient, and sustainable.
                </p>
                <p className="mb-6 leading-relaxed text-gray-300">
                  At Tapcord Engineering, we believe in building long-term relationships with our clients based on trust, transparency, and exceptional service. Our commitment to quality and safety is unwavering, and we continuously invest in the latest technology and training to stay ahead of industry standards.
                </p>
                <p className="leading-relaxed text-gray-300">
                  Whether you need a simple repair or a complete facility overhaul, Tapcord Engineering is your trusted partner for all MEP needs. We are committed to keeping your systems running smoothly, your environment safe, and your investment protected.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#8A99B4]/20 bg-[#0A1128] p-3 shadow-2xl shadow-[#020617]/30">
              <img
                src="/about-illustration.svg"
                alt="Illustration of Tapcord Engineering's professional and modern services"
                className="h-auto w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#0A1128]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400">Find answers to common questions about our services</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#0B132B] rounded-lg border border-[#8A99B4]/20 overflow-hidden">
                <button
                  onClick={() => toggle(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[#0B132B]/50 transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <div>
                    <span className="text-[#FFB703] text-xs font-medium uppercase tracking-wider">{faq.category}</span>
                    <p className="text-white font-medium mt-1">{faq.question}</p>
                  </div>
                  <svg
                    className={`w-5 h-5 text-[#FFB703] transition-transform duration-300 flex-shrink-0 ml-4 ${openIndex === index ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 text-gray-400 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Convenience CTA */}
      <section className="py-20 bg-[#0B132B]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Enhanced Convenience and <span className="text-[#FFB703]">Comfort</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Experience the difference that professional MEP services can make. From smart automation to reliable maintenance, we are your partner in creating spaces that work seamlessly.
          </p>
          <Link
            href="/#contact"
            className="inline-block px-8 py-4 bg-[#FFB703] text-[#0A1128] font-bold rounded-lg hover:bg-[#F4A261] transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </main>
  );
}