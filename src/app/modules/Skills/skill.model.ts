import { Schema, model } from "mongoose";
import { SkillModel, TSkill } from "./skill.interface";

const SkillSchema = new Schema<TSkill>({
  name: { type: String, required: true },
  icon: { type: String, required: true },
  proficiency: { type: Number, required: true },
  category: { type: String, required: false },
  details: { type: String, required: false },
  relatedProjects: { type: [String], default: [] },
  certificationUrl: { type: String, required: false },
  isDeleted: { type: Boolean, default: false },
});

export const Skill = model<TSkill, SkillModel>("Skill", SkillSchema);
