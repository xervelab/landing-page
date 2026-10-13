# XerveLab URL Migration Map

| Old URL | New URL | Status | Redirect required? | SEO notes |
| --- | --- | --- | --- | --- |
| / | /#/ | Active | No | Homepage canonicalized to brand root with route-level metadata. |
| /home | /#/ | Replaced | Yes (301) | Legacy alias preserved in router and host redirect file. |
| /services | /#/services | Active | Yes (301) | Unique title/description/canonical + Open Graph/Twitter + Service schema. |
| /digital-solutions | /#/digital-solutions | Active | Yes (301) | Route has dedicated SEO metadata and service-focused schema. |
| /marketing | /#/marketing | Active | Yes (301) | Route has dedicated SEO metadata and service-focused schema. |
| /staffing | /#/staffing | Active | Yes (301) | Route has dedicated SEO metadata and service-focused schema. |
| /staffing/technology | /#/staffing/technology | Active | Yes (301) | Category route now has unique canonical, title, and breadcrumb metadata. |
| /staffing/marketing | /#/staffing/marketing | Active | Yes (301) | Category route now has unique canonical, title, and breadcrumb metadata. |
| /staffing/creative | /#/staffing/creative | Active | Yes (301) | Category route now has unique canonical, title, and breadcrumb metadata. |
| /staffing/business-support | /#/staffing/business-support | Active | Yes (301) | Category route now has unique canonical, title, and breadcrumb metadata. |
| /team | /#/team | Active | Yes (301) | Team listing has unique metadata and breadcrumb schema. |
| /team/[slug] | /#/team/[slug] | Active | Yes (301) | Person schema retained for published profiles; safe not-found handling included. |
| /talent | /#/talent | Active | Yes (301) | Talent listing has unique metadata and breadcrumb schema. |
| /talent/[slug] | /#/talent/[slug] | Active | Yes (301) | Talent profile metadata is dynamic; sample-profile label preserved for non-production data. |
| /portfolio | /#/portfolio | Active | Yes (301) | Portfolio route migrated with category filters and CollectionPage schema. |
| /case-studies | /#/case-studies | Active | Yes (301) | Listing route has unique metadata and CollectionPage schema. |
| /case-studies/[slug] | /#/case-studies/[slug] | Active | Yes (301) | Detail route has unique per-slug metadata, breadcrumb, and Article schema. |
| /about | /#/about | Active | Yes (301) | About route now has unique metadata and breadcrumbs. |
| /careers | /#/careers | Active | Yes (301) | Careers listing has unique metadata and category-based role discovery. |
| /careers/[slug] | /#/careers/[slug] | Active | Yes (301) | Dynamic job detail metadata and safe application flow in place. |
| /contact | /#/contact | Active | Yes (301) | Contact route now has unique metadata + FAQPage structured data. |
| /get-started | /#/get-started | Active | Yes (301) | Intake route now has unique metadata and breadcrumbs. |
| /blog | /#/case-studies | Replaced | Yes (301) | Legacy blog anchor mapped to case-study content cluster; no homepage fallback. |
| /faq | /#/contact | Replaced | Yes (301) | FAQ content currently lives on contact route with FAQPage schema. |
| #home | /#/ | Legacy hash alias | No (in-page alias) | Legacy hash preserved via route alias mapper. |
| #services | /#/services | Legacy hash alias | No (in-page alias) | Legacy hash preserved via route alias mapper. |
| #digital-solutions | /#/digital-solutions | Legacy hash alias | No (in-page alias) | Legacy hash preserved via route alias mapper. |
| #marketing | /#/marketing | Legacy hash alias | No (in-page alias) | Legacy hash preserved via route alias mapper. |
| #staffing | /#/staffing | Legacy hash alias | No (in-page alias) | Legacy hash preserved via route alias mapper. |
| #team | /#/team | Legacy hash alias | No (in-page alias) | Legacy hash preserved via route alias mapper. |
| #talent | /#/talent | Legacy hash alias | No (in-page alias) | Legacy hash preserved via route alias mapper. |
| #portfolio | /#/portfolio | Legacy hash alias | No (in-page alias) | Legacy hash preserved via route alias mapper. |
| #case-studies | /#/case-studies | Legacy hash alias | No (in-page alias) | Legacy hash preserved via route alias mapper. |
| #about | /#/about | Legacy hash alias | No (in-page alias) | Legacy hash preserved via route alias mapper. |
| #careers | /#/careers | Legacy hash alias | No (in-page alias) | Legacy hash preserved via route alias mapper. |
| #contact | /#/contact | Legacy hash alias | No (in-page alias) | Legacy hash preserved via route alias mapper. |
| #get-started | /#/get-started | Legacy hash alias | No (in-page alias) | Legacy hash preserved via route alias mapper. |
| #blog | /#/case-studies | Legacy hash alias | No (in-page alias) | Legacy hash maps to nearest matching content cluster. |
| #faq | /#/contact | Legacy hash alias | No (in-page alias) | Legacy hash maps to contact FAQ section route. |

## Redirect implementation notes

- Host-level permanent redirects are defined in [public/_redirects](public/_redirects).
- Legacy hash fragments cannot produce true HTTP 301 responses because fragment identifiers are client-side only.
- To preserve legacy hash behavior, alias mappings were added in [src/app/routes.ts](src/app/routes.ts).
- No redirect chains were introduced.
- Unrelated pages were not redirected to homepage by default.
