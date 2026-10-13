import * as React from "react";
import { ThemeProvider } from "./components/theme-provider";
import { GetStartedPage } from "./components/get-started-page";
import { getRouteFromHash } from "./routes";
import { SiteLayout } from "./components/layout/site-layout";
import { HomePage } from "./pages/home-page";
import { ServicesPage } from "./pages/services-page";
import { DigitalSolutionsPage } from "./pages/digital-solutions-page";
import { MarketingPage } from "./pages/marketing-page";
import { StaffingPage } from "./pages/staffing-page";
import { StaffingCategoryPage } from "./pages/staffing-category-page";
import { TeamPage } from "./pages/team-page";
import { TeamProfilePage } from "./pages/team-profile-page";
import { TalentPage } from "./pages/talent-page";
import { TalentProfilePage } from "./pages/talent-profile-page";
import { CareersPage } from "./pages/careers-page";
import { CareerDetailPage } from "./pages/career-detail-page";
import { PortfolioPage } from "./pages/portfolio-page";
import { CaseStudiesPage } from "./pages/case-studies-page";
import { CaseStudyDetailPage } from "./pages/case-study-detail-page";
import { AboutSection } from "./components/about-section";
import { ContactSection } from "./components/contact-section";

function RouteContent({ path, teamSlug, talentSlug, careerSlug, caseStudySlug }: { path: string; teamSlug?: string; talentSlug?: string; careerSlug?: string; caseStudySlug?: string }) {
  switch (path) {
    case "/":
      return <HomePage />;
    case "/services":
      return <ServicesPage />;
    case "/digital-solutions":
      return <DigitalSolutionsPage />;
    case "/marketing":
      return <MarketingPage />;
    case "/staffing":
      return <StaffingPage />;
    case "/staffing/technology":
      return <StaffingCategoryPage category="technology" />;
    case "/staffing/marketing":
      return <StaffingCategoryPage category="marketing" />;
    case "/staffing/creative":
      return <StaffingCategoryPage category="creative" />;
    case "/staffing/business-support":
      return <StaffingCategoryPage category="business-support" />;
    case "/team":
      return teamSlug ? <TeamProfilePage slug={teamSlug} /> : <TeamPage />;
    case "/talent":
      return talentSlug ? <TalentProfilePage slug={talentSlug} /> : <TalentPage />;
    case "/portfolio":
      return <PortfolioPage />;
    case "/about":
      return <AboutSection />;
    case "/contact":
      return <ContactSection />;
    case "/case-studies":
      return caseStudySlug ? <CaseStudyDetailPage slug={caseStudySlug} /> : <CaseStudiesPage />;
    case "/careers":
      return careerSlug ? <CareerDetailPage slug={careerSlug} /> : <CareersPage />;
    default:
      return <HomePage />;
  }
}

export default function App() {
  const [route, setRoute] = React.useState(() => getRouteFromHash(window.location.hash));

  React.useEffect(() => {
    const handleHashChange = () => {
      setRoute(getRouteFromHash(window.location.hash));
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  React.useEffect(() => {
    if (route.path !== "/") {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
    }
  }, [route.path]);

  return (
    <ThemeProvider>
      {route.path === "/get-started" ? (
        <GetStartedPage selectedPlan={route.selectedPlan} />
      ) : (
        <SiteLayout currentPath={route.path}>
          <RouteContent
            path={route.path}
            teamSlug={route.teamSlug}
            talentSlug={route.talentSlug}
            careerSlug={route.careerSlug}
            caseStudySlug={route.caseStudySlug}
          />
        </SiteLayout>
      )}
    </ThemeProvider>
  );
}
