import Link from "next/link";
import { RegisterForm } from "@/components/forms/RegisterForm";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/home/SiteFooter";

export const metadata = {
  title: "Register",
  description: "Create your OG Yibes account and join the community.",
};

export default function RegisterPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col px-4 py-10 sm:px-6">
        <div className="mx-auto w-full max-w-xl text-center">
          <h1 className="font-[family-name:var(--font-orbitron)] text-3xl font-bold text-zinc-50">
            Create your account
          </h1>
          <p className="mt-2 text-sm text-zinc-400">
            Already rolling?{" "}
            <Link href="/login" className="font-semibold text-indigo-300 hover:text-purple-200">
              Log in
            </Link>
          </p>
        </div>
        <div className="mt-8">
          <RegisterForm />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
