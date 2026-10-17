export interface Persona {
  id: string;
  label: string;
  pain: string;
  question: string;
  clarity: string;
}

export const PERSONAS: Persona[] = [
  {
    id: "developer",
    label: "Developer",
    pain: "Scope creep from trades that never read the same drawing, QS pricing off guesswork, and rework discovered on-site.",
    question: "Is solar + inverter + battery integrated from day one, or bolted on later?",
    clarity:
      "One drawing set every trade works from, with a device schedule your QS can price before a single wire is pulled.",
  },
  {
    id: "builder",
    label: "Builder",
    pain: "Conflicting markups between electrical, mechanical and plumbing, and a DB position nobody agreed on.",
    question: "Where is the DB, and what exactly does it control?",
    clarity:
      "A single site-accurate drawing with an A3 printable legend your electrician can install straight from.",
  },
  {
    id: "homeowner",
    label: "Homeowner",
    pain: "Can't picture the finished house, and switches, sockets and panels end up in the wrong place.",
    question: "Can I see the house before it's built?",
    clarity:
      "A 3D walkthrough at 1.6m eye height, clean and annotated, so you approve the plan before construction - not after.",
  },
  {
    id: "hotel-owner",
    label: "Hotel Owner",
    pain: "Card pocket behind the door, guests who can't find the switch at 2am, failed fire inspections, Wi-Fi dead zones, a pool light that keeps tripping.",
    question: "How do you handle Arrival vs Welcome states, and how is fire zoned across 20 rooms?",
    clarity:
      "Latch-side card pocket at 1100mm, Arrival/Welcome smart states, and break-glass at every exit and stair landing - documented, not assumed.",
  },
];
