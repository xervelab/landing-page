export type PortfolioCategory =
  | "Websites"
  | "E-commerce"
  | "SEO"
  | "Marketing"
  | "Software"
  | "Branding"
  | "Other";

export type PortfolioProject = {
  id: string;
  slug: string;
  name: string;
  category: PortfolioCategory;
  shortDescription: string;
  image: string;
  viewProjectUrl: string;
  technology: string[];
};

export type CaseStudy = {
  id: string;
  slug: string;
  projectSlug: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  services: string[];
  process: string[];
  team: string;
  resultsSummary?: string;
  resultsLabel?: string;
  timeline: string;
  technology: string[];
};
