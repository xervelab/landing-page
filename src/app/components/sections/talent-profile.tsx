import { TalentProfessional } from "../../models/talent-professional";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";

type TalentProfileProps = {
  professional: TalentProfessional;
};

export function TalentProfile({ professional }: TalentProfileProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
      <Card className="border-border/70 bg-card/90 backdrop-blur-sm">
        <CardContent className="p-6 sm:p-8 space-y-6">
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">{professional.category}</Badge>
              <Badge variant="outline">{professional.availability}</Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl">{professional.displayName}</h1>
            <p className="text-primary font-medium">{professional.role}</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl">Professional Summary</h2>
            <p className="text-muted-foreground">{professional.summary}</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {professional.skills.map((skill) => (
                <Badge key={skill} variant="outline" className="bg-background/80">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card className="border-border/70 bg-card/90">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl">Availability</h2>
            <p className="text-muted-foreground">{professional.availability}</p>
          </CardContent>
        </Card>

        <Card className="border-border/70 bg-card/90">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl">Experience</h2>
            <p className="text-muted-foreground">{professional.experienceYears} years of relevant experience.</p>
          </CardContent>
        </Card>

        <Card className="border-border/70 bg-card/90">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl">Relevant Capabilities</h2>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              {professional.capabilities.map((capability) => (
                <li key={capability}>{capability}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-border/70 bg-card/90">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-xl">Portfolio</h2>
            {professional.portfolio ? (
              <a
                href={professional.portfolio}
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline"
              >
                Open portfolio
              </a>
            ) : (
              <p className="text-muted-foreground">Portfolio link is not provided for this profile.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
