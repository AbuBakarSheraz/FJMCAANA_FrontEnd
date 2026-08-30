"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SealEmblem from "@/components/SealEmblem";
import Image from "next/image";
import Link from "next/link";

const ANNUAL_REPORTS = [
  {
    year: "2022",
    title: "FJMCAANA Annual Report 2022",
    description: "Comprehensive overview of projects, financial stewardship, and community impact for fiscal year 2022.",
    pdfUrl: "/reports/fjmcaana-annual-report-2022.pdf",
    date: "December 31, 2022",
    highlights: ["60+ Cornea Transplants", "15 Scholarships Awarded", "29 Houses Built"],
  },
  {
    year: "2022",
    title: "President's Annual Report 2022",
    description: "Message from the President highlighting achievements, challenges, and vision for the future.",
    pdfUrl: "/reports/president-report-2022.pdf",
    date: "December 31, 2022",
    highlights: [],
  },
];

const PROJECT_REPORTS = [
  {
    title: "Cornea Transplant Project Report 2022",
    description: "Detailed report on the collaboration with Zafar & Mir Foundation and Sir Ganga Ram Hospital.",
    pdfUrl: "/reports/cornea-transplant-report-2022.pdf",
    date: "2022",
    category: "Healthcare",
  },
  {
    title: "Flood Relief Project — Kashani Basti",
    description: "Documentation of housing construction project for flood-affected families in South Punjab.",
    pdfUrl: "/reports/flood-relief-kashani-basti.pdf",
    date: "2022",
    category: "Emergency Relief",
  },
  {
    title: "Scholarship Fund Impact Report",
    description: "Annual assessment of student scholarship program outcomes and beneficiary testimonials.",
    pdfUrl: "/reports/scholarship-impact-report.pdf",
    date: "2022",
    category: "Education",
  },
];

const FINANCIAL_STATEMENTS = [
  {
    year: "2024–2025",
    title: "Financial Statement FY 2024–2025",
    image: "/reports/financial-report-1.jpg",
    description: "Comprehensive financial statement showing income, expenses, and fund allocation for fiscal year 2024–2025.",
  },
  {
    year: "2023–2024",
    title: "Financial Statement FY 2023–2024",
    image: "/reports/financial-report-2.jpg",
    description: "Annual financial report detailing organizational revenue, expenditures, and project funding.",
  },
  {
    year: "2022–2023",
    title: "Financial Statement FY 2022–2023",
    image: "/reports/financial-report-3.jpg",
    description: "Transparent breakdown of donations received and their utilization across all programs.",
  },
  {
    year: "2021–2022",
    title: "Financial Statement FY 2021–2022",
    image: "/reports/financial-report-4.jpg",
    description: "Financial accountability report showing stewardship of member and donor contributions.",
  },
  {
    year: "Summary",
    title: "Multi-Year Financial Summary",
    image: "/reports/financial-report-5.jpg",
    description: "Consolidated financial overview showing trends and impact over multiple fiscal years.",
  },
];

const IMPACT_AREAS = [
  {
    title: "Healthcare Projects",
    description: "Cornea transplants, medical equipment, hospital support",
    icon: <path d="M12 21s-7-4.5-9-9.2C1.4 8 3.2 5 6.3 5c1.9 0 3.3 1 4.2 2.4C11.4 6 12.8 5 14.7 5 17.8 5 19.6 8 18 11.8 16 16.5 12 21 12 21ZM9 11h6M12 8v6" />,
  },
  {
    title: "Education Support",
    description: "Scholarships, E-library, student aid programs",
    icon: <path d="M3 8l9-4 9 4-9 4-9-4Zm0 0v6c2 1.5 6 2.5 9 2.5s7-1 9-2.5V8M8 11v4.5c0 1 1.8 1.8 4 1.8s4-.8 4-1.8V11" />,
  },
  {
    title: "Emergency Relief",
    description: "Flood relief, disaster response, housing projects",
    icon: <path d="M4 19h16M6 19v-6l6-4 6 4v6M10 19v-4h4v4" />,
  },
  {
    title: "Interest-Free Loans",
    description: "Student loans, board exam support, financial aid",
    icon: <path d="M12 3v18M8 7h6.5a2.5 2.5 0 0 1 0 5H9.5a2.5 2.5 0 0 0 0 5H16" />,
  },
];

const SECTIONS = [
  { id: "annual", label: "Annual Reports" },
  { id: "projects", label: "Project Reports" },
  { id: "financials", label: "Financial Statements" },
  { id: "impact", label: "Where Funds Go" },
];

function DocIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7 21h10a2 2 0 0 0 2-2V9.4a1 1 0 0 0-.3-.7L13.3 3.3A1 1 0 0 0 12.6 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z" />
    </svg>
  );
}

export default function ReportsPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="Transparency & Accountability"
        title="Reports & Financial Statements"
        description="Comprehensive reports and audited financial statements demonstrating our commitment to transparent stewardship of every contribution."
      />

      {/* In-page nav */}
      <div className="sticky top-[57px] z-30 border-y border-pine/10 bg-cream/95 backdrop-blur sm:top-[65px]">
        <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-8 sm:px-2 py-3.5">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.1em] text-ink-soft transition hover:text-pine-dark"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div className="bg-cream">
        {/* Overview */}
        <section className="mx-auto max-w-7xl px-8 sm:px-2 py-16">
          <div className="flex items-start gap-5 rounded-2xl border border-pine/10 bg-white p-8 md:p-12">
            <SealEmblem className="hidden h-14 w-14 flex-none text-gold sm:block" />
            <div>
              <h2 className="font-display text-2xl font-semibold text-pine-dark">Financial Transparency</h2>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-soft">
                FJMCAANA is committed to complete transparency in how we manage and allocate every
                contribution — from annual organizational reporting down to project-level and
                audited financial statements.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-lg border border-pine/10 bg-card p-4">
                  <div className="font-display text-2xl font-semibold text-gold">100%</div>
                  <div className="mt-1 text-sm text-ink-soft">Of project donations go directly to projects</div>
                </div>
                <div className="rounded-lg border border-pine/10 bg-card p-4">
                  <div className="font-display text-2xl font-semibold text-gold">Annual</div>
                  <div className="mt-1 text-sm text-ink-soft">Audited financial statements</div>
                </div>
                <div className="rounded-lg border border-pine/10 bg-card p-4">
                  <div className="font-display text-2xl font-semibold text-gold">48 Years</div>
                  <div className="mt-1 text-sm text-ink-soft">Of fiscal responsibility</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Annual Reports */}
        <section id="annual" className="mx-auto max-w-7xl scroll-mt-32 px-8 sm:px-2 py-16">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-px w-10 bg-gold" />
            <h2 className="font-display text-3xl font-semibold text-pine-dark">Annual Reports</h2>
          </div>
          <p className="mb-12 max-w-3xl text-lg text-ink-soft">
            Yearly reports documenting our organizational activities, financial stewardship, and community impact.
          </p>

          <div className="grid gap-6 lg:grid-cols-2">
            {ANNUAL_REPORTS.map((report, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-pine/10 bg-white p-8 transition-all duration-300 hover:shadow-lg hover:border-gold/40"
              >
                <div className="flex items-start justify-between">
                  <span className="rounded-full bg-gold/15 px-4 py-1 font-mono text-sm font-semibold text-gold">
                    {report.year}
                  </span>
                  <DocIcon className="h-6 w-6 text-pine/30 transition-colors group-hover:text-gold" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-pine-dark">{report.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{report.description}</p>
                <p className="mt-3 text-xs text-ink-soft/70">Published: {report.date}</p>
                {report.highlights.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {report.highlights.map((h, i) => (
                      <span key={i} className="rounded-full bg-sage px-3 py-1 text-xs font-medium text-pine-dark">
                        {h}
                      </span>
                    ))}
                  </div>
                )}
                <a
                  href={report.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-pine px-6 py-3 text-sm font-semibold text-white transition hover:bg-pine-dark"
                >
                  <DocIcon className="h-4 w-4" />
                  Download PDF
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Project Reports */}
        <section id="projects" className="scroll-mt-32 bg-blush py-16">
          <div className="mx-auto max-w-7xl px-8 sm:px-2">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px w-10 bg-gold" />
              <h2 className="font-display text-3xl font-semibold text-pine-dark">Project Reports</h2>
            </div>
            <p className="mb-12 max-w-3xl text-lg text-ink-soft">
              Detailed documentation of individual project outcomes, impact metrics, and beneficiary stories.
            </p>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {PROJECT_REPORTS.map((report, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-xl border border-pine/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="border-b border-pine/10 bg-white p-6">
                    <span className="inline-block rounded-full bg-sage px-3 py-1 text-xs font-semibold text-pine-dark">
                      {report.category}
                    </span>
                    <h3 className="mt-4 font-display text-lg font-semibold text-pine-dark">{report.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-sm leading-relaxed text-ink-soft">{report.description}</p>
                    <p className="mt-3 text-xs text-ink-soft/70">{report.date}</p>
                    <a
                      href={report.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 border-b border-pine/40 text-sm font-semibold text-pine transition-colors hover:border-pine"
                    >
                      View Report →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Financial Statements */}
        <section id="financials" className="mx-auto max-w-7xl scroll-mt-32 px-6 py-16">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-px w-10 bg-gold" />
            <h2 className="font-display text-3xl font-semibold text-pine-dark">Financial Statements</h2>
          </div>
          <p className="mb-12 max-w-3xl text-lg text-ink-soft">
            Audited statements showing income, expenses, and fund allocation across recent fiscal years.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {FINANCIAL_STATEMENTS.map((report, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-pine/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-gold/40"
              >
                <div className="absolute right-4 top-4 z-10">
                  <span className="rounded-full bg-gold px-4 py-1.5 font-mono text-xs font-bold text-pine-dark shadow">
                    {report.year}
                  </span>
                </div>

                <div className="relative h-72 overflow-hidden bg-sage">
                  <Image
                    src={report.image}
                    alt={report.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-pine-dark">{report.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{report.description}</p>

                  <div className="mt-6 flex items-center gap-3">
                    <button
                      onClick={() => window.open(report.image, "_blank")}
                      className="flex-1 rounded-full bg-pine px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-pine-dark"
                    >
                      View Full Report
                    </button>
                    <button
                      onClick={() => {
                        const link = document.createElement("a");
                        link.href = report.image;
                        link.download = `${report.title.replace(/\s+/g, "-")}.jpg`;
                        link.click();
                      }}
                      aria-label={`Download ${report.title}`}
                      className="rounded-full border border-pine px-4 py-2.5 text-sm font-semibold text-pine transition hover:bg-pine hover:text-white"
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Where funds go */}
        <section id="impact" className="scroll-mt-32 bg-sage py-16">
          <div className="mx-auto max-w-7xl px-8 sm:px-2">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px w-10 bg-gold" />
              <h2 className="font-display text-3xl font-semibold text-pine-dark">
                How Your Contributions Make an Impact
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {IMPACT_AREAS.map((item) => (
                <div key={item.title} className="rounded-xl border border-pine/10 bg-white p-6">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-gold"
                  >
                    {item.icon}
                  </svg>
                  <h3 className="mt-4 font-display text-lg font-semibold text-pine-dark">{item.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Single closing CTA */}
        <section className="grain relative bg-pine-dark py-16">
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              Questions About Our Reports or Finances?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-cream/85">
              We are committed to transparency and accountability. If you have questions about any
              of our reports or how contributions are used, we&apos;re glad to walk through them
              with you.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:team@fjmcaana.org?subject=Financial%20Report%20Inquiry"
                className="rounded-full bg-gold px-8 py-3 font-semibold text-pine-dark transition hover:bg-gold-light"
              >
                Contact the Financial Team
              </a>
              <Link
                href="/contact"
                className="rounded-full border border-white/40 px-8 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                General Contact
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}