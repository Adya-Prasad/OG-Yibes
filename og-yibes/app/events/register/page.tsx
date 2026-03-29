import { Suspense } from "react";
import Link from "next/link";
import { EventRegisterIntro } from "@/components/EventRegisterIntro";
import { EventRegisterForm } from "@/components/forms/EventRegisterForm";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/home/SiteFooter";

export const metadata = {
  title: "Event registration",
  description: "Sign up for OG Yibes competitions and programs.",
};

function FormFallback() {
  return (
    <div className="glass mx-auto max-w-lg rounded-3xl p-8 text-center text-sm text-zinc-400">
      Loading form…
    </div>
  );
}

export default function EventRegisterPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col px-4 py-10 sm:px-6">
        <div className="mx-auto w-full max-w-2xl text-center">
          <h1 className="font-[family-name:var(--font-orbitron)] text-3xl font-bold text-zinc-50">
            Event registration
          </h1>
          <div className="mt-3">
            <EventRegisterIntro />
          </div>
          <p className="mt-2 text-sm text-zinc-400">
            Choose a program, add an optional team name, and send your RSVP — we
            keep one entry per person per event.
          </p>
          <p className="mt-3 text-xs text-zinc-500">
            Need an account first?{" "}
            <Link href="/register" className="text-indigo-300 hover:text-purple-200">
              Register
            </Link>{" "}
            or{" "}
            <Link href="/login" className="text-indigo-300 hover:text-purple-200">
              log in
            </Link>
            .
          </p>
        </div>
        <div className="mt-8">
          <Suspense fallback={<FormFallback />}>
            <EventRegisterForm />
          </Suspense>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
