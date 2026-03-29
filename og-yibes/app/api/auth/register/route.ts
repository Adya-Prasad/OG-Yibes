import { randomUUID } from "node:crypto";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { COOKIE_NAME, signSessionToken } from "@/lib/auth";
import { createUser, findUserByEmail } from "@/lib/users-store";
import { registerSchema } from "@/lib/validation";

export async function POST(req: Request) {
  try {
    const body: unknown = await req.json();
    const parsed = registerSchema.safeParse(body);
    if (!parsed.success) {
      console.warn("[api/auth/register] Validation failed");
      return NextResponse.json(
        { error: "Validation failed", issues: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const email = parsed.data.email.trim().toLowerCase();
    const existing = await findUserByEmail(email);
    if (existing) {
      console.warn("[api/auth/register] Duplicate email:", email);
      return NextResponse.json(
        { error: "That email is already registered." },
        { status: 409 },
      );
    }

    const passwordHash = await bcrypt.hash(parsed.data.password, 12);
    const user = {
      id: randomUUID(),
      email,
      passwordHash,
      displayName: parsed.data.displayName.trim(),
      createdAt: new Date().toISOString(),
    };

    await createUser(user);

    const token = await signSessionToken({
      sub: user.id,
      email: user.email,
      displayName: user.displayName,
    });

    const res = NextResponse.json({
      ok: true,
      user: {
        id: user.id,
        email: user.email,
        displayName: user.displayName,
      },
    });
    res.cookies.set(COOKIE_NAME, token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    return res;
  } catch (err) {
    if (err instanceof Error && err.message === "EMAIL_TAKEN") {
      return NextResponse.json(
        { error: "That email is already registered." },
        { status: 409 },
      );
    }
    console.error("[api/auth/register]", err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
