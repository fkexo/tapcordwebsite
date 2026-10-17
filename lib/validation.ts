import { z } from "zod";

export const PROJECT_TYPES = ["Hotel", "Home", "Industrial", "Developer"] as const;

export const MAX_FILE_BYTES = 15 * 1024 * 1024;
export const ALLOWED_FILE_EXTENSIONS = [".pdf", ".dwg", ".png", ".jpg", ".jpeg"] as const;

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
