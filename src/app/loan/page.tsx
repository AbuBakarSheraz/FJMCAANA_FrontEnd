import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

const LOAN_APPLICATION_PDF =
  "/reports/FJMCAANA Post Graduate Loan Application.pdf";

const LOAN_PROGRAM_OVERVIEW_PDF =
  "/reports/FJMCAANA Post Graduate Loan Program Overview.pdf";
  
const ELIGIBILITY = [
  "Must be a graduate of Fatima Jinnah Medical University (FJMU).",
  "Must be in the United States or have positive visa status, such as a green card or H1 visa.",
  "Must have passed Step 1 and achieved a Step 2 score of 250 or higher. If multiple candidates qualify, preference is given to applicants who have also taken Step 3.",
  "Must have at least three months of United States externship experience.",
];

const IMPORTANT_INFORMATION = [
  "Loan eligibility is determined by the FJMCAANA Executive Council in collaboration with FJMU faculty in Pakistan.",
  "All applications are screened by the General Secretary of the FJMCAANA Executive Council.",
  "The loan is awarded in full and is repayable within two years of starting residency, in a lump sum or installments.",
  "A legal contract and repayment terms apply. FJMCAANA reserves the right to pursue legal action in case of breach of contract.",
  "If an applicant is unable to obtain a training position or license to practice medicine in the United States, repayment terms may be adjusted in collaboration with the applicant.",
];

const APPLICATION_STEPS = [
  "Complete the FJMCAANA Post-Graduate Loan Application.",
  "Ensure all supporting documents are complete.",
  "Email your application and documents to team@fjmcaana.org.",
];

const REPAYMENT_OPTIONS = [
  "Monthly: 24 equal monthly installments.",
  "Quarterly: 8 equal quarterly installments.",
  "Bi-annually: 1 payment every 6 months, for a total of 4 equal payments.",
];

export default function LoanPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="Financial Support"
        title="Interest-Free Loan Program"
        description="Supporting FJMU graduates applying for residency training in the United States."
      />

      <main className="bg-cream">
        <section className="mx-auto max-w-7xl px-8 py-16 sm:px-2">
          <div className="rounded-2xl border border-pine/10 bg-white p-8 shadow-sm sm:p-10">
            <span className="rounded-full bg-gold/20 px-4 py-2 font-accent text-sm font-semibold uppercase tracking-[0.1em] text-pine-dark">
              Up to $3,000 · Non-interest loan
            </span>
            <p className="mt-4 max-w-4xl text-lg leading-relaxed text-ink-soft">
              FJMCAANA is proud to offer financial assistance to FJMU graduates applying for residency training positions in the United States.
            </p>
            <ul className="mt-8 grid gap-4 text-sm leading-relaxed text-ink-soft sm:grid-cols-2">
              {IMPORTANT_INFORMATION.map((item) => (
                <li className="rounded-xl bg-sage/50 p-5" key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-sage/20 py-16">
          <div className="mx-auto max-w-7xl px-8 sm:px-2">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-1 w-12 rounded-full bg-gold" />
              <h2 className="font-display text-3xl font-semibold text-pine-dark">Who Can Apply?</h2>
            </div>
            <div className="rounded-xl border border-pine/10 bg-white p-8 shadow-sm">
              <ul className="grid gap-4 text-sm leading-relaxed text-ink-soft sm:grid-cols-2">
                {ELIGIBILITY.map((item) => (
                  <li className="flex gap-3" key={item}>
                    <span className="mt-2 h-2 w-2 flex-none rounded-full bg-gold" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

       <section className="mx-auto max-w-7xl px-8 py-16 sm:px-2">
  <div className="mb-8 flex items-center gap-3">
    <div className="h-1 w-12 rounded-full bg-gold" />
    <h2 className="font-display text-3xl font-semibold text-pine-dark">
      How to Apply
    </h2>
  </div>

  <div className="grid gap-6 md:grid-cols-3">
    {APPLICATION_STEPS.map((item, index) => (
      <div
        className="rounded-xl border border-pine/10 bg-white p-6 shadow-sm"
        key={item}
      >
        <span className="font-display text-4xl font-semibold text-gold/30">
          0{index + 1}
        </span>

        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          {item}
        </p>

        {/* PDF links for Step 1 */}
        {index === 0 && (
          <div className="mt-5 flex flex-col gap-2">
            <a
              href={LOAN_APPLICATION_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-pine px-4 py-2.5 font-accent text-xs font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-pine-dark"
            >
              Download Application
            </a>

            <a
              href={LOAN_PROGRAM_OVERVIEW_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-pine/20 px-4 py-2.5 font-accent text-xs font-semibold uppercase tracking-[0.08em] text-pine-dark transition hover:bg-sage/40"
            >
              Program Overview
            </a>
          </div>
        )}
      </div>
    ))}
  </div>
</section>

        <section className="bg-sage/20 py-16">
          <div className="mx-auto max-w-7xl px-8 sm:px-2">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-1 w-12 rounded-full bg-gold" />
              <h2 className="font-display text-3xl font-semibold text-pine-dark">Repayment Options</h2>
            </div>
            <div className="rounded-xl border border-pine/10 bg-white p-8 shadow-sm">
              <p className="max-w-3xl text-sm leading-relaxed text-ink-soft">
                If a candidate is not able to pay the loan in full after securing a residency spot, FJMCAANA offers convenient repayment plans.
              </p>
              <ul className="mt-6 grid gap-4 text-sm leading-relaxed text-ink-soft sm:grid-cols-3">
                {REPAYMENT_OPTIONS.map((item) => (
                  <li className="rounded-xl bg-sage/50 p-5" key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-pine-dark py-16">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="font-display text-3xl font-semibold text-white">Ready to Apply?</h2>
            <p className="mt-4 text-lg text-cream/80">
              Email your completed application and supporting documents to the FJMCAANA team.
            </p>
            <a
              href="mailto:team@fjmcaana.org?subject=Post-Graduate Loan Application"
              className="mt-8 inline-flex rounded-lg bg-gold px-8 py-3 font-accent text-sm font-semibold uppercase tracking-[0.1em] text-pine-dark transition hover:bg-gold-light"
            >
              Email Your Application
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
