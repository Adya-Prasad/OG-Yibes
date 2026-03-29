"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SLIDES = [
  {
    id: "s1",
    title: "Beat Boxing Competition",
    subtitle:
      "Pack racing with marshals, transponders, and a clean drivers’ meeting before power goes on.",
    image: "/beatboxing-compeition.webp",
    alt: "Beatboxing competition",
  },
  {
    id: "s2",
    title: "Line Follower Robot Race",
    subtitle:
      "Follow a black line on a white mat as fast as stability allows. One bot per entrant, multiple attempts, best lap counts. Great for schools and solo makers—bring your Arduino, STM32, or Pi build.",
    image: "/line-follower-robot-race.webp",
    alt: "Line follower robot race",
  },
  {
    id: "s3",
    title: "Bulild your own robots team to play football and win",
    subtitle:
      "Two goals, rolling wheels, strategy on the field. Teams of three register together; we publish rules PDFs and safety checks before match day.",
    image: "/build-robot-playing-football-match.webp",
    alt: "Robots football",
  },
];

export function MediaShowcase() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, 4200);
    console.log("[MediaShowcase] autoplay started");
    return () => window.clearInterval(t);
  }, []);

  const active = SLIDES[index];

  return (
    <section className="border-b border-white/10 pb-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-6 flex flex-col gap-2 flex items-center justify-center">
          <div>
            <h2 className="font-[family-name:var(--font-orbitron)] text-center mb-5 text-3xl font-bold text-zinc-50 sm:text-3xl">
              Open Events
            </h2>
            <p className="text-sm">
              Who can join? All are welcome. Any college group, club memebers, indie groups, students group, techy groups, etc.
            </p>
          </div>          
        </div>

        <motion.div
          key={active.id}
          initial={{ opacity: 0.4, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45 }}
          className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-indigo-500/25 shadow-[0_0_60px_rgba(79,70,229,0.2)]"
        >
          <Image
            src={active.image}
            alt={active.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1152px) 100vw, 1152px"
            priority
          />
          <div
            className="absolute inset-0 bg-gradient-to-tr from-indigo-950/85 via-purple-900/55 to-indigo-900/35"
            aria-hidden
          />
          <div className="absolute inset-0 mix-blend-overlay shimmer opacity-30" />
          <div className="relative flex h-full flex-col justify-end p-6 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200/90">
              Open to participants
            </p>
            <h3 className="mt-2 font-[family-name:var(--font-orbitron)] text-2xl font-bold text-white sm:text-4xl">
              {active.title}
            </h3>
            <p className="mt-2 max-w-lg text-sm text-zinc-100/90 sm:text-base">
              {active.subtitle}
            </p>
          </div>
        </motion.div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setIndex(i)}
              className={`rounded-2xl border px-4 py-3 text-left transition ${
                i === index
                  ? "border-indigo-400/55 bg-indigo-500/15"
                  : "border-white/10 bg-white/5 hover:border-indigo-400/35"
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                Event {i + 1}
              </p>
              <p className="mt-1 text-sm font-semibold text-zinc-100">{s.title}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
