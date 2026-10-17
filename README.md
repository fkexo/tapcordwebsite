# Tapcord Engineering — Website

Next.js (App Router) + TypeScript + Tailwind CSS v4 production site for Tapcord Engineering Limited.

## Stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS v4 (CSS-first `@theme`, no `tailwind.config.ts`)
- Supabase (Postgres + Storage) for contact form submissions and uploaded floor plans
- Resend for the email notification sent on each submission
- Hosting: Vercel

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Environment variables

Copy `.env.local.example` to `.env.local` and fill in:

| Variable | Notes |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Production domain, no trailing slash |
| `SUPABASE_URL` | From your Supabase project settings |
| `SUPABASE_SERVICE_ROLE_KEY` | Service role key — server-only, never exposed to the browser |
| `SUPABASE_STORAGE_BUCKET` | Defaults to `plan-uploads` |
| `RESEND_API_KEY` | From resend.com |
| `RESEND_FROM_EMAIL` | Defaults to `onboarding@resend.dev` (works without domain verification) |
| `CONTACT_NOTIFICATION_EMAIL` | Defaults to `tapcordengineering@gmail.com` |

The rest of the site works fully without these — only the `/api/contact` route needs them, and it fails gracefully (clean `500`, no crash) if they're unset.

## Supabase setup

1. Create a project at supabase.com.
2. In the SQL editor, run:

   ```sql
   create extension if not exists pgcrypto;

   create table public.contact_submissions (
     id uuid primary key default gen_random_uuid(),
     created_at timestamptz not null default now(),
     name text not null,
     phone text not null,
     email text not null,
     project_type text not null check (project_type in ('Hotel','Home','Industrial','Developer')),
     project_location text,
     message text,
     file_path text,
     file_name text,
     status text not null default 'new'
   );

   alter table public.contact_submissions enable row level security;
   -- No anon/authenticated policies: the API route uses the service-role key,
   -- which bypasses RLS. The table is intentionally unreachable from the browser.
   ```

3. In Storage, create a **private** bucket named `plan-uploads`.
4. Copy the project URL and the **service role** key (Settings → API) into `SUPABASE_URL` / `SUPABASE_SERVICE_ROLE_KEY`.

## Resend setup

1. Create a free account at resend.com and generate an API key.
2. Drop it into `RESEND_API_KEY`. Until you verify your own sending domain in Resend, leave `RESEND_FROM_EMAIL` as `onboarding@resend.dev` — it works immediately, no verification needed.

## Deploying to Vercel

1. Push this repo to GitHub.
2. Import it in Vercel.
3. Add the environment variables above in the Vercel project settings.
4. Deploy. No other config needed — Next.js App Router works out of the box on Vercel.

## Brand reference

- Logos: `public/assets/logos/` — full logo for light backgrounds, full-navy variant for dark sections, icon-only variants for favicons/mobile nav.
- Colors: Orange `#EA7D17` / `#E96F0B`, Navy `#13233D` / `#0F1D33` / `#112240`, Slate `#CBD5E1`, Light `#F8FAFC` / `#F5F6F7`, Warm LED accent `#FFF4E0`. Defined once in `app/globals.css` under `@theme`.
- Contacts: single source of truth in `lib/site.ts` (`CONTACT` object) — phone, email, address and WhatsApp link are read from there everywhere (header, footer, forms). Never hardcode them elsewhere.

## Content note

The 3D Walkthrough chapter viewer (`components/shared/ChapterViewer.tsx`, used on the homepage and `/services/3d-walkthrough`) currently ships with on-brand placeholder frames instead of real walkthrough stills/video — swap in real renders once they exist.
