import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-indigo-500/15 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex flex-wrap gap-4 text-sm text-zinc-200">
          <Link href="/register" className="hover:text-violet-500">
            Register
          </Link>
          <Link href="/login" className="hover:text-violet-500">
            Log in
          </Link>
          <a href="#events" className="hover:text-violet-500">
            Browse
          </a>
        </div>
        <div>
          <p className="font-[family-name:var(--font-orbitron)] text-lg font-bold text-zinc-100">
            OG Yibes
          </p>
          <p className="text-center text-xs text-zinc-600">
        © {new Date().getFullYear()}, all rights reserved.
      </p>
        </div>
      </div>
      
    </footer>
  );
}
