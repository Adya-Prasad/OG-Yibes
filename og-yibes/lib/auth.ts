import { SignJWT, jwtVerify } from "jose";

const COOKIE_NAME = "og_session";

export function getAuthSecret(): Uint8Array {
  const secret = process.env.AUTH_SECRET;
  if (secret && secret.length >= 16) {
    return new TextEncoder().encode(secret);
  }
  if (process.env.NODE_ENV === "development") {
    console.warn(
      "[auth] Using insecure dev fallback — set AUTH_SECRET (16+ chars) in .env.local for production-like signing.",
    );
    return new TextEncoder().encode("og-yibes-dev-insecure-secret");
  }
  console.error(
    "[auth] AUTH_SECRET missing or too short — set a strong secret in the environment.",
  );
  throw new Error("AUTH_SECRET_INVALID");
}

export type SessionPayload = {
  sub: string;
  email: string;
  displayName: string;
};

export async function signSessionToken(payload: SessionPayload): Promise<string> {
  const secret = getAuthSecret();
  const token = await new SignJWT({
    email: payload.email,
    displayName: payload.displayName,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(payload.sub)
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret);
  console.log("[auth] Session token issued for user:", payload.sub);
  return token;
}

export async function verifySessionToken(
  token: string,
): Promise<SessionPayload | null> {
  try {
    const secret = getAuthSecret();
    const { payload } = await jwtVerify(token, secret);
    const sub = typeof payload.sub === "string" ? payload.sub : "";
    const email = typeof payload.email === "string" ? payload.email : "";
    const displayName =
      typeof payload.displayName === "string" ? payload.displayName : "";
    if (!sub || !email) return null;
    return { sub, email, displayName };
  } catch (err) {
    console.warn("[auth] Session verify failed:", err);
    return null;
  }
}

export { COOKIE_NAME };
