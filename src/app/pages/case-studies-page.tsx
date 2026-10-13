import { PageHero } from "../components/sections/page-hero";
import { SectionShell } from "../components/sections/section-shell";
import { usePageSeo } from "../components/shared/use-page-seo";
import { caseStudies } from "../data/portfolio-projects";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export function CaseStudiesPage() {
  usePageSeo({
    title: "Case Studies | XerveLab",
    description:
      "Explore implementation-focused case studies from XerveLab projects, including challenge, solution, process, and technology context.",
    canonicalUrl: "https://xervelab.online/#/case-studies",
    ogTitle: "Case Studies | XerveLab",
    ogDescription:
      "Browse project case studies with transparent context and no unverified performance claims.",
    ogUrl: "https://xervelab.online/#/case-studies",
    twitterTitle: "Case Studies | XerveLab",
    twitterDescription:
      "Challenge-solution case studies with process and technology breakdowns.",
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
      ],
    },
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "XerveLab Case Studies",
        url: "https://xervelab.online/#/case-studies",
      },
    ],
  });

  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Implementation Stories and Delivery Context"
        description="Each case study is structured to show practical delivery context. Unverified metrics are clearly labeled as unavailable."
      />

      <SectionShell
        title="Case Study Library"
        subtitle="Open each case study to view client context, challenge, solution, process, team, timeline, and technology stack."
      >
        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((study) => (
            <Card key={study.id} className="border-border/70 bg-card/90">
              <CardContent className="p-6 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {study.services.map((service) => (
                    <Badge key={service} variant="secondary">{service}</Badge>
                  ))}
                </div>
                <h2 className="text-2xl">{study.client}</h2>
                <p className="text-sm text-muted-foreground">{study.industry}</p>
                <p className="text-sm text-muted-foreground">{study.challenge}</p>
                {study.resultsLabel ? <p className="text-sm font-medium">{study.resultsLabel}</p> : null}
                <Button asChild>
                  <a href={`#/case-studies/${study.slug}`}>View case study</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
