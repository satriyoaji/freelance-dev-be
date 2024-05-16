import { z } from "zod"

export const FormCreate = z.object({
  name: z.string({ required_error: 'name is required' })
    .regex(/^[A-Za-z .,'!&]+$/, "Name must be alphabetical characters only")
    .min(3, "Name must be at least 3 characters")
    .max(32, "Name must be at most 32 characters"),
  phone: z.string({ required_error: 'phone number is required' })
    .regex(/^[0-9]+$/, "Phone must be numerical characters only")
    .min(11, "Phone number must be at least 11 digit")
    .max(13, "Phone number must be at most 13 digit"),
  address: z.optional(z.string()),
  email: z.string({ required_error: 'email is required' })
    .email("Email must be a valid email form"),
  password: z.string({ required_error: 'password is required' })
    .min(8, "Password must be at least 8 characters")
    .max(64, "Password must be at most 64 characters"),
  isAdmin: z.boolean().default(false),
  confirmPassword: z.string({ required_error: 'confirm password is required' })
    .min(8, "Confirm Password must be at least 8 characters")
    .max(64, "Confirm Password must be at most 64 characters"),
}).superRefine(({ confirmPassword, password }, ctx) => {
  if (confirmPassword !== password) {
    ctx.addIssue({
      code: "custom",
      message: "The passwords did not match"
    });
  }
});
