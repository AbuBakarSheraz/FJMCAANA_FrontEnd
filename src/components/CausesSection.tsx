import { Cause } from "@/lib/types";

const FALLBACK_CAUSES: Cause[] = [
  { slug: "cornea-transplant", title: "Cornea Transplant Project", amountRaised: "$10,350", percentFunded: 70 },
  { slug: "flood-relief", title: "Pakistan Flood Relief", amountRaised: "$46,810", percentFunded: 45 },
  { slug: "meethi-zindagi", title: "Meethi Zindagi — Diabetic Care", amountRaised: "Newly launched", percentFunded: 15 },
];

function CauseCard({ cause }: { cause: Cause }) {
  return (
    <div className="bg-white rounded-xl p-5 border border-burgundy/10" data-cause-id={cause.slug}>
      <div className="font-semibold text-sm">{cause.title}</div>
      <div className="h-1.5 rounded bg-blush overflow-hidden mt-3 mb-2">
        <div className="bar-fill h-full bg-burgundy" style={{ width: `${cause.percentFunded}%` }} />
      </div>
      <div className="text-xs text-ink-soft">{cause.amountRaised} raised</div>
      <a
        href={`/donate/${cause.slug}`}
        className="inline-block mt-3 text-xs font-semibold text-burgundy border border-burgundy px-3 py-1.5 rounded-md hover:bg-burgundy hover:text-white transition"
      >
        Donate
      </a>
    </div>
  );
}

export default function CausesSection({ causes = FALLBACK_CAUSES }: { causes?: Cause[] }) {
  return (
    <section id="impact" className="bg-card/60">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <span className="font-mono text-xs tracking-widest uppercase text-gold">Featured Causes</span>
        <h2 className="font-display font-semibold text-3xl text-burgundy-dark mt-2 mb-10">
          Where your gift goes right now
        </h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {causes.map((cause) => (
            <CauseCard key={cause.slug} cause={cause} />
          ))}
        </div>
      </div>
    </section>
  );
}
