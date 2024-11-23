import { Schema, model } from "mongoose";
import { EducationModel, TEducation } from "./education.interface";

const EducationSchema = new Schema<TEducation>({
  institution: { type: String, required: true },
  degree: { type: String, required: true },
  fieldOfStudy: { type: String, required: false },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: false },
  grade: { type: String, required: false },
  description: { type: String, required: false },
  achievements: { type: [String], default: [] },
  certificateUrl: { type: String, required: false },
  logoUrl: { type: String, required: false },
  isDeleted: { type: Boolean, default: false },
});

export const Education = model<TEducation, EducationModel>(
  "Education",
  EducationSchema,
);
