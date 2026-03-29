"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type SessionUser = { id: string; email: string; displayName: string } | null;

export function SiteHeader() {
  const [user, setUser] = useState<SessionUser>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/auth/session", { cache: "no-store" });
        const data = (await res.json()) as { user: SessionUser };
        if (!cancelled) setUser(data.user);
      } catch (e) {
        console.error("[SiteHeader] session fetch failed", e);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  async function logout() {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      setUser(null);
      console.log("[SiteHeader] Logged out");
    } catch (e) {
      console.error("[SiteHeader] logout failed", e);
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 glass">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="group flex items-center gap-2">
          <motion.span
            className="font-[family-name:var(--font-orbitron)] text-lg font-bold tracking-tight sm:text-xl"
            whileHover={{ scale: 1.02 }}
          >
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              OG
            </span>
            <span className="text-zinc-100"> Yibes</span>
          </motion.span>
          <span className="hidden rounded-full border border-indigo-400/25 bg-indigo-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-indigo-200 sm:inline">
            Beta
          </span>
        </Link>

        <nav className="flex items-center gap-2 sm:gap-3">
          {!loading && user ? (
            <>
              <span className="hidden max-w-[160px] truncate text-sm text-zinc-300 sm:inline">
                {user.displayName}
              </span>
              <Link
                href="/events/register"
                className="rounded-full border border-indigo-400/40 bg-indigo-500/10 px-3 py-1.5 text-xs font-semibold text-indigo-100 transition hover:bg-indigo-500/18 sm:text-sm"
              >
                Events
              </Link>
              <button
                type="button"
                onClick={() => void logout()}
                className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold text-zinc-200 transition hover:border-indigo-400/35 sm:text-sm"
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="rounded-full px-3 py-1.5 text-xs font-semibold text-zinc-300 transition hover:text-indigo-100 sm:text-sm"
              >
                Log in
              </Link>
              <Link
                href="/register"
                className="rounded-full bg-gradient-to-r from-blue-800 to-violet-500 px-4 py-2 text-xs font-bold text-white transition hover:brightness-110 sm:text-sm"
              >
                Register
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
