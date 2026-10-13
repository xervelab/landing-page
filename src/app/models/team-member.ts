export type TeamMemberExperience = {
  title: string;
  period?: string;
  details: string;
};

export type TeamMemberProject = {
  name: string;
  summary: string;
  link?: string;
};

export type TeamMember = {
  id: string;
  slug: string;
  name: string;
  position: string;
  photo?: string;
  shortBio: string;
  bio: string;
  skills: string[];
  specializations: string[];
  experience: TeamMemberExperience[];
  projects: TeamMemberProject[];
  linkedin?: string;
  github?: string;
  portfolio?: string;
  isActive: boolean;
};
