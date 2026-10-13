export type TalentCategory =
  | "Technology"
  | "Marketing"
  | "Creative"
  | "Business Support"
  | "E-commerce";

export type TalentAvailability =
  | "Immediate"
  | "Within 2 Weeks"
  | "Part-Time"
  | "Limited";

export type TalentStatus = "sample" | "active" | "inactive";

export type TalentProfessional = {
  id: string;
  slug: string;
  displayName: string;
  role: string;
  category: TalentCategory;
  summary: string;
  skills: string[];
  experienceYears: number;
  portfolio?: string;
  availability: TalentAvailability;
  status: TalentStatus;
  profileImage?: string;
  capabilities: string[];
  createdAt: string;
  updatedAt: string;
};
