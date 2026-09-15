import Image from "next/image";
import type { ContentRecord } from "@/lib/content-store";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import Link from "next/link";

type Cause = ContentRecord & {
  percentFunded?: number;
  raisedLabel?: string;
};

// Source of truth for the causes shown on the home page.
// Add, remove, or reorder items here — the grid adapts automatically.
const DEFAULT_CAUSES: Cause[] = [
  {
    id: "project-cornea",
    collection: "projects",
    title: "Cornea Transplants",
    summary:
      "Providing 60 cornea transplants annually at Sir Ganga Ram Hospital, with each transplant costing $350. Our annual fundraising goal is $21,000.",
    featured: true,
    createdAt: "2022-01-01",
    link: "/projects",
  },
  {
    id: "meethi-zindagi",
    collection: "projects",
    title: "Meethi ZINDAGI",
    summary:
      "Fjmcaana is committed to providing free insulin to underprivileged children diagnosed with diabetes. Fjmcaana currently provides support for over 40 children annually via the NGO, Meethi Zindagi.",
    featured: true,
    createdAt: "2022-01-01",
    link: "/projects",
  },
  {
    id: "Postgraduate-loan",
    collection: "projects",
    title: "Postgraduate Loans",
    summary:
      "your donation can help a deserving graduate of FJMU in her process of seeking residency in the US or Canada. All candidates are chosen based on strict criteria.",
    featured: true,
    createdAt: "2022-01-01",
    link: "/loan",
  },
  {
    id: "project-flood-relief",
    collection: "projects",
    title: "Kashani Basti Flood Relief",
    summary:
      "Supporting the flood-affected Kashani Basti through home reconstruction, clean water, school rehabilitation, Ramadan food hampers, and support for local businesses.",
    featured: true,
    createdAt: "2022-01-01",
    link: "/projects",
  },
  {
    id: "project-scholarship",
    collection: "projects",
    title: "Student Scholarship",
    summary:
      "Supporting FJMU students facing financial hardship through $10,000 in annual scholarships and long-term contributions to the FJMU scholarship endowment.",
    featured: true,
    createdAt: "2022-01-01",
    link: "/projects",
  },
];

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
    <StaggerItem
      interactive
      className={`flex h-full flex-col rounded-xl border border-pine/10 bg-card p-5 ${featured ? "sm:p-7" : ""}`}
      data-cause-id={cause.id}
    >
      {cause.image && (
        <div
          className={`relative -mx-5 -mt-5 mb-5 overflow-hidden rounded-t-xl ${
            featured ? "sm:-mx-7 sm:-mt-7 aspect-[16/9]" : "aspect-[16/10]"
          }`}
        >
          <Image src={cause.image} alt="" fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
        </div>
      )}
      <h3 className={`font-display font-semibold text-pine-dark ${featured ? "text-2xl" : "text-lg"}`}>
        {cause.title}
      </h3>
      {cause.summary && (
        <p className={`mt-2 flex-1 leading-relaxed text-ink-soft ${featured ? "text-base" : "text-sm"}`}>
          {cause.summary}
        </p>
      )}
      {typeof cause.percentFunded === "number" && (
        <>
          <ProgressBar percent={cause.percentFunded} />
          <div className="mt-1.5 flex items-center justify-between font-accent text-[11px] font-semibold uppercase tracking-wide text-ink-soft">
            <span>{cause.raisedLabel ?? `${cause.percentFunded}% funded`}</span>
          </div>
        </>
      )}
      {cause.link && (
        <Link
          href={cause.link}
          className="mt-4 inline-block w-fit rounded-md border border-pine px-3 py-1.5 font-accent text-xs font-semibold uppercase tracking-[0.1em] text-pine transition hover:bg-pine hover:text-white"
        >
          Learn more
        </Link>
      )}
    </StaggerItem>
  );
}

export default function CausesSection({
  causes = DEFAULT_CAUSES,
  expanded = false,
}: {
  causes?: Cause[];
  expanded?: boolean;
}) {
  const [first, ...rest] = causes;
  return (
    <section id="impact" className="bg-sage">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <Reveal>
          <span className="font-accent text-xs font-semibold uppercase tracking-[0.18em] text-pine-dark">Featured Causes</span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-pine-dark">The Impact of Your Gift</h2>
        </Reveal>

        <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {causes.map((cause) => (
            <CauseCard key={cause.id} cause={cause} />
          ))}
        </Stagger>
      </div>
    </section>
  );
}