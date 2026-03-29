import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().trim().email("Enter a valid email."),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .max(128, "Password is too long."),
  displayName: z
    .string()
    .trim()
    .min(2, "Display name is too short.")
    .max(48, "Display name is too long."),
});

export const loginSchema = z.object({
  email: z.string().trim().email("Enter a valid email."),
  password: z.string().min(1, "Password is required."),
});

export const eventRegisterSchema = z.object({
  eventId: z.string().min(1, "Pick an event."),
  teamName: z
    .string()
    .trim()
    .max(64, "Team name is too long.")
    .optional()
    .or(z.literal("")),
  notes: z
    .string()
    .trim()
    .max(500, "Notes are too long.")
    .optional()
    .or(z.literal("")),
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type EventRegisterInput = z.infer<typeof eventRegisterSchema>;
