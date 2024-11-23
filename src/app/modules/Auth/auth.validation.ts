import { z } from "zod";

export const createUserValidationSchema = z.object({
  name: z.string().min(1, "Name is required!"),
  email: z.string().email("Invalid email address!"),
  password: z.string().min(6, "Password must be at least 6 characters long."),
  role: z.enum(["user", "admin"]).optional(),
  status: z.enum(["active", "blocked"]).optional(),
  isDeleted: z.boolean().optional(),
});

export const loginValidationSchema = z.object({
  body: z.object({
    email: z
      .string({
        required_error: "Id is required!",
      })
      .email("Invalid email address!"),
    password: z.string({ required_error: "Password is required!" }),
  }),
});

export const changePasswordValidationSchema = z.object({
  body: z.object({
    oldPassword: z.string({ required_error: "Old password is required!" }),
    newPassword: z.string({ required_error: "Password is required!" }),
  }),
});
