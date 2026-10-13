import { Building2, Megaphone, Users } from "lucide-react";
import { PageHero } from "../components/sections/page-hero";
import { SectionShell } from "../components/sections/section-shell";
import { ServiceCard } from "../components/cards/service-card";
import { SharedCta } from "../components/shared/shared-cta";
import { usePageSeo } from "../components/shared/use-page-seo";

export function ServicesPage() {
  usePageSeo({
    title: "Services | XerveLab",
    description:
      "Explore XerveLab service pillars: Digital Solutions, Marketing, and Remote Staffing for scalable business growth.",
    canonicalUrl: "https://xervelab.online/#/services",
    ogTitle: "Services | XerveLab",
    ogDescription:
      "Build, Grow, and Scale with integrated digital solutions, marketing execution, and remote staffing.",
    ogUrl: "https://xervelab.online/#/services",
    twitterTitle: "Services | XerveLab",
    twitterDescription:
      "Digital solutions, marketing, and staffing services aligned with your growth stage.",
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
          name: "Services",
          item: "https://xervelab.online/#/services",
        },
      ],
    },
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Digital Solutions",
        provider: {
          "@type": "Organization",
          name: "XerveLab",
          url: "https://xervelab.online/",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Marketing Services",
        provider: {
          "@type": "Organization",
          name: "XerveLab",
          url: "https://xervelab.online/",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Remote Staffing",
        provider: {
          "@type": "Organization",
          name: "XerveLab",
          url: "https://xervelab.online/",
        },
      },
    ],
  });

  return (
    <>
      <PageHero
        eyebrow="Build. Grow. Scale."
        title="Digital solutions, marketing, and remote talent for businesses ready to grow."
        description="Start with the service pillar you need today, then expand across Build, Grow, and Scale as your business evolves."
      />

      <SectionShell
        title="Three Core Service Pillars"
        subtitle="Each pillar has dedicated delivery workflows and specialist support, while staying connected under one strategy."
      >
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          <ServiceCard
            icon={Building2}
            title="BUILD"
            description="Digital Solutions"
            items={[
              "Website Development",
              "E-commerce Development",
              "Web Applications",
              "SEO",
              "AEO/GEO",
              "Automation",
              "Technical Support",
            ]}
            href="#/digital-solutions"
          />
          <ServiceCard
            icon={Megaphone}
            title="GROW"
            description="Marketing & Social"
            items={[
              "Social Media Management",
              "Content Creation",
              "SEO & Content Marketing",
              "Paid Advertising",
              "Lead Generation",
              "Community Management",
              "Analytics & Reporting",
            ]}
            href="#/marketing"
          />
          <ServiceCard
            icon={Users}
            title="SCALE"
            description="Remote Staffing"
            items={[
              "Virtual Assistants",
              "Developers",
              "SEO Specialists",
              "Social Media Managers",
              "Graphic Designers",
              "Video Editors",
              "Customer Support",
              "E-commerce Specialists",
              "Marketing Specialists",
            ]}
            href="#/staffing"
          />
        </div>
      </SectionShell>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SharedCta
            title="Need a tailored combination across pillars?"
            description="Tell us your current stage and goals. We will map a practical execution plan using the right BUILD, GROW, and SCALE mix."
          />
        </div>
      </section>
    </>
  );
}
