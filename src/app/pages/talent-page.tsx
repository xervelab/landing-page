import { useMemo, useState } from "react";
import { PageHero } from "../components/sections/page-hero";
import { SectionShell } from "../components/sections/section-shell";
import { TalentCard } from "../components/cards/talent-card";
import { SharedCta } from "../components/shared/shared-cta";
import { usePageSeo } from "../components/shared/use-page-seo";
import {
  getPublishedTalentProfessionals,
  isUsingSampleTalentData,
} from "../data/talent-network";
import { Card, CardContent } from "../components/ui/card";
import { TalentAvailability, TalentCategory } from "../models/talent-professional";

type ExperienceFilter = "all" | "0-2" | "3-5" | "6-9" | "10+";

const experienceFilterOptions: Array<{ label: string; value: ExperienceFilter }> = [
  { label: "All", value: "all" },
  { label: "0-2 years", value: "0-2" },
  { label: "3-5 years", value: "3-5" },
  { label: "6-9 years", value: "6-9" },
  { label: "10+ years", value: "10+" },
];

function matchesExperience(value: number, filter: ExperienceFilter) {
  switch (filter) {
    case "0-2":
      return value >= 0 && value <= 2;
    case "3-5":
      return value >= 3 && value <= 5;
    case "6-9":
      return value >= 6 && value <= 9;
    case "10+":
      return value >= 10;
    case "all":
    default:
      return true;
  }
}

export function TalentPage() {
  const professionals = getPublishedTalentProfessionals();

  const [selectedCategory, setSelectedCategory] = useState<"all" | TalentCategory>("all");
  const [selectedRole, setSelectedRole] = useState("all");
  const [selectedSkill, setSelectedSkill] = useState("all");
  const [selectedExperience, setSelectedExperience] = useState<ExperienceFilter>("all");
  const [selectedAvailability, setSelectedAvailability] = useState<"all" | TalentAvailability>("all");

  const categoryOptions = useMemo(
    () => Array.from(new Set(professionals.map((professional) => professional.category))).sort(),
    [professionals],
  );

  const roleOptions = useMemo(
    () => Array.from(new Set(professionals.map((professional) => professional.role))).sort(),
    [professionals],
  );

  const skillOptions = useMemo(
    () =>
      Array.from(new Set(professionals.flatMap((professional) => professional.skills)))
        .sort()
        .slice(0, 50),
    [professionals],
  );

  const availabilityOptions = useMemo(
    () => Array.from(new Set(professionals.map((professional) => professional.availability))).sort(),
    [professionals],
  );

  const filteredProfessionals = useMemo(
    () =>
      professionals.filter((professional) => {
        const categoryMatch = selectedCategory === "all" || professional.category === selectedCategory;
        const roleMatch = selectedRole === "all" || professional.role === selectedRole;
        const skillMatch = selectedSkill === "all" || professional.skills.includes(selectedSkill);
        const experienceMatch = matchesExperience(professional.experienceYears, selectedExperience);
        const availabilityMatch =
          selectedAvailability === "all" || professional.availability === selectedAvailability;

        return categoryMatch && roleMatch && skillMatch && experienceMatch && availabilityMatch;
      }),
    [
      professionals,
      selectedAvailability,
      selectedCategory,
      selectedExperience,
      selectedRole,
      selectedSkill,
    ],
  );

  usePageSeo({
    title: "Talent Network | XerveLab",
    description:
      "Browse XerveLab Talent Network professionals by category, role, skills, experience, and availability.",
    canonicalUrl: "https://xervelab.online/#/talent",
    ogTitle: "Talent Network | XerveLab",
    ogDescription:
      "Find professionals available for staffing engagements across technology, marketing, creative, business support, and e-commerce.",
    ogUrl: "https://xervelab.online/#/talent",
    twitterTitle: "Talent Network | XerveLab",
    twitterDescription:
      "Filter professionals by role, skills, experience, and availability.",
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
      ],
    },
  });

  return (
    <>
      <PageHero
        eyebrow="Staffing"
        title="XerveLab Talent Network"
        description="Explore professionals available for staffing engagements. Team members who operate XerveLab are listed separately under the Team section."
      />

      <SectionShell
        title="Find the Right Professional"
        subtitle="Use filters for category, role, skills, experience, and availability to shortlist talent."
      >
        {isUsingSampleTalentData ? (
          <Card className="mb-8 border-dashed border-border/70 bg-card/70">
            <CardContent className="p-5">
              <p className="text-sm text-muted-foreground">
                Showing sample data only. These profiles are placeholders for architecture validation and do not represent real employees or published client-facing professionals.
              </p>
            </CardContent>
          </Card>
        ) : null}

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          <label className="space-y-2 text-sm">
            <span className="font-medium">Category</span>
            <select
              value={selectedCategory}
              onChange={(event) => setSelectedCategory(event.target.value as "all" | TalentCategory)}
              className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
            >
              <option value="all">All categories</option>
              {categoryOptions.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>

          <label className="space-y-2 text-sm">
            <span className="font-medium">Role</span>
            <select
              value={selectedRole}
              onChange={(event) => setSelectedRole(event.target.value)}
              className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
            >
              <option value="all">All roles</option>
              {roleOptions.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </label>

          <label className="space-y-2 text-sm">
            <span className="font-medium">Skills</span>
            <select
              value={selectedSkill}
              onChange={(event) => setSelectedSkill(event.target.value)}
              className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
            >
              <option value="all">All skills</option>
              {skillOptions.map((skill) => (
                <option key={skill} value={skill}>
                  {skill}
                </option>
              ))}
            </select>
          </label>

          <label className="space-y-2 text-sm">
            <span className="font-medium">Experience</span>
            <select
              value={selectedExperience}
              onChange={(event) => setSelectedExperience(event.target.value as ExperienceFilter)}
              className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
            >
              {experienceFilterOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="space-y-2 text-sm">
            <span className="font-medium">Availability</span>
            <select
              value={selectedAvailability}
              onChange={(event) =>
                setSelectedAvailability(event.target.value as "all" | TalentAvailability)
              }
              className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
            >
              <option value="all">All availability</option>
              {availabilityOptions.map((availability) => (
                <option key={availability} value={availability}>
                  {availability}
                </option>
              ))}
            </select>
          </label>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          {filteredProfessionals.length} professional{filteredProfessionals.length === 1 ? "" : "s"} matched your filters.
        </p>

        <div className="mt-6 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProfessionals.map((professional) => (
            <TalentCard key={professional.id} professional={professional} />
          ))}
        </div>

        {filteredProfessionals.length === 0 ? (
          <Card className="mt-6 border-border/70 bg-card/90">
            <CardContent className="p-6">
              <h3 className="text-xl mb-2">No professionals match the current filters</h3>
              <p className="text-muted-foreground">
                Adjust one or more filter values to widen your shortlist.
              </p>
            </CardContent>
          </Card>
        ) : null}
      </SectionShell>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SharedCta
            title="Need to source talent quickly?"
            description="Send your role requirements and we will help shortlist professionals based on capabilities, availability, and engagement fit."
            primaryLabel="Request Talent"
            primaryHref="#/get-started"
            secondaryLabel="View Staffing"
            secondaryHref="#/staffing"
          />
        </div>
      </section>
    </>
  );
}
