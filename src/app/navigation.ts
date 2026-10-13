export type NavLink = {
  name: string;
  href: string;
};

export const primaryNavigationLinks: NavLink[] = [
  { name: "Services", href: "#/services" },
  { name: "Digital Solutions", href: "#/digital-solutions" },
  { name: "Marketing", href: "#/marketing" },
  { name: "Remote Staffing", href: "#/staffing" },
  { name: "Hire a Professional", href: "#/talent" },
];

export const companyNavigationLinks: NavLink[] = [
  { name: "Our Team", href: "#/team" },
  { name: "Portfolio", href: "#/portfolio" },
  { name: "Careers", href: "#/careers" },
  { name: "About", href: "#/about" },
];

export const mobileNavigationGroups: Array<{ title: string; links: NavLink[] }> = [
  {
    title: "Navigation",
    links: primaryNavigationLinks,
  },
  {
    title: "Company",
    links: companyNavigationLinks,
  },
];

export const footerColumns: Array<{ title: string; links: NavLink[] }> = [
  {
    title: "Services",
    links: [
      { name: "All Services", href: "#/services" },
      { name: "Digital Solutions", href: "#/digital-solutions" },
      { name: "Marketing", href: "#/marketing" },
      { name: "Remote Staffing", href: "#/staffing" },
      { name: "Get Started", href: "#/get-started" },
    ],
  },
  {
    title: "Staffing Tracks",
    links: [
      { name: "Technology", href: "#/staffing/technology" },
      { name: "Marketing", href: "#/staffing/marketing" },
      { name: "Creative", href: "#/staffing/creative" },
      { name: "Business Support", href: "#/staffing/business-support" },
      { name: "Talent Pool", href: "#/talent" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#/about" },
      { name: "Team", href: "#/team" },
      { name: "Careers", href: "#/careers" },
      { name: "Case Studies", href: "#/case-studies" },
      { name: "Contact", href: "#/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Home", href: "#/" },
      { name: "Portfolio", href: "#/portfolio" },
      { name: "Case Studies", href: "#/case-studies" },
      { name: "FAQ", href: "#/contact" },
      { name: "Start a Project", href: "#/get-started" },
    ],
  },
];
