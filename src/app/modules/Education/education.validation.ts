import { z } from "zod";

export const EducationValidationSchema = z.object({
  institution: z.string().min(3).max(100),
  degree: z.string().min(3).max(50),
  fieldOfStudy: z.string().optional(),
  startDate: z.string(),
  endDate: z.string().optional(),
  grade: z.string().optional(),
  description: z.string().optional(),
  achievements: z.array(z.string()).optional(),
  certificateUrl: z.string().url().optional(),
  logoUrl: z.string().url().optional(),
});
