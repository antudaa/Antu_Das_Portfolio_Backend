import { z } from "zod";

export const PersonalInfoValidationSchema = z.object({
  name: z.string().min(3).max(50),
  email: z.string().email(),
  designation: z.string().min(2).max(100),
  phone: z.string().optional(),
  address: z.string().optional(),
  linkedin: z.string().url().optional(),
  github: z.string().url().optional(),
  facebook: z.string().url().optional(),
  bio: z.string().optional(),
  descriptoin: z.string().optional(),
  profilePictureUrl: z.string().url().optional(),
  coverPhotoUrl: z.string().url().optional(),
});
