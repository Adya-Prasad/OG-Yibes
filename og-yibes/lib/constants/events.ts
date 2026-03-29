/** Remote cover art: Unsplash & Pexels (free-use); URLs are stable photo IDs with crop params. */
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
  heat: "live" | "soon" | "open";
};

export const COMMUNITY_EVENTS: CommunityEvent[] = [
  {
    id: "evt-rc",
    slug: "rc-car-racing",
    title: "RC Car Racing",
    tagline: "Electric 1:10 rigs, timed laps, clean overtakes.",
    description:
      "Indoor carpet track with A–Main qualifying. Bring your own brushless setup or borrow a club car where we have spares. Marshalling, transponder timing, and brackets posted same day.",
    coverImage:
      "https://images.unsplash.com/photo-1598532163507-1920ad1d9d4f?auto=format&fit=crop&w=1200&q=80",
    coverAlt: "RC cars racing on a tight indoor track",
    categoryLabel: "Motorsport",
    heat: "live",
  },
  {
    id: "evt-robots-football",
    slug: "robots-football",
    title: "Robots Football",
    tagline: "Two goals, rolling wheels, strategy on the field.",
    description:
      "Small-league robot soccer: autonomous or radio-controlled bots chase a light ball across a short pitch. Teams of three register together; we publish rules PDFs and safety checks before match day.",
    coverImage:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    coverAlt: "A small robot on a table ready to compete",
    categoryLabel: "Robotics",
    heat: "open",
  },
  {
    id: "evt-line-follower",
    slug: "line-follower-robot-race",
    title: "Line Follower Robot Race",
    tagline: "Sensors, PID tuning, and perfect line tracking.",
    description:
      "Follow a black line on a white mat as fast as stability allows. One bot per entrant, multiple attempts, best lap counts. Great for schools and solo makers—bring your Arduino, STM32, or Pi build.",
    coverImage:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200",
    coverAlt: "Hands working on a circuit board with tools",
    categoryLabel: "Robotics",
    heat: "soon",
  },
  {
    id: "evt-drone",
    slug: "drone-race-competition",
    title: "Drone Race Competition",
    tagline: "Whoop and 5\" classes through LED gates.",
    description:
      "FPV drone racing with tech inspection and designated video channels. Practice slots in the morning, heats in the afternoon. If you are new, we run a chill ‘track walk’ before batteries go on.",
    coverImage:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1200&q=80",
    coverAlt: "Drone flying against a clear sky",
    categoryLabel: "Air sports",
    heat: "live",
  },
  {
    id: "evt-sperm-racing",
    slug: "sperm-racing",
    title: "Sperm Racing",
    tagline: "Microscopy sprint — science, not jokes.",
    description:
      "A biology-lab–style observation event: teams prepare slides and compare motility under shared microscope feeds. It is timed, educational, and run by student mentors; consent and lab safety briefings are mandatory.",
    coverImage:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1200&q=80",
    coverAlt: "Laboratory microscope on a bench",
    categoryLabel: "Science lab",
    heat: "open",
  },
  {
    id: "evt-beatbox",
    slug: "beat-boxing-competition",
    title: "Beat Boxing Competition",
    tagline: "Vocal drums, bass, and crowd energy.",
    description:
      "Solo and crew rounds with a simple judging rubric (musicality, originality, stage presence). No gear required—just a mic and a timer. Wildcard slots open if we have time at the end of the night.",
    coverImage:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80",
    coverAlt: "Microphone on a dark stage with purple lighting",
    categoryLabel: "Performance",
    heat: "open",
  },
];

export function getEventById(id: string): CommunityEvent | undefined {
  return COMMUNITY_EVENTS.find((e) => e.id === id);
}

export function getEventBySlug(slug: string): CommunityEvent | undefined {
  return COMMUNITY_EVENTS.find((e) => e.slug === slug);
}
