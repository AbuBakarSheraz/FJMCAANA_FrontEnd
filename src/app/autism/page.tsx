import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ComingSoonPage() {
  return (
    <>
      <Navbar />

      <main className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden bg-cream px-6">
        {/* Decorative background elements */}
        <div
          aria-hidden="true"
          className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-gold/10 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-pine/10 blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-3xl py-24 text-center sm:py-32">
          {/* Eyebrow */}
          <span className="font-accent text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            FJMCAANA
          </span>

          {/* Main heading */}
          <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-pine-dark sm:text-6xl md:text-7xl">
            Coming Soon
          </h1>

          {/* Decorative line */}
          <div className="mx-auto mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gold/40" />
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="h-px w-12 bg-gold/40" />
          </div>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-xl text-base leading-7 text-ink-soft sm:text-lg">
            We&apos;re preparing something meaningful for the FJMCAANA
            community. This page will be available soon.
          </p>

          {/* Small brand statement */}
          <p className="mt-8 font-accent text-[11px] font-semibold uppercase tracking-[0.18em] text-pine">
            Connecting Our Alumni · Serving Our Communities
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
