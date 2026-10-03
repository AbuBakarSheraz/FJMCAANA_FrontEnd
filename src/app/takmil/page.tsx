"use client";

/**
 * TAKMIL PAGE — app/takmil/page.tsx
 *
 * Replaces the two separate "TAKMIL" and "TAKMIL Reports" project tiles
 * with one dedicated page: intro/explanation, the YouTube video, and the
 * TAKMIL annual reports (moved here from the #takmil section on the
 * Reports page).
 *
 * Follow-up edits elsewhere in the codebase (see chat for the exact diffs):
 *   1. In your projects data file, replace the two TAKMIL entries with one
 *      tile whose `link` is "/takmil" instead of the YouTube URL or
 *      "/reports#takmil".
 *   2. On the Reports page (app/reports/page.tsx), remove the `TAKMIL_REPORTS`
 *      array and the <section id="takmil"> block — TAKMIL reports now live
 *      here instead, so they aren't listed in two places. Optionally leave
 *      a short "See TAKMIL Reports" link pointing to /takmil#reports.
 */

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SealEmblem from "@/components/SealEmblem";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

/* ─── Data ──────────────────────────────────────────────────────────── */

const TAKMIL_SUMMARY =
  "TAKMIL is a nonprofit initiative dedicated to expanding access to education for underserved children in Pakistan. FJMCAANA has supported TAKMIL's mission through charitable contributions, helping provide educational opportunities and resources to children in communities where access to quality schooling is limited.";

const YOUTUBE_ID = "5vFTDEN-twI";

const TAKMIL_REPORTS = [
  {
    year: "2023",
    title: "TAKMIL Annual Report 2023",
    pdfUrl: "/reports/takmil-report-2023.pdf",
    date: "December 31, 2023",
    highlights: [] as string[],
  },
  {
    year: "2022",
    title: "TAKMIL Annual Report 2022",
    pdfUrl: "/reports/takmil-report-2022.pdf",
    date: "December 31, 2022",
    highlights: [] as string[],
  },
  {
    year: "2021",
    title: "TAKMIL Annual Report 2021",
    pdfUrl: "/reports/takmil-report-2021.pdf",
    date: "December 31, 2021",
    highlights: [] as string[],
  },
];

const MISSION_POINTS = [
  {
    title: "Access to Education",
    description: "Expanding schooling opportunities for underserved children across Pakistan.",
  },
  {
    title: "Community-Driven",
    description: "Working in communities where access to quality education is limited.",
  },
  {
    title: "Charitable Support",
    description: "Funded through FJMCAANA's charitable contributions toward resources and opportunity.",
  },
];

/* ─── Icons ─────────────────────────────────────────────────────────── */

function DocIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7 21h10a2 2 0 0 0 2-2V9.4a1 1 0 0 0-.3-.7L13.3 3.3A1 1 0 0 0 12.6 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z" />
    </svg>
  );
}

function CheckIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────── */

export default function TakmilPage() {
  return (
    <>
      <Navbar />

      <PageHeader
        eyebrow="Our Projects"
        title="TAKMIL"
        description="Teach a Kid, Make a Life — expanding access to education for underserved children in Pakistan."
      />

      <div className="bg-cream">
        {/* Overview */}
        <section className="mx-auto max-w-7xl px-8 py-8 sm:px-2">
          <Reveal className="flex items-start gap-5 rounded-2xl border border-pine/10 bg-white p-8 md:p-12">
            <SealEmblem className="hidden h-14 w-14 flex-none text-gold sm:block" />
            <div>
              <h2 className="font-display text-2xl font-semibold text-pine-dark">
                Teach a Kid, Make a Life
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-soft">
                {TAKMIL_SUMMARY}
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {MISSION_POINTS.map((point) => (
                  <div key={point.title} className="rounded-lg border border-pine/10 bg-card p-4">
                    <div className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 shrink-0 text-gold" />
                      <div className="font-display text-base font-semibold text-pine-dark">
                        {point.title}
                      </div>
                    </div>
                    <div className="mt-2 text-sm text-ink-soft">{point.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* Video */}
        <section id="video" className="mx-auto max-w-7xl scroll-mt-32 px-8 py-8 sm:px-2">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px w-10 bg-gold" />
              <h2 className="font-display text-3xl font-semibold text-pine-dark">See TAKMIL in Action</h2>
            </div>
          </Reveal>

          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-pine/10 bg-white p-3 shadow-sm md:p-4">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-pine-dark/5">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${YOUTUBE_ID}`}
                  title="TAKMIL (Teach a Kid Make a Life)"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </Reveal>
        </section>

        {/* Reports */}
        <section id="reports" className="mx-auto max-w-7xl scroll-mt-32 px-8 py-8 sm:px-2">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px w-10 bg-gold" />
              <h2 className="font-display text-3xl font-semibold text-pine-dark">TAKMIL Reports</h2>
            </div>
            <p className="mb-12 max-w-3xl text-lg text-ink-soft">
              Yearly reports documenting TAKMIL&apos;s activities, financial stewardship, and
              community impact.
            </p>
          </Reveal>

          <Stagger className="grid gap-6 lg:grid-cols-2">
            {TAKMIL_REPORTS.map((report, index) => (
              <StaggerItem
                key={index}
                interactive
                className="group relative overflow-hidden rounded-xl border border-pine/10 bg-white p-8 transition-all duration-300 hover:shadow-lg hover:border-gold/40"
              >
                <div className="flex items-start justify-between">
                  <span className="rounded-full bg-gold/15 px-4 py-1 font-accent text-sm font-semibold uppercase tracking-[0.1em] text-pine-dark">
                    {report.year}
                  </span>
                  <DocIcon className="h-6 w-6 text-pine/30 transition-colors group-hover:text-gold" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-pine-dark">{report.title}</h3>
                <p className="mt-3 text-xs text-ink-soft/70">Published: {report.date}</p>
                {report.highlights.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {report.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-sage px-3 py-1 font-accent text-xs font-semibold uppercase tracking-[0.1em] text-pine-dark"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                )}
                <a
                  href={report.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-pine px-6 py-3 font-accent text-sm font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-pine-dark"
                >
                  <DocIcon className="h-4 w-4" />
                  Download PDF
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Closing CTA */}
        <section className="grain relative bg-pine-dark py-16">
          <Reveal className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              Help TAKMIL Reach More Children
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-cream/85">
              Your support helps expand access to education for underserved children across
              Pakistan. Reach out to learn how you can get involved.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:team@fjmcaana.org?subject=TAKMIL%20Inquiry"
                className="rounded-full bg-gold px-8 py-3 font-accent text-sm font-semibold uppercase tracking-[0.1em] text-pine-dark transition hover:bg-gold-light"
              >
                Email Us
              </a>
            </div>
          </Reveal>
        </section>
      </div>

      <Footer />
    </>
  );
}