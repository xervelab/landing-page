import { useMemo, useState } from "react";
import { JobCard } from "../components/cards/job-card";
import { PageHero } from "../components/sections/page-hero";
import { SectionShell } from "../components/sections/section-shell";
import { SharedCta } from "../components/shared/shared-cta";
import { usePageSeo } from "../components/shared/use-page-seo";
import { careerCategories, getOpenJobOpenings } from "../data/job-openings";
import { JobCategory } from "../models/job-opening";

export function CareersPage() {
  const jobs = getOpenJobOpenings();
  const [selectedCategory, setSelectedCategory] = useState<"all" | JobCategory>("all");

  const filteredJobs = useMemo(
    () => jobs.filter((job) => selectedCategory === "all" || job.category === selectedCategory),
    [jobs, selectedCategory],
  );

  usePageSeo({
    title: "Careers | XerveLab",
    description:
      "Work With XerveLab. Explore career opportunities for talented Filipino professionals supporting businesses around the world.",
    canonicalUrl: "https://xervelab.online/#/careers",
    ogTitle: "Work With XerveLab",
    ogDescription:
      "Join our network of talented Filipino professionals working with global businesses.",
    ogUrl: "https://xervelab.online/#/careers",
    twitterTitle: "Work With XerveLab",
    twitterDescription:
      "Explore open roles across technology, marketing, creative, administration, customer support, and e-commerce.",
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
          name: "Careers",
          item: "https://xervelab.online/#/careers",
        },
      ],
    },
  });

  return (
    <>
      <PageHero
        eyebrow="Work With XerveLab"
        title="Careers"
        description="We're building a network of talented Filipino professionals working with businesses around the world."
      />

      <SectionShell
        title="Open Roles"
        subtitle="Filter roles by category and apply to opportunities that fit your skills and preferred work setup."
      >
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            className={`rounded-full border px-4 py-2 text-sm transition-colors ${
              selectedCategory === "all"
                ? "border-primary/40 bg-primary/10 text-foreground"
                : "border-border bg-background/80 hover:border-primary/30"
            }`}
          >
            All Categories
          </button>
          {careerCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                selectedCategory === category
                  ? "border-primary/40 bg-primary/10 text-foreground"
                  : "border-border bg-background/80 hover:border-primary/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <p className="mb-6 text-sm text-muted-foreground">
          {filteredJobs.length} open role{filteredJobs.length === 1 ? "" : "s"} in this view.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </SectionShell>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SharedCta
            title="Looking for another role fit?"
            description="If your role is not listed yet, send your profile and areas of expertise through our contact channel."
            primaryLabel="Contact Hiring Team"
            primaryHref="#/contact"
            secondaryLabel="Back to Services"
            secondaryHref="#/services"
          />
        </div>
      </section>
    </>
  );
}
