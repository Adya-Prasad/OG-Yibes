/** Cover art lives in `/public` and is referenced as root-relative paths (e.g. `/event-id.jpg`). */
export type CommunityEvent = {
  id: string;
  slug: string;
  title: string;
  /** Short hook for cards and selects */
  tagline: string;
  /** What actually happens — schedule, gear, vibe */
  description: string;
  coverImage: string;
  coverAlt: string;
  categoryLabel: string;
  status: "open to join" | "very soon" | string ;
};

export const COMMUNITY_EVENTS: CommunityEvent[] = [
  {
    id: "evt-robots-football",
    slug: "robots-football",
    title: "Robots Football",
    tagline: "Two goals, rolling wheels, strategy on the field.",
    description:
      "Small-league robot soccer: autonomous or radio-controlled bots chase a light ball across a short pitch. Teams of three register together; we publish rules PDFs and safety checks before match day.",
    coverImage: "/build-robot-playing-football-match.webp",
    coverAlt: "A small robot on a table ready to compete",
    categoryLabel: "Robotics",
    status: "open to join",
  },
  {
    id: "evt-rc",
    slug: "rc-car-racing",
    title: "RC Car Racing",
    tagline: "Electric 1:10 rigs, timed laps, clean overtakes.",
    description:
      "Indoor carpet track with Main qualifying. Bring your own brushless setup or borrow a club car where we have spares. Marshalling, transponder timing, and brackets posted same day.",
    coverImage: "/build-rc-car-race.webp",
    coverAlt: "RC cars racing on a tight indoor track",
    categoryLabel: "RC Racing",
    status: "very soon",
  },

  {
    id: "evt-drone",
    slug: "drone-race-competition",
    title: "Drone Race Competition",
    tagline: "Whoop and 5\" classes through LED gates.",
    description:
      "FPV drone racing with tech inspection and designated video channels. Practice slots in the morning, statuss in the afternoon. If you are new, we run a chill ‘track walk’ before batteries go on.",
    coverImage: "/drone-race.webp",
    coverAlt: "Drone flying against a clear sky",
    categoryLabel: "RC Racing",
    status: "from apr 15",
  },
  {
    id: "evt-sperm-racing",
    slug: "sperm-racing",
    title: "Sperm Racing",
    tagline: "Microscopy sprint — science, not jokes.",
    description:
      "A biology-lab–style observation event: teams prepare slides and compare motility under shared microscope feeds. It is timed, educational, and run by student mentors; consent and lab safety briefings are mandatory.",
    coverImage: "/sperm-racing.webp",
    coverAlt: "Laboratory microscope on a bench",
    categoryLabel: "Science lab",
    status: "closed",
  },
  {
    id: "evt-line-follower",
    slug: "line-follower-robot-race",
    title: "Line Follower Robot Race",
    tagline: "Sensors, PID tuning, and perfect line tracking.",
    description:
      "Follow a black line on a white mat as fast as stability allows. One bot per entrant, multiple attempts, best lap counts. Great for schools and solo makers—bring your Arduino, STM32, or Pi build.",
    coverImage: "/line-follower-robot-race.webp",
    coverAlt: "Hands working on a circuit board with tools",
    categoryLabel: "RC Racing",
    status: "very soon",
  },
  {
    id: "evt-beatbox",
    slug: "beat-boxing-competition",
    title: "Beat Boxing Competition",
    tagline: "Vocal drums, bass, and crowd energy.",
    description:
      "Solo and crew rounds with a simple judging rubric (musicality, originality, stage presence). No gear required—just a mic and a timer. Wildcard slots open if we have time at the end of the night.",
    coverImage: "/beatboxing-compeition.webp",
    coverAlt: "Microphone on a dark stage with purple lighting",
    categoryLabel: "Music",
    status: "open",
  },
  {
    id: "RC-racing-ship",
    slug: "beat-boxing-competition",
    title: "Build Ship and Race",
    tagline: "Build a ship and race it across the water.",
    description:
      "Build a ship and race it across the water. The ship can be made of anything, as long as it is water-proof and can float. The ship can be powered by anything, as long as it is safe and legal. The ship can be as simple or as complex as you want.",
    coverImage: "/build-rc-ship-racing.webp",
    coverAlt: "A ship being built and raced across the water",
    categoryLabel: "RC Racing",
    status: "open",
  },
  {
    id: "3d-creators",
    slug: "beat-boxing-competition",
    title: "3D Creators! Create hyperealistic 3D 5 minutes scene",
    tagline: "Create hyperealistic 3D 5 minutes scene",
    description:
      "Solo and crew rounds with a simple judging rubric (musicality, originality, stage presence). No gear required—just a mic and a timer. Wildcard slots open if we have time at the end of the night.",
    coverImage: "/create-3d-hyperrealistic-scene-competition.webp",
    coverAlt: "Microphone on a dark stage with purple lighting",
    categoryLabel: "Performance",
    status: "open",
  },
];

export function getEventById(id: string): CommunityEvent | undefined {
  return COMMUNITY_EVENTS.find((e) => e.id === id);
}

export function getEventBySlug(slug: string): CommunityEvent | undefined {
  return COMMUNITY_EVENTS.find((e) => e.slug === slug);
}
