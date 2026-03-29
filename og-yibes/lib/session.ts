import { cookies } from "next/headers";
import { COOKIE_NAME, verifySessionToken, type SessionPayload } from "@/lib/auth";

export async function getSession(): Promise<SessionPayload | null> {
  const jar = await cookies();
  const token = jar.get(COOKIE_NAME)?.value;
  if (!token) {
    console.log("[session] No session cookie.");
    return null;
  }
  const session = await verifySessionToken(token);
  if (session) {
    console.log("[session] Active session for:", session.sub);
  }
  return session;
}
