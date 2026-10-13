import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
  href?: string;
  ctaLabel?: string;
  itemsDisplay?: "badges" | "list";
};

export function ServiceCard({
  icon: Icon,
  title,
  description,
  items,
  href,
  ctaLabel,
  itemsDisplay = "badges",
}: ServiceCardProps) {
  return (
    <Card className="relative overflow-hidden border-border/70 bg-card/90 backdrop-blur-sm hover:shadow-lg transition-shadow">
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent" />
      <CardContent className="p-6">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-background/80 shadow-sm text-cyan-500">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-2xl mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>

        {itemsDisplay === "list" ? (
          <ul className="mb-4 space-y-2 text-sm text-muted-foreground">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-wrap gap-2 mb-4">
            {items.map((item) => (
              <Badge key={item} variant="outline">{item}</Badge>
            ))}
          </div>
        )}

        {href ? (
          <a href={href} className="text-sm font-medium text-primary hover:underline">
            {ctaLabel ?? `Explore ${title}`}
          </a>
        ) : null}
      </CardContent>
    </Card>
  );
}
