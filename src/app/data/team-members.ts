import { TeamMember } from "../models/team-member";

// Populate this array with real team member information only.
// Keep isActive=false until a profile is fully verified and approved.
export const teamMembers: TeamMember[] = [
  {
    id: "template-1",
    slug: "replace-with-real-member-1",
    name: "Team Member Name",
    position: "Position Title",
    photo: "",
    shortBio: "Replace this placeholder with an approved short profile summary.",
    bio: "Replace with verified professional summary once profile details are approved for publishing.",
    skills: [],
    specializations: [],
    experience: [],
    projects: [],
    linkedin: "",
    github: "",
    portfolio: "",
    isActive: false,
  },
  {
    id: "template-2",
    slug: "replace-with-real-member-2",
    name: "Team Member Name",
    position: "Position Title",
    photo: "",
    shortBio: "Replace this placeholder with an approved short profile summary.",
    bio: "Replace with verified professional summary once profile details are approved for publishing.",
    skills: [],
    specializations: [],
    experience: [],
    projects: [],
    linkedin: "",
    github: "",
    portfolio: "",
    isActive: false,
  },
];

export const getActiveTeamMembers = () => teamMembers.filter((member) => member.isActive);

export const getTeamMemberBySlug = (slug: string) =>
  teamMembers.find((member) => member.slug === slug && member.isActive);
