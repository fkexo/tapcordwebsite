"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ToggleSwitch } from "@/components/shared/ToggleSwitch";
import { DeviceLegendTable } from "@/components/shared/DeviceLegendTable";

const ROOMS = [
  { x: 10, y: 10, w: 90, h: 70, label: "Reception\n(void 6000)" },
  { x: 108, y: 10, w: 60, h: 70, label: "Lounge" },
  { x: 176, y: 10, w: 60, h: 70, label: "Eatery" },
  { x: 244, y: 10, w: 100, h: 70, label: "Event Hall\n7950" },
  { x: 10, y: 88, w: 70, h: 55, label: "VIP Saloon" },
  { x: 88, y: 88, w: 60, h: 55, label: "Pool\n3500" },
  { x: 156, y: 88, w: 50, h: 55, label: "Landing\n3000" },
  { x: 214, y: 88, w: 60, h: 26, label: "Room 1" },
  { x: 214, y: 117, w: 60, h: 26, label: "Room 2" },
  { x: 282, y: 88, w: 62, h: 26, label: "Room 3" },
  { x: 282, y: 117, w: 62, h: 26, label: "Room 4" },
  { x: 10, y: 151, w: 90, h: 44, label: "Apartment\nMaster" },
];

const ANNOTATIONS = [
  { x: 55, y: 25, code: "FAP", color: "#EA7D17" },
  { x: 140, y: 25, code: "AP", color: "#3B82F6" },
  { x: 280, y: 25, code: "AP", color: "#3B82F6" },
  { x: 300, y: 55, code: "SD", color: "#94A3B8" },
  { x: 14, y: 14, code: "BG", color: "#DC2626" },
  { x: 338, y: 14, code: "BG", color: "#DC2626" },
  { x: 178, y: 100, code: "CCTV", color: "#EA7D17" },
  { x: 14, y: 92, code: "DB-W", color: "#13233D" },
  { x: 98, y: 100, code: "JB", color: "#13233D" },
  { x: 236, y: 102, code: "CP", color: "#13233D" },
  { x: 236, y: 131, code: "RFID", color: "#13233D" },
  { x: 160, y: 130, code: "BG", color: "#DC2626" },
];

export function DeviceMapDemo() {
  const [annotated, setAnnotated] = useState(false);

  return (
    <section id="device-map" className="bg-light-bg-alt">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Core Differentiator"
          title="Clean vs Annotated - One Drawing = One Site Reality"
          subtitle="Toggle between a clean architectural pass and the fully annotated device layout."
        />

        <div className="mt-8 flex items-center justify-center">
          <ToggleSwitch leftLabel="Clean Pass" rightLabel="Annotated Pass" checked={annotated} onChange={setAnnotated} />
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="self-start rounded-2xl border border-navy/10 bg-white p-4 shadow-sm">
            <svg viewBox="0 0 354 205" className="h-auto w-full">
              {ROOMS.map((room) => (
                <g key={room.label}>
                  <rect
                    x={room.x}
                    y={room.y}
                    width={room.w}
                    height={room.h}
                    fill="#F8FAFC"
                    stroke="#13233D"
                    strokeOpacity={0.25}
                    strokeWidth={1.5}
                    rx={3}
                  />
                  {room.label.split("\n").map((line, i) => (
                    <text
                      key={line}
                      x={room.x + room.w / 2}
                      y={room.y + room.h / 2 + i * 10 - (room.label.includes("\n") ? 4 : 0)}
                      textAnchor="middle"
                      fontSize={8.5}
                      fill="#13233D"
                      opacity={0.55}
                    >
                      {line}
                    </text>
                  ))}
                </g>
              ))}

              {annotated &&
                ANNOTATIONS.map((a, i) => (
                  <g key={`${a.code}-${i}`}>
                    <circle cx={a.x} cy={a.y} r={5} fill={a.color} opacity={0.85}>
                      <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <text x={a.x} y={a.y - 8} textAnchor="middle" fontSize={6} fontWeight={700} fill="#13233D">
                      {a.code}
                    </text>
                  </g>
                ))}
            </svg>
          </div>

          <DeviceLegendTable compact />
        </div>

        <p className="mt-8 text-center text-sm font-medium text-navy/70">
          Your QS can price. Your electrician can install. No guessing.
        </p>
      </div>
    </section>
  );
}
