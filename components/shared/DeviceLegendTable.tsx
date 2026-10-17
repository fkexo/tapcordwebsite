import { DEVICE_CATEGORY_COLORS, DEVICE_LEGEND } from "@/lib/data/devices";

export function DeviceLegendTable({ compact = false }: { compact?: boolean }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm">
      <table className="w-full text-left text-sm">
        <thead className="bg-navy-deep text-white">
          <tr>
            <th className="px-4 py-3 font-mono text-xs tracking-wider">Code</th>
            <th className="px-4 py-3">Device</th>
            {!compact && <th className="px-4 py-3">Zone</th>}
            <th className="px-4 py-3">Category</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-navy/10">
          {DEVICE_LEGEND.map((row) => {
            const color = DEVICE_CATEGORY_COLORS[row.category];
            return (
              <tr key={row.code} className="hover:bg-light-bg">
                <td className="px-4 py-3 font-mono text-xs font-semibold text-navy-deep">{row.code}</td>
                <td className="px-4 py-3 text-navy-deep/90">{row.label}</td>
                {!compact && <td className="px-4 py-3 text-navy/70">{row.zone}</td>}
                <td className="px-4 py-3">
                  <span className="inline-flex items-center gap-2">
                    <span className={`h-2.5 w-2.5 rounded-full ${color.className}`} />
                    <span className="text-xs text-navy/70">{color.label}</span>
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
