export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  detail: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Survey & Blind Spot Audit",
    description: "We walk the site and map every blind spot before a single drawing is touched.",
    detail:
      "Coverage gaps for Wi-Fi, CCTV and fire detection are identified on-site, against the actual walls - not a generic template.",
  },
  {
    number: "02",
    title: "Design (Electrical Drawings)",
    description: "Ground and upper floor plans, site plan, and device placement drawn to match site reality.",
    detail:
      "Every device - DB, AP, CCTV, fire, smart automation - is placed on a single coordinated drawing set.",
  },
  {
    number: "03",
    title: "Legend / Schedule + 3D Validation",
    description: "A3 printable legend, CSV schedule, and a 3D walkthrough validated at 1.6m eye height.",
    detail: "You see the building before it's built, and your QS can price it before a wire is pulled.",
  },
  {
    number: "04",
    title: "Supervision & Handover",
    description: "On-site supervision through install, then a documented handover.",
    detail: "Device schedule, as-built drawings and a walkthrough pass delivered with the keys.",
  },
];
