import {
  Bot,
  Globe,
  Headset,
  Search,
  ShoppingCart,
  Sparkles,
} from "lucide-react";
import { PageHero } from "../components/sections/page-hero";
import { SectionShell } from "../components/sections/section-shell";
import { ServiceCard } from "../components/cards/service-card";
import { SharedCta } from "../components/shared/shared-cta";
import { Button } from "../components/ui/button";
import { usePageSeo } from "../components/shared/use-page-seo";

export function DigitalSolutionsPage() {
  usePageSeo({
    title: "Digital Solutions | XerveLab",
    description:
      "Digital solutions built around your business, from websites and e-commerce to SEO, automation, and custom web applications.",
    canonicalUrl: "https://xervelab.online/#/digital-solutions",
    ogTitle: "Digital Solutions Built Around Your Business | XerveLab",
    ogDescription:
      "From websites and e-commerce platforms to SEO, automation, and custom web applications, XerveLab helps businesses build reliable digital infrastructure.",
    ogUrl: "https://xervelab.online/#/digital-solutions",
    twitterTitle: "Digital Solutions Built Around Your Business | XerveLab",
    twitterDescription:
      "Build reliable digital infrastructure with websites, e-commerce, SEO, automation, and custom web applications.",
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
          name: "Digital Solutions",
          item: "https://xervelab.online/#/digital-solutions",
        },
      ],
    },
  });

  return (
    <>
      <PageHero
        eyebrow="BUILD"
        title="Digital Solutions Built Around Your Business"
        description="From websites and e-commerce platforms to SEO, automation, and custom web applications, XerveLab helps businesses build reliable digital infrastructure."
      >
        <Button asChild size="lg">
          <a href="#/get-started">Start a Project</a>
        </Button>
      </PageHero>

      <SectionShell
        title="Services"
        subtitle="Choose a focused service or combine capabilities into a delivery roadmap aligned to your business goals."
      >
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          <ServiceCard
            icon={Globe}
            title="Website Development"
            description="High-performing web builds for business and growth."
            items={[
              "Business websites",
              "Landing pages",
              "Corporate websites",
              "Web applications",
            ]}
            itemsDisplay="list"
            href="#/get-started"
            ctaLabel="Start a Website Project"
          />

          <ServiceCard
            icon={ShoppingCart}
            title="E-commerce"
            description="Online selling systems designed for operations and scale."
            items={[
              "Shopify",
              "WooCommerce",
              "Custom e-commerce",
              "Product/catalog systems",
            ]}
            itemsDisplay="list"
            href="#/get-started"
            ctaLabel="Start an E-commerce Project"
          />

          <ServiceCard
            icon={Search}
            title="SEO"
            description="Search visibility built on technical and content foundations."
            items={[
              "Technical SEO",
              "On-page SEO",
              "Content strategy",
              "Search Console",
              "Analytics",
              "Local SEO",
            ]}
            itemsDisplay="list"
            href="#/get-started"
            ctaLabel="Start an SEO Project"
          />

          <ServiceCard
            icon={Sparkles}
            title="AEO / GEO"
            description="Optimization strategies for AI-driven and entity-aware search contexts."
            items={[
              "AI search optimization",
              "Structured content",
              "Entity optimization",
              "FAQ content",
              "Schema implementation",
            ]}
            itemsDisplay="list"
            href="#/get-started"
            ctaLabel="Plan AEO / GEO Work"
          />

          <ServiceCard
            icon={Bot}
            title="Automation"
            description="Workflow and integration systems that reduce manual work."
            items={[
              "API integrations",
              "Business workflows",
              "CRM automation",
              "Internal tools",
            ]}
            itemsDisplay="list"
            href="#/get-started"
            ctaLabel="Start an Automation Project"
          />

          <ServiceCard
            icon={Headset}
            title="Maintenance"
            description="Ongoing reliability and support for your digital assets."
            items={[
              "Security updates",
              "Performance",
              "Bug fixing",
              "Monitoring",
            ]}
            itemsDisplay="list"
            href="#/get-started"
            ctaLabel="Request Maintenance Support"
          />
        </div>
      </SectionShell>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SharedCta
            title="Need a tailored digital solution roadmap?"
            description="Share your current setup, business goals, and priorities. We will map the right digital solutions stack for your next phase."
            primaryLabel="Start a Project"
            primaryHref="#/get-started"
            secondaryLabel="Explore Services"
            secondaryHref="#/services"
          />
        </div>
      </section>
    </>
  );
}
