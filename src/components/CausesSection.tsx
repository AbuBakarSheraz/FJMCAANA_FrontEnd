import Link from "next/link";
import { Cause } from "@/lib/types";
import { FEATURED_CAUSES } from "@/lib/siteContent";

function CauseCard({ cause }: { cause: Cause }) {
  return (
    <div className="rounded-xl border border-pine/10 bg-white p-5" data-cause-id={cause.slug}>
      <h3 className="font-display text-lg font-semibold text-pine-dark">{cause.title}</h3>
      {cause.description && <p className="mt-2 text-sm leading-relaxed text-ink-soft">{cause.description}</p>}
      <div className="mb-2 mt-4 h-1.5 overflow-hidden rounded bg-sage">
        <div className="bar-fill h-full bg-pine" style={{ width: `${cause.percentFunded}%` }} />
      </div>
      <div className="text-xs text-ink-soft">{cause.amountRaised} raised</div>
      <Link href="/donate" className="mt-4 inline-block rounded-md border border-pine px-3 py-1.5 text-xs font-semibold text-pine transition hover:bg-pine hover:text-white">Donate</Link>
    </div>
  );
}

export default function CausesSection({ causes = FEATURED_CAUSES, expanded = false }: { causes?: Cause[]; expanded?: boolean }) {
  return (
    <section id="impact" className="bg-card/60">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <span className="font-mono text-xs tracking-widest uppercase text-gold">Featured Causes</span>
        <h2 className="mt-2 font-display text-3xl font-semibold text-pine-dark">Where your gift goes right now</h2>
        <div className={`mt-10 grid gap-5 ${expanded ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-3"}`}>
          {causes.map((cause) => <CauseCard key={cause.slug} cause={cause} />)}
        </div>
      </div>
    </section>
  );
}
