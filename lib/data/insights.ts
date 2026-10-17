export interface InsightTeaser {
  slug: string;
  title: string;
  dek: string;
  status: "coming-soon";
}

export const INSIGHTS: InsightTeaser[] = [
  {
    slug: "card-pocket-latch-side",
    title: "Why Card Pocket Must Be Latch Side at 1100mm",
    dek: "The difference between a guest finding the switch in the dark and fumbling behind an open door.",
    status: "coming-soon",
  },
  {
    slug: "wood-slat-ceiling-placement",
    title: "Where NOT to Put Wood-Slat Ceiling",
    dek: "Reception and Event Hall earn it. Guest corridors don't. Here's the rule we hold the line on.",
    status: "coming-soon",
  },
  {
    slug: "fire-zoning-20-room-hotel",
    title: "Fire Zoning for a 20-Room Hotel: Break-Glass at Every Exit + Stair Landings",
    dek: "How addressable fire detection gets zoned across rooms, corridors and stair landings without gaps.",
    status: "coming-soon",
  },
];
