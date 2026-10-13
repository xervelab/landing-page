import { JobOpening } from "../models/job-opening";

export const jobOpenings: JobOpening[] = [
  {
    id: "job-tech-frontend-engineer",
    slug: "frontend-engineer",
    title: "Frontend Engineer",
    category: "Technology",
    description:
      "Build performant and accessible web interfaces for international client projects across multiple industries.",
    responsibilities: [
      "Develop reusable frontend components using React and TypeScript.",
      "Translate design systems into responsive user interfaces.",
      "Collaborate with backend and QA teams to deliver production features.",
    ],
    requirements: [
      "3+ years of frontend development experience.",
      "Strong proficiency in React, TypeScript, and CSS architecture.",
      "Experience with accessibility and performance optimization.",
    ],
    preferredQualifications: [
      "Experience with modern build tooling such as Vite.",
      "Background working in distributed remote teams.",
    ],
    employmentType: "Full-time",
    workSetup: "Remote",
    status: "open",
    createdAt: "2026-10-13T00:00:00.000Z",
    updatedAt: "2026-10-13T00:00:00.000Z",
  },
  {
    id: "job-marketing-seo-specialist",
    slug: "seo-specialist",
    title: "SEO Specialist",
    category: "Marketing",
    description:
      "Plan and execute organic growth initiatives for client brands targeting global audiences.",
    responsibilities: [
      "Perform technical and content SEO audits.",
      "Build keyword maps and on-page optimization plans.",
      "Track rankings and conversions with actionable reporting.",
    ],
    requirements: [
      "2+ years in SEO strategy or execution roles.",
      "Hands-on knowledge of search analytics and auditing tools.",
      "Ability to communicate findings to non-technical stakeholders.",
    ],
    preferredQualifications: [
      "Experience with e-commerce SEO.",
      "Experience coordinating with content and dev teams.",
    ],
    employmentType: "Contract",
    workSetup: "Remote",
    status: "open",
    createdAt: "2026-10-13T00:00:00.000Z",
    updatedAt: "2026-10-13T00:00:00.000Z",
  },
  {
    id: "job-creative-video-editor",
    slug: "video-editor",
    title: "Video Editor",
    category: "Creative",
    description:
      "Produce high-impact short-form and long-form video content for digital campaigns.",
    responsibilities: [
      "Edit campaign videos across multiple formats and channels.",
      "Collaborate with creative strategists and designers on concepts.",
      "Maintain quality and turnaround standards for client deliverables.",
    ],
    requirements: [
      "Strong portfolio demonstrating commercial editing work.",
      "Proficiency in industry-standard editing tools.",
      "Ability to manage feedback cycles and deadlines.",
    ],
    preferredQualifications: [
      "Motion graphics experience.",
      "Experience with multilingual campaign outputs.",
    ],
    employmentType: "Project-based",
    workSetup: "Remote",
    status: "open",
    createdAt: "2026-10-13T00:00:00.000Z",
    updatedAt: "2026-10-13T00:00:00.000Z",
  },
  {
    id: "job-admin-operations-assistant",
    slug: "operations-assistant",
    title: "Operations Assistant",
    category: "Administration",
    description:
      "Support internal workflows and client-facing delivery coordination across projects.",
    responsibilities: [
      "Maintain project trackers and operations documentation.",
      "Coordinate schedules and follow-ups with internal teams.",
      "Help standardize recurring operational tasks.",
    ],
    requirements: [
      "Strong organizational and communication skills.",
      "Experience with project coordination or operations support.",
      "Comfortable using collaborative productivity tools.",
    ],
    preferredQualifications: [
      "Experience in remote service teams.",
      "Process improvement mindset.",
    ],
    employmentType: "Full-time",
    workSetup: "Remote",
    status: "open",
    createdAt: "2026-10-13T00:00:00.000Z",
    updatedAt: "2026-10-13T00:00:00.000Z",
  },
  {
    id: "job-support-customer-specialist",
    slug: "customer-support-specialist",
    title: "Customer Support Specialist",
    category: "Customer Support",
    description:
      "Deliver responsive support experiences for client customer operations.",
    responsibilities: [
      "Handle customer tickets and inquiries professionally.",
      "Escalate technical or account issues using defined workflows.",
      "Contribute to support documentation and knowledge bases.",
    ],
    requirements: [
      "Strong written English communication.",
      "1+ year in support or customer success roles.",
      "Ability to manage queue priorities and service levels.",
    ],
    preferredQualifications: [
      "Experience with CRM/helpdesk systems.",
      "E-commerce support background.",
    ],
    employmentType: "Part-time",
    workSetup: "Remote",
    status: "open",
    createdAt: "2026-10-13T00:00:00.000Z",
    updatedAt: "2026-10-13T00:00:00.000Z",
  },
  {
    id: "job-ecommerce-marketplace-specialist",
    slug: "marketplace-specialist",
    title: "Marketplace Specialist",
    category: "E-commerce",
    description:
      "Support product catalog, merchandising, and marketplace operations for client accounts.",
    responsibilities: [
      "Manage product listings and catalog health.",
      "Coordinate promotions and merchandising updates.",
      "Monitor listing performance and operations metrics.",
    ],
    requirements: [
      "2+ years in e-commerce operations.",
      "Experience with marketplace or storefront tooling.",
      "Detail-oriented approach to product data quality.",
    ],
    preferredQualifications: [
      "Experience with cross-border marketplaces.",
      "Working knowledge of basic conversion optimization.",
    ],
    employmentType: "Contract",
    workSetup: "Remote",
    status: "open",
    createdAt: "2026-10-13T00:00:00.000Z",
    updatedAt: "2026-10-13T00:00:00.000Z",
  },
];

export const careerCategories = [
  "Technology",
  "Marketing",
  "Creative",
  "Administration",
  "Customer Support",
  "E-commerce",
] as const;

export const getOpenJobOpenings = () => jobOpenings.filter((job) => job.status === "open");

export const getOpenJobBySlug = (slug: string) =>
  jobOpenings.find((job) => job.slug === slug && job.status === "open");
