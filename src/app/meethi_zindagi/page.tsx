import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const REPORTS = [
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

export default function MeethiZindagiPage() {
  return (
    <>
      <Navbar />

      <PageHeader
        eyebrow="Our Impact"
        title="Meethi Zindagi"
        description="Supporting children living with diabetes by helping provide essential insulin and financial assistance."
      />

      <main className="bg-cream">
        {/* Introduction */}
        <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <span className="font-accent text-xs font-semibold uppercase tracking-[0.18em] text-pine-dark">
                  Meethi Zindagi Initiative
                </span>

                <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-pine-dark sm:text-4xl">
                  Helping Children Live Healthier Lives
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-ink-soft sm:text-lg">
                  FJMCAANA is committed to providing free insulin to
                  underprivileged children diagnosed with diabetes. Through
                  Meethi Zindagi, support reaches children who depend on
                  consistent access to this essential medication.
                </p>

                <p className="mt-4 max-w-2xl text-base leading-7 text-ink-soft">
                  Our annual reports provide transparency into the work being
                  done and the impact made through the generosity of our
                  supporters.
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

        {/* Reports */}
        <section className="bg-sage/30">
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