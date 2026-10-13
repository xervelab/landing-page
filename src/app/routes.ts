export const appPaths = [
  "/",
  "/services",
  "/digital-solutions",
  "/marketing",
  "/staffing",
  "/staffing/technology",
  "/staffing/marketing",
  "/staffing/creative",
  "/staffing/business-support",
  "/team",
  "/talent",
  "/portfolio",
  "/case-studies",
  "/about",
  "/careers",
  "/contact",
  "/get-started",
] as const;

export type AppPath = (typeof appPaths)[number];

export type AppRoute = {
  path: AppPath;
  selectedPlan?: string;
  teamSlug?: string;
  talentSlug?: string;
  careerSlug?: string;
  caseStudySlug?: string;
};

function normalizePathname(pathname: string): string {
  const value = pathname.trim().toLowerCase();

  if (!value || value === "/home") {
    return "/";
  }

  const withoutTrailingSlash = value.endsWith("/") && value !== "/" ? value.slice(0, -1) : value;

  return withoutTrailingSlash.startsWith("/") ? withoutTrailingSlash : `/${withoutTrailingSlash}`;
}

function isKnownPath(pathname: string): pathname is AppPath {
  return (appPaths as readonly string[]).includes(pathname);
}

function getLegacyHashAlias(hash: string): AppPath | undefined {
  const legacyMap: Record<string, AppPath> = {
    "#home": "/",
    "#services": "/services",
    "#digital-solutions": "/digital-solutions",
    "#marketing": "/marketing",
    "#staffing": "/staffing",
    "#team": "/team",
    "#talent": "/talent",
    "#portfolio": "/portfolio",
    "#case-studies": "/case-studies",
    "#about": "/about",
    "#careers": "/careers",
    "#contact": "/contact",
    "#get-started": "/get-started",
    "#blog": "/case-studies",
    "#faq": "/contact",
  };

  return legacyMap[hash.toLowerCase()];
}

export function getRouteFromHash(hash: string): AppRoute {
  const legacyAlias = getLegacyHashAlias(hash);
  if (legacyAlias) {
    return { path: legacyAlias };
  }

  if (!hash.startsWith("#/")) {
    return { path: "/" };
  }

  const routeValue = hash.slice(1);
  const [pathnamePart, search = ""] = routeValue.split("?");
  const pathname = normalizePathname(pathnamePart);

  if (pathname === "/get-started") {
    const searchParams = new URLSearchParams(search);

    return {
      path: "/get-started",
      selectedPlan: searchParams.get("plan") ?? undefined,
    };
  }

  if (pathname.startsWith("/team/") && pathname.length > "/team/".length) {
    const teamSlug = pathname.slice("/team/".length).trim();

    if (teamSlug) {
      return {
        path: "/team",
        teamSlug,
      };
    }
  }

  if (pathname.startsWith("/talent/") && pathname.length > "/talent/".length) {
    const talentSlug = pathname.slice("/talent/".length).trim();

    if (talentSlug) {
      return {
        path: "/talent",
        talentSlug,
      };
    }
  }

  if (pathname.startsWith("/careers/") && pathname.length > "/careers/".length) {
    const careerSlug = pathname.slice("/careers/".length).trim();

    if (careerSlug) {
      return {
        path: "/careers",
        careerSlug,
      };
    }
  }

  if (pathname.startsWith("/case-studies/") && pathname.length > "/case-studies/".length) {
    const caseStudySlug = pathname.slice("/case-studies/".length).trim();

    if (caseStudySlug) {
      return {
        path: "/case-studies",
        caseStudySlug,
      };
    }
  }

  if (isKnownPath(pathname)) {
    return { path: pathname };
  }

  return { path: "/" };
}
