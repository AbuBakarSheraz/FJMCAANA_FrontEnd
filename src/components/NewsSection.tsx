import Link from "next/link";
import Image from "next/image";
import type { ContentRecord } from "@/lib/content-store";

export default function NewsSection({ items }: { items: ContentRecord[] }) {
  return (
    <section id="news" className="bg-sage">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <span className="font-mono text-xs uppercase tracking-widest text-gold">Reports &amp; News</span>
        <h2 className="mb-10 mt-2 font-display text-3xl font-semibold text-pine-dark">Stay in the loop</h2>
        <div className="grid gap-5 sm:grid-cols-3">
          {items.map((item) => <Link key={item.id} href={item.link || "/news"} className="block overflow-hidden rounded-xl border border-pine/10 bg-white transition hover:-translate-y-0.5 hover:shadow-sm">{item.image ? <div className="relative h-32"><Image src={item.image} alt="" fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" /></div> : <div className="h-32 bg-gradient-to-br from-pine-dark to-pine" />}<div className="p-4"><h3 className="text-sm font-semibold">{item.title}</h3>{item.summary && <p className="mt-1 line-clamp-2 text-xs text-ink-soft">{item.summary}</p>}<p className="mt-1 text-xs text-ink-soft">{item.date}</p></div></Link>)}
        </div>
      </div>
    </section>
  );
}
