import Image from "next/image";
import type { ContentRecord } from "@/lib/content-store";

function CauseCard({ cause }: { cause: ContentRecord }) {
  return (
    <div className="rounded-xl border border-pine/10 bg-card p-5" data-cause-id={cause.id}>
      {cause.image && <div className="relative -mx-5 -mt-5 mb-5 aspect-[16/9] overflow-hidden rounded-t-xl"><Image src={cause.image} alt="" fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" /></div>}
      <h3 className="font-display text-lg font-semibold text-pine-dark">{cause.title}</h3>
      {cause.summary && <p className="mt-2 text-sm leading-relaxed text-ink-soft">{cause.summary}</p>}
      <a href={cause.link || "https://www.paypal.com/us/fundraiser/charity/1554217"} className="mt-4 inline-block rounded-md border border-pine px-3 py-1.5 text-xs font-semibold text-pine transition hover:bg-pine hover:text-white" target={cause.link ? undefined : "_blank"} rel="noopener noreferrer">Learn more</a>
    </div>
  );
}

export default function CausesSection({ causes, expanded = false }: { causes: ContentRecord[]; expanded?: boolean }) {
  return (
    <section id="impact" className="bg-sage">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <span className="font-mono text-xs tracking-widest uppercase text-gold">Featured Causes</span>
        <h2 className="mt-2 font-display text-3xl font-semibold text-pine-dark">Where your gift goes right now</h2>
        <div className={`mt-10 grid gap-5 ${expanded ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-3"}`}>
          {causes.map((cause) => <CauseCard key={cause.id} cause={cause} />)}
        </div>
      </div>
    </section>
  );
}
