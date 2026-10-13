import { ExternalLink, Github, Linkedin } from "lucide-react";
import { TeamMember } from "../../models/team-member";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";

type TeamCardProps = {
  member: TeamMember;
};

export function TeamCard({ member }: TeamCardProps) {
  const socialLinks = [
    member.linkedin
      ? { href: member.linkedin, label: "LinkedIn", icon: <Linkedin className="h-4 w-4" /> }
      : null,
    member.github
      ? { href: member.github, label: "GitHub", icon: <Github className="h-4 w-4" /> }
      : null,
    member.portfolio
      ? { href: member.portfolio, label: "Portfolio", icon: <ExternalLink className="h-4 w-4" /> }
      : null,
  ].filter(Boolean) as Array<{ href: string; label: string; icon: JSX.Element }>;

  return (
    <Card className="border-border/70 bg-card/90 backdrop-blur-sm hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        {member.photo ? (
          <ImageWithFallback
            src={member.photo}
            alt={`${member.name} profile photo`}
            className="h-14 w-14 rounded-xl object-cover border border-border mb-4"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="h-14 w-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 font-semibold">
            {member.name
              .split(" ")
              .map((part) => part[0])
              .join("")
              .slice(0, 2)
              .toUpperCase()}
          </div>
        )}

        <h3 className="text-xl mb-1">{member.name}</h3>
        <p className="text-sm text-primary mb-2">{member.position}</p>
        <p className="text-sm text-muted-foreground mb-4">{member.shortBio}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {member.specializations.map((specialization) => (
            <Badge key={specialization} variant="outline">{specialization}</Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <a href={`#/team/${member.slug}`} className="text-sm font-medium text-primary hover:underline">
            View profile
          </a>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} ${link.label}`}
              className="inline-flex items-center gap-1 rounded-md border border-border px-2 py-1 text-xs text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              {link.icon}
              {link.label}
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
