"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

    if (!endpoint) {
      // No form backend configured: hand the enquiry to WhatsApp (Onitsha number for Onitsha, Lagos otherwise).
      const number = formData.location === "Onitsha" ? "2347025455698" : "2348140790116";
      const text = encodeURIComponent(
        `Hello Tapcord, my name is ${formData.name} (${formData.phone}). ` +
          `I need ${formData.service} services in ${formData.location}. ${formData.message}`
      );
      window.open(`https://wa.me/${number}?text=${text}`, "_blank", "noopener,noreferrer");
      setStatus("sent");
      setFormData({ name: "", phone: "", location: "", service: "", message: "" });
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("sent");
      setFormData({ name: "", phone: "", location: "", service: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#0A1128]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Making Your Vision <span className="text-[#FFB703]">Become a Reality</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Let us empower your space where function meets excellence. Get in touch today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Get In Touch</h3>
            
            {/* Lagos */}
            <div className="mb-6">
              <h4 className="text-[#FFB703] font-medium mb-2">Lagos</h4>
              <a
                href="https://wa.me/2348140790116?text=Hello%20Tapcord%2C%20I%20need%20a%20free%20assessment"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-[#FFB703] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                08140790116 (WhatsApp)
              </a>
            </div>

            {/* Onitsha */}
            <div className="mb-6">
              <h4 className="text-[#FFB703] font-medium mb-2">Onitsha</h4>
              <a
                href="https://wa.me/2347025455698?text=Hello%20Tapcord%2C%20I%20need%20a%20free%20assessment"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-[#FFB703] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                07025455698 (WhatsApp)
              </a>
            </div>

            <div className="mt-8 p-4 bg-[#0B132B] rounded-lg border border-[#8A99B4]/20">
              <p className="text-gray-400 text-sm">
                <strong className="text-white">Service Area:</strong> Serving Lagos & Onitsha, Nigeria
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0B132B] border border-[#8A99B4]/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FFB703] transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0B132B] border border-[#8A99B4]/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FFB703] transition-colors"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-1">
                  Location
                </label>
                <select
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0B132B] border border-[#8A99B4]/20 rounded-lg text-white focus:outline-none focus:border-[#FFB703] transition-colors"
                >
                  <option value="">Select location</option>
                  <option value="Lagos">Lagos</option>
                  <option value="Onitsha">Onitsha</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">
                  Service Type
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0B132B] border border-[#8A99B4]/20 rounded-lg text-white focus:outline-none focus:border-[#FFB703] transition-colors"
                >
                  <option value="">Select service</option>
                  <option value="Electrical">Electrical Services</option>
                  <option value="Plumbing">Plumbing Services</option>
                  <option value="Facility">Facility Management</option>
                  <option value="Automation">Home & Office Automation</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-[#0B132B] border border-[#8A99B4]/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FFB703] transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full px-6 py-4 bg-[#FFB703] text-[#0A1128] font-bold rounded-lg disabled:opacity-60 transition-all duration-300 hover:bg-[#F4A261] hover:shadow-lg hover:shadow-[#FFB703]/20"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              <p role="status" aria-live="polite" className={`text-sm ${status === "error" ? "text-red-400" : "text-green-400"}`}>
                {status === "sent" && "Thank you! We will contact you shortly."}
                {status === "error" && "Something went wrong. Please try again or message us on WhatsApp."}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}