import { z } from "zod";

export const SkillValidationSchema = z.object({
  name: z.string().min(3).max(50),
  icon: z.string().url(),
  proficiency: z.number().min(1).max(100),
  category: z.string().optional(),
  details: z.string().optional(),
  relatedProjects: z.array(z.string()).optional(),
  certificationUrl: z.string().url().optional(),
});
