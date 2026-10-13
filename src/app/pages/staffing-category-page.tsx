import { PageHero } from "../components/sections/page-hero";
import { SectionShell } from "../components/sections/section-shell";
import { TalentCard } from "../components/cards/talent-card";
import { SharedCta } from "../components/shared/shared-cta";
import { usePageSeo } from "../components/shared/use-page-seo";

type StaffingCategoryPageProps = {
  category: "technology" | "marketing" | "creative" | "business-support";
};

const categoryMap: Record<StaffingCategoryPageProps["category"], { title: string; roles: string[]; summary: string }> = {
  technology: {
    title: "Technology Staffing",
    summary: "Technical contributors for product and platform execution.",
    roles: ["Frontend Developers", "Backend Developers", "QA Specialists", "Technical Support"],
  },
  marketing: {
    title: "Marketing Staffing",
    summary: "Growth-focused contributors for demand and visibility.",
    roles: ["SEO Specialists", "Social Media Managers", "Paid Ads Specialists", "Content Marketers"],
  },
  creative: {
    title: "Creative Staffing",
    summary: "Creative specialists for visual communication and brand assets.",
    roles: ["Graphic Designers", "Video Editors", "Brand Designers", "Content Creators"],
  },
  "business-support": {
    title: "Business Support Staffing",
    summary: "Operational support roles to keep teams efficient and responsive.",
    roles: ["Virtual Assistants", "Customer Support", "E-commerce Specialists", "Operations Assistants"],
  },
};

export function StaffingCategoryPage({ category }: StaffingCategoryPageProps) {
  const categoryData = categoryMap[category];
  const canonical = `https://xervelab.online/#/staffing/${category}`;

  usePageSeo({
    title: `${categoryData.title} | XerveLab`,
    description: categoryData.summary,
    canonicalUrl: canonical,
    ogTitle: `${categoryData.title} | XerveLab`,
    ogDescription: categoryData.summary,
    ogUrl: canonical,
    twitterTitle: `${categoryData.title} | XerveLab`,
    twitterDescription: categoryData.summary,
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
          name: "Staffing",
          item: "https://xervelab.online/#/staffing",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: categoryData.title,
          item: canonical,
        },
      ],
    },
  });

  return (
    <>
      <PageHero
        eyebrow="SCALE"
        title={categoryData.title}
        description={categoryData.summary}
      />

      <SectionShell
        title="Talent Roles"
        subtitle="Role-specific delivery models can be expanded in future stages without breaking current route architecture."
      >
        <div className="grid md:grid-cols-2 gap-6">
          {categoryData.roles.map((role) => (
            <TalentCard key={role} title={role} summary="Role profile and engagement details will be expanded in upcoming stages." />
          ))}
        </div>
      </SectionShell>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SharedCta
            title="Ready to shortlist this talent track?"
            description="Use the project intake form to define role count, priorities, and preferred start timeline."
            primaryLabel="Start Intake"
          />
        </div>
      </section>
    </>
  );
}
