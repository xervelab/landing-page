# XerveLab Stage 0 Stabilization Checklist

Date: 2026-10-13
Scope: Planning only (no code changes executed in this checklist)
Objective: Reduce immediate production risk before Build/Grow/Scale migration work

## Stage 0 Outcomes

- Production crawlability baseline is complete (robots + sitemap + metadata hygiene).
- Known dependency/security risks are reduced to acceptable baseline.
- Conversion-critical UX gaps are documented and prepared for implementation.
- Delivery guardrails exist (build + checks before deploy).

## Workstream A: SEO Baseline Hardening

### A1. Add robots.txt
- Priority: P0
- Why: `https://xervelab.online/robots.txt` currently returns 404.
- Action:
  - Add [public/robots.txt](public/robots.txt) with at least:
    - User-agent allow rules
    - Sitemap location
- Acceptance criteria:
  - [https://xervelab.online/robots.txt](https://xervelab.online/robots.txt) returns HTTP 200 after deployment.

### A2. Add sitemap.xml
- Priority: P0
- Why: `https://xervelab.online/sitemap.xml` currently returns 404.
- Action:
  - Add [public/sitemap.xml](public/sitemap.xml) with current canonical URLs.
- Acceptance criteria:
  - [https://xervelab.online/sitemap.xml](https://xervelab.online/sitemap.xml) returns HTTP 200 and valid XML.

### A3. Improve head metadata baseline
- Priority: P1
- Why: Current metadata is minimal.
- Action:
  - Extend [index.html](index.html) with:
    - Canonical link
    - Open Graph tags
    - Twitter card tags
- Acceptance criteria:
  - Homepage preview cards render correctly in OG/Twitter validators.

### A4. Add Organization structured data
- Priority: P1
- Why: Improve entity understanding and SERP quality.
- Action:
  - Add JSON-LD in [index.html](index.html).
- Acceptance criteria:
  - Structured data validates without critical errors.

## Workstream B: Security and Dependency Baseline

### B1. Patch production vulnerabilities
- Priority: P0
- Why: Audit found 2 high + 1 moderate vulnerabilities.
- Action:
  - Upgrade vulnerable dependency chain (notably react-router range and transitive packages).
  - Re-run audit after updates.
- Acceptance criteria:
  - `npm audit --omit=dev` reports no high vulnerabilities.

### B2. Dependency hygiene pass
- Priority: P1
- Why: Many packages are outdated; several appear unused.
- Action:
  - Classify dependencies into:
    - Required now
    - Safe to defer
    - Candidate for removal
- Acceptance criteria:
  - Dependency decision log added to docs.

## Workstream C: Conversion Integrity (No Backend Yet)

### C1. Clarify non-functional CTAs/forms
- Priority: P0
- Why: Multiple CTAs/forms are currently presentational and may imply functionality.
- Action:
  - For each CTA/form, define one of:
    - Functional now
    - Explicitly “coming soon”
    - Redirect to contact flow
- Acceptance criteria:
  - No primary CTA silently fails or does nothing.

### C2. Define lead capture contract
- Priority: P1
- Why: Contact/get-started/newsletter currently have no submission path.
- Action:
  - Create payload spec for:
    - Contact
    - Get Started intake
    - Newsletter subscription
  - Define target destination (email webhook/CRM/API).
- Acceptance criteria:
  - One approved contract document exists before implementation begins.

## Workstream D: Delivery Guardrails

### D1. Add pre-deploy checklist document
- Priority: P0
- Why: Deployment flow is script-based and currently lacks formal checks.
- Action:
  - Add [docs/release-checklist.md](docs/release-checklist.md) including:
    - Build success
    - Link check
    - robots/sitemap existence
    - smoke test of hash route and anchors
- Acceptance criteria:
  - Release checklist used before each production deployment.

### D2. Add CI baseline (optional in Stage 0, required by Stage 1)
- Priority: P1
- Why: Prevent regressions and missed SEO artifacts.
- Action:
  - Add CI workflow for build + audit command + artifact presence checks.
- Acceptance criteria:
  - Pull requests must pass baseline checks.

## Suggested Execution Order

1. A1 robots.txt
2. A2 sitemap.xml
3. B1 security patch pass
4. A3 metadata expansion
5. A4 structured data
6. C1 CTA/form behavior alignment
7. D1 release checklist
8. B2 dependency hygiene log
9. C2 lead capture contract
10. D2 CI baseline

## Risk Controls During Stage 0

- Keep route behavior stable: preserve existing hash route and section anchors.
- Make small, atomic commits per workstream item.
- Validate production-equivalent build after each P0 change.
- Avoid introducing backend coupling until lead contract is approved.

## Exit Criteria for Stage 0

- robots.txt and sitemap.xml are live and valid.
- No high production dependency vulnerabilities remain.
- Head metadata baseline (canonical + OG/Twitter + org schema) is in place.
- Primary CTAs no longer produce silent dead-ends.
- Release checklist exists and is adopted.

## Ready-to-Start Implementation Ticket List

- ST0-001: Add robots.txt and validate in production
- ST0-002: Add sitemap.xml and validate in production
- ST0-003: Expand homepage metadata (canonical/OG/Twitter)
- ST0-004: Add Organization JSON-LD
- ST0-005: Patch npm audit high vulnerabilities
- ST0-006: CTA/Forms behavior alignment pass
- ST0-007: Create release checklist and enforce usage
- ST0-008: Dependency decision log
- ST0-009: Lead capture payload contract
- ST0-010: CI baseline checks
