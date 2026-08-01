import { cellIcons, cellLabel, comparisonRows } from "@/data/showcase";
import type { CellValue } from "@/data/showcase";

function Cell({ value }: { value: CellValue }) {
  const Icon = cellIcons[value];

  return (
    <span
      title={cellLabel[value]}
      aria-label={cellLabel[value]}
      className={`inline-flex items-center gap-1.5 text-sm font-medium ${
        value === "yes"
          ? "text-emerald-400"
          : value === "limited"
            ? "text-amber-400"
            : "text-gray-500"
      }`}
    >
      <Icon className="h-4 w-4" aria-hidden="true" />

      <span className="hidden lg:inline">{cellLabel[value]}</span>
    </span>
  );
}

export default function Comparison() {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] text-left">
          <thead>
            <tr className="border-b border-white/10">
              <th className="px-6 py-5 text-sm font-semibold text-gray-400">
                Feature
              </th>

              <th className="px-6 py-5 text-sm font-bold text-white">
                Nova Fetch
              </th>

              <th className="px-6 py-5 text-sm font-semibold text-gray-400">
                Browser Download
              </th>

              <th className="px-6 py-5 text-sm font-semibold text-gray-400">
                Mobile Apps
              </th>
            </tr>
          </thead>

          <tbody>
            {comparisonRows.map((row, index) => (
              <tr
                key={row.feature}
                className={
                  index < comparisonRows.length - 1
                    ? "border-b border-white/10"
                    : undefined
                }
              >
                <td className="px-6 py-4 text-white">{row.feature}</td>

                <td className="px-6 py-4">
                  <Cell value={row.novaFetch} />
                </td>

                <td className="px-6 py-4">
                  <Cell value={row.browser} />
                </td>

                <td className="px-6 py-4">
                  <Cell value={row.mobile} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
