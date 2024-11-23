import { Model } from "mongoose";

export type TEducation = {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: Date;
  endDate?: Date;
  grade?: string;
  description?: string;
  achievements?: string[];
  certificateUrl?: string;
  logoUrl?: string;
  isDeleted?: boolean;
};

export interface EducationModel extends Model<TEducation> {}
