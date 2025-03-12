import { z } from "zod";

export const genericFormValidationSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters").max(50, "First name cannot exceed 50 characters").regex(/^[A-Za-z]+$/, "First name must contain only letters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters").max(50, "Last name cannot exceed 50 characters"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().regex(/^\+?[0-9]{7,15}$/, "Enter a valid phone number").optional(),
  dob: z.string().nonempty("Date of Birth is required"),
  gender: z.enum(["male", "female", "other"], { message: "Select a gender" }),
  address: z.string().nonempty("Address is required"),
  city: z.string().nonempty("City is required"),
  state: z.string().nonempty("State is required"),
  zipCode: z.string().regex(/^[0-9]{5,6}$/, "Enter a valid zip code"),
  country: z.string().nonempty("Country is required"),
  username: z.string().min(5, "Username must be at least 5 characters").max(20, "Username cannot exceed 20 characters").regex(/^[a-zA-Z0-9_]+$/, "Username must contain only letters, numbers, and underscores"),
  password: z.string().min(8, "Password must be at least 8 characters").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]+$/, "Password must contain at least one uppercase letter, one lowercase letter, and one number"),
  confirmPassword: z.string().nonempty("Confirm Password is required"),
  newsletter: z.boolean().optional(),
  theme: z.enum(["light", "dark"], { message: "Select a theme" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords must match",
  path: ["confirmPassword"],
});

export type GenericFormValidationSchemaType = typeof genericFormValidationSchema