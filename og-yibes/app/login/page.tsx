import Link from "next/link";
import { LoginForm } from "@/components/forms/LoginForm";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/home/SiteFooter";

export const metadata = {
  title: "Log in",
  description: "Sign in to OG Yibes and register for events.",
};

export default function LoginPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col px-4 py-10 sm:px-6">
        <div className="mx-auto w-full max-w-xl text-center">
          <h1 className="font-[family-name:var(--font-orbitron)] text-3xl font-bold text-zinc-50">
            Welcome back
          </h1>
          <p className="mt-2 text-sm text-zinc-400">
            New here?{" "}
            <Link
              href="/register"
              className="font-semibold text-cyan-300 hover:text-cyan-200"
            >
              Register
            </Link>
          </p>
        </div>
        <div className="mt-8">
          <LoginForm />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
