import { Schema, model } from "mongoose";
import { ExperienceModel, TExperience } from "./experience.interface";

const ExperienceSchema = new Schema<TExperience>({
  company: { type: String, required: true },
  position: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: false },
  description: { type: String, required: false },
  technologies: { type: [String], default: [] },
  noc: { type: String, required: false },
  image: { type: String, required: false },
  achievements: { type: [String], default: [] },
  companyLogoUrl: { type: String, required: false },
  website: { type: String, required: false },
  isDeleted: { type: Boolean, default: false },
});

export const Experience = model<TExperience, ExperienceModel>(
  "Experience",
  ExperienceSchema,
);
