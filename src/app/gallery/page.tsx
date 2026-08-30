import Link from "next/link";
import SealEmblem from "@/components/SealEmblem";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Gallery | FJMCAANA Memories & Events",
  description:
    "Explore FJMCAANA's gallery showcasing professional, cultural, and community events. Relive memorable gatherings, celebrations, and milestones from our sisterhood of physicians.",
};

const galleryYears = [
  {
    year: "FJMCAANA Summer Convention",
    date: "2016",
    description: "Memories from the FJMCAANA Summer Convention in 2016.",
    link: "/gallery/FJMCAANA-at-2016-summer-convention",
  },
  {
    year: "Annual Scientific Conference",
    date: "2019",
    description: "Memories from the Annual Scientific Conference in 2019.",
    link: "/gallery/annual-scientific-conference-2019",
  },
  {
    year: "APPNA Healthcare Day",
    date: "2016",
    description: "Community healthcare and outreach moments.",
    link: "/gallery/appna-health-care-day",
  },
  {
    year: "Helping Babies Breathe",
    date: "Archive",
    description: "Memories from our Helping Babies Breathe initiative.",
    link: "/gallery/helping-babies-breathe",
  },
  {
    year: "Mother & Child Hospital Fundraiser",
    date: "2019",
    description: "Memories from the Mother & Child Hospital fundraiser.",
    link: "/gallery/mother-and-child-fundraiser-2019",
  },
  {
    year: "Sponsor a Child",
    date: "Archive",
    description: "Memories from our sponsor-a-child initiative.",
    link: "/gallery/sponsor-a-child",
  },
  {
    year: "Visit to FJMU",
    date: "Archive",
    description: "Memories from our visit to FJMU.",
    link: "/gallery/visit-to-fjmu",
  },
];

function CalendarIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 9.5h17M8 3v3.5M16 3v3.5" />
    </svg>
  );
}

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <header className="grain relative overflow-hidden bg-pine-dark py-20 text-cream">
        <SealEmblem className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 text-gold opacity-[0.07]" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gold/60" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-gold-light">
              Moments Worth Keeping
            </span>
            <span className="h-px w-8 bg-gold/60" />
          </div>
          <h1 className="mt-5 font-display text-4xl font-semibold text-white sm:text-5xl">Gallery</h1>
          <p className="mx-auto mt-4 max-w-xl text-cream/80">
            Memories from our professional, cultural, and community events across the years — a
            record of the sisterhood in action.
          </p>
        </div>
      </header>

      {/* Years Grid */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryYears.map((item, i) => (
              <Link
                key={`${item.year}-${i}`}
                href={item.link}
                className="group flex flex-col rounded-xl border border-pine/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-gold/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-pine-dark">
                  <CalendarIcon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 font-display text-lg font-semibold text-pine-dark">{item.year}</h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.1em] text-gold">{item.date}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{item.description}</p>

                <span className="mt-5 inline-flex w-fit items-center gap-1.5 border-b border-pine/40 text-sm font-semibold text-pine transition-all group-hover:translate-x-1 group-hover:border-pine">
                  View Gallery
                  <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}