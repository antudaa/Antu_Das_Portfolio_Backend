import { z } from "zod";

export const AchievementValidationSchema = z.object({
  title: z.string().min(3).max(100),
  description: z.string(),
  date: z.string(),
  tags: z.array(z.string()).optional(),
  link: z.string().url().optional(),
  imageUrl: z.string().url().optional(),
  category: z.string().optional(),
});
