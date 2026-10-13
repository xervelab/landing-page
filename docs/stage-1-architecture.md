# XerveLab Stage 1 Architecture

Date: 2026-10-13
Stage: Incremental migration architecture (no full redesign)

## Objective

Establish an incremental route/component architecture for migrating XerveLab to:
- Build. Grow. Scale.
- Digital solutions, marketing, and remote talent positioning

This stage intentionally preserves existing production behavior while introducing reusable architecture for progressive content migration.

## What Changed

## 1) Route Structure Architecture

Added centralized hash-route architecture in [src/app/routes.ts](src/app/routes.ts).

### Supported routes now
- / (home)
- /services
- /digital-solutions
- /marketing
- /staffing
- /staffing/technology
- /staffing/marketing
- /staffing/creative
- /staffing/business-support
- /team
- /talent
- /portfolio
- /case-studies
- /about
- /careers
- /contact
- /get-started

### Backward compatibility preserved
- Existing home behavior still works when no hash is present.
- Existing route `#/get-started?plan=<plan>` still works and plan preselection is preserved.
- Existing section anchors on the home page still work.

## 2) Page Layout Architecture

Added shared site layout in [src/app/components/layout/site-layout.tsx](src/app/components/layout/site-layout.tsx) with:
- Route-aware Navbar
- Shared background and visual shell
- Route-aware Footer

Updated application composition in [src/app/App.tsx](src/app/App.tsx):
- Uses centralized route parser
- Uses page-level route rendering
- Preserves specialized Get Started page rendering

## 3) Navigation Architecture

Added centralized navigation config in [src/app/navigation.ts](src/app/navigation.ts).

Updated [src/app/components/navbar.tsx](src/app/components/navbar.tsx):
- Home route shows existing section-anchor navigation.
- Non-home routes show page navigation for incremental sitemap migration.
- Replaced non-functional Login/Sign Up with working Contact/Get Started route CTAs.
- Mobile and desktop behavior preserved.

## 4) Footer Architecture

Updated [src/app/components/footer.tsx](src/app/components/footer.tsx):
- Footer links now driven by centralized navigation config.
- Route links now point to working architecture routes instead of placeholder `#` links.
- Home-specific section links still supported where relevant.

## 5) Reusable Shared Components

Added shared section and CTA primitives:
- [src/app/components/sections/section-shell.tsx](src/app/components/sections/section-shell.tsx)
- [src/app/components/sections/page-hero.tsx](src/app/components/sections/page-hero.tsx)
- [src/app/components/shared/shared-cta.tsx](src/app/components/shared/shared-cta.tsx)

These are reusable building blocks for upcoming content migration.

## 6) Reusable Card Components

Added requested reusable card components:
- Service card: [src/app/components/cards/service-card.tsx](src/app/components/cards/service-card.tsx)
- Team card: [src/app/components/cards/team-card.tsx](src/app/components/cards/team-card.tsx)
- Talent card: [src/app/components/cards/talent-card.tsx](src/app/components/cards/talent-card.tsx)

## 7) Page Scaffolds for Incremental Migration

Added page architecture (without removing existing content):
- Home page wrapper: [src/app/pages/home-page.tsx](src/app/pages/home-page.tsx)
- Services page: [src/app/pages/services-page.tsx](src/app/pages/services-page.tsx)
- Digital Solutions page: [src/app/pages/digital-solutions-page.tsx](src/app/pages/digital-solutions-page.tsx)
- Marketing page: [src/app/pages/marketing-page.tsx](src/app/pages/marketing-page.tsx)
- Staffing page: [src/app/pages/staffing-page.tsx](src/app/pages/staffing-page.tsx)
- Staffing category page (reusable): [src/app/pages/staffing-category-page.tsx](src/app/pages/staffing-category-page.tsx)
- Team page: [src/app/pages/team-page.tsx](src/app/pages/team-page.tsx)
- Talent page: [src/app/pages/talent-page.tsx](src/app/pages/talent-page.tsx)
- Generic scaffold page for phased rollout: [src/app/pages/simple-content-page.tsx](src/app/pages/simple-content-page.tsx)

## 8) Existing Content Preservation

No major content removal was performed:
- Existing home sections are preserved and still rendered via home route.
- Existing Get Started page and intake flow UI are preserved.
- Existing visual system and responsive classes are preserved.

## Runtime Verification Performed

## Build verification
- `npm run build` completed successfully.

## Route verification in running app
Verified route rendering markers successfully:
- `/` -> Build Your Online Presence with XerveLab
- `#/get-started?plan=Professional` -> Project intake form
- `#/services` -> Three Core Service Pillars
- `#/digital-solutions` -> Digital Solutions
- `#/marketing` -> Growth Capabilities
- `#/staffing` -> Staffing Tracks
- `#/staffing/technology` -> Technology Staffing
- `#/team` -> Core Delivery Team
- `#/talent` -> Talent Tracks
- `#/portfolio` -> Our Portfolio
- `#/contact` -> Get in Touch

## Notes for Next Stage

Stage 1 created migration-ready architecture only. Recommended next implementation slice:
1. Expand service-specific content on /digital-solutions, /marketing, /staffing tracks.
2. Migrate /about, /careers, /case-studies from placeholder scaffold to full content.
3. Introduce SEO metadata per route once route content stabilizes.
4. Connect shared CTA and forms to actual lead capture service in Stage 2.
