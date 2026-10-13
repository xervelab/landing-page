# XerveLab Migration Audit

Date: 2026-10-13
Scope: Repository audit only (no code changes to app behavior)
Target website: https://xervelab.online/

## 1) Current Architecture

### Frontend framework
- React 18 app bootstrapped with Vite 6.
- TypeScript + TSX component structure under `src/app/components`.
- Tailwind CSS v4 (`@tailwindcss/vite`) plus custom CSS animation utilities.
- UI primitives primarily from Radix/shadcn-style components in `src/app/components/ui`.

### Backend framework
- None in this repository.
- No server runtime, API server, or SSR runtime found.

### Database
- None in this repository.
- No database config, ORM schema, migrations, or DB client usage.

### API architecture
- No internal API layer found.
- No REST/GraphQL endpoints or fetch/axios data flow for app state.

### Authentication
- None implemented.
- Navbar has Login/Sign Up buttons but no auth flow backing them.

### Hosting/deployment
- Static deployment flow via Vite build + `gh-pages` script:
  - `predeploy`: `npm run build`
  - `deploy`: `gh-pages -d dist`
- Production domain appears custom (`xervelab.online`).

### Environment configuration
- No `.env` files or `.env.example` found.
- No runtime environment contract documented.

### Routing model
- Custom hash-based route parsing in `src/app/App.tsx`.
- Supports:
  - Home: default route
  - Get Started page: `#/get-started?plan=<plan>`
- In-page section anchors used for homepage nav (`#home`, `#features`, etc.).

### Existing pages
- Home (single long-form landing page composed of sections).
- Get Started page (same SPA route, separate layout and intake form UI).

### Existing reusable components
- Business sections:
  - navbar, hero, features, portfolio, about, testimonials, pricing, blog, contact, footer
- Shared behavioral components:
  - `AnimateOnScroll`, `CountUp`, `ThemeProvider`, `ThemeToggle`, `ImageWithFallback`
- UI kit under `src/app/components/ui` includes many primitives; only a subset currently used by rendered sections.

### Existing assets
- Local images in `public/images` (logo files and one project image).
- Many remote images loaded from `images.unsplash.com`.

### Existing SEO implementation
- `index.html` includes:
  - `meta description`
  - `meta robots=index,follow`
  - basic title and favicon
  - noscript fallback copy and visible loader copy for crawlability
- Existing report: `SEO_CRAWLABILITY_REPORT.md` documents earlier crawlability fixes.

### Existing analytics
- No GA/gtag/GTM/PostHog/Plausible integrations found.

### Existing forms
- Contact form in `contact-section.tsx` (no submit handler integration).
- Newsletter input in `blog-section.tsx` (no submit action integration).
- Get Started intake form in `get-started-page.tsx` uses local state only (success UI only).

### Existing integrations
- Google Maps embed iframe in contact section.
- Facebook outbound link.
- External project demo links.

## 2) Files and Areas Inspected

### Core/project config
- `package.json`
- `package-lock.json`
- `vite.config.ts`
- `postcss.config.mjs`
- `index.html`
- `README.md`

### Entry and app composition
- `src/main.tsx`
- `src/app/App.tsx`

### Section and shared components
- `src/app/components/*.tsx` (all top-level section components)
- `src/app/components/figma/ImageWithFallback.tsx`
- `src/app/components/ui/*`

### Styling and theme
- `src/styles/index.css`
- `src/styles/tailwind.css`
- `src/styles/theme.css`
- `src/styles/fonts.css` (empty)

### SEO/crawlability docs
- `SEO_CRAWLABILITY_REPORT.md`

### Missing expected files (not present)
- `composer.json`
- `.env*` or environment examples
- Backend routing files
- API endpoint files
- DB migration files
- `sitemap.xml` and `robots.txt` in repo

## 3) Current Site Structure and Content Mapping

### Homepage structure
1. Navbar (logo, section anchors, theme toggle, Login/Sign Up)
2. Hero (headline, CTA, stat counters, animated visual)
3. Features/Services tabs
4. Portfolio tabs + project cards + stats
5. About section (story/mission/vision/values)
6. Testimonials grid + social proof
7. Pricing plans + comparison table
8. Blog teaser cards + newsletter strip
9. Contact section (form, contact details, map, FAQ)
10. Footer

### Services currently represented
- Broad generic SaaS-style capabilities (speed/security/analytics/etc.).
- Not yet explicitly framed around the desired pillar model:
  - Build (Digital Solutions)
  - Grow (Marketing & Social)
  - Scale (Remote Staffing)

### Portfolio
- One real branded project card (San Vicente BIS).
- Multiple placeholder/generic sample projects.
- Many cards point to same external URL.

### About section
- Includes company origin and mission/vision/values.
- Mix of real company context and generic marketing language.

### Contact flow
- User can fill contact form but no backend submission exists.
- Get Started intake form does not persist or send data.
- Newsletter capture has no integration.

### Existing CTAs
- Hero: Explore Services (`#/get-started`) and Watch Demo.
- Pricing: Get Started / Contact Sales routes to `#/get-started`.
- Section-level secondary CTAs (Read more/View all/etc.) mostly visual only.

### Mobile responsiveness
- Uses Tailwind breakpoints (`sm`, `md`, `lg`) widely.
- Mobile nav menu implemented with toggle.
- Tabs and grid layouts adapt across breakpoints.

### Dark/light theme behavior
- `next-themes` with class-based dark mode.
- Theme chooser supports Light, Dark, System.
- Themed CSS vars in `theme.css`.

### Existing animations
- IntersectionObserver-driven scroll reveal (`AnimateOnScroll`).
- Counter animation (`CountUp`) with intersection trigger.
- Hero background keyframes (`blob`, `float`, `spin`, pulse).
- Multiple decorative transitions, gradients, blur layers.

### Existing reusable UI patterns
- Card-driven sections, tabbed filters, badge + icon chips, gradient headline pattern.
- Shared shadcn-style button/input/card components.

## 4) Current Routes

### SPA routes
- `/` -> home content
- `#/get-started` -> get-started page view
- `#/get-started?plan=Starter|Professional|Enterprise` -> preselect intake plan

### In-page anchors
- `#home`, `#features`, `#portfolio`, `#about`, `#testimonials`, `#pricing`, `#blog`, `#contact`
- Anchor integrity check passed for section links currently used.

## 5) Current Components

### Section components
- `navbar.tsx`
- `hero-section.tsx`
- `features-section.tsx`
- `portfolio-section.tsx`
- `about-section.tsx`
- `testimonials-section.tsx`
- `pricing-section.tsx`
- `blog-section.tsx`
- `contact-section.tsx`
- `footer.tsx`
- `get-started-page.tsx`

### Shared utility components
- `animate-on-scroll.tsx`
- `count-up.tsx`
- `theme-provider.tsx`
- `theme-toggle.tsx`
- `figma/ImageWithFallback.tsx`

### UI kit components
- 46 UI files exist under `src/app/components/ui`.
- ~9 are actively referenced by section code.
- ~37 appear currently unused (potential template residue/dead weight).

## 6) Current Services (Business Offering Representation)

Current public messaging is broad and generic and appears SaaS-template-derived:
- Features: speed, security, analytics, cloud, support
- Pricing: starter/pro/enterprise SaaS model
- Blog/testimonials: mostly placeholder persona/content

Business model representation is not yet tightly aligned to:
- Build - Digital Solutions
- Grow - Marketing & Social
- Scale - Remote Staffing

## 7) Current Data Models

No application data model layer exists.
- Content lives as hardcoded arrays/objects inside component files.
- No schema, CMS model, DTO model, or external source.

## 8) Existing SEO

### Implemented
- title + meta description + robots meta.
- noscript fallback copy to improve non-JS crawlability.

### Missing/weak
- No repo-level `sitemap.xml` or `robots.txt`.
- Live URLs `https://xervelab.online/robots.txt` and `/sitemap.xml` currently return 404.
- No canonical URL tag.
- No Open Graph/Twitter card metadata.
- No structured data (`application/ld+json`).
- SPA/hash route model limits discoverable URL depth.

## 9) Existing Integrations

- Google Maps embed iframe.
- Facebook outbound link.
- External hosted project link(s).
- No analytics platform integration.
- No CRM/email marketing integration.

## 10) Existing Deployment Setup

- Build toolchain: Vite + React plugin + Tailwind plugin.
- Deploy script suggests static artifact publishing to GitHub Pages.
- No CI/CD pipeline config in repo (no GitHub Actions or similar present).
- No documented production environment variable contract.

## 11) Problems Discovered (Technical Risks)

### Broken routes / navigation risks
- Many footer links use `href="#"` placeholders (non-functional UX).
- Some CTA buttons (e.g., Watch Demo, Read More, View All Articles, Subscribe) are presentational without integrated flow.

### Dependency/deprecation risk
- `npm outdated` indicates many libraries behind latest versions.
- `npm audit --production` reports vulnerabilities:
  - high: `react-router` advisory set (even though package is not used in route implementation)
  - high: transitive `lodash`
  - moderate: transitive `yaml`

### SEO risks
- Missing sitemap/robots in production (404).
- Limited metadata depth (no OG/Twitter/canonical/schema).
- SPA-heavy rendering still carries discoverability risk for full content depth.

### Duplicate/unused component risks
- Large UI component surface imported from template stack but mostly unused.
- Potential bundle bloat and maintenance overhead.

### Hardcoded content risk
- Most business content, pricing, testimonials, and blog content is static and partly placeholder.
- Service claims/stats may not reflect current business truth.

### Accessibility risks
- Multiple icon-only links/buttons lack explicit `aria-label`.
- Placeholder links (`#`) can create keyboard navigation noise.
- Some semantic nesting patterns (button wrappers with inner anchor usage in places) should be reviewed.

### Performance risks
- Numerous remote Unsplash images without centralized optimization pipeline.
- Heavy visual effects (blur layers, multiple animations) across sections can affect low-end devices.
- Many unused dependencies/UI primitives increase install and potential bundle footprint.

### Security risks
- Dependency vulnerabilities present in lock tree.
- Forms are not backed by server validation/storage; could create false expectation and data handling ambiguity.

### API coupling / integration risks
- No API abstraction; when forms or CRM are introduced, coupling may occur directly in UI components unless a service layer is introduced first.

### Deployment risks
- Deployment process appears script-based and manual.
- No automated checks for SEO files, broken links, or regression testing before deploy.

## 12) Recommended Target Architecture (Incremental)

### Keep
- React + Vite foundation (suitable for incremental migration).
- Existing section-based component architecture.

### Introduce incrementally
1. Content model layer
- Move hardcoded content arrays into structured content modules (`src/content/*`) or CMS-ready JSON shape.
- Define explicit types for services, portfolio entries, testimonials, FAQs, and plans.

2. Route strategy
- Keep current hash route temporarily for compatibility.
- Introduce clean page routes gradually (home, services pillar pages, case studies, contact, get-started) with prerender/SSR strategy.

3. Integration/service layer
- Add `src/services` for:
  - lead capture (contact + get started)
  - newsletter subscription
  - analytics tracking wrapper

4. SEO system
- Centralize head metadata per page/route.
- Add robots/sitemap generation at build/deploy.
- Add structured data (Organization, Service, FAQ, Breadcrumb where relevant).

5. Quality and governance
- Add CI checks: build, lint, link validation, SEO artifact presence.
- Add dependency update policy and audit gate.

## 13) Proposed New Sitemap (Build. Grow. Scale.)

### Primary pages
- /
- /build
- /grow
- /scale
- /portfolio
- /about
- /contact
- /get-started

### Optional supporting pages
- /case-studies
- /blog
- /privacy
- /terms

### Suggested information architecture
- Home: concise value proposition + three pillar overview + unified CTA.
- Build page: Digital Solutions offers, process, featured case studies.
- Grow page: Marketing & Social services, packages, outcomes.
- Scale page: Remote Staffing model, roles, onboarding flow.
- Get Started: lead intake with service-type qualification fields.

## 14) Migration Risks

1. SEO continuity risk
- URL and content structure changes can impact indexing if no redirect/canonical strategy exists.

2. Content trust risk
- Replacing generic copy with accurate business copy requires business-owner validation.

3. UX regression risk
- Reworking navigation and CTAs can break existing conversion paths if not staged.

4. Integration risk
- Adding real form submission without anti-spam/validation and consent handling can create operational/security issues.

5. Dependency update risk
- Upgrading many packages simultaneously can introduce breaking changes.

## 15) Recommended Migration Stages (Incremental)

### Stage 0 - Stabilization and Baseline
- Add production `robots.txt` and `sitemap.xml`.
- Add OG/Twitter/canonical metadata baseline.
- Patch security vulnerabilities (starting with `react-router`, transitive vulnerable packages).
- Keep UI/flows functionally unchanged.

### Stage 1 - Content and IA Refactor (No major UI rewrite)
- Introduce typed content modules.
- Reframe homepage messaging around:
  - Build - Digital Solutions
  - Grow - Marketing & Social
  - Scale - Remote Staffing
- Replace placeholder testimonials/portfolio/blog with verified content.

### Stage 2 - Conversion Infrastructure
- Wire contact/get-started/newsletter forms to real endpoint(s).
- Add analytics events for CTA and form funnel.
- Add success/error handling and consent copy.

### Stage 3 - Routing and SEO Expansion
- Introduce clean route pages for Build/Grow/Scale.
- Add internal linking strategy and page-specific metadata/schema.
- Ensure redirects from old hash links if legacy links are externally shared.

### Stage 4 - Performance and Maintainability
- Remove unused UI components/dependencies gradually.
- Optimize imagery (local assets/CDN strategy/lazy loading where appropriate).
- Add CI quality gates and documented release checklist.

### Stage 5 - Optional Platform Evolution
- Evaluate pre-render/SSR approach once content model and route model stabilize.
- Migrate only if measurable SEO/performance gains justify operational complexity.

## 16) Executive Summary

XerveLab currently runs as a static React+Vite SPA with strong visual presentation but substantial template residue, placeholder content, and limited production SEO artifacts. There is no backend, database, or true form/analytics pipeline in this repo. The most effective path is incremental: stabilize SEO/security and real conversion plumbing first, then migrate content and IA toward Build/Grow/Scale pillar pages, while preserving existing production behavior during each stage.
