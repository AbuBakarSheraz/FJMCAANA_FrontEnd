import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Reveal } from "@/components/motion/Reveal";

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path d="M16 2v4M8 2v4M3 9h18" />
    </svg>
  );
}

export default function UpcomingEventsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-cream">
        <PageHeader
          eyebrow="Community"
          title="Upcoming Events"
          description="Stay connected with the gatherings and opportunities bringing our alumni community together."
        />

        <section className="mx-auto max-w-6xl px-5 pb-12 sm:px-6 sm:pb-16 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-pine/10 bg-white shadow-sm">
              <div className="h-1 bg-gold" />

              <div className="px-6 py-10 text-center sm:px-10 sm:py-12">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sage text-pine">
                  <CalendarIcon />
                </div>

                <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
                  Coming soon
                </p>

                <h2 className="mt-2 font-display text-3xl font-medium leading-tight text-pine-dark sm:text-4xl">
                  New Events Coming Soon
                </h2>

                <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-ink-soft">
                  We&apos;re preparing our next gatherings and community events.
                  Please check back soon for dates, details, and registration
                  information.
                </p>

                <Link
                  href="/events/past-events"
                  className="mt-6 inline-flex items-center gap-2 rounded-md bg-pine px-4 py-2.5 font-accent text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-pine-light"
                >
                  Explore Past Events
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
    </>
  );
}