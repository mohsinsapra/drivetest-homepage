# Drive Test — drivetest.se

Next.js 15+ (App Router, TypeScript, CSS Modules) rebuild of the Drive Test marketing site.
Statically exported (`output: 'export'`) and hosted on **GitHub Pages** at the custom domain
`drivetest.se`.

## Stack

- Next.js App Router + TypeScript, React 19
- CSS Modules only — no Tailwind
- Static export (`next.config.ts`: `output: "export"`, `trailingSlash: true`, `images.unoptimized: true`)
- Fonts: Syne (display) + Hanken Grotesk (body) via `next/font/google`
- Two languages: **EN at the root** (`/`, `/blog/`, …) and **SV under `/sv/`** (`/sv/`, `/sv/blog/`, …)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export -> ./out
npm run verify-content   # checks every legacy translation string was ported
```

## Structure

```
src/
  app/
    layout.tsx              root layout: fonts, theme init script, GTM, tokens.css
    (en)/                    EN routes at the root (route group, no URL segment)
      page.tsx               /
      blog/page.tsx           /blog/
      ob-taxi-sweden/page.tsx /ob-taxi-sweden/
      medborgarskapsprov/page.tsx
      taxi-licence-guide/page.tsx
      support/page.tsx
      privacy-policy/page.tsx
      delete-account/page.tsx
    sv/                      SV routes, all under /sv/
      layout.tsx              sets <html lang="sv"> at runtime
      page.tsx, blog/, ob-taxi-sweden/, medborgarskapsprov/, taxi-licence-guide/,
      support/, privacy-policy/, delete-account/
    not-found.tsx
    sitemap.ts               all routes, both languages, with hreflang alternates
  screens/                   shared screen components, take a `lang` prop
    HomeScreen.tsx, BlogScreen.tsx, ObTaxiSwedenScreen.tsx,
    MedborgarskapsprovScreen.tsx, GuideScreen.tsx, SupportScreen.tsx,
    PrivacyScreen.tsx, DeleteAccountScreen.tsx
  content/                   typed content modules, one per page area, `{ en, sv }`
    site.ts, home.ts, support.ts, guide.ts, privacy.ts, deleteAccount.ts,
    blog.ts, obTaxiSweden.ts, medborgarskapsprov.ts
  components/
    layout/                  SiteHeader, SiteFooter, DownloadDock, StoreButtons, ThemeToggle
    ui/                      Container, Section/SectionHead, Prose
  lib/
    i18n.ts                  Lang type, localePath(), alternatePath(), otherLang()
    metadata.ts               buildMetadata() — canonical + hreflang + OG per page
    theme.ts / useTheme.ts    dark-mode: data-theme on <html>, persisted to
                               localStorage key `dt_theme` (kept EXACTLY this key —
                               the embedded OB calculator reads it too)
  styles/
    tokens.css                brand tokens (light/dark), ported from legacy assets/home.css
    globals.css                reset, .container, transitions, prefers-reduced-motion
scripts/
  verify-content.mjs          compares src/content/*.ts against the legacy translation
                               strings (a copy is kept at scripts/legacy-reference/translations.json)
public/
  assets/, images/            copied verbatim from the legacy site
  ob-calculator/               copied verbatim from the OB calculator build (see below)
  CNAME, .nojekyll, robots.txt, favicon.png
  *.html                       redirect stubs for old legacy URLs (meta-refresh + canonical)
```

## Content

All page copy lives in `src/content/*.ts` as typed `{ en, sv }` objects, ported from the
legacy site's `locales/translations.json` and hand-written HTML pages. Large HTML blobs
(description, guide, privacy policy, delete-account instructions) are kept as
`contentHtml` strings and rendered through the `Prose` component. The two long-form
articles (`ob-taxi-sweden`, `medborgarskapsprov`) are ported as **structured** section
data (heading + HTML paragraph + optional table/list/callout) rather than one HTML blob,
so tables, lists and FAQs render as real markup.

Run `npm run verify-content` after any content change — it flags any legacy translation
string that no longer appears anywhere in `src/content`.

## Adding a blog post

1. Add an entry to the `posts` array in `src/content/blog.ts` (both `en` and `sv`), with a
   `title`, `tag`, `excerpt`, `href` and a cover image under `/assets/blog/`.
2. If it's a full article (like the OB or citizenship guides), add a new content module
   under `src/content/` following the `obTaxiSweden.ts` / `medborgarskapsprov.ts` pattern
   (sections with heading/html/table/list), plus a screen component and EN/SV route pages.
3. Add the new path to `PATHS` in `src/app/sitemap.ts`.

## OB Calculator

`public/ob-calculator/` is a prebuilt Vite app (base path `/ob-calculator/`) — it is
**not** built by this repo. It's produced by `../ob-calculator-src` and published here by
running `../ob-calculator-src/deploy.sh`, which builds the Vite app and rsyncs the result
into `public/ob-calculator/` (excluding `worker.js`, which is Cloudflare infra and lives
only in this repo).

## Deploy (GitHub Pages)

`.github/workflows/deploy.yml` builds on every push to `main` (`npm ci && npm run build`)
and publishes the `out/` directory via `actions/upload-pages-artifact` +
`actions/deploy-pages`.

In the repo settings, set **Pages → Build and deployment → Source: GitHub Actions**.
The custom domain is configured via `public/CNAME` (`drivetest.se`).
