export type ChapterSystem =
  | "electrical"
  | "mechanical"
  | "plumbing"
  | "full_mep"
  | "cctv"
  | "fire"
  | "smart_home";

export interface Chapter {
  index: number;
  title: string;
  note: string;
  /** Device legend codes visible in this chapter's annotated pass - see lib/data/devices.ts */
  devicesVisible?: string[];
  /** Which system this chapter emphasizes, for future per-system viewer filtering. */
  system?: ChapterSystem;
}

export const CHAPTERS: Chapter[] = [
  {
    index: 1,
    title: "Exterior Approach",
    note: "Charcoal cladding, vertical wood-slat screens, cream lower walls, flat roof overhang, jacaranda and flame trees, purple hydrangeas, grey paving.",
    devicesVisible: ["CCTV"],
    system: "full_mep",
  },
  {
    index: 2,
    title: "Reception / Lobby",
    note: "Double-height void looking up to the gallery, wood-slat ceiling with warm-white linear LED.",
    devicesVisible: ["AP", "FAP", "CCTV"],
    system: "full_mep",
  },
  {
    index: 3,
    title: "Lounge + Saloon Bar",
    note: "Dark, wood-toned public seating.",
    devicesVisible: ["AP", "CCTV"],
    system: "electrical",
  },
  {
    index: 4,
    title: "Eatery",
    note: "Dark pendant clusters over tables, wood-slat perimeter.",
    devicesVisible: ["AP", "SD"],
    system: "electrical",
  },
  {
    index: 5,
    title: "Event Hall - Meeting",
    note: "Bright state, blinds open.",
    devicesVisible: ["AP", "SD", "SN"],
    system: "smart_home",
  },
  {
    index: 6,
    title: "Event Hall - Presentation",
    note: "Dimmed state, blinds closed, wood-slat feature ceiling glow only.",
    devicesVisible: ["AP", "SD", "SN"],
    system: "smart_home",
  },
  {
    index: 7,
    title: "VIP Saloon",
    note: "Dimmable, layered lighting - the only space with a colour-tunable strip.",
    devicesVisible: ["AP", "CCTV"],
    system: "smart_home",
  },
  {
    index: 8,
    title: "Pool + VIP Yard - Dusk",
    note: "Landscape and pool lights switch on automatically at dusk.",
    devicesVisible: ["AP", "CCTV", "JB"],
    system: "smart_home",
  },
  {
    index: 9,
    title: "Main Stairs",
    note: "Break-glass at both stair landings, both floors.",
    devicesVisible: ["BG", "SD"],
    system: "fire",
  },
  {
    index: 10,
    title: "Upper Corridor + Gallery",
    note: "Gallery over Reception; continuous recessed cove and up/down sconce rhythm beside every door.",
    devicesVisible: ["SD", "SN"],
    system: "electrical",
  },
  {
    index: 11,
    title: "Standard Guest Room - Arrival",
    note: "Dark, curtains closed, cove off.",
    devicesVisible: ["CP", "RFID", "SD"],
    system: "smart_home",
  },
  {
    index: 12,
    title: "Standard Guest Room - Welcome",
    note: "Card inserted: lights and sockets live, cove glowing, monitor awake. AC and water heater are never card-controlled.",
    devicesVisible: ["CP", "RFID", "WM", "IC"],
    system: "smart_home",
  },
  {
    index: 13,
    title: "Apartment Master Suite",
    note: "Textured stone feature wall behind the bed, concealed uplighting and linear strips - used only here.",
    devicesVisible: ["WM", "IC"],
    system: "electrical",
  },
  {
    index: 14,
    title: "Apartment Bedroom 2 + Lounge",
    note: "Secondary bedroom and private lounge of the apartment.",
    devicesVisible: ["AP"],
    system: "electrical",
  },
];
