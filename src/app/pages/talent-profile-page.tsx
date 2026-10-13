import { PageHero } from "../components/sections/page-hero";
import { TalentProfile } from "../components/sections/talent-profile";
import { SharedCta } from "../components/shared/shared-cta";
import { usePageSeo } from "../components/shared/use-page-seo";
import { getTalentProfessionalBySlug, isUsingSampleTalentData } from "../data/talent-network";
import { Card, CardContent } from "../components/ui/card";

type TalentProfilePageProps = {
  slug: string;
};

export function TalentProfilePage({ slug }: TalentProfilePageProps) {
  const professional = getTalentProfessionalBySlug(slug);

  const notFoundTitle = "Talent Profile Not Found | XerveLab";
  const notFoundDescription =
    "This talent profile is not currently published. Return to the talent network to view available profiles.";

  usePageSeo({
    title: professional ? `${professional.displayName} | Talent Network | XerveLab` : notFoundTitle,
    description: professional ? professional.summary : notFoundDescription,
    canonicalUrl: `https://xervelab.online/#/talent/${slug}`,
    ogTitle: professional ? `${professional.displayName} | Talent Network | XerveLab` : notFoundTitle,
    ogDescription: professional ? professional.summary : notFoundDescription,
    ogUrl: `https://xervelab.online/#/talent/${slug}`,
    twitterTitle: professional ? `${professional.displayName} | Talent Network | XerveLab` : notFoundTitle,
    twitterDescription: professional ? professional.summary : notFoundDescription,
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
          name: "Talent",
          item: "https://xervelab.online/#/talent",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: professional ? professional.displayName : "Profile",
          item: `https://xervelab.online/#/talent/${slug}`,
        },
      ],
    },
  });

  if (!professional) {
    return (
      <>
        <PageHero
          eyebrow="Talent Network"
          title="Talent Profile Not Found"
          description="This profile is not published yet. Return to the talent page to view available profiles."
        />
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <SharedCta
              title="Need to staff a role now?"
              description="Tell us your role requirements and we will help match available professionals."
              primaryLabel="Request Talent"
              primaryHref="#/get-started"
              secondaryLabel="Back to Talent"
              secondaryHref="#/talent"
            />
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="pt-28 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          <a href="#/talent" className="text-sm text-primary hover:underline">
            Back to talent network
          </a>
          {isUsingSampleTalentData ? (
            <Card className="border-dashed border-border/70 bg-card/70">
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">
                  Sample profile only. This entry exists for route and UI validation and is not published as a real employee profile.
                </p>
              </CardContent>
            </Card>
          ) : null}
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <TalentProfile professional={professional} />
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SharedCta
            title="Request This Professional"
            description="Send role goals, timeline, and required skills to begin matching and onboarding."
            primaryLabel="Request This Professional"
            primaryHref={`#/get-started?plan=talent-${professional.slug}`}
            secondaryLabel="View Talent Network"
            secondaryHref="#/talent"
          />
        </div>
      </section>
    </>
  );
}
