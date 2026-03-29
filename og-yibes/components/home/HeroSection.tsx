"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  console.log("[HeroSection] render");
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-70" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-5"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-purple-500/35 bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-400" />
            </span>
            Programs open · Students &amp; indie crews welcome
          </p>
          <h1 className="font-[family-name:var(--font-orbitron)] text-4xl font-black leading-tight tracking-tight text-zinc-50 sm:text-5xl md:text-6xl">
            A home base for{" "}
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              real-world play.
            </span>
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            OG Yibes is a youth-led community board for competitions you can
            actually join: RC racing, robot games, drone gates, lab demos, and
            stage battles. Create an account, reserve a spot, and show up with
            your friends — we handle the schedule links and check-in list.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/register"
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-[0_0_32px_rgba(99,102,241,0.35)] transition hover:brightness-110"
            >
              Join the community
            </Link>
            <Link
              href="#events"
              className="inline-flex items-center justify-center rounded-2xl border border-indigo-400/35 bg-indigo-500/10 px-6 py-3 text-sm font-semibold text-indigo-100 transition hover:border-purple-400/45 hover:bg-indigo-500/15"
            >
              Browse events
            </Link>
          </div>
        </motion.div>

        <div className="overflow-hidden rounded-2xl border border-indigo-500/25 bg-indigo-950/20">
          <div className="marquee-track flex w-max whitespace-nowrap py-2 text-xs font-semibold uppercase tracking-[0.35em] text-indigo-300/90">
            <span className="mx-8 text-purple-300">WIN</span>
            <span className="mx-8 text-indigo-300">LIVE</span>
            <span className="mx-8 text-purple-200">RACE</span>
            <span className="mx-8 text-indigo-200">VIBE</span>
            <span className="mx-8 text-purple-300">WIN</span>
            <span className="mx-8 text-indigo-300">LIVE</span>
            <span className="mx-8 text-purple-200">RACE</span>
            <span className="mx-8 text-indigo-200">VIBE</span>
            <span aria-hidden className="mx-8 text-purple-300">
              WIN
            </span>
            <span aria-hidden className="mx-8 text-indigo-300">
              LIVE
            </span>
            <span aria-hidden className="mx-8 text-purple-200">
              RACE
            </span>
            <span aria-hidden className="mx-8 text-indigo-200">
              VIBE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
