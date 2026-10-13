import { TeamProfile } from "../components/sections/team-profile";
import { SharedCta } from "../components/shared/shared-cta";
import { getTeamMemberBySlug } from "../data/team-members";
import { usePageSeo } from "../components/shared/use-page-seo";
import { PageHero } from "../components/sections/page-hero";

type TeamProfilePageProps = {
  slug: string;
};

export function TeamProfilePage({ slug }: TeamProfilePageProps) {
  const member = getTeamMemberBySlug(slug);

  const notFoundTitle = "Team Profile Not Found | XerveLab";
  const notFoundDescription =
    "This team profile is not published yet. Return to the team page to view available profiles.";

  usePageSeo({
    title: member ? `${member.name} | XerveLab Team` : notFoundTitle,
    description: member ? member.shortBio : notFoundDescription,
    canonicalUrl: `https://xervelab.online/#/team/${slug}`,
    ogTitle: member ? `${member.name} | XerveLab Team` : notFoundTitle,
    ogDescription: member ? member.shortBio : notFoundDescription,
    ogUrl: `https://xervelab.online/#/team/${slug}`,
    twitterTitle: member ? `${member.name} | XerveLab Team` : notFoundTitle,
    twitterDescription: member ? member.shortBio : notFoundDescription,
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
        {
          "@type": "ListItem",
          position: 3,
          name: member ? member.name : "Profile",
          item: `https://xervelab.online/#/team/${slug}`,
        },
      ],
    },
    structuredData: member
      ? [
          {
            "@context": "https://schema.org",
            "@type": "Person",
            name: member.name,
            jobTitle: member.position,
            description: member.shortBio,
            url: `https://xervelab.online/#/team/${member.slug}`,
            image: member.photo || undefined,
            sameAs: [member.linkedin, member.github, member.portfolio].filter(Boolean),
            worksFor: {
              "@type": "Organization",
              name: "XerveLab",
              url: "https://xervelab.online/",
            },
          },
        ]
      : undefined,
  });

  return (
    <>
      {member ? (
        <>
          <section className="pt-28 pb-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <a href="#/team" className="text-sm text-primary hover:underline">
                Back to team
              </a>
            </div>
          </section>

          <section className="pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <TeamProfile member={member} />
            </div>
          </section>

          <section className="pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <SharedCta
                title="Need a team aligned to your business goals?"
                description="Tell us what you need and we will recommend the right collaboration model and specialists."
                primaryLabel="Get Started"
                primaryHref="#/get-started"
                secondaryLabel="View Services"
                secondaryHref="#/services"
              />
            </div>
          </section>
        </>
      ) : (
        <>
          <PageHero
            eyebrow="XerveLab"
            title="Team Profile Not Found"
            description="This profile is not published yet. Return to the team page to view available profiles."
          />
          <section className="pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <SharedCta
                title="Need help now?"
                description="This profile route is active, but the member profile is not yet published."
                primaryLabel="Start Your Project"
                primaryHref="#/get-started"
                secondaryLabel="Back to Team"
                secondaryHref="#/team"
              />
            </div>
          </section>
        </>
      )}
    </>
  );
}
