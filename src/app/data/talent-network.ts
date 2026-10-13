import { sampleTalentProfessionals } from "./talent-network.sample";
import { TalentProfessional } from "../models/talent-professional";

// Production-approved talent records only.
// Keep this list empty until real profiles are verified for publishing.
export const productionTalentProfessionals: TalentProfessional[] = [];

const hasProductionTalent = productionTalentProfessionals.some((professional) => professional.status === "active");

export const isUsingSampleTalentData = !hasProductionTalent;

export const getPublishedTalentProfessionals = () =>
  hasProductionTalent
    ? productionTalentProfessionals.filter((professional) => professional.status === "active")
    : sampleTalentProfessionals;

export const getTalentProfessionalBySlug = (slug: string) =>
  getPublishedTalentProfessionals().find((professional) => professional.slug === slug);
