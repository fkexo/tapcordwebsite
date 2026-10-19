export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How long does the blind spot audit take?",
    answer:
      "48 hours from when we receive your plans. You get a device count and a list of coverage gaps - Wi-Fi dead zones, CCTV blind spots, DB placement, fire zoning - before any drawing work starts.",
  },
  {
    question: "What file formats do you accept?",
    answer: "PDF, DWG, RVT, PLN, PNG and JPG. Upload as many files as you have - more context means a better audit.",
  },
  {
    question: "What is 1.6m eye height validation?",
    answer:
      "1.6m is roughly the height a person actually sees a room from. We validate the 3D walkthrough at that eye level - not a bird's-eye render - so what you approve is what you'll actually experience standing in the room.",
  },
  {
    question: "Why does the card pocket have to be on the latch side at 1100mm?",
    answer:
      "It's the position a guest's hand naturally reaches first on entry, in the dark, without searching behind an open door. Latch side, 1100mm - every time, no exceptions.",
  },
  {
    question: "What's the difference between Clean and Annotated passes?",
    answer:
      "Clean is the building as it will look and feel - for presentation and approvals. Annotated overlays every device on the same shots - for your electrician, QS and fire inspector to price and install from.",
  },
];
