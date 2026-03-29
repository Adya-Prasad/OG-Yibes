import { getSession } from "@/lib/session";

export async function EventRegisterIntro() {
  const session = await getSession();
  if (!session) {
    return (
      <p className="text-center text-sm text-indigo-200/95">
        You are not signed in — create an account or log in so we can attach
        your registration to your profile.
      </p>
    );
  }
  return (
    <p className="text-center text-sm text-indigo-300">
      Signed in as{" "}
      <strong className="text-purple-200">{session.displayName}</strong>
    </p>
  );
}
