import { ExternalLink } from "lucide-react";
import { PortfolioProject } from "../../models/portfolio-project";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";

type PortfolioCardProps = {
  project: PortfolioProject;
};

export function PortfolioCard({ project }: PortfolioCardProps) {
  return (
    <Card className="overflow-hidden h-full border-border/70 bg-card/90 backdrop-blur-sm hover:shadow-xl transition-shadow">
      <div className="relative overflow-hidden">
        <ImageWithFallback
          src={project.image}
          alt={project.name}
          className="w-full h-48 object-cover"
        />
      </div>
      <CardContent className="p-6 flex h-full flex-col gap-4">
        <div className="space-y-2">
          <Badge variant="secondary">{project.category}</Badge>
          <h3 className="text-xl">{project.name}</h3>
          <p className="text-sm text-muted-foreground">{project.shortDescription}</p>
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          <Button variant="outline" size="sm" asChild>
            <a href={`#/case-studies/${project.slug}`}>Case study</a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a
              href={project.viewProjectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              View project <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
