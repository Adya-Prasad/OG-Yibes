"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { COMMUNITY_EVENTS, type CommunityEvent } from "@/lib/constants/events";

const cardShell =
  "border border-purple-500/35";

const chipClass =
  "rounded-full border border-indigo-400/35 bg-indigo-500/15 px-2 text-[10px] font-semibold uppercase tracking-wider text-indigo-200";

function Heat({ status }: { status: CommunityEvent["status"] }) {
  if (status === "open to join") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full border border-indigo-400/45 bg-indigo-500/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-indigo-100">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
        Open to join
      </span>
    );
  }
  if (status === "very soon") {
    return (
      <span className="rounded-full border border-purple-400/40 bg-purple-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-purple-100">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-yellow-500" />
        Very soon
      </span>
    );
  }
  return (
    <span className="rounded-full border border-indigo-400/35 bg-purple-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-indigo-100">
      {status}
    </span>
  );
}

export function EventCarousel() {
  console.log("[EventCarousel] render");
  return (
    <section id="events" className="scroll-mt-24 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 max-w-2xl">
          <h2 className="font-[family-name:var(--font-orbitron)] text-2xl font-bold text-zinc-50 sm:text-3xl">
            Browse All Events
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400 sm:text-base">
            Real program we run or pilot with hosts and safety
            briefings: motorsport, robots, drones, lab science, and stage rounds.
            Swipe sideways on your phone — one thumb, zero clutter.
          </p>
        </div>

        <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
          {COMMUNITY_EVENTS.map((evt, i) => (
            <motion.article
              key={evt.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className={`glass flex min-w-[78vw] snap-center flex-col overflow-hidden rounded-3xl sm:min-w-[320px] ${cardShell}`}
            >
              <div className="relative aspect-[16/10] w-full shrink-0">
                <Image
                  src={evt.coverImage}
                  alt={evt.coverAlt}
                  fill
                  sizes="(max-width: 640px) 78vw, 320px"
                  className="object-cover"
                  priority={i < 2}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0f0f11] via-[#0f0f11]/40 to-indigo-900/25"
                  aria-hidden
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="mt-2 font-[family-name:var(--font-orbitron)] text-lg font-bold leading-snug text-zinc-50 sm:text-xl">
                      {evt.title}
                    </h3>
                  </div>
                  <Heat status={evt.status} />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {evt.tagline}
                </p>
                <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-zinc-500">
                  {evt.description}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-white/10 pt-4">
                  <span className={chipClass}>{evt.categoryLabel}</span>
                  <Link
                    href={`/events/register?event=${encodeURIComponent(evt.id)}`}
                    className="ml-auto text-sm font-bold text-indigo-300 hover:text-purple-200"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
