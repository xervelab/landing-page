import {
  Building,
  Megaphone,
  MonitorCog,
  Palette,
  ShoppingCart,
  Users,
} from "lucide-react";
import { PageHero } from "../components/sections/page-hero";
import { SectionShell } from "../components/sections/section-shell";
import { ServiceCard } from "../components/cards/service-card";
import { SharedCta } from "../components/shared/shared-cta";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { usePageSeo } from "../components/shared/use-page-seo";

export function StaffingPage() {
  usePageSeo({
    title: "Remote Staffing | XerveLab",
    description:
      "Build your remote team with XerveLab through role-based staffing support across technology, marketing, creative, business support, and e-commerce.",
    canonicalUrl: "https://xervelab.online/#/staffing",
    ogTitle: "Build Your Remote Team With XerveLab",
    ogDescription:
      "Find skilled remote professionals from the Philippines without the complexity of building an entire recruitment operation yourself.",
    ogUrl: "https://xervelab.online/#/staffing",
    twitterTitle: "Build Your Remote Team With XerveLab",
    twitterDescription:
      "Role-based remote staffing support from dedicated professionals to managed service workflows.",
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
          name: "Remote Staffing",
          item: "https://xervelab.online/#/staffing",
        },
      ],
    },
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Remote Staffing",
        provider: {
          "@type": "Organization",
          name: "XerveLab",
          url: "https://xervelab.online/",
        },
        areaServed: "Global",
        serviceType: [
          "Technology Staffing",
          "Marketing Staffing",
          "Creative Staffing",
          "Business Support Staffing",
          "E-commerce Staffing",
        ],
      },
    ],
  });

  const staffingSteps = [
    "Tell Us What You Need",
    "We Source & Screen",
    "Meet Your Candidates",
    "Start Working",
    "Scale When Ready",
  ];

  const engagementModels = [
    {
      title: "Dedicated Professional",
      description: "One specialist embedded into your workflow and reporting cadence.",
    },
    {
      title: "Dedicated Team",
      description: "A multi-role team assembled around your priorities and growth stage.",
    },
    {
      title: "Managed Service",
      description: "XerveLab coordinates workflow, communication, and delivery management across selected roles.",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="SCALE"
        title="Build Your Remote Team With XerveLab."
        description="Find skilled remote professionals from the Philippines without the complexity of building an entire recruitment operation yourself."
      >
        <Button asChild size="lg">
          <a href="#/get-started">Build My Team</a>
        </Button>
      </PageHero>

      <SectionShell
        title="How Staffing Works"
        subtitle="A clear process from role definition to team scaling."
      >
        <ol className="grid md:grid-cols-2 xl:grid-cols-5 gap-4">
          {staffingSteps.map((step, index) => (
            <Card key={step} className="h-full border-border/70 bg-card/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <p className="text-sm text-primary mb-3">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="text-lg leading-tight">{step}</h3>
              </CardContent>
            </Card>
          ))}
        </ol>
      </SectionShell>

      <SectionShell
        title="Talent Categories"
        subtitle="Role-based staffing categories that can be combined into flexible remote team structures."
      >
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          <ServiceCard
            icon={MonitorCog}
            title="Technology"
            description="Product and technical roles for build and maintenance work."
            items={[
              "Frontend Developer",
              "Backend Developer",
              "Full Stack Developer",
              "WordPress Developer",
              "Shopify Developer",
              "QA Tester",
              "IT Support",
              "Automation Specialist",
            ]}
            itemsDisplay="list"
            href="#/staffing/technology"
            ctaLabel="View Technology Track"
          />

          <ServiceCard
            icon={Megaphone}
            title="Marketing"
            description="Growth roles supporting visibility, demand, and funnel execution."
            items={[
              "SEO Specialist",
              "AEO/GEO Specialist",
              "Social Media Manager",
              "PPC Specialist",
              "Content Writer",
              "Email Marketing Specialist",
              "Lead Generation Specialist",
            ]}
            itemsDisplay="list"
            href="#/staffing/marketing"
            ctaLabel="View Marketing Track"
          />

          <ServiceCard
            icon={Palette}
            title="Creative"
            description="Creative production roles for brand and campaign execution."
            items={[
              "Graphic Designer",
              "UI/UX Designer",
              "Video Editor",
              "Motion Designer",
              "Content Creator",
            ]}
            itemsDisplay="list"
            href="#/staffing/creative"
            ctaLabel="View Creative Track"
          />

          <ServiceCard
            icon={Building}
            title="Business Support"
            description="Operations and support roles for consistent day-to-day business flow."
            items={[
              "Virtual Assistant",
              "Executive Assistant",
              "Customer Support",
              "Data Entry Specialist",
              "Appointment Setter",
              "Administrative Assistant",
            ]}
            itemsDisplay="list"
            href="#/staffing/business-support"
            ctaLabel="View Business Support Track"
          />

          <ServiceCard
            icon={ShoppingCart}
            title="E-commerce"
            description="Store operations roles for product and customer lifecycle workflows."
            items={[
              "Shopify Specialist",
              "WooCommerce Specialist",
              "Product Listing Specialist",
              "Customer Support",
              "Order Management",
            ]}
            itemsDisplay="list"
            href="#/staffing"
            ctaLabel="Build E-commerce Team"
          />
        </div>
      </SectionShell>

      <SectionShell
        title="Engagement Models"
        subtitle="Choose the staffing model that fits your team structure and operating rhythm."
      >
        <div className="grid md:grid-cols-3 gap-6">
          {engagementModels.map((model) => (
            <Card key={model.title} className="border-border/70 bg-card/90 backdrop-blur-sm h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="text-xl mb-3">{model.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 flex-1">{model.description}</p>
                <Button asChild variant="outline" className="w-full">
                  <a href="#/get-started">Choose {model.title}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        title="Staffing vs Managed Service"
        subtitle="Use staffing when you want direct day-to-day control, or managed service when you want operational coordination support."
        className="bg-gradient-to-b from-violet-500/5 via-background/70 to-transparent"
      >
        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="border-border/70 bg-card/90 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-2xl mb-3">Staffing</h3>
              <p className="text-muted-foreground mb-4">
                You select dedicated professionals and manage direction, priorities, and daily collaboration inside your existing internal workflow.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Direct role support</Badge>
                <Badge variant="outline">Flexible team assembly</Badge>
                <Badge variant="outline">Internal workflow control</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/70 bg-card/90 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-2xl mb-3">Managed Service</h3>
              <p className="text-muted-foreground mb-4">
                XerveLab helps coordinate team workflow, communication, and reporting across selected roles while you stay focused on business priorities.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Coordinated delivery workflow</Badge>
                <Badge variant="outline">Operational support layer</Badge>
                <Badge variant="outline">Structured reporting rhythm</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </SectionShell>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SharedCta
            title="Ready to build your remote team?"
            description="Tell us the roles, responsibilities, and delivery priorities you need, and we will map a practical staffing approach for your business."
            primaryLabel="Build My Team"
            primaryHref="#/get-started"
            secondaryLabel="Explore Services"
            secondaryHref="#/services"
          />
        </div>
      </section>
    </>
  );
}
