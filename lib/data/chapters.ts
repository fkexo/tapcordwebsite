export interface Chapter {
  index: number;
  title: string;
  note: string;
}

export const CHAPTERS: Chapter[] = [
  { index: 1, title: "Site Plan & Approach", note: "Entrance, perimeter and landscaped approach." },
  { index: 2, title: "Reception", note: "Double-height void, wood-slat ceiling, fire panel." },
  { index: 3, title: "Lounge", note: "Public seating, CCTV coverage check." },
  { index: 4, title: "Eatery", note: "Dark pendant clusters, wood-slat perimeter." },
  { index: 5, title: "Event Hall - Meeting", note: "Bright state, blinds open." },
  { index: 6, title: "Event Hall - Presentation", note: "Dimmed state, slat glow only." },
  { index: 7, title: "VIP Saloon", note: "Colour-tunable dimmable strip." },
  { index: 8, title: "Corridor Rhythm", note: "Recessed cove + up/down sconce beside every door." },
  { index: 9, title: "Guest Room - Arrival", note: "Dark, curtains closed, cove off." },
  { index: 10, title: "Guest Room - Welcome", note: "Card inserted: cove glowing, monitor awake, sockets live." },
  { index: 11, title: "Apartment Master Suite", note: "Textured stone feature wall, concealed uplighting." },
  { index: 12, title: "Landing & Stairs", note: "Break-glass at both stair landings, both floors." },
  { index: 13, title: "Pool / VIP Yard - Day", note: "Daylight state, landscape visible." },
  { index: 14, title: "Pool / VIP Yard - Dusk", note: "Auto landscape + pool lights at dusk." },
];
