import Link from "next/link";
import { NEWS_ITEMS } from "@/lib/siteContent";
import { NewsItem } from "@/lib/types";

export default function NewsSection({ items = NEWS_ITEMS }: { items?: NewsItem[] }) {
  return (
    <section id="news" className="bg-card/60">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <span className="font-mono text-xs uppercase tracking-widest text-gold">Reports &amp; News</span>
        <h2 className="mb-10 mt-2 font-display text-3xl font-semibold text-pine-dark">Stay in the loop</h2>
        <div className="grid gap-5 sm:grid-cols-3">
          {items.map((item) => <Link key={item.slug} href="/news" className="block overflow-hidden rounded-xl border border-pine/10 bg-white transition hover:-translate-y-0.5 hover:shadow-sm"><div className="h-32 bg-gradient-to-br from-pine-dark to-pine" /><div className="p-4"><h3 className="text-sm font-semibold">{item.title}</h3><p className="mt-1 text-xs text-ink-soft">{item.date}</p></div></Link>)}
        </div>
      </div>
    </section>
  );
}
