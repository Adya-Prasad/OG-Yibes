import { describe, expect, it } from "vitest";
import {
  COMMUNITY_EVENTS,
  getEventById,
  getEventBySlug,
} from "@/lib/constants/events";

describe("COMMUNITY_EVENTS", () => {
  it("lists six events", () => {
    expect(COMMUNITY_EVENTS.length).toBe(6);
  });

  it("resolves by id and slug", () => {
    const e = getEventById("evt-drone");
    expect(e?.slug).toBe("drone-race-competition");
    expect(getEventBySlug("beat-boxing-competition")?.title).toContain(
      "Beat Boxing",
    );
  });
});
