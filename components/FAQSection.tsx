"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What areas do you serve?",
    answer: "We serve Lagos, Onitsha, and surrounding areas across Nigeria.",
  },
  {
    question: "Do you handle both residential and commercial projects?",
    answer: "Yes, we handle all property types — residential, commercial, and industrial projects of any scale.",
  },
  {
    question: "Are your services guaranteed?",
    answer: "Yes, all our work is guaranteed in writing. We stand behind the quality of our services.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#0B132B]">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400">Got questions? We&apos;ve got answers.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#0A1128] rounded-lg border border-[#8A99B4]/20 overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between text-white font-medium hover:bg-[#0A1128]/50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-[#FFB703] transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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
  );
}