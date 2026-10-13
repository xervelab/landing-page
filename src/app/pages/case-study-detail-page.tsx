import { CaseStudyDetail } from "../components/sections/case-study-detail";
import { PageHero } from "../components/sections/page-hero";
import { SharedCta } from "../components/shared/shared-cta";
import { usePageSeo } from "../components/shared/use-page-seo";
import { getCaseStudyBySlug } from "../data/portfolio-projects";

type CaseStudyDetailPageProps = {
  slug: string;
};

export function CaseStudyDetailPage({ slug }: CaseStudyDetailPageProps) {
  const study = getCaseStudyBySlug(slug);

  const notFoundTitle = "Case Study Not Found | XerveLab";
  const notFoundDescription =
    "This case study page is unavailable. Return to the case studies library to browse published entries.";

  usePageSeo({
    title: study ? `${study.client} ${study.industry} Case Study | XerveLab` : notFoundTitle,
    description: study ? study.solution : notFoundDescription,
    canonicalUrl: `https://xervelab.online/#/case-studies/${slug}`,
    ogTitle: study ? `${study.client} ${study.industry} Case Study | XerveLab` : notFoundTitle,
    ogDescription: study ? study.solution : notFoundDescription,
    ogUrl: `https://xervelab.online/#/case-studies/${slug}`,
    twitterTitle: study ? `${study.client} ${study.industry} Case Study | XerveLab` : notFoundTitle,
    twitterDescription: study ? study.solution : notFoundDescription,
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
          name: "Case Studies",
          item: "https://xervelab.online/#/case-studies",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: study ? study.client : "Case Study",
          item: `https://xervelab.online/#/case-studies/${slug}`,
        },
      ],
    },
    structuredData: study
      ? [
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `${study.client} Case Study`,
            description: study.solution,
            mainEntityOfPage: `https://xervelab.online/#/case-studies/${study.slug}`,
            author: {
              "@type": "Organization",
              name: "XerveLab",
            },
            publisher: {
              "@type": "Organization",
              name: "XerveLab",
              logo: {
                "@type": "ImageObject",
                url: "https://xervelab.online/images/xervelab-logo.svg",
              },
            },
            dateModified: new Date().toISOString(),
          },
        ]
      : undefined,
  });

  if (!study) {
    return (
      <>
        <PageHero
          eyebrow="Case Studies"
          title="Case Study Not Found"
          description="This case study is not currently available. Use the case study library to open published entries."
        />
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <SharedCta
              title="Browse Published Case Studies"
              description="Explore currently available case studies and portfolio references."
              primaryLabel="Back to Case Studies"
              primaryHref="#/case-studies"
              secondaryLabel="View Portfolio"
              secondaryHref="#/portfolio"
            />
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="pt-28 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <a href="#/case-studies" className="text-sm text-primary hover:underline">
            Back to case studies
          </a>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <CaseStudyDetail study={study} />
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SharedCta
            title="Need a similar implementation?"
            description="Share your requirements and we can scope a matching Build, Grow, or Scale engagement."
            primaryLabel="Get Started"
            primaryHref="#/get-started"
            secondaryLabel="View Portfolio"
            secondaryHref="#/portfolio"
          />
        </div>
      </section>
    </>
  );
}
