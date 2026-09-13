import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path d="M16 2v4M8 2v4M3 9h18" />
    </svg>
  );
}

const EVENT_TYPES = [
  {
    title: "Past Events",
    description:
      "Explore the gatherings, conferences, fundraisers, and community moments that shaped our journey.",
    href: "/events/past_events",
    label: "Explore past events",
  },
  {
    title: "Upcoming Events",
    description:
      "Stay connected with upcoming gatherings, meetings, fundraisers, and opportunities to come together.",
    href: "/events/upcoming_events",
    label: "View upcoming events",
  },
];

export default function EventsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-cream">
        <PageHeader
          eyebrow="Community"
          title="Events That Bring Us Together"
          description="From meaningful gatherings to memorable celebrations, our events connect alumni, friends, and supporters."
        />

        <section className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:pb-16 lg:px-8">
          <Stagger className="grid gap-5 md:grid-cols-2">
            {EVENT_TYPES.map((event) => (
              <StaggerItem key={event.title} interactive>
                <Link
                  href={event.href}
                  className="group block overflow-hidden rounded-xl border border-pine/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* Accent bar */}
                  <div className="h-1 bg-gold" />

                  <div className="p-5 sm:p-6">
                    <div className="flex items-center gap-3 text-gold">
                      <CalendarIcon />

                      <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em]">
                        FJMCAANA
                      </span>
                    </div>

                    <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-pine-dark sm:text-4xl">
                      {event.title}
                    </h2>

                    <p className="mt-3 max-w-lg font-body text-sm leading-6 text-ink-soft">
                      {event.description}
                    </p>

                    <div className="mt-5 inline-flex items-center gap-2 font-accent text-xs font-semibold uppercase tracking-[0.12em] text-pine transition-colors group-hover:text-gold">
                      {event.label}

                      <span
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        <Reveal className="mx-auto max-w-6xl px-5 pb-12 sm:px-6 lg:px-8">
          <div className="rounded-xl bg-pine-dark px-5 py-7 sm:px-8 sm:py-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold-light">
              Together
            </p>

            <p className="mt-2 max-w-2xl font-display text-2xl leading-tight text-white sm:text-3xl">
              Every gathering is an opportunity to reconnect, celebrate, and
              create an impact together.
            </p>
          </div>
        </Reveal>
      </main>

      <Footer />
    </>
  );
}