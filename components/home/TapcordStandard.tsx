import Image from "next/image";
import { SectionHeading } from "@/components/shared/SectionHeading";

const STANDARD_ITEMS = [
  "Plasterboard ceilings throughout - no ceiling fans anywhere",
  "Card pocket + switch plate inside door latch side at 1100mm, never behind the open door",
  "RFID reader on the corridor side",
  "Sockets bedside/desk/TV, wall monitor with control interface away from the cove",
  "Guest rooms: calm warm perimeter cove only, away from the monitor wall",
  "Corridors: continuous recessed cove + up/down sconce beside every door, full length",
  "Apartment Master Suites only: textured stone feature wall behind bed with concealed uplighting + linear ceiling strips",
  "VIP Saloon is the only space with a colour-tunable, dimmable layered strip",
  "Reception + Event Hall: wood-slat feature ceiling with warm-white linear LED",
  "Eatery: dark pendant clusters + wood-slat perimeter",
  "Public spaces: dark, architectural, wood-toned",
  "DB flush cover - DB-West/DB-East low height, matching the wall",
  "Power Control Room: 2 boards + inverter + battery rack",
  "Server Room (General Store): network rack + switch + NVR",
  "Roof solar panels, weatherproof junction box at the pool wall",
  "Fire: smoke in every room/corridor/stair landing, heat in kitchen/laundry, red break-glass at every exit + both stair landings on both floors, sounders in corridors + guest rooms, fire panel at reception",
  "CCTV: small domes/bullets at entrance, reception, corridors, stairs, pool/VIP yard, and the perimeter",
];

export function TapcordStandard() {
  return (
    <section className="relative overflow-hidden bg-navy-darkest">
      <Image
        src="/assets/logos/Tapcord_Logo_Full_Navy_Background.png"
        alt=""
        fill
        className="pointer-events-none object-contain opacity-[0.05]"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="The Standard" title="The Tapcord Standard - What We Never Compromise" dark />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {STANDARD_ITEMS.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange/15 text-orange">
                <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path d="M3 8.5 6.2 11.5 13 4.5" />
                </svg>
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
