import { z } from "zod";

export const ContributorValidationSchema = z.object({
  name: z.string().min(3).max(100),
  designation: z.string().min(2).max(100),
  companyName: z.string().max(100).optional(),
  socialLinks: z
    .object({
      linkedin: z.string().url().optional(),
      github: z.string().url().optional(),
      twitter: z.string().url().optional(),
      portfolio: z.string().url().optional(),
    })
    .optional(),
  profileImageUrl: z.string().url().optional(),
});

export const ProjectValidationSchema = z.object({
  name: z.string().min(3).max(100),
  description: z.string().optional(),
  startDate: z.string(),
  endDate: z.string().optional(),
  technologies: z.array(z.string()).optional(),
  repositoryUrl: z.string().url().optional(),
  liveDemoUrl: z.string().url().optional(),
  images: z.array(z.string().url()).optional(),
  videoDemoUrl: z.string().url().optional(),
  achievements: z.array(z.string()).optional(),
  contributors: z.array(ContributorValidationSchema).optional(),
  projectNumber: z.number().optional(),
});
