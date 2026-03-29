import { getSession } from "@/lib/session";

export async function EventRegisterIntro() {
  const session = await getSession();
  if (!session) {
    return (
      <p className="text-center text-sm text-amber-200/90">
        You are not signed in — register or log in before locking in an event.
      </p>
    );
  }
  return (
    <p className="text-center text-sm text-emerald-300">
      Signed in as{" "}
      <strong className="text-emerald-200">{session.displayName}</strong>
    </p>
  );
}
