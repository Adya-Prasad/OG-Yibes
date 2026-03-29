import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { COOKIE_NAME, signSessionToken } from "@/lib/auth";
import { findUserByEmail } from "@/lib/users-store";
import { loginSchema } from "@/lib/validation";

export async function POST(req: Request) {
  try {
    const body: unknown = await req.json();
    const parsed = loginSchema.safeParse(body);
    if (!parsed.success) {
      console.warn("[api/auth/login] Validation failed");
      return NextResponse.json(
        { error: "Validation failed", issues: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const email = parsed.data.email.trim().toLowerCase();
    const user = await findUserByEmail(email);
    if (!user) {
      console.warn("[api/auth/login] Unknown email attempt");
      return NextResponse.json(
        { error: "Invalid email or password." },
        { status: 401 },
      );
    }

    const ok = await bcrypt.compare(parsed.data.password, user.passwordHash);
    if (!ok) {
      console.warn("[api/auth/login] Bad password");
      return NextResponse.json(
        { error: "Invalid email or password." },
        { status: 401 },
      );
    }

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
    console.error("[api/auth/login]", err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
