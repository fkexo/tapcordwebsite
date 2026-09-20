import Link from "next/link";
import type { Metadata } from "next";
import { pageOpenGraph } from "@/lib/site";

const steps = [
  { num: 1, title: "Initial Consultation", description: "We begin with a thorough consultation to understand your specific needs, goals, and requirements." },
  { num: 2, title: "Site Assessment", description: "Our experts conduct a detailed site assessment to evaluate the current state and identify opportunities." },
  { num: 3, title: "Customized Planning", description: "We develop a tailored plan that aligns with your objectives, timeline, and budget." },
  { num: 4, title: "Professional Execution", description: "Our skilled team executes the plan with precision, adhering to the highest safety and quality standards." },
  { num: 5, title: "Quality Assurance", description: "Rigorous testing and inspection ensure everything meets our exacting standards." },
  { num: 6, title: "Evaluation & Optimization", description: "Post-completion evaluation and ongoing optimization to ensure long-term performance." },
];

const serviceCategories = [
  {
    category: "Facility Management",
    items: ["Building Maintenance", "Property Management", "Asset Management", "Facility Operations Management", "Maintenance Planning and Scheduling"],
  },
  {
    category: "Electrical Services",
    items: ["Electrical Installation", "Electrical Maintenance", "Electrical Repairs", "Testing and Inspection", "Design and Planning"],
  },
  {
    category: "Plumbing Services",
    items: ["Plumbing Installation", "Plumbing Repairs", "Drain Cleaning and Unclogging", "Water Heater Installation"],
  },
];

const automationServices = [
  "Smart Home/Office Installation",
  "Lighting Control",
  "Temperature Control",
  "Security Systems",
  "Entertainment Systems",
  "Voice Control",
  "Energy Management",
  "Customized Solutions",
];

const automationBenefits = [
  "Convenience: Control your home or office environment with a single tap or voice command.",
  "Energy Efficiency: Smart systems optimize energy usage, reducing utility bills.",
  "Enhanced Security: Monitor and secure your property remotely with integrated security solutions.",
  "Increased Property Value: Smart technology adds significant value to your property.",
  "Customized Comfort: Personalize your environment to suit your lifestyle and preferences.",
];

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Electrical installation, plumbing, facility management, and home & office automation services in Lagos and Onitsha. Request a free assessment.",
  alternates: { canonical: "/services" },
  openGraph: pageOpenGraph("/services"),
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0A1128] py-24">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-[#FFB703]/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-[#FFB703]/5 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="text-center lg:text-left">
              <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                Your Favourite <span className="text-[#FFB703]">Home Caring Partner</span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-gray-300 md:text-xl lg:mx-0">
                Comprehensive MEP solutions designed to keep your home and office running efficiently, safely, and sustainably.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#8A99B4]/20 bg-[#0B132B] p-3 shadow-2xl shadow-[#020617]/30">
              <img
                src="/services-illustration.svg"
                alt="Illustration of modern engineering and service delivery"
                className="h-auto w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6 Step Process */}
      <section className="py-20 bg-[#0B132B]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Proven 6 Step Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">A systematic approach ensuring excellence at every stage</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="bg-[#0A1128] rounded-xl p-6 border border-[#8A99B4]/20 hover:border-[#FFB703]/40 transition-colors duration-300">
                <div className="w-12 h-12 bg-[#FFB703] rounded-full flex items-center justify-center text-[#0A1128] font-bold text-lg mb-4">
                  #{step.num}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Grid */}
      <section className="py-20 bg-[#0A1128]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive solutions across all MEP disciplines</p>
          </div>
          <div className="space-y-10">
            {serviceCategories.map((cat) => (
              <div key={cat.category}>
                <h3 className="text-xl font-semibold text-[#FFB703] mb-4">{cat.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {cat.items.map((item) => (
                    <span key={item} className="px-5 py-2.5 bg-[#0B132B] border border-[#8A99B4]/20 rounded-full text-gray-300 text-sm font-medium hover:border-[#FFB703]/40 hover:text-white transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Services */}
      <section className="py-20 bg-[#0B132B]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Special Services</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Emergency Services */}
            <div className="bg-[#0A1128] rounded-2xl p-8 border border-[#8A99B4]/20">
              <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Emergency Services</h3>
              <p className="text-gray-400 mb-4">Available 24/7 with quick response times. When you need urgent electrical, plumbing, or facility assistance, our team is ready to respond immediately to minimize damage and restore safety.</p>
              <a href="tel:08140790116" className="inline-block px-6 py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition-colors">
                Call Emergency Line
              </a>
            </div>

            {/* Home & Office Automation */}
            <div className="bg-[#0A1128] rounded-2xl p-8 border border-[#8A99B4]/20">
              <div className="w-14 h-14 bg-[#FFB703]/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#FFB703]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Home & Office Automation Services</h3>
              <ul className="space-y-2 mb-6">
                {automationServices.map((service) => (
                  <li key={service} className="flex items-center gap-2 text-gray-400 text-sm">
                    <svg className="w-4 h-4 text-[#FFB703] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Automation */}
      <section className="py-20 bg-[#0A1128]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Benefits of Automation</h2>
          </div>
          <div className="space-y-4">
            {automationBenefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-4 bg-[#0B132B] rounded-xl p-5 border border-[#8A99B4]/20">
                <div className="w-8 h-8 bg-[#FFB703]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[#FFB703]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 30% Off Promotion */}
      <section className="py-16 bg-[#FFB703]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1128] mb-4">Get 30% Off Your First Service!</h2>
          <p className="text-[#0A1128]/80 text-lg mb-8">Limited time offer for new customers. Book your free assessment today and save.</p>
          <Link href="/#contact" className="inline-block px-8 py-4 bg-[#0A1128] text-white font-bold rounded-lg hover:bg-[#0B132B] transition-colors">
            Claim Your Discount
          </Link>
        </div>
      </section>
    </main>
  );
}