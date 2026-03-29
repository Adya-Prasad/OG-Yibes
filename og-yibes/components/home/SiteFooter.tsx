import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-indigo-500/15 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="font-[family-name:var(--font-orbitron)] text-lg font-bold text-zinc-100">
            OG Yibes
          </p>
          <p className="mt-1 text-sm text-zinc-500">
            In-person energy · Purple–indigo night mode · Built for small crews
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-zinc-400">
          <Link href="/register" className="hover:text-indigo-200">
            Register
          </Link>
          <Link href="/login" className="hover:text-indigo-200">
            Log in
          </Link>
          <Link href="/events/register" className="hover:text-indigo-200">
            Events
          </Link>
          <a href="#events" className="hover:text-indigo-200">
            Browse
          </a>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-zinc-600">
        © {new Date().getFullYear()} OG Yibes — community demo app.
      </p>
    </footer>
  );
}
