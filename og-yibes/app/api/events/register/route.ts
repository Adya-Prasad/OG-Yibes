import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { COOKIE_NAME, verifySessionToken } from "@/lib/auth";
import { getEventById } from "@/lib/constants/events";
import { addEventRegistration } from "@/lib/users-store";
import { eventRegisterSchema } from "@/lib/validation";

export async function POST(req: Request) {
  try {
    const jar = await cookies();
    const token = jar.get(COOKIE_NAME)?.value;
    if (!token) {
      console.warn("[api/events/register] Unauthenticated");
      return NextResponse.json({ error: "Sign in to register for events." }, { status: 401 });
    }
    const session = await verifySessionToken(token);
    if (!session) {
      return NextResponse.json({ error: "Session expired. Sign in again." }, { status: 401 });
    }

    const body: unknown = await req.json();
    const parsed = eventRegisterSchema.safeParse(body);
    if (!parsed.success) {
      console.warn("[api/events/register] Validation failed");
      return NextResponse.json(
        { error: "Validation failed", issues: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const event = getEventById(parsed.data.eventId);
    if (!event) {
      return NextResponse.json({ error: "Unknown event." }, { status: 404 });
    }

    const teamName =
      parsed.data.teamName && parsed.data.teamName.length > 0
        ? parsed.data.teamName
        : undefined;
    const notes =
      parsed.data.notes && parsed.data.notes.length > 0
        ? parsed.data.notes
        : undefined;

    const row = {
      id: randomUUID(),
      userId: session.sub,
      eventId: event.id,
      teamName,
      notes,
      createdAt: new Date().toISOString(),
    };

    await addEventRegistration(row);
    console.log("[api/events/register] Saved registration", row.id, "for", event.slug);

    return NextResponse.json({
      ok: true,
      registration: {
        id: row.id,
        eventId: row.eventId,
        eventTitle: event.title,
      },
    });
  } catch (err) {
    if (err instanceof Error && err.message === "ALREADY_REGISTERED") {
      return NextResponse.json(
        { error: "You are already registered for this event." },
        { status: 409 },
      );
    }
    console.error("[api/events/register]", err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
