import { Model } from "mongoose";

export type TExperience = {
  company: string;
  position: string;
  startDate: Date;
  endDate?: Date;
  description?: string;
  technologies?: string[];
  noc?: string;
  image?: string;
  achievements?: string[];
  companyLogoUrl?: string;
  website?: string;
  isDeleted?: boolean;
};

export interface ExperienceModel extends Model<TExperience> {}
