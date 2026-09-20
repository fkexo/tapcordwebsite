# Tapcordsite — Project Documentation

## Summary (what's been done)

- Project type: Next.js app (Next v16) using React 19. See `package.json` for details.
- Build scripts: `dev`, `build`, `start` are present in `package.json`.
- Dependencies: `next`, `react`, `react-dom`; dev dependencies include Tailwind and tooling.
- Netlify support: `netlify.toml` was added to enable Netlify deployments and configure the Netlify Next.js plugin.
- `next.config.ts` exists with a minimal default export.
- Repository: local git initialized; earlier attempt to push to remote failed (see terminal logs).

## Netlify deployment (current setup)

1. Netlify config file: `netlify.toml` contains only the build command (`npm run build`) and `NODE_VERSION = "20"`. Netlify auto-detects Next.js, so no `publish` directory or `@netlify/plugin-nextjs` entry is needed (changed 2026-09-20).

2. Required local steps before first deploy:

```bash
npm install
npm run build
```

3. Netlify site setup (UI):
- New site → Import from Git → connect your Git provider
- Select repository `tapcordsite` (or `tapcord-website` remote if that's the repo name)
- Build command: `npm run build`
- Deploy the site and confirm the generated URL

## Notes & troubleshooting

- If `npm run build` fails, inspect the local build output and fix errors before deploying.
- If Netlify logs show plugin or adapter errors, ensure `@netlify/plugin-nextjs` is installed in `devDependencies` and the `netlify.toml` file matches this repo.
- Git push must succeed before Netlify can build from your remote repository. The previous `git push` returned exit code 1 — verify remote URL and authentication.

## Maintenance: keep this document up to date

Whoever changes the project must update this file when any of the following occur:
- Dependency additions/removals (update `dependencies` or `devDependencies`)
- Changes to build scripts (`package.json` `scripts`)
- Add/remove deployment providers or change `netlify.toml`
- Modify `next.config.ts` in a way that affects builds or runtime
- Change publish directory or build commands

Checklist for updates:
- Edit `PROJECT_DOC.md` with the change summary and date
- Commit the change with a clear message (e.g., "docs: update deployment notes for Netlify")
- Push to the remote repository

## Next recommended steps

- Run a local build and fix any build-time errors: `npm run build`.
- Push the repo to GitHub (or your provider) and connect the repo in Netlify.
- Optional: add a short `DEPLOY.md` or add a Netlify deploy badge to the `README.md` after the first successful deploy.

---

## Contact form

`components/ContactSection.tsx` posts to `NEXT_PUBLIC_FORM_ENDPOINT` (e.g. a Formspree URL) when set; otherwise it opens WhatsApp with the enquiry prefilled (Onitsha number for Onitsha, Lagos number otherwise). Set the variable in Netlify site settings.

## SEO

- `lib/site.ts` holds the site name, description, OG image and `SITE_URL`. Set `NEXT_PUBLIC_SITE_URL` in Netlify to the production domain (no trailing slash); it drives canonical URLs, `sitemap.xml`, `robots.txt`, Open Graph URLs and JSON-LD.
- Root layout provides `metadataBase`, a `%s | Tapcord Engineering` title template, Open Graph/Twitter tags and `LocalBusiness` JSON-LD. Each page sets its own title, description and canonical.
- Pages that set `openGraph` must use `pageOpenGraph(path)` from `lib/site.ts`, because page-level `openGraph` replaces the layout's object.
- The About page content lives in `components/AboutPageContent.tsx` (client component) so `app/about/page.tsx` can export metadata.

---

_Last updated: 2026-09-20_
