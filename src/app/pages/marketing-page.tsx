import {
  BarChart3,
  Megaphone,
  PenLine,
  Search,
  Share2,
  Target,
  Users,
} from "lucide-react";
import { PageHero } from "../components/sections/page-hero";
import { SectionShell } from "../components/sections/section-shell";
import { ServiceCard } from "../components/cards/service-card";
import { SharedCta } from "../components/shared/shared-cta";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { usePageSeo } from "../components/shared/use-page-seo";

export function MarketingPage() {
  usePageSeo({
    title: "Marketing | XerveLab",
    description:
      "Turn social media into a growth channel with flexible marketing support from specialists to managed marketing teams.",
    canonicalUrl: "https://xervelab.online/#/marketing",
    ogTitle: "Marketing That Builds Your Brand and Drives Growth | XerveLab",
    ogDescription:
      "Combine strategy, content, social media, SEO, advertising, and analytics with a flexible team built around your business.",
    ogUrl: "https://xervelab.online/#/marketing",
    twitterTitle: "Marketing That Builds Your Brand and Drives Growth | XerveLab",
    twitterDescription:
      "Flexible marketing support from individual specialists to complete managed marketing teams.",
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
          name: "Marketing",
          item: "https://xervelab.online/#/marketing",
        },
      ],
    },
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Marketing Services",
        provider: {
          "@type": "Organization",
          name: "XerveLab",
          url: "https://xervelab.online/",
        },
        areaServed: "Global",
        serviceType: [
          "Social Media Management",
          "Content Production",
          "Paid Advertising",
          "SEO & Content",
          "Lead Generation",
          "Analytics Reporting",
        ],
      },
    ],
  });

  const managedTeamRoles = [
    "Social Media Manager",
    "Graphic Designer",
    "Video Editor",
    "SEO Specialist",
  ];

  const engagementModels = [
    {
      title: "Dedicated Professional",
      description: "One specialist embedded in your workflow for focused execution.",
    },
    {
      title: "Dedicated Team",
      description: "A multi-role team aligned to your goals, timeline, and reporting cadence.",
    },
    {
      title: "Managed Service",
      description: "XerveLab manages the day-to-day marketing workflow, coordination, and delivery.",
    },
    {
      title: "Project-Based",
      description: "Defined-scope campaigns and deliverables for launch, growth, or optimization work.",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="GROW"
        title="Marketing That Builds Your Brand and Drives Growth"
        description="Combine strategy, content, social media, SEO, advertising, and analytics with a flexible team built around your business."
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild size="lg">
            <a href="#/get-started">Build My Marketing Team</a>
          </Button>
          <Badge variant="secondary" className="w-fit rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-primary">
            Turn Social Media Into a Growth Channel.
          </Badge>
        </div>
      </PageHero>

      <SectionShell
        title="Service Categories"
        subtitle="XerveLab provides marketing support ranging from individual specialists to complete managed marketing teams."
      >
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          <ServiceCard
            icon={Share2}
            title="Social Media Management"
            description="Plan, publish, and manage daily social presence across key channels."
            items={[
              "Facebook",
              "Instagram",
              "LinkedIn",
              "TikTok",
              "X",
              "Content calendars",
              "Publishing",
              "Community management",
            ]}
            itemsDisplay="list"
            href="#/get-started"
            ctaLabel="Start Social Media Support"
          />

          <ServiceCard
            icon={PenLine}
            title="Content"
            description="Multi-format content support built around your goals and channels."
            items={[
              "Copywriting",
              "Graphics",
              "Short-form video",
              "Reels",
              "Content strategy",
            ]}
            itemsDisplay="list"
            href="#/get-started"
            ctaLabel="Start Content Production"
          />

          <ServiceCard
            icon={Megaphone}
            title="Paid Advertising"
            description="Campaign setup and optimization focused on efficient spend and signal clarity."
            items={[
              "Meta Ads",
              "Campaign setup",
              "Audience targeting",
              "Creative testing",
              "Optimization",
              "Reporting",
            ]}
            itemsDisplay="list"
            href="#/get-started"
            ctaLabel="Launch Paid Campaigns"
          />

          <ServiceCard
            icon={Search}
            title="SEO & Content"
            description="Organic growth through technical foundations and structured content execution."
            items={[
              "Technical SEO",
              "Keyword research",
              "Content strategy",
              "On-page SEO",
              "AEO/GEO",
            ]}
            itemsDisplay="list"
            href="#/get-started"
            ctaLabel="Start SEO Work"
          />

          <ServiceCard
            icon={Target}
            title="Lead Generation"
            description="Pipeline support from research to outreach and CRM follow-through."
            items={[
              "Prospect research",
              "Lead qualification",
              "Outreach support",
              "CRM management",
            ]}
            itemsDisplay="list"
            href="#/get-started"
            ctaLabel="Build Lead Pipeline"
          />

          <ServiceCard
            icon={BarChart3}
            title="Analytics"
            description="Channel and campaign reporting to support decision-making and iteration."
            items={[
              "GA4",
              "Search Console",
              "Social analytics",
              "Campaign reporting",
              "Monthly reports",
            ]}
            itemsDisplay="list"
            href="#/get-started"
            ctaLabel="Set Up Reporting"
          />
        </div>
      </SectionShell>

      <SectionShell
        title="Managed Marketing Team"
        subtitle="XerveLab can combine specialists into one managed workflow so your campaigns, content, and optimization stay coordinated."
        className="bg-gradient-to-b from-violet-500/5 via-background/70 to-transparent"
      >
        <Card className="border-border/70 bg-card/90 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h3 className="text-2xl mb-3">Core Team Composition</h3>
                <p className="text-muted-foreground mb-5">
                  Start with the core roles below and expand based on channels, campaign intensity, and reporting requirements.
                </p>
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  {managedTeamRoles.map((role, index) => (
                    <div key={role} className="flex items-center gap-2">
                      <Badge variant="outline">{role}</Badge>
                      {index < managedTeamRoles.length - 1 ? <span className="text-muted-foreground">+</span> : null}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Button asChild size="lg">
                  <a href="#/get-started">Build My Marketing Team</a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </SectionShell>

      <SectionShell
        title="Engagement Models"
        subtitle="Select a working model that matches your current team setup, goals, and execution cadence."
      >
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
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

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SharedCta
            title="Ready to turn marketing into a scalable growth channel?"
            description="Tell us your goals, channels, and current constraints. We will propose the right team structure and service model for your next phase."
            primaryLabel="Build My Marketing Team"
            primaryHref="#/get-started"
            secondaryLabel="Explore Services"
            secondaryHref="#/services"
          />
        </div>
      </section>
    </>
  );
}
