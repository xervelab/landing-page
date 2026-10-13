import { ExternalLink, Github, Linkedin } from "lucide-react";
import { TeamMember } from "../../models/team-member";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";

type TeamProfileProps = {
  member: TeamMember;
};

function ProfileImage({ member }: TeamProfileProps) {
  if (member.photo) {
    return (
      <ImageWithFallback
        src={member.photo}
        alt={`${member.name} profile photo`}
        className="h-36 w-36 rounded-xl object-cover border border-border"
        loading="lazy"
        decoding="async"
      />
    );
  }

  return (
    <div className="h-36 w-36 rounded-xl border border-border bg-card/70 flex items-center justify-center text-2xl font-semibold text-primary">
      {member.name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()}
    </div>
  );
}

function SocialLinks({ member }: TeamProfileProps) {
  const links = [
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

  if (!links.length) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
        >
          {link.icon}
          {link.label}
        </a>
      ))}
    </div>
  );
}

export function TeamProfile({ member }: TeamProfileProps) {
  return (
    <div className="space-y-6">
      <Card className="border-border/70 bg-card/90 backdrop-blur-sm">
        <CardContent className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row gap-6 sm:items-start">
            <ProfileImage member={member} />
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl bg-gradient-to-r from-foreground via-blue-600 to-violet-500 bg-clip-text text-transparent dark:from-white dark:via-cyan-200 dark:to-violet-300">
                {member.name}
              </h1>
              <p className="mt-2 text-primary font-medium">{member.position}</p>
              <h2 className="mt-5 text-xl">Professional Summary</h2>
              <p className="mt-2 text-muted-foreground">{member.bio}</p>
              <SocialLinks member={member} />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="border-border/70 bg-card/90 backdrop-blur-sm">
          <CardContent className="p-6">
            <h2 className="text-2xl mb-4">Specializations</h2>
            {member.specializations.length ? (
              <div className="flex flex-wrap gap-2">
                {member.specializations.map((item) => (
                  <Badge key={item} variant="outline">{item}</Badge>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">No specializations have been published yet.</p>
            )}
          </CardContent>
        </Card>

        <Card className="border-border/70 bg-card/90 backdrop-blur-sm">
          <CardContent className="p-6">
            <h2 className="text-2xl mb-4">Technical Skills</h2>
            {member.skills.length ? (
              <div className="flex flex-wrap gap-2">
                {member.skills.map((item) => (
                  <Badge key={item} variant="outline">{item}</Badge>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">No technical skills have been published yet.</p>
            )}
          </CardContent>
        </Card>
      </div>

      <Card className="border-border/70 bg-card/90 backdrop-blur-sm">
        <CardContent className="p-6">
          <h2 className="text-2xl mb-4">Professional Experience</h2>
          {member.experience.length ? (
            <ul className="space-y-4">
              {member.experience.map((item) => (
                <li key={`${item.title}-${item.period ?? ""}`}>
                  <h3 className="text-lg">{item.title}</h3>
                  {item.period ? <p className="text-sm text-primary mb-1">{item.period}</p> : null}
                  <p className="text-sm text-muted-foreground">{item.details}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted-foreground">No professional experience entries have been published yet.</p>
          )}
        </CardContent>
      </Card>

      <Card className="border-border/70 bg-card/90 backdrop-blur-sm">
        <CardContent className="p-6">
          <h2 className="text-2xl mb-4">Selected Projects</h2>
          {member.projects.length ? (
            <ul className="space-y-4">
              {member.projects.map((project) => (
                <li key={project.name}>
                  <h3 className="text-lg">{project.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{project.summary}</p>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      View project
                    </a>
                  ) : null}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted-foreground">No project entries have been published yet.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
