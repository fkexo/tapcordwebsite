import Link from "next/link";
import type { Metadata } from "next";
import { pageOpenGraph } from "@/lib/site";

const articles = [
  {
    title: "Are you looking to make your home automation dreams a reality",
    excerpt: "Kicking Off Your Smart Home Journey: A Comprehensive Guide. Smart home technology has transformed the way we interact with our living spaces. From voice-controlled lighting to automated security systems, the possibilities are endless. In this guide, we explore the essential steps to get started with home automation.",
    date: "2024-01-15",
    category: "Automation",
  },
  {
    title: "How Smart Home Automation Can Improve Your Quality of Life",
    excerpt: "Imagine coming home to a warm and welcoming living room, with your favorite music playing softly in the background and the lights set to your preferred ambiance. Smart home automation makes this possible, enhancing comfort, convenience, and security in ways you never thought possible.",
    date: "2024-01-20",
    category: "Automation",
  },
  {
    title: "The Role of Technology in Modern Facility Management",
    excerpt: "Technology has revolutionized the way facilities are managed. From IoT sensors that monitor equipment performance to AI-powered predictive maintenance systems, modern facility management leverages cutting-edge technology to improve efficiency, reduce costs, and enhance occupant comfort.",
    date: "2024-02-01",
    category: "Facility Management",
  },
  {
    title: "5 Common Plumbing Mistakes Homeowners Make (And How to Avoid Them)",
    excerpt: "As a homeowner, it's easy to overlook small plumbing issues until they become major problems. From ignoring leaky faucets to using chemical drain cleaners, some common mistakes can lead to costly repairs. Learn how to avoid these pitfalls and keep your plumbing system in top shape.",
    date: "2024-02-10",
    category: "Plumbing",
  },
  {
    title: "Smart Home Electrical Upgrades: What You Need to Know",
    excerpt: "Smart home technology has revolutionized the way we live, work, and play. But before you can enjoy the benefits of a connected home, you need to ensure your electrical system is up to the task. Here's what you need to know about upgrading your electrical infrastructure for smart home integration.",
    date: "2024-02-15",
    category: "Electrical",
  },
  {
    title: "The Benefits of Upgrading to Energy-Efficient Lighting",
    excerpt: "Upgrading to energy-efficient lighting is a simple yet effective way to reduce your energy consumption and lower your electricity bills. LED lighting, smart controls, and proper design can transform your space while saving money. Discover the benefits and options available for your home or office.",
    date: "2024-02-20",
    category: "Electrical",
  },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const metadata: Metadata = {
  title: "Latest News & Insights",
  description:
    "Tips and insights on electrical upgrades, plumbing, smart home automation, and facility management from Tapcord Engineering.",
  alternates: { canonical: "/latest-news" },
  openGraph: pageOpenGraph("/latest-news"),
};

export default function LatestNewsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 bg-[#0A1128] overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FFB703]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FFB703]/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Latest <span className="text-[#FFB703]">News</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Stay updated with the latest insights, tips, and trends in electrical, plumbing, facility management, and smart automation.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-[#0B132B]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article
                key={index}
                className="group bg-[#0A1128] rounded-xl overflow-hidden border border-[#8A99B4]/20 hover:border-[#FFB703]/30 transition-all duration-300 flex flex-col"
              >
                {/* Placeholder image area */}
                <div className="aspect-video bg-gradient-to-br from-[#0B132B] to-[#0A1128] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#FFB703]/5 group-hover:bg-[#FFB703]/10 transition-colors duration-300" />
                  <svg className="w-16 h-16 text-[#FFB703]/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                  {/* Category badge */}
                  <span className="absolute top-3 left-3 px-3 py-1 bg-[#FFB703] text-[#0A1128] text-xs font-bold rounded-full">
                    {article.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <time className="text-gray-500 text-xs mb-3">{formatDate(article.date)}</time>
                  <h2 className="text-white font-semibold text-lg mb-3 group-hover:text-[#FFB703] transition-colors leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                    {article.excerpt}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-[#FFB703] font-medium text-sm hover:underline mt-auto"
                  >
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0A1128]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Need Professional MEP Services?</h2>
          <p className="text-gray-400 mb-8">Contact Tapcord Engineering today for a free assessment and let us help you with your next project.</p>
          <Link
            href="/#contact"
            className="inline-block px-8 py-4 bg-[#FFB703] text-[#0A1128] font-bold rounded-lg hover:bg-[#F4A261] transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </main>
  );
}