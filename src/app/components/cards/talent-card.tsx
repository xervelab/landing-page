import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { TalentProfessional } from "../../models/talent-professional";

type LegacyTalentCardProps = {
  title: string;
  summary: string;
  href?: string;
};

type TalentProfessionalCardProps = {
  professional: TalentProfessional;
};

type TalentCardProps = LegacyTalentCardProps | TalentProfessionalCardProps;

function isProfessionalCard(props: TalentCardProps): props is TalentProfessionalCardProps {
  return "professional" in props;
}

export function TalentCard(props: TalentCardProps) {
  if (isProfessionalCard(props)) {
    const { professional } = props;
    const topSkills = professional.skills.slice(0, 4);

    return (
      <Card className="h-full border-border/70 bg-card/90 backdrop-blur-sm hover:shadow-lg transition-shadow">
        <CardContent className="p-6 flex h-full flex-col gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">{professional.category}</Badge>
              <Badge variant="outline">{professional.availability}</Badge>
            </div>
            <h3 className="text-xl">{professional.displayName}</h3>
            <p className="text-sm font-medium text-primary">{professional.role}</p>
            <p className="text-sm text-muted-foreground">{professional.summary}</p>
          </div>

          <div className="space-y-3">
            <p className="text-sm">
              <span className="font-medium">Experience:</span> {professional.experienceYears} years
            </p>
            <div className="flex flex-wrap gap-2">
              {topSkills.map((skill) => (
                <Badge key={skill} variant="outline" className="bg-background/80">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mt-auto flex flex-wrap items-center gap-4 text-sm">
            <a href={`#/talent/${professional.slug}`} className="font-medium text-primary hover:underline">
              View profile
            </a>
            {professional.portfolio ? (
              <a
                href={professional.portfolio}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-primary hover:underline"
              >
                Portfolio
              </a>
            ) : null}
            <a
              href={`#/get-started?plan=talent-${professional.slug}`}
              className="font-medium text-primary hover:underline"
            >
              Request This Professional
            </a>
          </div>
        </CardContent>
      </Card>
    );
  }

  const { title, summary, href } = props;

  return (
    <Card className="border-border/70 bg-card/90 backdrop-blur-sm hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <h3 className="text-xl mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{summary}</p>
        {href ? (
          <a href={href} className="text-sm font-medium text-primary hover:underline">
            View track
          </a>
        ) : null}
      </CardContent>
    </Card>
  );
}
