import { z } from "zod";

// Used by the simple contact form (contact_submissions table) only.
export const PROJECT_TYPES = ["Hotel", "Home", "Industrial", "Developer"] as const;

export const MAX_FILE_BYTES = 15 * 1024 * 1024;
export const ALLOWED_FILE_EXTENSIONS = [".pdf", ".dwg", ".png", ".jpg", ".jpeg"] as const;

// Used by the project upload portal (projects table) - a different, future-proofed
// enum per the client-portal brief, independent of the contact form's project types.
export const PORTAL_PROJECT_TYPES = [
  "electrical_3d",
  "mechanical_3d",
  "plumbing_3d",
  "full_mep_3d",
  "cctv_security",
  "fire_system",
  "smart_home",
  "full_hotel_package",
] as const;

export const PORTAL_PROJECT_TYPE_LABELS: Record<(typeof PORTAL_PROJECT_TYPES)[number], string> = {
  electrical_3d: "Electrical 3D",
  mechanical_3d: "Mechanical (HVAC) 3D",
  plumbing_3d: "Plumbing 3D",
  full_mep_3d: "Full MEP 3D",
  cctv_security: "CCTV & Security",
  fire_system: "Fire System",
  smart_home: "Smart Home",
  full_hotel_package: "Full Hotel Package",
};

export const FILE_CATEGORIES = [
  "architectural",
  "structural",
  "electrical",
  "mechanical",
  "plumbing",
  "fire_protection",
  "cctv_security",
  "smart_home",
  "finishes",
  "other",
] as const;

export const FILE_CATEGORY_LABELS: Record<(typeof FILE_CATEGORIES)[number], string> = {
  architectural: "Architectural",
  structural: "Structural",
  electrical: "Electrical",
  mechanical: "Mechanical",
  plumbing: "Plumbing",
  fire_protection: "Fire Protection",
  cctv_security: "CCTV & Security",
  smart_home: "Smart Home",
  finishes: "Finishes",
  other: "Other",
};

// Project plan uploads allow larger, CAD-specific formats than the contact form's
// single quick-attachment field, uploaded via Uppy's chunked/resumable transport.
export const MAX_PROJECT_FILE_BYTES = 200 * 1024 * 1024;
export const ALLOWED_PROJECT_FILE_EXTENSIONS = [
  ".pdf",
  ".dwg",
  ".dxf",
  ".rvt",
  ".pln",
  ".png",
  ".jpg",
  ".jpeg",
] as const;

export const createProjectSchema = z.object({
  clientName: z.string().trim().min(1, "Name is required").max(200),
  clientPhone: z.string().trim().min(5, "Phone number is required").max(40),
  clientEmail: z.string().trim().email("Enter a valid email address").max(200),
  projectType: z.enum(PORTAL_PROJECT_TYPES, { message: "Select a project type" }),
  location: z.string().trim().max(200).optional().or(z.literal("")),
  title: z.string().trim().max(200).optional().or(z.literal("")),
});

export type CreateProjectInput = z.infer<typeof createProjectSchema>;

export const projectFileMetaSchema = z.object({
  category: z.enum(FILE_CATEGORIES, { message: "Select a category" }),
  version: z.string().trim().min(1).max(20).default("v1"),
  description: z.string().trim().max(1000).optional().or(z.literal("")),
  fileName: z.string().trim().min(1).max(300),
  fileSize: z.number().int().positive(),
  mimeType: z.string().trim().max(200).optional(),
  storagePath: z.string().trim().min(1).max(500),
});

export type ProjectFileMetaInput = z.infer<typeof projectFileMetaSchema>;

export const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(200),
  phone: z.string().trim().min(5, "Phone number is required").max(40),
  email: z.string().trim().email("Enter a valid email address").max(200),
  projectType: z.enum(PROJECT_TYPES, { message: "Select a project type" }),
  projectLocation: z.string().trim().max(200).optional().or(z.literal("")),
  message: z.string().trim().max(4000).optional().or(z.literal("")),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

export function getFileExtension(filename: string) {
  const match = /\.[^.]+$/.exec(filename);
  return match ? match[0].toLowerCase() : "";
}

export function isAllowedFile(filename: string, size: number) {
  if (size > MAX_FILE_BYTES) return false;
  return ALLOWED_FILE_EXTENSIONS.includes(getFileExtension(filename) as (typeof ALLOWED_FILE_EXTENSIONS)[number]);
}

export function isAllowedProjectFile(filename: string, size: number) {
  if (size > MAX_PROJECT_FILE_BYTES) return false;
  return ALLOWED_PROJECT_FILE_EXTENSIONS.includes(
    getFileExtension(filename) as (typeof ALLOWED_PROJECT_FILE_EXTENSIONS)[number],
  );
}
