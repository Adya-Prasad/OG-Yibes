"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { COMMUNITY_EVENTS } from "@/lib/constants/events";

export function EventRegisterForm() {
  const router = useRouter();
  const params = useSearchParams();
  const defaultEvent = params.get("event") ?? "";

  const [eventId, setEventId] = useState(defaultEvent);
  const [teamName, setTeamName] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const selected = useMemo(
    () => COMMUNITY_EVENTS.find((e) => e.id === eventId),
    [eventId],
  );

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);
    console.log("[EventRegisterForm] submit", eventId);
    try {
      const res = await fetch("/api/events/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventId, teamName, notes }),
      });
      const data = (await res.json()) as {
        error?: string;
        registration?: { eventTitle?: string };
      };
      if (res.status === 401) {
        setError("Sign in or create an account first.");
        console.warn("[EventRegisterForm] unauthorized");
        return;
      }
      if (!res.ok) {
        setError(data.error ?? "Could not register.");
        console.warn("[EventRegisterForm] failed", res.status);
        return;
      }
      setSuccess(
        `Locked in for ${data.registration?.eventTitle ?? "event"} — see you in the arena.`,
      );
      router.refresh();
    } catch (err) {
      console.error("[EventRegisterForm]", err);
      setError("Network error — try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="glass mx-auto max-w-lg space-y-4 rounded-3xl p-6 sm:p-8"
    >
      <div>
        <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
          Event
        </label>
        <select
          required
          value={eventId}
          onChange={(e) => setEventId(e.target.value)}
          className="mt-1 w-full rounded-xl border border-white/10 bg-zinc-950/60 px-3 py-2 text-sm text-zinc-100 outline-none focus:ring-2 focus:ring-indigo-500/45"
        >
          <option value="" disabled>
            Select an event
          </option>
          {COMMUNITY_EVENTS.map((e) => (
            <option key={e.id} value={e.id}>
              {e.title}
            </option>
          ))}
        </select>
        {selected && (
          <div className="mt-3 space-y-2 rounded-xl border border-indigo-500/20 bg-indigo-950/20 p-3 text-left">
            <p className="text-sm font-medium text-indigo-100">{selected.tagline}</p>
            <p className="text-xs leading-relaxed text-zinc-400">{selected.description}</p>
          </div>
        )}
      </div>
      <div>
        <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
          Team name (optional)
        </label>
        <input
          type="text"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          className="mt-1 w-full rounded-xl border border-white/10 bg-zinc-950/60 px-3 py-2 text-sm text-zinc-100 outline-none focus:ring-2 focus:ring-indigo-500/45"
          placeholder="Squad label for leaderboards"
        />
      </div>
      <div>
        <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
          Notes (optional)
        </label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
          className="mt-1 w-full rounded-xl border border-white/10 bg-zinc-950/60 px-3 py-2 text-sm text-zinc-100 outline-none focus:ring-2 focus:ring-indigo-500/45"
          placeholder="Dietary needs, accessibility, or flex intro"
        />
      </div>
      {error && (
        <p className="rounded-xl border border-red-400/30 bg-red-500/10 px-3 py-2 text-sm text-red-200">
          {error}
        </p>
      )}
      {success && (
        <p className="rounded-xl border border-indigo-400/35 bg-indigo-500/15 px-3 py-2 text-sm text-indigo-100">
          {success}
        </p>
      )}
      <button
        type="submit"
        disabled={loading || !eventId}
        className="w-full rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 py-3 text-sm font-bold text-white disabled:opacity-60"
      >
        {loading ? "Submitting…" : "Confirm registration"}
      </button>
    </form>
  );
}
