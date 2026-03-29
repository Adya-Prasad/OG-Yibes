"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SLIDES = [
  {
    id: "s1",
    title: "On the track",
    subtitle:
      "Pack racing with marshals, transponders, and a clean drivers’ meeting before power goes on.",
    image:
      "https://images.unsplash.com/photo-1598532163507-1920ad1d9d4f?auto=format&fit=crop&w=1600&q=80",
    alt: "RC cars cornering on an indoor circuit",
  },
  {
    id: "s2",
    title: "In the air",
    subtitle:
      "Gate practice, channel checks, and batteries labeled — FPV is fun when the rules are clear.",
    image:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1600&q=80",
    alt: "Racing drone in flight against the sky",
  },
  {
    id: "s3",
    title: "On stage",
    subtitle:
      "Beat rounds with a visible timer — crowd noise counts, judges use the same sheet every time.",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1600&q=80",
    alt: "Microphone under stage lights",
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
    <section className="border-b border-white/10 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-[family-name:var(--font-orbitron)] text-2xl font-bold text-zinc-50 sm:text-3xl">
              What it feels like on site
            </h2>
            <p className="text-sm text-zinc-400 sm:text-base">
              Rotating photos from Unsplash — lightweight, responsive, and
              masked with a single purple–indigo grade so the UI stays coherent.
            </p>
          </div>
          <div className="flex gap-2">
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                type="button"
                aria-label={`Show slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-8 bg-indigo-400" : "w-2 bg-zinc-600"
                }`}
              />
            ))}
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
              Featured look
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
                Scene {i + 1}
              </p>
              <p className="mt-1 text-sm font-semibold text-zinc-100">{s.title}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
