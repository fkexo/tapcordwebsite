"use client";

import { useState } from "react";
import { FilesTab } from "./FilesTab";
import { UpdatesTab } from "./UpdatesTab";
import type { ProjectFileRow, ProjectUpdateRow } from "@/lib/dashboard-types";

const TABS = [
  { id: "files", label: "Files", comingSoon: false },
  { id: "updates", label: "Updates", comingSoon: false },
  { id: "viewer", label: "3D Viewer", comingSoon: true },
  { id: "invoices", label: "Invoices", comingSoon: true },
  { id: "messages", label: "Messages", comingSoon: true },
] as const;

type TabId = (typeof TABS)[number]["id"];

export function ProjectDetailTabs({
  files,
  updates,
}: {
  files: ProjectFileRow[];
  updates: ProjectUpdateRow[];
}) {
  const [active, setActive] = useState<TabId>("files");

  return (
    <div>
      <div className="flex gap-1 overflow-x-auto border-b border-navy/10">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActive(tab.id)}
            disabled={tab.comingSoon}
            className={`shrink-0 border-b-2 px-4 py-3 text-sm font-semibold transition-colors ${
              active === tab.id
                ? "border-orange text-navy-deep"
                : tab.comingSoon
                  ? "border-transparent text-navy/30"
                  : "border-transparent text-navy/60 hover:text-navy-deep"
            }`}
          >
            {tab.label}
            {tab.comingSoon && <span className="ml-1.5 font-mono text-[10px] text-navy/40">soon</span>}
          </button>
        ))}
      </div>

      <div className="py-6">
        {active === "files" && <FilesTab files={files} />}
        {active === "updates" && <UpdatesTab updates={updates} />}
      </div>
    </div>
  );
}
