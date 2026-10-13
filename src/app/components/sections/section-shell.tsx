import { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  title: string;
  subtitle?: string;
  className?: string;
  children: ReactNode;
};

export function SectionShell({ id, title, subtitle, className = "", children }: SectionShellProps) {
  return (
    <section id={id} className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4 bg-gradient-to-r from-foreground via-blue-600 to-violet-500 bg-clip-text text-3xl text-transparent sm:text-4xl lg:text-5xl dark:from-white dark:via-cyan-200 dark:to-violet-300">
            {title}
          </h2>
          {subtitle ? <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{subtitle}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
