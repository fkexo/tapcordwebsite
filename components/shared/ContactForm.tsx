"use client";

import { useRef, useState, type FormEvent } from "react";
import { CONTACT } from "@/lib/site";
import { PROJECT_TYPES } from "@/lib/validation";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm({ dark = false }: { dark?: boolean }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = formRef.current;
    if (!form) return;

    setStatus("submitting");
    setFieldErrors({});
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: new FormData(form),
      });
      const result = await response.json();

      if (!response.ok || !result.ok) {
        if (result?.fieldErrors) setFieldErrors(result.fieldErrors);
        setErrorMessage(
          result?.error === "validation_failed"
            ? "Please check the highlighted fields."
            : "Something went wrong submitting the form. Please call or WhatsApp us instead.",
        );
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setErrorMessage("Network error. Please call or WhatsApp us instead.");
      setStatus("error");
    }
  }

  const inputClass = `w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors focus:border-orange focus:ring-2 focus:ring-orange/20 ${
    dark
      ? "border-white/15 bg-white/5 text-white placeholder:text-slate/50"
      : "border-navy/15 bg-white text-navy-deep placeholder:text-navy/40"
  }`;
  const labelClass = `mb-1.5 block text-sm font-semibold ${dark ? "text-white" : "text-navy-deep"}`;

  if (status === "success") {
    return (
      <div
        className={`rounded-2xl border p-8 text-center ${
          dark ? "border-orange/30 bg-white/5" : "border-orange/30 bg-orange/5"
        }`}
      >
        <p className={`font-heading text-xl font-bold ${dark ? "text-white" : "text-navy-deep"}`}>
          Got it - thank you.
        </p>
        <p className={`mt-2 text-sm ${dark ? "text-slate" : "text-navy/70"}`}>
          We&apos;ll review your floor plan and get back to you within 48 hours. For anything urgent, call{" "}
          <a
            href={`tel:${CONTACT.phoneTel}`}
            className={`font-semibold underline underline-offset-2 ${dark ? "text-white" : "text-orange-ink"}`}
          >
            {CONTACT.phoneDisplay}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot - hidden from sighted/keyboard users, catches bots that autofill every field */}
      <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name *
          </label>
          <input id="name" name="name" required className={inputClass} placeholder="Your full name" />
          {fieldErrors.name && <p className="mt-1 text-xs text-red-400">{fieldErrors.name}</p>}
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone *
          </label>
          <input id="phone" name="phone" required className={inputClass} placeholder="080..." />
          {fieldErrors.phone && <p className="mt-1 text-xs text-red-400">{fieldErrors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email *
        </label>
        <input id="email" type="email" name="email" required className={inputClass} placeholder="you@example.com" />
        {fieldErrors.email && <p className="mt-1 text-xs text-red-400">{fieldErrors.email}</p>}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="projectType" className={labelClass}>
            Project Type *
          </label>
          <select id="projectType" name="projectType" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select one
            </option>
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {fieldErrors.projectType && <p className="mt-1 text-xs text-red-400">{fieldErrors.projectType}</p>}
        </div>
        <div>
          <label htmlFor="projectLocation" className={labelClass}>
            Project Location
          </label>
          <input
            id="projectLocation"
            name="projectLocation"
            className={inputClass}
            placeholder="e.g. Lekki, Lagos"
          />
        </div>
      </div>

      <div>
        <label htmlFor="file" className={labelClass}>
          Upload Plan
        </label>
        <input
          id="file"
          name="file"
          type="file"
          accept=".pdf,.dwg,.png,.jpg,.jpeg"
          className={`w-full rounded-xl border px-4 py-2.5 text-sm outline-none file:mr-3 file:rounded-lg file:border-0 file:bg-orange file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-white ${
            dark ? "border-white/15 bg-white/5 text-slate" : "border-navy/15 bg-white text-navy/70"
          }`}
        />
        <p className={`mt-1 text-xs ${dark ? "text-slate/60" : "text-navy/65"}`}>PDF, DWG, PNG or JPG, up to 15MB.</p>
        {fieldErrors.file && <p className="mt-1 text-xs text-red-400">{fieldErrors.file}</p>}
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={inputClass}
          placeholder="Tell us about the project..."
        />
      </div>

      {errorMessage && <p className="text-sm font-medium text-red-400">{errorMessage}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-xl bg-navy-deep px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-navy disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto"
      >
        {status === "submitting" ? "Sending..." : "Get Free Audit →"}
      </button>
    </form>
  );
}
