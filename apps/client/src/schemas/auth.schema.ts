import { z } from "zod";

export namespace AuthSchema {
  export const Register = z.object({
    email: z
      .string("Email must be a string")
      .min(1, "Email is required")
      .email("Email must be valid"),
    name: z
      .string("Name must be a string")
      .min(1, "Name is required")
      .min(4, "Name must be at least 4 characters long")
      .max(16, "Name must be at most 16 characters long")
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "Name must consist of letters, digits or underscores"
      ),
    password: z
      .string("Password must be a string")
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters long")
      .max(32, "Password must be at most 32 characters long")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[0-9]/, "Passowrd must contain at least one number")
      .regex(
        /[!@#$%^&*()]/,
        "Password must contain at least one special character"
      )
      .refine(
        (value) => !/\s/.test(value),
        "Password cannot contain any whitespace"
      )
      .regex(
        /^[a-zA-Z0-9!@#$%^&*()]+$/,
        "Password contains invalid characters"
      ),
  });

  export const Login = z.object({
    email: z
      .string("Email must be a string")
      .min(1, "Email is required")
      .email("Email must be valid"),
    password: z
      .string("Password must be a string")
      .min(1, "Password is required"),
  });
}
