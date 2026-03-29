export function InfoSection() {
  return (
    <section className="py-12 sm:py-16 bg-mauve-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:grid-cols-2 sm:px-6">
        <div className="space-y-4">
          <h2 className="font-[family-name:var(--font-orbitron)] text-2xl font-bold text-zinc-700">
            Why participate in OG Yibes events?
          </h2>
          <p className="text-sm leading-relaxed text-stone-600 sm:text-base">
            OG Yibes is a community-driven platform for events that are open to all. We believe in the power of community and the importance of participation in events. We believe in the power of community and the importance of participation in events.
          </p>
          <ul className="space-y-2 text-sm text-stone-600">
            <li className="flex gap-2">
              <span className="text-indigo-400">✦</span>
              Glass panels, one purple–indigo system, and thumb-friendly tap
              targets
            </li>
            <li className="flex gap-2">
              <span className="text-purple-400">✦</span>
              Validation with Zod on the server so junk data never hits your store
            </li>
            <li className="flex gap-2">
              <span className="text-indigo-400">✦</span>
              One registration per user per event so waitlists stay honest
            </li>
          </ul>
        </div>
        <div className="space-y-4 rounded-3xl border border-mauve-400 bg-mauve-500/25 p-6">
          <h3 className="font-[family-name:var(--font-orbitron)] text-lg font-bold text-zinc-700">
            Find us online
          </h3>
          <p className="text-sm leading-relaxed text-stone-600">
            We publish student-friendly competitions: radio-control racing,
            robotics games, FPV drone courses, hands-on lab experiences, and
            vocal beat battles. If you are in high school, college, or an indie
            maker crew, you can browse programs, read plain-language rules, and
            RSVP in minutes — then arrive on site with your name already on the
            list.
          </p>
        </div>
      </div>
    </section>
  );
}
