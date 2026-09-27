# Crawlability Audit Report

Date: 2026-09-27
Scope: Homepage initial HTML, crawler-visible content, desktop/mobile render behavior, deployment static hosting behavior.

## Findings (Before Fixes)

- Initial HTML only contained loader UI and an empty root container.
- Critical homepage copy (hero heading/description) was rendered by client-side React only.
- This created indexing risk for crawlers that do not execute JavaScript reliably or quickly.
- Production assets were emitted as absolute URLs (`/assets/...`), which can break on subpath hosting (for example GitHub Pages project paths).

## Changes Implemented

1. Added SEO-critical content to initial HTML loader in `index.html`:
   - Hero-equivalent heading text
   - Supporting descriptive paragraph
2. Added `noscript` content block in `index.html` so no-JS contexts still receive meaningful homepage copy.
3. Added `<meta name="description">` and `<meta name="robots" content="index, follow">` in `index.html`.
4. Set Vite `base` to `./` in `vite.config.ts` to emit relative asset URLs for safer static deployment under subpaths.
5. Hardened loader removal logic in `src/main.tsx`:
   - Handles already-loaded documents (`document.readyState === "complete"`)
   - Uses one-time listener and timeout fallback removal

## Verification

- Production build: pass (`npm run build`).
- Raw HTML inspection via `curl` with desktop, mobile, and Googlebot user agents:
  - Critical homepage text is present in initial HTML.
  - `noscript` fallback is present.
- Browser render checks:
  - Desktop: main homepage content renders; loader removed after load.
  - Mobile: main homepage content renders; loader removed after load completion.

## Remaining Risk and Recommended Next Step

Current state is materially better for crawlability, but this is still a client-rendered SPA for full page content.

Recommended strategic improvement:
- Add pre-rendering or SSR/SSG for homepage route(s) so major sections are directly available in server/static HTML, not only as JS-rendered DOM.

Practical options:
- Integrate a pre-render step for the homepage at build time.
- Migrate to an SSR/SSG-capable React framework or Vite SSR pipeline.

## Impact Summary

- Crawlability: improved (critical homepage copy now in initial HTML).
- Deployment robustness: improved for static subpath hosting.
- UX: preserved; no functional regressions observed in desktop/mobile checks.
