import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

type SharedCtaProps = {
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function SharedCta({
  title,
  description,
  primaryHref = "#/get-started",
  primaryLabel = "Start Your Project",
  secondaryHref = "#/contact",
  secondaryLabel = "Talk to Us",
}: SharedCtaProps) {
  return (
    <div className="rounded-2xl border border-primary/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 p-8 shadow-xl shadow-blue-500/10 md:p-10">
      <h3 className="text-2xl sm:text-3xl">{title}</h3>
      <p className="mt-3 max-w-3xl text-muted-foreground">{description}</p>
      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <Button asChild size="lg" className="gap-2">
          <a href={primaryHref}>
            {primaryLabel} <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
        <Button asChild variant="outline" size="lg">
          <a href={secondaryHref}>{secondaryLabel}</a>
        </Button>
      </div>
    </div>
  );
}
