import { Schema, model } from "mongoose";
import { AchievementModel, TAchievement } from "./achievement.interface";

const AchievementSchema = new Schema<TAchievement>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  tags: { type: [String], default: [] },
  link: { type: String, required: false },
  imageUrl: { type: String, required: false },
  category: { type: String, required: false },
  isDeleted: { type: Boolean, default: false },
});

export const Achievement = model<TAchievement, AchievementModel>(
  "Achievement",
  AchievementSchema,
);
