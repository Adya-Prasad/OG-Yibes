"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const ITEMS = [
  {
    q: "Does it cost money to create an account?",
    a: "No — signing up is free. If a specific venue charges a door fee or kit deposit, the event card will say so before you register.",
  },
  {
    q: "What happens after I submit an event form?",
    a: "Your registration is stored against your account. Organizers export the list for check-in; you can register again for a different event, but not twice for the same one.",
  },
  {
    q: "Can our club enter as a team?",
    a: "Yes. Add a team name on the form so we can group you for announcements and results. Crew size limits follow each event’s PDF rules.",
  },
  {
    q: "How are passwords handled?",
    a: "We hash passwords with bcrypt and never return them in API JSON. Session tokens live in HTTP-only cookies, which reduces XSS risk compared with storing tokens in localStorage.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-b border-white/10 py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="font-[family-name:var(--font-orbitron)] text-2xl font-bold text-zinc-50 sm:text-3xl">
          FAQs
        </h2>
        <p className="mt-2 text-sm text-zinc-400 sm:text-base">
          Straight answers — tap a row to expand.
        </p>
        <div className="mt-8 space-y-3">
          {ITEMS.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-indigo-500/15 bg-indigo-950/20"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-sm font-semibold text-zinc-100 sm:text-base"
                >
                  {item.q}
                  <span className="text-indigo-300">{isOpen ? "−" : "+"}</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                    >
                      <p className="px-4 pb-4 text-sm leading-relaxed text-zinc-400">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
