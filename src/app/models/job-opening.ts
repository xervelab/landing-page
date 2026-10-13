export type JobCategory =
  | "Technology"
  | "Marketing"
  | "Creative"
  | "Administration"
  | "Customer Support"
  | "E-commerce";

export type EmploymentType = "Full-time" | "Part-time" | "Contract" | "Project-based";

export type WorkSetup = "Remote" | "Hybrid" | "On-site";

export type JobStatus = "open" | "closed" | "draft";

export type JobOpening = {
  id: string;
  slug: string;
  title: string;
  category: JobCategory;
  description: string;
  responsibilities: string[];
  requirements: string[];
  preferredQualifications: string[];
  employmentType: EmploymentType;
  workSetup: WorkSetup;
  status: JobStatus;
  createdAt: string;
  updatedAt: string;
};
