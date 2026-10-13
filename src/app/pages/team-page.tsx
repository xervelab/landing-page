import { PageHero } from "../components/sections/page-hero";
import { SectionShell } from "../components/sections/section-shell";
import { TeamGrid } from "../components/sections/team-grid";
import { SharedCta } from "../components/shared/shared-cta";
import { getActiveTeamMembers, teamMembers } from "../data/team-members";
import { usePageSeo } from "../components/shared/use-page-seo";
import { Card, CardContent } from "../components/ui/card";

export function TeamPage() {
  const activeMembers = getActiveTeamMembers();
  const hasPublishedMembers = activeMembers.length > 0;

  usePageSeo({
    title: "Team | XerveLab",
    description:
      "Meet the people behind XerveLab, a multidisciplinary team of developers, marketers, designers, and digital specialists.",
    canonicalUrl: "https://xervelab.online/#/team",
    ogTitle: "Meet the People Behind XerveLab",
    ogDescription:
      "A multidisciplinary team of developers, marketers, designers, and digital specialists helping businesses build and grow online.",
    ogUrl: "https://xervelab.online/#/team",
    twitterTitle: "Meet the People Behind XerveLab",
    twitterDescription:
      "A multidisciplinary team helping businesses build and grow online.",
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
          name: "Team",
          item: "https://xervelab.online/#/team",
        },
      ],
    },
  });

  return (
    <>
      <PageHero
        eyebrow="Company"
        title="Meet the People Behind XerveLab"
        description="A multidisciplinary team of developers, marketers, designers, and digital specialists helping businesses build and grow online."
      />

      <SectionShell
        title="Team"
        subtitle="Only verified team member profiles are published. Use the data structure placeholders to add approved member details."
      >
        {hasPublishedMembers ? (
          <TeamGrid members={activeMembers} />
        ) : (
          <div className="space-y-6">
            <Card className="border-border/70 bg-card/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-2xl mb-2">No published team profiles yet</h3>
                <p className="text-muted-foreground">
                  Team profile publishing is currently pending administrator updates. Add real team member information in the team data source and set <strong>isActive</strong> to true for profiles that are ready for public view.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {teamMembers.map((placeholder) => (
                <Card key={placeholder.id} className="border-dashed border-border/70 bg-card/75">
                  <CardContent className="p-6">
                    <h4 className="text-lg mb-1">Template: {placeholder.slug}</h4>
                    <p className="text-sm text-muted-foreground">Replace with a verified team profile before publishing.</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </SectionShell>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SharedCta
            title="Want to work with the XerveLab team?"
            description="Share your business goals and we will recommend the right specialists and collaboration model."
            primaryLabel="Get Started"
            primaryHref="#/get-started"
            secondaryLabel="Explore Services"
            secondaryHref="#/services"
          />
        </div>
      </section>
    </>
  );
}
