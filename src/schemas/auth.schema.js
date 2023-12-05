import { z } from "zod";

export const registerSchema = z.object({
  username: z.string({ required_error: "username is required" }).min(3, {
    message: "Nick Name must be at least 3 characters",
  }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Email is not valid",
    }),

  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "Password muste be at least 6 characters",
    }),
});

export const loginEschema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Invalid email",
    }),

  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "password must be at least 6 characters",
    }),
});
