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
      className="h-4 w-4"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path d="M16 2v4M8 2v4M3 9h18" />
    </svg>
  );
}

const PAST_EVENTS = [
  {
    title: "FJMCAANA at FJMU — December 2025",
    date: "2025",
    description:
      "Memories from the FJMCAANA visit to Fatima Jinnah Medical University.",
    gallery: "/gallery/FJMCAANA-at-FJMU-December-2025",
  },
  {
    title: "FJMCAANA APPNA BOD Victory Lunch",
    date: "2025",
    description:
      "Memories from the FJMCAANA APPNA BOD victory lunch.",
    gallery: "/gallery/FJMCAANA-Appna-BOD-victory-lunch-2025",
  },
  {
    title: "FJMCAANA Summer Convention",
    date: "2016",
    description:
      "Memories from the FJMCAANA Summer Convention.",
    gallery: "/gallery/FJMCAANA-at-2016-summer-convention",
  },
  {
    title: "Annual Scientific Conference",
    date: "2019",
    description:
      "Highlights from the FJMCAANA Annual Scientific Conference.",
    gallery: "/gallery/annual-scientific-conference-2019",
  },
  {
    title: "APPNA Healthcare Day",
    date: "2016",
    description:
      "Community healthcare and outreach moments from APPNA Healthcare Day.",
    gallery: "/gallery/appna-health-care-day",
  },
  {
    title: "Helping Babies Breathe",
    date: "Archive",
    description:
      "Memories from the Helping Babies Breathe initiative.",
    gallery: "/gallery/helping-babies-breathe",
  },
  {
    title: "Mother & Child Hospital Fundraiser",
    date: "2019",
    description:
      "Memories from the Mother & Child Hospital fundraising initiative.",
    gallery: "/gallery/mother-and-child-fundraiser-2019",
  },
  {
    title: "Sponsor a Child",
    date: "Archive",
    description:
      "Memories from the Sponsor a Child initiative.",
    gallery: "/gallery/sponsor-a-child",
  },
  {
    title: "Visit to FJMU",
    date: "Archive",
    description:
      "Memories from FJMCAANA's visit to Fatima Jinnah Medical University.",
    gallery: "/gallery/visit-to-fjmu",
  },
];

export default function PastEventsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-cream">
        <PageHeader
          eyebrow="Community"
          title="Past Events"
          description="A look back at the gatherings, conferences, fundraisers, and community initiatives that brought our alumni together."
        />

        <section className="mx-auto max-w-6xl px-5 pb-12 sm:px-6 sm:pb-16 lg:px-8">
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PAST_EVENTS.map((event) => (
              <StaggerItem key={event.title} interactive>
                <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-pine/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  {/* Gold accent */}
                  <div className="h-1 bg-gold" />

                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    <div className="flex items-center gap-2 text-gold">
                      <CalendarIcon />

                      <span className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-pine">
                        {event.date}
                      </span>
                    </div>

                    <h2 className="mt-3 font-display text-2xl font-medium leading-[1.1] text-pine-dark">
                      {event.title}
                    </h2>

                    <p className="mt-2 flex-1 font-body text-sm leading-5 text-ink-soft">
                      {event.description}
                    </p>

                    <Link
                      href={event.gallery}
                      className="mt-4 inline-flex w-fit items-center gap-2 border-b border-pine/30 pb-1 font-accent text-[10px] font-semibold uppercase tracking-[0.14em] text-pine transition-colors hover:border-gold hover:text-gold"
                    >
                      View Gallery
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        <Reveal className="mx-auto max-w-6xl px-5 pb-12 sm:px-6 lg:px-8">
          <div className="rounded-xl bg-sage px-5 py-7 sm:px-8 sm:py-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-pine">
              Our memories
            </p>

            <h2 className="mt-2 font-display text-2xl font-medium text-pine-dark sm:text-3xl">
              Moments worth remembering
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-ink-soft">
              Explore the galleries and revisit the moments that continue to
              connect our alumni and community.
            </p>
          </div>
        </Reveal>
      </main>

      <Footer />
    </>
  );
}