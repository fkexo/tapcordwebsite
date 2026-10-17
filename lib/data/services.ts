export type ServiceIcon =
  | "electrical"
  | "mechanical"
  | "plumbing"
  | "fire"
  | "cctv"
  | "smart"
  | "drawings"
  | "walkthrough";

export interface Service {
  slug: string;
  icon: ServiceIcon;
  title: string;
  benefit: string;
  detail: string;
  href: string;
}

export const SERVICES: Service[] = [
  {
    slug: "electrical-systems",
    icon: "electrical",
    title: "Electrical Systems",
    benefit: "Power you can plan around.",
    detail:
      "DB design across 2 boards, inverter + battery rack sized to load, solar panels on the roof.",
    href: "/services#electrical-systems",
  },
  {
    slug: "mechanical-hvac",
    icon: "mechanical",
    title: "Mechanical / HVAC",
    benefit: "Climate control that matches the build.",
    detail: "Mechanical ventilation and HVAC sized to each room, zone and occupancy pattern.",
    href: "/services#mechanical-hvac",
  },
  {
    slug: "plumbing",
    icon: "plumbing",
    title: "Plumbing",
    benefit: "Water and drainage that just works.",
    detail: "Supply, drainage and hot water systems routed to match the actual site, not a template.",
    href: "/services#plumbing",
  },
  {
    slug: "fire-alarm-detection",
    icon: "fire",
    title: "Fire Alarm & Detection",
    benefit: "Addressable, zoned, inspection-ready.",
    detail:
      "Smoke in every room, corridor and stair landing. Heat in kitchen and laundry. Red break-glass at every exit and both stair landings on both floors. Sounders in corridors and guest rooms. Fire panel at reception.",
    href: "/services#fire-alarm-detection",
  },
  {
    slug: "cctv-security",
    icon: "cctv",
    title: "CCTV & Security",
    benefit: "Coverage, not just cameras.",
    detail:
      "Small domes and bullets at entrance, reception, corridors, stairs, pool/VIP yard and the perimeter.",
    href: "/services#cctv-security",
  },
  {
    slug: "smart-home-automation",
    icon: "smart",
    title: "Smart Home Automation",
    benefit: "Buildings that know the difference between empty and occupied.",
    detail:
      "Card pocket and switch plate on the latch side at 1100mm - never behind the open door. Arrival vs Welcome states, RFID, wall monitors and bedside intercom.",
    href: "/services#smart-home-automation",
  },
  {
    slug: "electrical-drawings",
    icon: "drawings",
    title: "Electrical Drawings & Documentation",
    benefit: "One drawing, one site reality.",
    detail:
      "Ground and upper floor plans, site plan, A3 device legend, CSV schedule, and a JSON device catalog with 30+ models and 18 correctly-sized OBJ placeholders.",
    href: "/services/electrical-drawings",
  },
  {
    slug: "3d-walkthrough-visualization",
    icon: "walkthrough",
    title: "3D Walkthrough Visualization",
    benefit: "See the building before it's built.",
    detail:
      "A 14-chapter tour at 1.6m eye height, with clean and annotated passes, 4K stills and MP4 export.",
    href: "/services/3d-walkthrough",
  },
];
