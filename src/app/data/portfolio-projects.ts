import { CaseStudy, PortfolioProject, PortfolioCategory } from "../models/portfolio-project";

export const portfolioCategories: PortfolioCategory[] = [
  "Websites",
  "E-commerce",
  "SEO",
  "Marketing",
  "Software",
  "Branding",
  "Other",
];

// Preserved from the legacy portfolio list. No existing item removed.
export const portfolioProjects: PortfolioProject[] = [
  {
    id: "project-san-vicente-bis",
    slug: "san-vicente-bis",
    name: "San Vicente BIS",
    category: "Software",
    shortDescription:
      "A modern information system for Barangay San Vicente managing residents, certificates, and incident records.",
    image: "/images/projects/san-vicente-bis.png",
    viewProjectUrl: "https://san-vicente-bis.vercel.app/",
    technology: ["React", "Laravel", "MySQL"],
  },
  {
    id: "project-mobile-banking-app",
    slug: "mobile-banking-app",
    name: "Mobile Banking App",
    category: "Software",
    shortDescription: "A secure and user-friendly digital banking experience for day-to-day financial transactions.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
    viewProjectUrl: "https://san-vicente-bis.vercel.app/",
    technology: ["React Native", "TypeScript", "AWS"],
  },
  {
    id: "project-ai-analytics-dashboard",
    slug: "ai-analytics-dashboard",
    name: "AI Analytics Dashboard",
    category: "Software",
    shortDescription: "A dashboard experience focused on analytics workflows and insight visibility.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    viewProjectUrl: "https://san-vicente-bis.vercel.app/",
    technology: ["Python", "TensorFlow", "React"],
  },
  {
    id: "project-social-media-platform",
    slug: "social-media-platform",
    name: "Social Media Platform",
    category: "Marketing",
    shortDescription: "A community platform focused on social content sharing and engagement experiences.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113",
    viewProjectUrl: "https://san-vicente-bis.vercel.app/",
    technology: ["Vue.js", "GraphQL", "PostgreSQL"],
  },
  {
    id: "project-healthcare-management",
    slug: "healthcare-management",
    name: "Healthcare Management",
    category: "Software",
    shortDescription: "A healthcare operations platform for care coordination and administrative workflows.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
    viewProjectUrl: "https://san-vicente-bis.vercel.app/",
    technology: ["Angular", "Java", "Oracle"],
  },
  {
    id: "project-edtech-learning-portal",
    slug: "edtech-learning-portal",
    name: "EdTech Learning Portal",
    category: "Websites",
    shortDescription: "An interactive education portal designed to support student learning pathways online.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
    viewProjectUrl: "https://san-vicente-bis.vercel.app/",
    technology: ["Next.js", "Prisma", "Stripe"],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "case-study-san-vicente-bis",
    slug: "san-vicente-bis",
    projectSlug: "san-vicente-bis",
    client: "Barangay San Vicente",
    industry: "Public Service",
    challenge:
      "Manual records and paper-first workflows created delays in resident service requests and internal tracking.",
    solution:
      "Implemented a web-based barangay information system that consolidates resident records, certificates, and incident tracking.",
    services: ["Software", "Websites"],
    process: [
      "Workflow discovery and process mapping",
      "System architecture and interface planning",
      "Incremental feature delivery and validation",
    ],
    team: "Cross-functional team of frontend, backend, and implementation support specialists.",
    resultsLabel: "Results currently unavailable",
    resultsSummary: "Verified client-approved performance metrics are not publicly published.",
    timeline: "Timeline details available on request.",
    technology: ["React", "Laravel", "MySQL"],
  },
  {
    id: "case-study-mobile-banking-app",
    slug: "mobile-banking-app",
    projectSlug: "mobile-banking-app",
    client: "Confidential Client",
    industry: "Finance",
    challenge:
      "The product required a secure mobile experience balancing accessibility, trust, and usability for everyday transactions.",
    solution:
      "Built a mobile product foundation focused on secure flows, clear interaction patterns, and scalable architecture.",
    services: ["Software"],
    process: [
      "Experience mapping and security-oriented planning",
      "Interface and feature implementation",
      "Quality review and release hardening",
    ],
    team: "Mobile engineering and product design contributors.",
    resultsLabel: "Results currently unavailable",
    resultsSummary: "Public metrics for this engagement are not disclosed.",
    timeline: "Timeline details available on request.",
    technology: ["React Native", "TypeScript", "AWS"],
  },
  {
    id: "case-study-ai-analytics-dashboard",
    slug: "ai-analytics-dashboard",
    projectSlug: "ai-analytics-dashboard",
    client: "Confidential Client",
    industry: "Data and Analytics",
    challenge:
      "Stakeholders needed a clearer way to access and interpret analytics data in one operational interface.",
    solution:
      "Delivered a dashboard application with focused data views and machine-learning-assisted insight workflows.",
    services: ["Software", "SEO"],
    process: [
      "Analytics requirement workshops",
      "Dashboard modeling and implementation",
      "Iteration cycles for workflow refinement",
    ],
    team: "Data engineering and frontend dashboard specialists.",
    resultsLabel: "Results currently unavailable",
    resultsSummary: "Verified comparative metrics are not currently published.",
    timeline: "Timeline details available on request.",
    technology: ["Python", "TensorFlow", "React"],
  },
  {
    id: "case-study-social-media-platform",
    slug: "social-media-platform",
    projectSlug: "social-media-platform",
    client: "Confidential Client",
    industry: "Media and Community",
    challenge:
      "The platform needed a scalable content-sharing foundation with reliable performance for active communities.",
    solution:
      "Built a web platform architecture with community-focused content interactions and structured data services.",
    services: ["Marketing", "Websites"],
    process: [
      "Platform feature planning",
      "Interaction and API implementation",
      "Optimization and release preparation",
    ],
    team: "Web platform engineers and product support specialists.",
    resultsLabel: "Results currently unavailable",
    resultsSummary: "Client-approved public performance outcomes are unavailable.",
    timeline: "Timeline details available on request.",
    technology: ["Vue.js", "GraphQL", "PostgreSQL"],
  },
  {
    id: "case-study-healthcare-management",
    slug: "healthcare-management",
    projectSlug: "healthcare-management",
    client: "Confidential Client",
    industry: "Healthcare",
    challenge:
      "The organization required a digital environment to support operations visibility and care-related administration.",
    solution:
      "Developed a healthcare management platform centered on operational workflows and internal process support.",
    services: ["Software", "Other"],
    process: [
      "Operational requirement gathering",
      "System delivery and environment setup",
      "Quality assurance and stabilization",
    ],
    team: "Enterprise software engineers and QA specialists.",
    resultsLabel: "Results currently unavailable",
    resultsSummary: "No publicly verifiable metrics are currently disclosed.",
    timeline: "Timeline details available on request.",
    technology: ["Angular", "Java", "Oracle"],
  },
  {
    id: "case-study-edtech-learning-portal",
    slug: "edtech-learning-portal",
    projectSlug: "edtech-learning-portal",
    client: "Confidential Client",
    industry: "Education",
    challenge:
      "The project required an engaging learning portal with reliable course and payment workflows.",
    solution:
      "Built an education portal with structured learning experiences and digital delivery architecture.",
    services: ["Websites", "E-commerce"],
    process: [
      "Learning workflow mapping",
      "Portal implementation and integration",
      "Testing and staged launch",
    ],
    team: "Full-stack developers and product implementation support.",
    resultsLabel: "Results currently unavailable",
    resultsSummary: "Verified, client-approved results are not publicly listed.",
    timeline: "Timeline details available on request.",
    technology: ["Next.js", "Prisma", "Stripe"],
  },
];

export const getPortfolioProjectBySlug = (slug: string) =>
  portfolioProjects.find((project) => project.slug === slug);

export const getCaseStudyBySlug = (slug: string) => caseStudies.find((study) => study.slug === slug);
