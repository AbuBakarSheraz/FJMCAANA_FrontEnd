"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SealEmblem from "@/components/SealEmblem";
import Image from "next/image";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const ANNUAL_REPORTS = [
   {
    year: "2026",
    title: "FJMCAANA Annual Report 2026",
    description: "Comprehensive overview of projects, financial stewardship, and community impact for fiscal year 2026.",
    pdfUrl: "/reports/FJMCAANA_2026_End_of_Year_Report_FINAL_WITH_APPNA_NOMINATION.pdf",
    date: "December 31, 2026",
    highlights: [],
  },
  {
    year: "2025",
    title: "FJMCAANA Annual Report 2025",
    description: "Comprehensive overview of projects, financial stewardship, and community impact for fiscal year 2025.",
    pdfUrl: "/reports/FJMCAANA_Annual_Report_2025.pdf",
    date: "December 31, 2025",
    highlights: [],
  },
  {
    year: "2023",
    title: "FJMCAANA Annual Report 2023",
    description: "Comprehensive overview of projects, financial stewardship, and community impact for fiscal year 2023.",
    pdfUrl: "/reports/FJMCAANA_Annual_Report_2023.pdf",
    date: "December 31, 2023",
    highlights: [],
  },
  {
    year: "2022",
    title: "FJMCAANA Annual Report 2022",
    description: "Comprehensive overview of projects, financial stewardship, and community impact for fiscal year 2022.",
    pdfUrl: "/reports/fjmcaana-annual-report-2022.pdf",
    date: "December 31, 2022",
    highlights: [],
  },
   {
    year: "2021",
    title: "FJMCAANA Annual Report 2021",
    description: "Comprehensive overview of projects, financial stewardship, and community impact for fiscal year 2022.",
    pdfUrl: "/reports/FJMCAANA_Annual_Report_2021.pdf",
    date: "December 31, 2022",
    highlights: [],
  },
  
  

 
];

const TAKMIL_REPORTS = [
   {
    year: "2023",
    title: "TAKMIL Annual Report 2023",
    pdfUrl: "/reports/takmil-report-2023.pdf",
        date: "December 31, 2023",

    highlights: [],
  },
   {
    year: "2022",
    title: "TAKMIL Annual Report 2022",
    pdfUrl: "/reports/takmil-report-2022.pdf",
        date: "December 31, 2022",

    highlights: [],
  },
   {
    year: "2021",
    title: "TAKMIL Annual Report 2021",
    pdfUrl: "/reports/takmil-report-2021.pdf",
        date: "December 31, 2021",
    highlights: [],
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
    description: "Student loans, financial aid",
    icon: <path d="M12 3v18M8 7h6.5a2.5 2.5 0 0 1 0 5H9.5a2.5 2.5 0 0 0 0 5H16" />,
  },
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
     <div className="bg-cream">
        {/* Overview */}
        <section className="mx-auto max-w-7xl px-8 sm:px-2 py-8">
          <Reveal className="flex items-start gap-5 rounded-2xl border border-pine/10 bg-white p-8 md:p-12">
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
          </Reveal>
        </section>

        {/* Annual Reports */}
        <section id="annual" className="mx-auto max-w-7xl scroll-mt-32 px-8 sm:px-2 py-8">
          <Reveal>
          <div className="mb-8 flex items-center gap-3">
            <div className="h-px w-10 bg-gold" />
            <h2 className="font-display text-3xl font-semibold text-pine-dark">Annual Reports</h2>
          </div>
          <p className="mb-12 max-w-3xl text-lg text-ink-soft">
            Yearly reports documenting our organizational activities, financial stewardship, and community impact.
          </p>
          </Reveal>

          <Stagger className="grid gap-6 lg:grid-cols-2">
            {ANNUAL_REPORTS.map((report, index) => (
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
                      <span key={i} className="rounded-full bg-sage px-3 py-1 font-accent text-xs font-semibold uppercase tracking-[0.1em] text-pine-dark">
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

         <section id="annual" className="mx-auto max-w-7xl scroll-mt-32 px-8 sm:px-2 py-8">
          <Reveal>
          <div className="mb-8 flex items-center gap-3">
            <div className="h-px w-10 bg-gold" />
            <h2 className="font-display text-3xl font-semibold text-pine-dark">TAKMIL Reports</h2>
          </div>
          <p className="mb-12 max-w-3xl text-lg text-ink-soft">
            Yearly reports documenting our organizational activities, financial stewardship, and community impact.
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
                      <span key={i} className="rounded-full bg-sage px-3 py-1 font-accent text-xs font-semibold uppercase tracking-[0.1em] text-pine-dark">
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
        <section id="impact" className="scroll-mt-32 bg-sage py-16">
          <div className="mx-auto max-w-7xl px-8 sm:px-2">
            <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px w-10 bg-gold" />
              <h2 className="font-display text-3xl font-semibold text-pine-dark">
                How Your Contributions Make an Impact
              </h2>
            </div>
            </Reveal>

            <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {IMPACT_AREAS.map((item) => (
                <StaggerItem key={item.title} className="rounded-xl border border-pine/10 bg-white p-6">
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
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Single closing CTA */}
        <section className="grain relative bg-pine-dark py-16">
          <Reveal className="relative z-10 mx-auto max-w-4xl px-6 text-center">
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
