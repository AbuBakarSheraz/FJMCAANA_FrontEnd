import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const REPORTS = [
  {
    year: "2026",
    title: "Meethi Zindagi Annual Report 2026",
    description:
      "Read the annual report to learn about the children supported, insulin assistance provided, and the impact made throughout the year.",
    href: "/mz_reports/MZ_2026.pdf",
  },
  {
    year: "2025",
    title: "Meethi Zindagi Annual Report 2025",
    description:
      "Read the annual report to learn about the children supported, insulin assistance provided, and the impact made throughout the year.",
    href: "/mz_reports/MZ_2025.pdf",
    link: "/mz_reports/presentation24.pdf",
  },
  {
    year: "2024",
    title: "Meethi Zindagi Annual Report 2024",
    description:
      "Explore the 2024 report and see how your support helped provide essential insulin assistance to children in need.",
    href: "/mz_reports/MZ_2024.pdf",
  },
];

const STANDING = [
  {
    value: "1,200+",
    label: "Children supported",
    note: "Across 160+ cities and towns",
  },
  {
    value: "60+",
    label: "New children enrolled",
    note: "Every 3 months",
  },
  {
    value: "1,000+",
    label: "Supply packages shipped",
    note: "Plus 100+ door-to-door deliveries to remote areas every 3 months",
  },
  {
    value: "50+",
    label: "Wellbeing sessions",
    note: "Every 3 months, supporting families through diabetes burnout",
  },
];

const PROMISES = [
  {
    title: "Accessible Medicine",
    description: "Ensuring insulin and supplies reach every child who needs them.",
  },
  {
    title: "Quality Healthcare",
    description: "Connecting families with the medical care their child deserves.",
  },
  {
    title: "Empowering Education",
    description: "Teaching children and families to manage T1D with confidence.",
  },
  {
    title: "Peer Support",
    description: "Building community among young people living with T1D.",
  },
  {
    title: "An Enabling Environment",
    description: "Helping families face diabetes without shame or isolation.",
  },
];

const GIVING = [
  {
    amount: "$1.70",
    period: "a day",
    description: "One day of insulin and care for a child.",
  },
  {
    amount: "$50",
    period: "a month",
    description: "A full month of insulin, supplies, and educator support.",
  },
  {
    amount: "$600",
    period: "a year",
    description: "One child, fully covered, for an entire year.",
  },
];

function ReportIcon() {
  return (
    <svg
      className="h-8 w-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 3.5h7l4 4V20a1 1 0 01-1 1H7a1 1 0 01-1-1V4.5a1 1 0 011-1z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 3.5V8h4"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12h6M9 15.5h6M9 19h3"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12h14M13 6l6 6-6 6"
      />
    </svg>
  );
}

function ReportCard({ report }: { report: (typeof REPORTS)[number] }) {
  return (
    <StaggerItem
      interactive
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-pine/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pine/20 hover:shadow-xl sm:p-7"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gold/10 transition-transform duration-500 group-hover:scale-125"
      />

      <div className="relative flex items-start justify-between gap-5">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sage text-pine">
          <ReportIcon />
        </div>

        <span className="rounded-full bg-pine px-3 py-1.5 font-accent text-xs font-bold tracking-[0.12em] text-white">
          {report.year}
        </span>
      </div>

      <div className="relative mt-6 flex flex-1 flex-col">
        <p className="font-accent text-[11px] font-semibold uppercase tracking-[0.18em] text-pine">
          Annual Report
        </p>

        <h2 className="mt-2 font-display text-2xl font-semibold leading-tight text-pine-dark">
          {report.title}
        </h2>

        <p className="mt-3 flex-1 text-sm leading-6 text-ink-soft">
          {report.description}
        </p>

        <a
          href={report.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-pine px-5 py-3 font-accent text-xs font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-pine-dark hover:shadow-md focus:outline-none focus:ring-2 focus:ring-pine focus:ring-offset-2"
        >
          View PDF
          <ArrowIcon />
        </a>
      </div>
    </StaggerItem>
  );
}

function StatCard({ stat }: { stat: (typeof STANDING)[number] }) {
  return (
    <StaggerItem className="relative flex flex-col overflow-hidden rounded-2xl border border-pine/10 bg-white p-6 shadow-sm sm:p-7">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gold/10"
      />
      <p className="relative font-display text-4xl font-semibold text-pine-dark sm:text-5xl">
        {stat.value}
      </p>
      <p className="relative mt-2 font-accent text-xs font-semibold uppercase tracking-[0.14em] text-pine">
        {stat.label}
      </p>
      <p className="relative mt-2 text-sm leading-6 text-ink-soft">
        {stat.note}
      </p>
    </StaggerItem>
  );
}

function PromiseCard({
  promise,
  index,
}: {
  promise: (typeof PROMISES)[number];
  index: number;
}) {
  return (
    <StaggerItem className="flex h-full flex-col rounded-2xl border border-pine/10 bg-white p-6 shadow-sm">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pine font-accent text-sm font-bold text-white">
        {index + 1}
      </span>
      <h3 className="mt-4 font-display text-lg font-semibold text-pine-dark">
        {promise.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-ink-soft">
        {promise.description}
      </p>
    </StaggerItem>
  );
}

function GivingCard({ tier }: { tier: (typeof GIVING)[number] }) {
  return (
    <StaggerItem className="flex h-full flex-col items-center rounded-2xl border border-pine/10 bg-white p-7 text-center shadow-sm">
      <p className="font-display text-4xl font-semibold text-pine-dark">
        {tier.amount}
      </p>
      <p className="mt-1 font-accent text-xs font-semibold uppercase tracking-[0.14em] text-pine">
        {tier.period}
      </p>
      <p className="mt-4 text-sm leading-6 text-ink-soft">
        {tier.description}
      </p>
    </StaggerItem>
  );
}

export default function MeethiZindagiPage() {
  return (
    <>
      <Navbar />
<section className="border-b border-pine/10 bg-sage">
  <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8 sm:py-7 lg:px-10 lg:py-8">
    <Reveal>
      <div className="flex items-center justify-between gap-6 sm:gap-10 lg:gap-16">
        
        {/* Header Content */}
        <div className="min-w-0 flex-1">
          <span className="font-accent text-[10px] font-semibold uppercase tracking-[0.18em] text-pine-dark sm:text-xs">
            Our Impact
          </span>

          <h1 className="mt-2 font-display text-3xl font-semibold leading-tight text-pine-dark sm:text-4xl lg:text-5xl">
            Meethi Zindagi
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-ink-soft sm:text-base sm:leading-7 lg:text-lg">
            Supporting children living with diabetes by helping provide
            essential insulin and financial assistance.
          </p>
        </div>

        {/* Meethi Zindagi Logo */}
        <div className="flex shrink-0 items-center justify-end">
          <img
            src="/images/MZ Logo.png"
            alt="Meethi Zindagi"
            className="
              h-20 w-20 object-contain
              sm:h-28 sm:w-28
              lg:h-36 lg:w-36
          "
          />
        </div>

      </div>
    </Reveal>
  </div>
</section>

      <main className="bg-cream">
        {/* Story: Great Life with Type 1 Diabetes */}
        <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <span className="font-accent text-xs font-semibold uppercase tracking-[0.18em] text-pine-dark">
                  Great Life with Type 1 Diabetes
                </span>

                <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-pine-dark sm:text-4xl">
                  For a Child with T1D, Insulin Isn&apos;t Just Medicine
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-ink-soft sm:text-lg">
                  It&apos;s oxygen. No insulin, no tomorrow. Yet across
                  Pakistan, families are often forced to choose between
                  insulin and everything else they need to survive. That
                  gap needs to close.
                </p>

                <p className="mt-4 max-w-2xl text-base leading-7 text-ink-soft">
                  Living with type 1 diabetes herself, Sana Ajmal (Ph.D,
                  DDE) founded Meethi Zindagi, a home for T1Ds in Pakistan.
                  A community-driven organization, dedicated to
                  transforming lives and empowering young people living
                  with T1D across Pakistan.
                </p>

                <p className="mt-4 max-w-2xl text-base leading-7 text-ink-soft">
                  As a U.S.-registered 501(c)(3) and holder of the Candid
                  Platinum Transparency Seal, we ensure no child is denied
                  insulin, supplies, or care simply because their family
                  can&apos;t afford it, through our Promise of Insulin
                  program.
                </p>
              </div>

              {/* Impact highlight */}
              <div className="relative overflow-hidden rounded-2xl border border-pine/10 bg-sage p-7 sm:p-9">
                <div
                  aria-hidden="true"
                  className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gold/10"
                />

                <div className="relative">
                  <div className="text-4xl" aria-hidden="true">
                    ❤️
                  </div>

                  <h3 className="mt-4 font-display text-2xl font-semibold text-pine-dark">
                    Every child deserves access to care
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-ink-soft">
                    Your support helps make ongoing insulin assistance
                    possible for children and families facing financial
                    hardship.
                  </p>

                  <div className="mt-6 h-px bg-pine/10" />

                  <p className="mt-5 font-accent text-[11px] font-semibold uppercase tracking-[0.15em] text-pine-dark">
                    Transparency • Impact • Compassion
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Our Standing */}
        <section className="bg-sage/30">
          <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
            <Reveal>
              <div className="max-w-3xl">
                <span className="font-accent text-xs font-semibold uppercase tracking-[0.18em] text-pine-dark">
                  Our Standing
                </span>

                <h2 className="mt-2 font-display text-3xl font-semibold text-pine-dark sm:text-4xl">
                  The Reach So Far
                </h2>
              </div>
            </Reveal>

            <Stagger className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {STANDING.map((stat) => (
                <StatCard key={stat.label} stat={stat} />
              ))}
            </Stagger>

            <Reveal>
              <div className="mt-8 flex items-center gap-4 rounded-2xl border border-pine/10 bg-white p-6 sm:p-7">
                <span className="rounded-full bg-gold px-4 py-2 font-accent text-xs font-bold uppercase tracking-[0.12em] text-pine-dark">
                  Goal by 2030
                </span>
                <p className="font-display text-lg font-semibold text-pine-dark sm:text-xl">
                  Reaching 3,000 children
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Five Promises */}
        <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <Reveal>
            <div className="max-w-3xl">
              <span className="font-accent text-xs font-semibold uppercase tracking-[0.18em] text-pine-dark">
                Our Commitment
              </span>

              <h2 className="mt-2 font-display text-3xl font-semibold text-pine-dark sm:text-4xl">
                Five Promises for a Great Life with T1D
              </h2>

              <p className="mt-4 text-base leading-7 text-ink-soft">
                Meethi Zindagi ensures a great life with T1D through five
                key promises.
              </p>
            </div>
          </Reveal>

          <Stagger className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {PROMISES.map((promise, index) => (
              <PromiseCard key={promise.title} promise={promise} index={index} />
            ))}
          </Stagger>
        </section>

        {/* What Your Giving Does */}
        <section className="bg-sage/30">
          <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
            <Reveal>
              <div className="max-w-3xl">
                <span className="font-accent text-xs font-semibold uppercase tracking-[0.18em] text-pine-dark">
                  What Your Giving Does
                </span>

                <h2 className="mt-2 font-display text-3xl font-semibold text-pine-dark sm:text-4xl">
                  FJMCAANA Helps Reach 42 Children Across Pakistan
                </h2>

                <p className="mt-4 text-base leading-7 text-ink-soft">
                  Every gift, at every level, keeps insulin flowing to a
                  child who needs it.
                </p>
              </div>
            </Reveal>

            <Stagger className="mt-9 grid gap-5 sm:grid-cols-3">
              {GIVING.map((tier) => (
                <GivingCard key={tier.amount} tier={tier} />
              ))}
            </Stagger>
          </div>
        </section>

        {/* Reports */}
        <section className="bg-cream">
          <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
            <Reveal>
              <div className="max-w-3xl">
                <span className="font-accent text-xs font-semibold uppercase tracking-[0.18em] text-pine-dark">
                  Reports &amp; Transparency
                </span>

                <h2 className="mt-2 font-display text-3xl font-semibold text-pine-dark sm:text-4xl">
                  Meethi Zindagi Annual Reports
                </h2>

                <p className="mt-4 text-base leading-7 text-ink-soft">
                  Select a year below to view the corresponding Meethi Zindagi
                  annual report.
                </p>
              </div>
            </Reveal>

            <Stagger className="mt-9 grid gap-5 sm:grid-cols-2">
              {REPORTS.map((report) => (
                <ReportCard
                  key={report.year}
                  report={report}
                />
              ))}
            </Stagger>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-pine-dark">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:py-16">
            <Reveal>
              <span className="font-accent text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                Make An Impact
              </span>

              <h2 className="mt-2 font-display text-3xl font-semibold text-white sm:text-4xl">
                Help Us Continue This Work
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-cream/80">
                Every contribution helps provide essential support to
                children who need ongoing access to insulin.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/projects"
                  className="rounded-lg bg-gold px-6 py-3 font-accent text-xs font-semibold uppercase tracking-[0.12em] text-pine-dark transition hover:bg-gold-light"
                >
                  Support Our Causes
                </Link>

                <Link
                  href="/contact"
                  className="rounded-lg border border-white/40 px-6 py-3 font-accent text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:border-white hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}