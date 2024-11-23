import { Model } from "mongoose";

export type TSkill = {
  name: string;
  icon: string;
  proficiency: number;
  category?: string;
  details?: string;
  relatedProjects?: string[];
  certificationUrl?: string;
  isDeleted?: boolean;
};

export interface SkillModel extends Model<TSkill> {}
