import Link from "next/link";
import Image from "next/image";
import type { ContentRecord } from "@/lib/content-store";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export default function NewsSection({ items }: { items: ContentRecord[] }) {
  const [lead, ...rest] = items;

  return (
    <section id="news" className="overflow-hidden bg-sage">
      <div className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-8 sm:py-12 lg:px-10 lg:py-16">
        <Reveal>
          <span className="font-accent text-xs font-semibold uppercase tracking-[0.18em] text-pine-dark">Reports &amp; News</span>
          <h2 className="mb-10 mt-2 font-display text-3xl font-semibold text-pine-dark">Stay in the loop</h2>
        </Reveal>

        <Stagger className="grid w-full min-w-0 gap-5 lg:grid-cols-3">
          {lead && (
            <div className="min-w-0 lg:col-span-2">
              <StaggerItem interactive className="min-w-0">
                <Link href={lead.link || "/reports"} className="group block w-full overflow-hidden rounded-xl border border-pine/10 bg-white transition hover:shadow-sm">
                  <div className="grid sm:grid-cols-[1.2fr_1fr]">
                    <div className="relative h-52 sm:h-full">
                      {lead.image ? (
                        <Image src={lead.image} alt="" fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
                      ) : (
                        <div className="h-full w-full bg-gradient-to-br from-pine-dark to-pine" />
                      )}
                    </div>
                    <div className="flex flex-col justify-center p-6">
                      <p className="font-accent text-[11px] font-semibold uppercase tracking-wide text-pine-dark">{lead.date}</p>
                      <h3 className="mt-2 font-display text-xl font-semibold text-pine-dark">{lead.title}</h3>
                      {lead.summary && <p className="mt-2 line-clamp-3 text-sm text-ink-soft">{lead.summary}</p>}
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            </div>
          )}

          <div className="flex min-w-0 flex-col gap-5">
            {rest.map((item) => (
              <StaggerItem key={item.id} interactive className="min-w-0">
                <Link
                  href={item.link || "/reports"}
                  className="flex w-full min-w-0 items-center gap-4 rounded-xl border border-pine/10 bg-white p-4 transition hover:shadow-sm"
                >
                  <div className="relative h-16 w-16 flex-none overflow-hidden rounded-lg bg-sage">
                    {item.image ? (
                      <Image src={item.image} alt="" fill sizes="64px" className="object-cover" />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-pine-dark to-pine" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <h3 className="truncate font-display text-lg font-semibold text-pine-dark">{item.title}</h3>
                    <p className="mt-1 font-accent text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-soft">{item.date}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </div>
        </Stagger>
      </div>
    </section>
  );
}
