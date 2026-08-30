import Link from "next/link";
import Image from "next/image";
import type { ContentRecord } from "@/lib/content-store";

export default function NewsSection({ items }: { items: ContentRecord[] }) {
  const [lead, ...rest] = items;

  return (
    <section id="news" className="bg-sage">
      <div className="mx-auto max-w-7xl px-8 sm:px-2 py-20">
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-gold">Reports &amp; News</span>
        <h2 className="mb-10 mt-2 font-display text-3xl font-semibold text-pine-dark">Stay in the loop</h2>

        <div className="grid gap-5 lg:grid-cols-3">
          {lead && (
            <Link
              href={lead.link || "/news"}
              className="group block overflow-hidden rounded-xl border border-pine/10 bg-white transition hover:-translate-y-0.5 hover:shadow-sm lg:col-span-2"
            >
              <div className="grid sm:grid-cols-[1.2fr_1fr]">
                <div className="relative h-52 sm:h-full">
                  {lead.image ? (
                    <Image src={lead.image} alt="" fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-pine-dark to-pine" />
                  )}
                </div>
                <div className="flex flex-col justify-center p-6">
                  <p className="font-mono text-[11px] uppercase tracking-wide text-gold">{lead.date}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-pine-dark">{lead.title}</h3>
                  {lead.summary && <p className="mt-2 line-clamp-3 text-sm text-ink-soft">{lead.summary}</p>}
                </div>
              </div>
            </Link>
          )}

          <div className="flex flex-col gap-5">
            {rest.map((item) => (
              <Link
                key={item.id}
                href={item.link || "/news"}
                className="flex items-center gap-4 rounded-xl border border-pine/10 bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-sm"
              >
                <div className="relative h-16 w-16 flex-none overflow-hidden rounded-lg bg-sage">
                  {item.image ? (
                    <Image src={item.image} alt="" fill sizes="64px" className="object-cover" />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-pine-dark to-pine" />
                  )}
                </div>
                <div className="min-w-0">
                  <h3 className="truncate text-sm font-semibold text-pine-dark">{item.title}</h3>
                  <p className="mt-1 text-xs text-ink-soft">{item.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}