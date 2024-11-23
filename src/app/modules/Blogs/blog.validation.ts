import { z } from "zod";

export const BlogValidationSchema = z.object({
  title: z.string().min(3).max(100),
  content: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  tags: z.array(z.string()).optional(),
  isPublished: z.boolean(),
  imageUrl: z.string().url().optional(),
  referenceLinks: z.array(z.string().url()).optional(),
});
