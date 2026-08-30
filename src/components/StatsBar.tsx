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
    <section className="border-b border-pine/10 bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-2 sm:grid-cols-4">
        {items.map((item, i) => (
          <div
            key={item.label}
            className={`px-4 py-10 text-center ${i !== 0 ? "border-l border-dotted border-pine/15" : ""}`}
          >
            <div className="mx-auto mb-3 h-px w-6 bg-gold" />
            <div className="font-display text-3xl font-semibold text-pine-dark">{item.value}</div>
            <div className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-soft">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}