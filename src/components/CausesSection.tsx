import Image from "next/image";
import type { ContentRecord } from "@/lib/content-store";

type Cause = ContentRecord & {
  percentFunded?: number;
  raisedLabel?: string;
};

function ProgressBar({ percent }: { percent: number }) {
  return (
    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-pine/10">
      <div
        className="h-full rounded-full bg-pine"
        style={{ width: `${Math.min(100, Math.max(0, percent))}%` }}
      />
    </div>
  );
}

function CauseCard({ cause, featured = false }: { cause: Cause; featured?: boolean }) {
  return (
    <div
      className={`flex flex-col rounded-xl border border-pine/10 bg-card p-5 ${featured ? "sm:p-7" : ""}`}
      data-cause-id={cause.id}
    >
      {cause.image && (
        <div
          className={`relative -mx-5 -mt-5 mb-5 overflow-hidden rounded-t-xl ${
            featured ? "-sm:mx-7 sm:-mx-7 sm:-mt-7 aspect-[16/9]" : "aspect-[16/10]"
          }`}
        >
          <Image src={cause.image} alt="" fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
        </div>
      )}
      <h3 className={`font-display font-semibold text-pine-dark ${featured ? "text-2xl" : "text-lg"}`}>
        {cause.title}
      </h3>
      {cause.summary && (
        <p className={`mt-2 leading-relaxed text-ink-soft ${featured ? "text-base" : "text-sm"}`}>
          {cause.summary}
        </p>
      )}
      {typeof cause.percentFunded === "number" && (
        <>
          <ProgressBar percent={cause.percentFunded} />
          <div className="mt-1.5 flex items-center justify-between font-mono text-[11px] uppercase tracking-wide text-ink-soft">
            <span>{cause.raisedLabel ?? `${cause.percentFunded}% funded`}</span>
          </div>
        </>
      )}
      <a
        href={cause.link || "https://www.paypal.com/us/fundraiser/charity/1554217"}
        className="mt-4 inline-block w-fit rounded-md border border-pine px-3 py-1.5 text-xs font-semibold text-pine transition hover:bg-pine hover:text-white"
        target={cause.link ? undefined : "_blank"}
        rel="noopener noreferrer"
      >
        Learn more
      </a>
    </div>
  );
}

export default function CausesSection({ causes, expanded = false }: { causes: Cause[]; expanded?: boolean }) {
  const [first, ...rest] = causes;

  return (
    <section id="impact" className="bg-sage">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-gold">Featured Causes</span>
        <h2 className="mt-2 font-display text-3xl font-semibold text-pine-dark">
          Where your gift goes right now
        </h2>

        {expanded || !first ? (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {causes.map((cause) => (
              <CauseCard key={cause.id} cause={cause} />
            ))}
          </div>
        ) : (
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <CauseCard cause={first} featured />
            </div>
            <div className="flex flex-col gap-5">
              {rest.map((cause) => (
                <CauseCard key={cause.id} cause={cause} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}