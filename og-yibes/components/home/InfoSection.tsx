export function InfoSection() {
  return (
    <section className="border-b border-white/10 py-12 sm:py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:grid-cols-2 sm:px-6">
        <div className="space-y-4">
          <h2 className="font-[family-name:var(--font-orbitron)] text-2xl font-bold text-zinc-50">
            Why the stack matches the vibe
          </h2>
          <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
            OG Yibes runs on Next.js with TypeScript and Tailwind CSS v4 so pages
            stay fast on phones and laptops alike. Auth uses bcrypt for passwords
            and signed HTTP-only cookies for sessions — no passwords in browser
            storage. Event sign-ups write to a local data file in development so
            you can test flows without wiring a database on day one.
          </p>
          <ul className="space-y-2 text-sm text-zinc-300">
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
        <div className="space-y-4 rounded-3xl border border-indigo-500/20 bg-indigo-950/25 p-6">
          <h3 className="font-[family-name:var(--font-orbitron)] text-lg font-bold text-zinc-100">
            Find us online
          </h3>
          <p className="text-sm leading-relaxed text-zinc-400">
            We publish student-friendly competitions: radio-control racing,
            robotics games, FPV drone courses, hands-on lab experiences, and
            vocal beat battles. If you are in high school, college, or an indie
            maker crew, you can browse programs, read plain-language rules, and
            RSVP in minutes — then arrive on site with your name already on the
            list.
          </p>
          <p className="text-xs text-zinc-500">
            Topics people search for: youth tech events, campus RC club, robotics
            meetup, drone race qualifier, science outreach night, beatbox battle
            signup.
          </p>
        </div>
      </div>
    </section>
  );
}
