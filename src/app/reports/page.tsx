import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";

const ANNUAL_REPORTS = [
  {
    year: "2022",
    title: "FJMCAANA Annual Report 2022",
    description: "Comprehensive overview of projects, financial stewardship, and community impact for fiscal year 2022.",
    pdfUrl: "/reports/fjmcaana-annual-report-2022.pdf",
    date: "December 31, 2022",
    highlights: ["60+ Cornea Transplants", "15 Scholarships Awarded", "29 Houses Built"]
  },
  {
    year: "2022",
    title: "President's Annual Report 2022",
    description: "Message from the President highlighting achievements, challenges, and vision for the future.",
    pdfUrl: "/reports/president-report-2022.pdf",
    date: "December 31, 2022",
    highlights: []
  }
];

const PROJECT_REPORTS = [
  {
    title: "Cornea Transplant Project Report 2022",
    description: "Detailed report on the collaboration with Zafar & Mir Foundation and Sir Ganga Ram Hospital.",
    pdfUrl: "/reports/cornea-transplant-report-2022.pdf",
    date: "2022",
    category: "Healthcare"
  },
  {
    title: "Flood Relief Project - Kashani Basti",
    description: "Documentation of housing construction project for flood-affected families in South Punjab.",
    pdfUrl: "/reports/flood-relief-kashani-basti.pdf",
    date: "2022",
    category: "Emergency Relief"
  },
  {
    title: "Scholarship Fund Impact Report",
    description: "Annual assessment of student scholarship program outcomes and beneficiary testimonials.",
    pdfUrl: "/reports/scholarship-impact-report.pdf",
    date: "2022",
    category: "Education"
  }
];

const FINANCIAL_REPORTS = [
  {
    title: "Financial Statement 2022",
    description: "Audited financial statement showing income, expenses, and fund allocation.",
    pdfUrl: "/reports/financial-statement-2022.pdf",
    date: "December 31, 2022"
  },
  {
    title: "Donor Impact Report",
    description: "Transparent breakdown of how donor contributions were utilized across all projects.",
    pdfUrl: "/reports/donor-impact-2022.pdf",
    date: "2022"
  }
];

export default function ReportsPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="Transparency & Accountability"
        title="Annual Reports & Documentation"
        description="Comprehensive reports demonstrating our commitment to transparent stewardship and measurable impact."
      />

      <div className="bg-cream">
        {/* Annual Reports Section */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-gold rounded-full" />
            <h2 className="font-display text-3xl font-semibold text-pine-dark">
              Annual Reports
            </h2>
          </div>
          <p className="mb-12 max-w-3xl text-lg text-ink-soft">
            Comprehensive yearly reports documenting our organizational activities, financial stewardship, and community impact.
          </p>

          <div className="grid gap-6 lg:grid-cols-2">
            {ANNUAL_REPORTS.map((report, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border-2 border-pine/10 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-gold/50"
              >
                <div className="absolute top-0 right-0 h-32 w-32 bg-gradient-to-br from-gold/10 to-transparent rounded-bl-full" />
                <div className="relative">
                  <div className="flex items-start justify-between">
                    <span className="rounded-full bg-gold/20 px-4 py-1 font-mono text-sm font-semibold text-gold">
                      {report.year}
                    </span>
                    <svg className="h-6 w-6 text-pine/30 group-hover:text-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-pine-dark">
                    {report.title}
                  </h3>
                  <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                    {report.description}
                  </p>
                  <p className="mt-3 text-xs text-ink/60">
                    Published: {report.date}
                  </p>
                  {report.highlights.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {report.highlights.map((highlight, i) => (
                        <span key={i} className="rounded-full bg-sage/50 px-3 py-1 text-xs font-medium text-pine-dark">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}
                  <a
                    href={report.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-lg bg-pine px-6 py-3 text-sm font-semibold text-white transition hover:bg-pine-dark"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Project Reports Section */}
        <section className="bg-sage/20 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-gold rounded-full" />
              <h2 className="font-display text-3xl font-semibold text-pine-dark">
                Project Reports
              </h2>
            </div>
            <p className="mb-12 max-w-3xl text-lg text-ink-soft">
              Detailed documentation of individual project outcomes, impact metrics, and beneficiary stories.
            </p>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {PROJECT_REPORTS.map((report, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-xl border border-pine/10 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="bg-gradient-to-br from-pine/5 to-sage/30 p-6 border-b border-pine/10">
                    <span className="inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold text-pine-dark shadow-sm">
                      {report.category}
                    </span>
                    <h3 className="mt-4 font-display text-lg font-semibold text-pine-dark">
                      {report.title}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-ink-soft leading-relaxed">
                      {report.description}
                    </p>
                    <p className="mt-3 text-xs text-ink/60">
                      {report.date}
                    </p>
                    <a
                      href={report.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-pine border-b border-pine/40 hover:border-pine transition-colors"
                    >
                      View Report
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Financial Reports Section */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-gold rounded-full" />
            <h2 className="font-display text-3xl font-semibold text-pine-dark">
              Financial Reports
            </h2>
          </div>
          <p className="mb-12 max-w-3xl text-lg text-ink-soft">
            Transparent financial documentation showing responsible management of donor contributions and organizational funds.
          </p>

          <div className="grid gap-6 lg:grid-cols-2">
            {FINANCIAL_REPORTS.map((report, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-xl border border-pine/10 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex-none rounded-lg bg-gold/10 p-3">
                  <svg className="h-8 w-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-semibold text-pine-dark">
                    {report.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-soft">
                    {report.description}
                  </p>
                  <p className="mt-2 text-xs text-ink/60">
                    {report.date}
                  </p>
                  <a
                    href={report.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-pine hover:text-pine-dark transition-colors"
                  >
                    Download
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Information Section */}
        <section className="bg-pine-dark py-16">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="font-display text-2xl font-semibold text-white">
              Questions About Our Reports?
            </h2>
            <p className="mt-4 text-cream/80">
              We are committed to transparency and accountability. If you have questions about any of our reports or would like additional information, please contact us.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-lg bg-gold px-8 py-3 font-semibold text-pine-dark transition hover:bg-gold-light"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
