import { useMemo, useState } from "react";
import { PortfolioCard } from "../components/cards/portfolio-card";
import { PageHero } from "../components/sections/page-hero";
import { SectionShell } from "../components/sections/section-shell";
import { usePageSeo } from "../components/shared/use-page-seo";
import { portfolioCategories, portfolioProjects } from "../data/portfolio-projects";
import { PortfolioCategory } from "../models/portfolio-project";

export function PortfolioPage() {
  const [category, setCategory] = useState<"All" | PortfolioCategory>("All");

  const filteredProjects = useMemo(
    () =>
      portfolioProjects.filter((project) => {
        if (category === "All") {
          return true;
        }

        return project.category === category;
      }),
    [category],
  );

  usePageSeo({
    title: "Portfolio | XerveLab",
    description:
      "Explore XerveLab portfolio projects across websites, e-commerce, SEO, marketing, software, branding, and more.",
    canonicalUrl: "https://xervelab.online/#/portfolio",
    ogTitle: "Portfolio | XerveLab",
    ogDescription:
      "View project work samples and browse case studies from the XerveLab portfolio.",
    ogUrl: "https://xervelab.online/#/portfolio",
    twitterTitle: "Portfolio | XerveLab",
    twitterDescription:
      "Browse categorized project work and open related case studies.",
    breadcrumbJsonLd: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://xervelab.online/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Portfolio",
          item: "https://xervelab.online/#/portfolio",
        },
      ],
    },
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "XerveLab Portfolio",
        url: "https://xervelab.online/#/portfolio",
        hasPart: portfolioProjects.map((project) => ({
          "@type": "CreativeWork",
          name: project.name,
          url: `https://xervelab.online/#/case-studies/${project.slug}`,
          image: project.image.startsWith("http")
            ? project.image
            : `https://xervelab.online${project.image}`,
        })),
      },
    ],
  });

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Project Work Across Build, Grow, and Scale"
        description="Review portfolio projects and open the related case studies for implementation context."
      />

      <SectionShell
        title="Portfolio Projects"
        subtitle="All existing project items are preserved and grouped into practical service-aligned categories."
      >
        <div className="mb-8 flex flex-wrap gap-2">
          {["All", ...portfolioCategories].map((entry) => (
            <button
              key={entry}
              type="button"
              onClick={() => setCategory(entry as "All" | PortfolioCategory)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                category === entry
                  ? "border-primary/40 bg-primary/10 text-foreground"
                  : "border-border bg-background/80 hover:border-primary/30"
              }`}
            >
              {entry}
            </button>
          ))}
        </div>

        <p className="mb-6 text-sm text-muted-foreground">
          {filteredProjects.length} project{filteredProjects.length === 1 ? "" : "s"} shown.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      </SectionShell>
    </>
  );
}
