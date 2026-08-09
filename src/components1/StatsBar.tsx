import { SiteStats } from "@/lib/types";

const FALLBACK_STATS: SiteStats = {
  alumnaeCount: "500+",
  floodReliefTotal: "$46K+",
  activeCauses: "6",
  yearsActive: "30+",
};

export default function StatsBar({ stats = FALLBACK_STATS }: { stats?: SiteStats }) {
  const items = [
    { label: "Alumnae", value: stats.alumnaeCount },
    { label: "Raised, Flood Relief", value: stats.floodReliefTotal },
    { label: "Active Causes", value: stats.activeCauses },
    { label: "Years of Sisterhood", value: stats.yearsActive },
  ];

  return (
    <section className="border-b border-pine/10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 divide-x divide-pine/10">
        {items.map((item) => (
          <div key={item.label} className="px-4 py-8 text-center">
            <div className="font-display font-semibold text-2xl text-pine-dark">{item.value}</div>
            <div className="font-mono text-[11px] uppercase tracking-wide text-ink-soft mt-1">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
