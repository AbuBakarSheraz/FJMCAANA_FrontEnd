import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default function LoanPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="Financial Support"
        title="Interest-Free Loan Program"
        description="Supporting FJMU students and graduates with accessible, Shariah-compliant financial assistance for medical education and board exam preparation."
      />

      <div className="bg-cream">
        {/* Hero Section with Flyer */}
        <section className="mx-auto max-w-7xl px-8 sm:px-2 py-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Flyer Image */}
            <div className="relative overflow-hidden rounded-2xl border-2 border-gold/30 bg-white shadow-xl">
              <Image
                src="/flyers/interest-free-loan-flyer.jpg"
                alt="FJMCAANA Interest-Free Loan Program Flyer"
                width={800}
                height={1000}
                className="h-full w-full object-contain"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center">
              <div className="inline-block">
                <span className="rounded-full bg-gold/20 px-4 py-2 font-mono text-sm font-semibold text-gold">
                  0% Interest • Shariah Compliant
                </span>
              </div>
              <h2 className="mt-6 font-display text-3xl font-semibold text-pine-dark sm:text-4xl">
                Education Should Not Be Limited by Financial Barriers
              </h2>
              <p className="mt-6 text-lg text-ink-soft leading-relaxed">
                FJMCAANA is committed to supporting the educational journey of FJMU students and graduates. Our Interest-Free Loan Program provides financial assistance without the burden of interest, aligned with Islamic principles.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-none rounded-full bg-gold/20 p-2">
                    <svg className="h-6 w-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-pine-dark">Zero Interest</h3>
                    <p className="mt-1 text-sm text-ink-soft">
                      Completely interest-free loans following Shariah guidelines
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-none rounded-full bg-gold/20 p-2">
                    <svg className="h-6 w-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-pine-dark">Flexible Repayment</h3>
                    <p className="mt-1 text-sm text-ink-soft">
                      Reasonable repayment terms designed around your educational timeline
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-none rounded-full bg-gold/20 p-2">
                    <svg className="h-6 w-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-pine-dark">Education Focused</h3>
                    <p className="mt-1 text-sm text-ink-soft">
                      Funds for tuition, board exam fees, and educational expenses
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility Section */}
        <section className="bg-sage/20 py-16">
          <div className="mx-auto max-w-7xl px-8 sm:px-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-gold rounded-full" />
              <h2 className="font-display text-3xl font-semibold text-pine-dark">
                Who Can Apply?
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-xl border border-pine/10 bg-white p-8 shadow-sm">
                <div className="inline-block rounded-full bg-gold/10 p-3 mb-4">
                  <svg className="h-8 w-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-pine-dark">
                  Current FJMU Students
                </h3>
                <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                  Students currently enrolled at Fatima Jinnah Medical University who need financial assistance for tuition, books, or educational materials.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-ink-soft">
                  <li className="flex items-start gap-2">
                    <span className="text-gold">•</span>
                    <span>Enrolled in good academic standing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">•</span>
                    <span>Demonstrated financial need</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">•</span>
                    <span>Recommendation from faculty or administration</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-pine/10 bg-white p-8 shadow-sm">
                <div className="inline-block rounded-full bg-gold/10 p-3 mb-4">
                  <svg className="h-8 w-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-pine-dark">
                  FJMU Graduates
                </h3>
                <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                  Recent graduates preparing for board certification exams (USMLE, PLAB, etc.) or seeking residency positions in North America.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-ink-soft">
                  <li className="flex items-start gap-2">
                    <span className="text-gold">•</span>
                    <span>FJMU alumni in good standing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">•</span>
                    <span>Preparing for board exams or residency applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold">•</span>
                    <span>Committed to repayment timeline</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="mx-auto max-w-7xl px-8 sm:px-2 py-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-gold rounded-full" />
            <h2 className="font-display text-3xl font-semibold text-pine-dark">
              How to Apply
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Contact Us",
                description: "Reach out to FJMCAANA to express your interest and request application materials."
              },
              {
                step: "02",
                title: "Submit Application",
                description: "Complete the application form with required documentation and financial information."
              },
              {
                step: "03",
                title: "Review Process",
                description: "Our committee reviews applications and makes decisions based on need and eligibility."
              },
              {
                step: "04",
                title: "Receive Funds",
                description: "Approved applicants receive funds directly for their educational expenses."
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="rounded-xl border border-pine/10 bg-white p-6 shadow-sm">
                  <span className="font-display text-4xl font-bold text-gold/20">
                    {item.step}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-pine-dark">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 z-10">
                    <svg className="h-6 w-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-pine-dark py-16">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="font-display text-3xl font-semibold text-white">
              Ready to Apply?
            </h2>
            <p className="mt-4 text-lg text-cream/80">
              Contact us to learn more about the Interest-Free Loan Program and start your application.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:team@fjmcaana.org?subject=Interest-Free Loan Program Inquiry"
                className="rounded-lg bg-gold px-8 py-3 font-semibold text-pine-dark transition hover:bg-gold-light"
              >
                Contact Us About Loans
              </a>
              <a
                href="/flyers/interest-free-loan-flyer.pdf"
                download
                className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Download Flyer
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
