import { Model } from "mongoose";

export type TAchievement = {
  title: string;
  description: string;
  date: Date;
  tags?: string[];
  link?: string;
  imageUrl?: string;
  category?: string;
  isDeleted?: boolean;
};

export interface AchievementModel extends Model<TAchievement> {}
