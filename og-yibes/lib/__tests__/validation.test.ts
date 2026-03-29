import { describe, expect, it } from "vitest";
import {
  eventRegisterSchema,
  loginSchema,
  registerSchema,
} from "@/lib/validation";

describe("registerSchema", () => {
  it("accepts valid payload", () => {
    const r = registerSchema.safeParse({
      email: "  user@example.com  ",
      password: "password123",
      displayName: "Neo",
    });
    expect(r.success).toBe(true);
  });

  it("rejects short password", () => {
    const r = registerSchema.safeParse({
      email: "user@example.com",
      password: "short",
      displayName: "Neo",
    });
    expect(r.success).toBe(false);
  });
});

describe("loginSchema", () => {
  it("accepts valid payload", () => {
    const r = loginSchema.safeParse({
      email: "user@example.com",
      password: "x",
    });
    expect(r.success).toBe(true);
  });
});

describe("eventRegisterSchema", () => {
  it("accepts minimal payload", () => {
    const r = eventRegisterSchema.safeParse({
      eventId: "evt-rc",
    });
    expect(r.success).toBe(true);
  });
});
