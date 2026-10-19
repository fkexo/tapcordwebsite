"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Uppy from "@uppy/core";
import { Dashboard } from "@uppy/react";
import Tus from "@uppy/tus";
import "@uppy/core/dist/style.min.css";
import "@uppy/dashboard/dist/style.min.css";
import { ensureSession } from "@/lib/supabase/ensureSession";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import {
  FILE_CATEGORIES,
  FILE_CATEGORY_LABELS,
  PORTAL_PROJECT_TYPES,
  PORTAL_PROJECT_TYPE_LABELS,
  createProjectSchema,
  MAX_PROJECT_FILE_BYTES,
  ALLOWED_PROJECT_FILE_EXTENSIONS,
} from "@/lib/validation";

type Step = "details" | "uploading" | "done";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export function UploadFlow() {
  const [step, setStep] = useState<Step>("details");
  const [projectId, setProjectId] = useState<string | null>(null);
  const [form, setForm] = useState({
    clientName: "",
    clientPhone: "",
    clientEmail: "",
    projectType: "" as (typeof PORTAL_PROJECT_TYPES)[number] | "",
    location: "",
  });
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [startError, setStartError] = useState<string | null>(null);
  const [starting, setStarting] = useState(false);
  const [uploadedCount, setUploadedCount] = useState(0);

  const uppy = useMemo(
    () =>
      new Uppy({
        restrictions: {
          maxFileSize: MAX_PROJECT_FILE_BYTES,
          allowedFileTypes: [...ALLOWED_PROJECT_FILE_EXTENSIONS],
        },
      }),
    [],
  );

  const projectIdRef = useRef<string | null>(null);
  useEffect(() => {
    projectIdRef.current = projectId;
  }, [projectId]);

  useEffect(() => {
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return;

    uppy.use(Tus, {
      endpoint: `${SUPABASE_URL}/storage/v1/upload/resumable`,
      chunkSize: 6 * 1024 * 1024,
      allowedMetaFields: ["bucketName", "objectName", "contentType", "cacheControl"],
      async onBeforeRequest(req) {
        const supabase = getSupabaseBrowserClient();
        const {
          data: { session },
        } = await supabase.auth.getSession();
        req.setHeader("authorization", `Bearer ${session?.access_token ?? ""}`);
        req.setHeader("apikey", SUPABASE_ANON_KEY);
      },
    });

    uppy.on("file-added", (file) => {
      const pid = projectIdRef.current;
      if (!pid) return;
      const sanitized = file.name?.replace(/[^a-zA-Z0-9.\-_]/g, "_") ?? "file";
      const objectName = `${pid}/${crypto.randomUUID()}-${sanitized}`;
      uppy.setFileMeta(file.id, {
        bucketName: "client-plans",
        objectName,
        contentType: file.type || "application/octet-stream",
        cacheControl: "3600",
        category: "architectural",
        version: "v1",
      });
    });

    uppy.on("upload-success", async (file) => {
      const pid = projectIdRef.current;
      if (!file || !pid) return;
      const meta = file.meta as Record<string, unknown>;
      try {
        await fetch(`/api/projects/${pid}/files`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            category: meta.category,
            version: meta.version,
            description: meta.description ?? "",
            fileName: file.name,
            fileSize: file.size,
            mimeType: file.type,
            storagePath: meta.objectName,
          }),
        });
        setUploadedCount((c) => c + 1);
      } catch (error) {
        console.error("Failed to record uploaded file:", error);
      }
    });

    return () => {
      uppy.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function updateField<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleStart(event: React.FormEvent) {
    event.preventDefault();
    setStartError(null);
    setFieldErrors({});

    const parsed = createProjectSchema.safeParse(form);
    if (!parsed.success) {
      const errors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !errors[key]) errors[key] = issue.message;
      }
      setFieldErrors(errors);
      return;
    }

    setStarting(true);
    try {
      await ensureSession();
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const result = await response.json();
      if (!response.ok || !result.ok) {
        setStartError("Could not start your project. Please try again or call/WhatsApp us instead.");
        setStarting(false);
        return;
      }
      setProjectId(result.projectId);
      setStep("uploading");
    } catch (error) {
      console.error("Upload start failed:", error);
      setStartError(
        error instanceof Error && error.message.includes("Anonymous Sign-ins")
          ? "Uploads aren't set up yet. Please call or WhatsApp us instead."
          : "Network error. Please try again or call/WhatsApp us instead.",
      );
    } finally {
      setStarting(false);
    }
  }

  async function handleFinish() {
    if (!projectId) return;
    await fetch(`/api/projects/${projectId}/notify`, { method: "POST" }).catch(() => undefined);
    setStep("done");
  }

  if (step === "done") {
    return (
      <div className="rounded-3xl border border-orange/30 bg-orange/5 p-8 text-center">
        <p className="font-heading text-xl font-bold text-navy-deep">Plans received.</p>
        <p className="mt-2 text-sm text-navy/70">
          {uploadedCount} file{uploadedCount === 1 ? "" : "s"} uploaded. We&apos;ll audit for blind spots (Wi-Fi
          dead zones, CCTV blind spots, DB placement, fire zoning) and get back to you within 48 hours.
        </p>
      </div>
    );
  }

  if (step === "uploading" && projectId) {
    return (
      <div className="space-y-6">
        <div className="rounded-2xl border border-navy/10 bg-white p-4 text-sm text-navy/70">
          Drag in as many plan files as you have. Set each file&apos;s category before or after upload - more
          context means a better audit.
        </div>
        <Dashboard
          uppy={uppy}
          height={400}
          note={`PDF, DWG, DXF, RVT, PLN, PNG or JPG, up to ${Math.round(MAX_PROJECT_FILE_BYTES / 1024 / 1024)}MB each`}
          metaFields={[
            {
              id: "category",
              name: "Category",
              render: ({ value, onChange }, h) =>
                h(
                  "select",
                  {
                    value: value ?? "architectural",
                    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => onChange(e.target.value),
                  },
                  FILE_CATEGORIES.map((c) => h("option", { value: c, key: c }, FILE_CATEGORY_LABELS[c])),
                ),
            },
            { id: "version", name: "Version", placeholder: "v1" },
            { id: "description", name: "Description (optional)" },
          ]}
        />
        <button
          type="button"
          onClick={handleFinish}
          className="w-full rounded-xl bg-navy-deep px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-navy sm:w-auto"
        >
          Done uploading - submit project
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleStart} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-navy-deep">Name *</label>
          <input
            required
            value={form.clientName}
            onChange={(e) => updateField("clientName", e.target.value)}
            className="w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm outline-none focus:border-orange focus:ring-2 focus:ring-orange/20"
          />
          {fieldErrors.clientName && <p className="mt-1 text-xs text-red-500">{fieldErrors.clientName}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-navy-deep">Phone *</label>
          <input
            required
            value={form.clientPhone}
            onChange={(e) => updateField("clientPhone", e.target.value)}
            className="w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm outline-none focus:border-orange focus:ring-2 focus:ring-orange/20"
          />
          {fieldErrors.clientPhone && <p className="mt-1 text-xs text-red-500">{fieldErrors.clientPhone}</p>}
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-semibold text-navy-deep">Email *</label>
        <input
          type="email"
          required
          value={form.clientEmail}
          onChange={(e) => updateField("clientEmail", e.target.value)}
          className="w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm outline-none focus:border-orange focus:ring-2 focus:ring-orange/20"
        />
        {fieldErrors.clientEmail && <p className="mt-1 text-xs text-red-500">{fieldErrors.clientEmail}</p>}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-navy-deep">What do you want to visualize? *</label>
          <select
            required
            value={form.projectType}
            onChange={(e) => updateField("projectType", e.target.value as (typeof PORTAL_PROJECT_TYPES)[number])}
            className="w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm outline-none focus:border-orange focus:ring-2 focus:ring-orange/20"
          >
            <option value="" disabled>
              Select one
            </option>
            {PORTAL_PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {PORTAL_PROJECT_TYPE_LABELS[type]}
              </option>
            ))}
          </select>
          {fieldErrors.projectType && <p className="mt-1 text-xs text-red-500">{fieldErrors.projectType}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-navy-deep">Location</label>
          <input
            value={form.location}
            onChange={(e) => updateField("location", e.target.value)}
            placeholder="e.g. Lekki, Lagos"
            className="w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm outline-none focus:border-orange focus:ring-2 focus:ring-orange/20"
          />
        </div>
      </div>

      {startError && <p className="text-sm font-medium text-red-500">{startError}</p>}

      <button
        type="submit"
        disabled={starting}
        className="w-full rounded-xl bg-orange px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-orange-deep disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto"
      >
        {starting ? "Starting..." : "Continue to Upload"}
      </button>
    </form>
  );
}
