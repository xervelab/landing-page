import * as React from "react";
import { ThemeProvider } from "./components/theme-provider";
import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";
import { AboutSection } from "./components/about-section";
import { FeaturesSection } from "./components/features-section";
import { PricingSection } from "./components/pricing-section";
import { PortfolioSection } from "./components/portfolio-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { BlogSection } from "./components/blog-section";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";
import { GetStartedPage } from "./components/get-started-page";

type AppRoute = {
  page: "home" | "get-started";
  selectedPlan?: string;
};

function getRouteFromHash(hash: string): AppRoute {
  if (!hash.startsWith("#/")) {
    return { page: "home" };
  }

  const routeValue = hash.slice(1);
  const [pathname, search = ""] = routeValue.split("?");
  const searchParams = new URLSearchParams(search);

  if (pathname === "/get-started") {
    return {
      page: "get-started",
      selectedPlan: searchParams.get("plan") ?? undefined,
    };
  }

  return { page: "home" };
}

export default function App() {
  const [route, setRoute] = React.useState<AppRoute>(() => getRouteFromHash(window.location.hash));

  React.useEffect(() => {
    const handleHashChange = () => {
      setRoute(getRouteFromHash(window.location.hash));
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  React.useEffect(() => {
    if (route.page === "get-started") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [route.page]);

  return (
    <ThemeProvider>
      {route.page === "get-started" ? (
        <GetStartedPage selectedPlan={route.selectedPlan} />
      ) : (
        <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_30%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.12),transparent_28%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_35%)] bg-background">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute left-[-8rem] top-10 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute right-[-6rem] top-64 h-[26rem] w-[26rem] rounded-full bg-violet-500/10 blur-3xl" />
            <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-35" />
          </div>
          <Navbar />
          <main className="relative z-10">
            <HeroSection />
            <FeaturesSection />
            <PortfolioSection />
                  <AboutSection />
            <TestimonialsSection />
                  <PricingSection />
            <BlogSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      )}
    </ThemeProvider>
  );
}
