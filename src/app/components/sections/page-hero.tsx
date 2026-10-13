import { ReactNode } from "react";
import { Badge } from "../ui/badge";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="pt-28 pb-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {eyebrow ? (
          <Badge variant="secondary" className="mb-5 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-primary shadow-sm shadow-primary/10">
            {eyebrow}
          </Badge>
        ) : null}
        <h1 className="max-w-4xl bg-gradient-to-r from-foreground via-blue-600 to-violet-500 bg-clip-text text-4xl text-transparent sm:text-5xl lg:text-6xl dark:from-white dark:via-cyan-200 dark:to-violet-300">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl">{description}</p>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
