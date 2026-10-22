# Tapcord Engineering — Website

Next.js (App Router) + TypeScript + Tailwind CSS v4 production site for Tapcord Engineering Limited.

## Stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS v4 (CSS-first `@theme`, no `tailwind.config.ts`)
- Supabase (Postgres + Auth + Storage) — contact form, client project uploads, and the client dashboard
- Uppy (`@uppy/tus`) for chunked/resumable multi-file uploads straight from the browser to Supabase Storage
- Resend for notification emails
- Hosting: Vercel

## Two independent backend paths

1. **Quick contact form** (`app/api/contact/route.ts`, homepage Final CTA + `/contact`) — single optional file attachment, no login, writes to `contact_submissions`. Unchanged, simplest path, works today.
2. **Client portal** (`/upload`, `/login`, `/dashboard`) — multi-file, multi-category upload that creates a real `projects` record, which the same client logs into `/dashboard` to track. `/upload` and `/dashboard` both require a real Supabase Auth account (email/password or magic link) - `proxy.ts` redirects signed-out visitors to `/login?next=/upload` (or `/dashboard`) first. RLS scopes every row/file to `client_id = auth.uid()`, so once logged in a client only ever sees their own projects.

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
| `SUPABASE_CLIENT_PLANS_BUCKET` | Defaults to `client-plans` |
| `NEXT_PUBLIC_SUPABASE_URL` | Same project URL as `SUPABASE_URL`, exposed to the browser — needed for Auth/`/upload`/`/dashboard` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | The **anon/public** key (Settings → API) — safe to expose, RLS is what actually protects data |

The marketing site and the contact form work fully without `NEXT_PUBLIC_SUPABASE_*` — only `/login`, `/upload` and `/dashboard` need them, and `middleware.ts` lets requests through rather than breaking the site if they're unset.

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
4. Copy the project URL and the **service role** key (Settings → API) into `SUPABASE_URL` / `SUPABASE_SERVICE_ROLE_KEY`. Also copy the **anon/public** key into `NEXT_PUBLIC_SUPABASE_ANON_KEY`, and the project URL again into `NEXT_PUBLIC_SUPABASE_URL`.

## Client portal setup (Supabase Auth + projects/files/updates)

Only needed for `/upload`, `/login` and `/dashboard` — the rest of the site works without this.

1. **Enable Email auth** (usually on by default): Supabase dashboard → Authentication → Providers → Email. Both "Confirm email" (for password sign-up) and magic links work out of the box once this is on. `/upload` and `/dashboard` both require a real account - there's no anonymous/guest upload.
2. In the SQL editor, run this. Every statement is idempotent (`if not exists`, `or replace`, `drop ... if exists` before each policy) - safe to run once or to re-run anytime, including after a partial/failed run (Supabase's SQL editor runs a multi-statement paste as one transaction, so any single error rolls back everything before it too):

   ```sql
   create table if not exists public.profiles (
     id uuid primary key references auth.users(id) on delete cascade,
     role text not null default 'client' check (role in ('client','staff','admin')),
     full_name text,
     phone text,
     email text,
     created_at timestamptz not null default now()
   );

   create table if not exists public.projects (
     id uuid primary key default gen_random_uuid(),
     client_id uuid not null references public.profiles(id),
     title text not null,
     project_type text not null check (project_type in (
       'electrical_3d','mechanical_3d','plumbing_3d','full_mep_3d',
       'cctv_security','fire_system','smart_home','full_hotel_package'
     )),
     location text default 'Lekki, Lagos',
     status text not null default 'received' check (status in
       ('received','reviewing','auditing','designing','rendering','delivered')),
     client_name text not null,
     client_email text not null,
     client_phone text not null,
     notes text,
     created_at timestamptz not null default now(),
     updated_at timestamptz not null default now()
   );

   create table if not exists public.project_files (
     id uuid primary key default gen_random_uuid(),
     project_id uuid not null references public.projects(id) on delete cascade,
     uploaded_by uuid references public.profiles(id),
     category text not null check (category in (
       'architectural','structural','electrical','mechanical','plumbing',
       'fire_protection','cctv_security','smart_home','finishes','other'
     )),
     version text not null default 'v1',
     description text,
     storage_path text not null,
     file_name text not null,
     file_size bigint not null,
     mime_type text,
     created_at timestamptz not null default now()
   );

   create table if not exists public.project_updates (
     id uuid primary key default gen_random_uuid(),
     project_id uuid not null references public.projects(id) on delete cascade,
     title text not null,
     body text,
     attachment_path text,
     created_at timestamptz not null default now()
   );

   alter table public.profiles enable row level security;
   alter table public.projects enable row level security;
   alter table public.project_files enable row level security;
   alter table public.project_updates enable row level security;

   create or replace function public.is_staff() returns boolean as $$
     select exists (select 1 from public.profiles where id = auth.uid() and role in ('staff','admin'))
   $$ language sql stable security definer;

   drop policy if exists "own profile" on public.profiles;
   create policy "own profile" on public.profiles for select using (id = auth.uid() or public.is_staff());

   drop policy if exists "update own profile" on public.profiles;
   create policy "update own profile" on public.profiles for update using (id = auth.uid());

   drop policy if exists "create own profile" on public.profiles;
   create policy "create own profile" on public.profiles for insert with check (id = auth.uid());

   drop policy if exists "read own projects" on public.projects;
   create policy "read own projects" on public.projects for select
     using (client_id = auth.uid() or public.is_staff());

   drop policy if exists "create own projects" on public.projects;
   create policy "create own projects" on public.projects for insert
     with check (client_id = auth.uid());

   drop policy if exists "staff manage projects" on public.projects;
   create policy "staff manage projects" on public.projects for update using (public.is_staff());

   drop policy if exists "read own project files" on public.project_files;
   create policy "read own project files" on public.project_files for select
     using (exists (select 1 from public.projects p where p.id = project_id and (p.client_id = auth.uid() or public.is_staff())));

   drop policy if exists "insert own project files" on public.project_files;
   create policy "insert own project files" on public.project_files for insert
     with check (exists (select 1 from public.projects p where p.id = project_id and p.client_id = auth.uid()) or public.is_staff());

   drop policy if exists "read own project updates" on public.project_updates;
   create policy "read own project updates" on public.project_updates for select
     using (exists (select 1 from public.projects p where p.id = project_id and (p.client_id = auth.uid() or public.is_staff())));

   drop policy if exists "staff write updates" on public.project_updates;
   create policy "staff write updates" on public.project_updates for all using (public.is_staff());

   -- auto-create a profile row when someone signs up, pulling name/phone from
   -- the signup form's metadata (passed via supabase.auth.signUp/signInWithOtp's
   -- options.data - see components/auth/LoginForm.tsx)
   create or replace function public.handle_new_user() returns trigger as $$
   begin
     insert into public.profiles (id, email, full_name, phone)
     values (
       new.id,
       new.email,
       new.raw_user_meta_data ->> 'full_name',
       new.raw_user_meta_data ->> 'phone'
     )
     on conflict (id) do nothing;
     return new;
   end;
   $$ language plpgsql security definer;

   drop trigger if exists on_auth_user_created on auth.users;
   create trigger on_auth_user_created
     after insert on auth.users
     for each row execute function public.handle_new_user();
   ```

3. In Storage, create a **private** bucket named `client-plans`, then add storage policies (Storage → `client-plans` → Policies) mirroring the table policies:

   ```sql
   create policy "insert own project files" on storage.objects for insert
     with check (
       bucket_id = 'client-plans'
       and exists (
         select 1 from public.projects p
         where p.id::text = (storage.foldername(name))[1] and p.client_id = auth.uid()
       )
     );

   create policy "read own project files" on storage.objects for select
     using (
       bucket_id = 'client-plans'
       and exists (
         select 1 from public.projects p
         where p.id::text = (storage.foldername(name))[1] and (p.client_id = auth.uid() or public.is_staff())
       )
     );
   ```

4. No `/admin` UI yet — staff post rows to `project_updates` and change `projects.status` directly via the Supabase table editor.

**Not yet built, for later:** `/admin` staff UI, the 3D Viewer/Invoices/Messages dashboard tabs (shown as "coming soon"), phone OTP (needs a paid SMS provider connected in Supabase Auth settings), WhatsApp Business API automation (needs a Meta/Twilio/360dialog account — the existing footer `wa.me` link still works today), and payments (the user's pick, Paddle, doesn't support NGN/Nigerian payment rails — re-confirm the gateway before building this).

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
