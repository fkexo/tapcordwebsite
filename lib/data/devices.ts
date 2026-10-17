export type DeviceCategory = "wifi" | "fire" | "cctv" | "electrical";

export interface DeviceLegendRow {
  code: string;
  label: string;
  category: DeviceCategory;
  zone: string;
}

export const DEVICE_CATEGORY_COLORS: Record<DeviceCategory, { label: string; className: string }> = {
  wifi: { label: "Wi-Fi", className: "bg-[#3B82F6]" },
  fire: { label: "Fire", className: "bg-[#DC2626]" },
  cctv: { label: "CCTV", className: "bg-[#EA7D17]" },
  electrical: { label: "Electrical", className: "bg-white border border-[#CBD5E1]" },
};

export const DEVICE_LEGEND: DeviceLegendRow[] = [
  { code: "AP", label: "Wi-Fi Access Point (200mm disc)", category: "wifi", zone: "Ceiling, zoned coverage" },
  { code: "SD", label: "Smoke Detector", category: "fire", zone: "Every room, corridor, stair landing" },
  { code: "HD", label: "Heat Detector", category: "fire", zone: "Kitchen, Laundry only" },
  { code: "BG", label: "Break-Glass (red)", category: "fire", zone: "Every exit + both stair landings, both floors" },
  { code: "SN", label: "Sounder", category: "fire", zone: "Corridors + guest rooms" },
  { code: "FAP", label: "Fire Alarm Panel", category: "fire", zone: "Reception" },
  { code: "CCTV", label: "CCTV Dome / Bullet", category: "cctv", zone: "Entrance, reception, corridors, stairs, pool/VIP yard, perimeter" },
  { code: "DB-W", label: "DB-West (flush, low)", category: "electrical", zone: "West wall, matching wall height" },
  { code: "DB-E", label: "DB-East (flush, low)", category: "electrical", zone: "East wall, matching wall height" },
  { code: "CP", label: "Card Pocket + Switch Plate", category: "electrical", zone: "Guest room door, latch side, 1100mm" },
  { code: "RFID", label: "RFID Reader", category: "electrical", zone: "Guest room door, corridor side" },
  { code: "WM", label: "Wall Monitor", category: "electrical", zone: "Guest room, away from cove wall" },
  { code: "IC", label: "Intercom", category: "electrical", zone: "Bedside" },
  { code: "RACK", label: "19in Network Rack + Switch + NVR", category: "electrical", zone: "Server Room (General Store)" },
  { code: "INV", label: "Inverter + Battery Rack", category: "electrical", zone: "Power Control Room" },
  { code: "SOLAR", label: "Solar Panels", category: "electrical", zone: "Roof" },
  { code: "JB", label: "Weatherproof Junction Box", category: "electrical", zone: "Pool wall" },
];
