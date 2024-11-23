import { z } from "zod";

export const ExperienceValidationSchema = z.object({
  company: z.string().min(3).max(100),
  position: z.string().min(3).max(50),
  startDate: z.string(),
  endDate: z.string().optional(),
  description: z.string().optional(),
  technologies: z.array(z.string()).optional(),
  noc: z.string().optional(),
  image: z.string().optional(),
  achievements: z.array(z.string()).optional(),
  companyLogoUrl: z.string().url().optional(),
  website: z.string().url().optional(),
});
