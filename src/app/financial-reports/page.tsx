"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Link from "next/link";

const FINANCIAL_REPORTS = [
  {
    year: "2024-2025",
    title: "Financial Statement FY 2024-2025",
    image: "/reports/financial-report-1.jpg",
    description: "Comprehensive financial statement showing income, expenses, and fund allocation for fiscal year 2024-2025."
  },
  {
    year: "2023-2024",
    title: "Financial Statement FY 2023-2024",
    image: "/reports/financial-report-2.jpg",
    description: "Annual financial report detailing organizational revenue, expenditures, and project funding."
  },
  {
    year: "2022-2023",
    title: "Financial Statement FY 2022-2023",
    image: "/reports/financial-report-3.jpg",
    description: "Transparent breakdown of donations received and their utilization across all programs."
  },
  {
    year: "2021-2022",
    title: "Financial Statement FY 2021-2022",
    image: "/reports/financial-report-4.jpg",
    description: "Financial accountability report showing stewardship of member and donor contributions."
  },
  {
    year: "Summary",
    title: "Multi-Year Financial Summary",
    image: "/reports/financial-report-5.jpg",
    description: "Consolidated financial overview showing trends and impact over multiple fiscal years."
  }
];

export default function FinancialReportsPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="Transparency & Accountability"
        title="Financial Reports"
        description="Detailed financial statements demonstrating our commitment to transparent stewardship of every dollar contributed to FJMCAANA."
      />

      <div className="bg-cream">
        {/* Introduction */}
        <section className="mx-auto max-w-6xl px-6 py-12">
          <div className="rounded-2xl bg-gradient-to-br from-pine/5 to-sage/30 p-8 md:p-12">
            <h2 className="font-display text-2xl font-semibold text-pine-dark">
              Financial Transparency
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-ink-soft leading-relaxed">
              FJMCAANA is committed to complete transparency in how we manage and allocate every contribution. 
              These financial statements provide detailed documentation of our income, expenses, and the direct 
              impact of donations on our healthcare, education, and community projects in Pakistan.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-pine/10 bg-white p-4">
                <div className="text-2xl font-bold text-gold">100%</div>
                <div className="mt-1 text-sm text-ink-soft">Of project donations go directly to projects</div>
              </div>
              <div className="rounded-lg border border-pine/10 bg-white p-4">
                <div className="text-2xl font-bold text-gold">Annual</div>
                <div className="mt-1 text-sm text-ink-soft">Audited financial statements</div>
              </div>
              <div className="rounded-lg border border-pine/10 bg-white p-4">
                <div className="text-2xl font-bold text-gold">48 Years</div>
                <div className="mt-1 text-sm text-ink-soft">Of fiscal responsibility</div>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Reports Grid */}
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-gold rounded-full" />
            <h2 className="font-display text-3xl font-semibold text-pine-dark">
              Annual Financial Statements
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {FINANCIAL_REPORTS.map((report, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border-2 border-pine/10 bg-white shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-gold/50"
              >
                {/* Year Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="rounded-full bg-gold px-4 py-2 font-mono text-sm font-bold text-pine-dark shadow-lg">
                    {report.year}
                  </span>
                </div>

                {/* Report Image */}
                <div className="relative h-80 overflow-hidden bg-sage/20">
                  <Image
                    src={report.image}
                    alt={report.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pine-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Report Info */}
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-pine-dark">
                    {report.title}
                  </h3>
                  <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                    {report.description}
                  </p>
                  
                  <div className="mt-6 flex items-center gap-3">
                    <button
                      onClick={() => window.open(report.image, '_blank')}
                      className="flex-1 rounded-lg bg-pine px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-pine-dark"
                    >
                      View Full Report
                    </button>
                    <button
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = report.image;
                        link.download = `${report.title.replace(/\s+/g, '-')}.jpg`;
                        link.click();
                      }}
                      className="rounded-lg border-2 border-pine px-4 py-2.5 text-sm font-semibold text-pine transition hover:bg-pine hover:text-white"
                      title="Download Report"
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

        {/* How Funds Are Used */}
        <section className="bg-sage/20 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-gold rounded-full" />
              <h2 className="font-display text-3xl font-semibold text-pine-dark">
                How Your Contributions Make an Impact
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: "🏥",
                  title: "Healthcare Projects",
                  description: "Cornea transplants, medical equipment, hospital support"
                },
                {
                  icon: "🎓",
                  title: "Education Support",
                  description: "Scholarships, E-library, student aid programs"
                },
                {
                  icon: "🤝",
                  title: "Emergency Relief",
                  description: "Flood relief, disaster response, housing projects"
                },
                {
                  icon: "💰",
                  title: "Interest-Free Loans",
                  description: "Student loans, board exam support, financial aid"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-pine/10 bg-white p-6 shadow-sm"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-display text-lg font-semibold text-pine-dark">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-soft">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Accountability Section */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-2xl bg-gradient-to-br from-pine-dark to-pine p-12 text-center shadow-xl">
            <h2 className="font-display text-3xl font-semibold text-white">
              Questions About Our Finances?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-cream/90">
              We are committed to complete transparency and accountability. If you have questions 
              about any of our financial reports or how donations are used, please contact us.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:team@fjmcaana.org?subject=Financial Report Inquiry"
                className="rounded-lg bg-gold px-8 py-3 font-semibold text-pine-dark transition hover:bg-gold-light"
              >
                Contact Financial Team
              </a>
              <Link
                href="/reports"
                className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                View All Reports
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
