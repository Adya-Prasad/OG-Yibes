"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function RegisterForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    console.log("[RegisterForm] submit");
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, displayName }),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) {
        setError(data.error ?? "Could not register.");
        console.warn("[RegisterForm] failed", res.status);
        return;
      }
      console.log("[RegisterForm] success");
      router.push("/events/register");
      router.refresh();
    } catch (err) {
      console.error("[RegisterForm]", err);
      setError("Network error — try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="glass mx-auto max-w-md space-y-4 rounded-3xl p-6 sm:p-8"
    >
      <div>
        <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
          Email
        </label>
        <input
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full rounded-xl border border-white/10 bg-zinc-950/60 px-3 py-2 text-sm text-zinc-100 outline-none transition focus:ring-2 focus:ring-indigo-500/45"
        />
      </div>
      <div>
        <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
          Display name
        </label>
        <input
          type="text"
          autoComplete="nickname"
          required
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          className="mt-1 w-full rounded-xl border border-white/10 bg-zinc-950/60 px-3 py-2 text-sm text-zinc-100 outline-none transition focus:ring-2 focus:ring-indigo-500/45"
        />
      </div>
      <div>
        <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
          Password
        </label>
        <input
          type="password"
          autoComplete="new-password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 w-full rounded-xl border border-white/10 bg-zinc-950/60 px-3 py-2 text-sm text-zinc-100 outline-none transition focus:ring-2 focus:ring-indigo-500/45"
        />
        <p className="mt-1 text-xs text-zinc-500">At least 8 characters.</p>
      </div>
      {error && (
        <p className="rounded-xl border border-red-400/30 bg-red-500/10 px-3 py-2 text-sm text-red-200">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 py-3 text-sm font-bold text-white disabled:opacity-60"
      >
        {loading ? "Creating account…" : "Create account"}
      </button>
    </form>
  );
}
