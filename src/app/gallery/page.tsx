import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SealEmblem from "@/components/SealEmblem";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export const metadata = {
  title: "Gallery | FJMCAANA Memories & Events",
  description:
    "Explore FJMCAANA's gallery showcasing professional, cultural, and community events. Relive memorable gatherings, celebrations, and milestones from our alumni of physicians.",
};

const galleryYears = [
  {
    title: "FJMCAANA at FJMU",
    year: "2025",
    subtitle: "December 2025",
    description:
      "Memories from the FJMCAANA visit to Fatima Jinnah Medical University in December 2025.",
    link: "/gallery/FJMCAANA-at-FJMU-December-2025",
  },
  {
    title: "APPNA BOD Victory Lunch",
    year: "2025",
    subtitle: "2025",
    description:
      "Memories from the FJMCAANA APPNA Board of Directors victory lunch in 2025.",
    link: "/gallery/FJMCAANA-Appna-BOD-victory-lunch-2025",
  },
  {
    title: "FJMCAANA Summer Convention",
    year: "2016",
    subtitle: "Summer Convention",
    description:
      "Memories from the FJMCAANA Summer Convention and the community gathered together.",
    link: "/gallery/FJMCAANA-at-2016-summer-convention",
  },
  {
    title: "Annual Scientific Conference",
    year: "2019",
    subtitle: "Scientific Conference",
    description:
      "Highlights and memories from the Annual Scientific Conference in 2019.",
    link: "/gallery/annual-scientific-conference-2019",
  },
  {
    title: "APPNA Healthcare Day",
    year: "2016",
    subtitle: "Community Outreach",
    description:
      "Community healthcare and outreach moments from APPNA Healthcare Day.",
    link: "/gallery/appna-health-care-day",
  },
  {
    title: "Helping Babies Breathe",
    year: "Archive",
    subtitle: "Community Initiative",
    description:
      "Memories from the Helping Babies Breathe initiative and its community impact.",
    link: "/gallery/helping-babies-breathe",
  },
  {
    title: "Mother & Child Hospital Fundraiser",
    year: "2019",
    subtitle: "Fundraiser",
    description:
      "Memories from the Mother & Child Hospital fundraising event.",
    link: "/gallery/mother-and-child-fundraiser-2019",
  },
  {
    title: "Sponsor a Child",
    year: "Archive",
    subtitle: "Community Support",
    description:
      "Memories from the Sponsor a Child initiative and efforts supporting children in need.",
    link: "/gallery/sponsor-a-child",
  },
  {
    title: "Visit to FJMU",
    year: "Archive",
    subtitle: "FJMU Visit",
    description:
      "Memories from FJMCAANA's visits and connection with Fatima Jinnah Medical University.",
    link: "/gallery/visit-to-fjmu",
  },
];

const SECTIONS = [
  { id: "gallery", label: "Gallery" },
  { id: "memories", label: "Memories" },
];

function GalleryIcon({ className = "h-6 w-6" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="8.5" cy="9" r="1.5" />
      <path d="m3 17 5-5 3.5 3.5 2.5-2.5L21 19" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path d="M5 12h13" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}
function GalleryCard({ item }: { item: (typeof galleryYears)[number] }) {
  return (
    <StaggerItem
      interactive
      className="group relative overflow-hidden rounded-2xl border border-pine/10 bg-white p-7 transition-all duration-300 hover:border-gold/40 hover:shadow-lg sm:p-8"
    >
      {/* Large decorative year */}
      <div className="pointer-events-none absolute -right-4 -top-7 font-display text-8xl font-semibold text-pine/[0.035]">
        {item.year === "Archive" ? "∞" : item.year}
      </div>

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <span className="rounded-full bg-gold/15 px-4 py-1.5 font-accent text-sm font-semibold uppercase tracking-[0.1em] text-pine-dark">
            {item.year}
          </span>

          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-sage text-pine transition-colors duration-300 group-hover:bg-gold group-hover:text-pine-dark">
            <GalleryIcon className="h-5 w-5" />
          </div>
        </div>

        <h3 className="mt-6 font-display text-xl font-semibold text-pine-dark sm:text-2xl">
          {item.title}
        </h3>

        <p className="mt-2 font-accent text-[11px] font-semibold uppercase tracking-[0.12em] text-pine-dark">
          {item.subtitle}
        </p>

        <p className="mt-4 min-h-[72px] text-sm leading-relaxed text-ink-soft">
          {item.description}
        </p>

        <div className="mt-7">
          <Link
            href={item.link}
            className="inline-flex items-center gap-2 rounded-full bg-pine px-6 py-3 font-accent text-sm font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-pine-dark group-hover:gap-3"
          >
            <GalleryIcon className="h-4 w-4" />
            View Gallery
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </StaggerItem>
  );
}

export default function GalleryPage() {
  return (
    <>
      <Navbar />

      {/* Header */}
      <PageHeader
        eyebrow="Moments Worth Keeping"
        title="Gallery"
        description="A collection of memories from our professional, cultural, educational, and community events across the years."
      />

      {/* In-page navigation */}
      {/* <div className="sticky top-[57px] z-30 border-y border-pine/10 bg-cream/95 backdrop-blur sm:top-[65px]">
        <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-8 py-3.5 sm:px-2">
          {SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="whitespace-nowrap font-accent text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-soft transition hover:text-pine-dark"
            >
              {section.label}
            </a>
          ))}
        </div>
      </div> */}

      <main className="bg-cream">
        {/* Gallery introduction */}
        {/* <section
          id="gallery"
          className="mx-auto max-w-7xl scroll-mt-32 px-8 py-8 sm:px-2 sm:py-10"
        >
          <Reveal className="relative overflow-hidden rounded-2xl border border-pine/10 bg-white p-8 md:p-12">
            <SealEmblem className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 text-gold opacity-[0.06]" />

            <div className="relative z-10 max-w-4xl">
              <div className="mb-5 flex items-center gap-3">
                <div className="h-px w-10 bg-gold" />

                <span className="font-accent text-xs font-semibold uppercase tracking-[0.18em] text-pine-dark">
                  Our Memories
                </span>
              </div>

              <h2 className="font-display text-2xl font-semibold text-pine-dark sm:text-3xl">
                Celebrating the moments that bring us together
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-soft">
                From professional conferences and university visits to
                community initiatives and celebrations, these moments reflect
                the connections and shared experiences that have shaped
                FJMCAANA over the years.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-pine/10 bg-sage p-5">
                  <div className="font-display text-2xl font-semibold text-gold">
                    Events
                  </div>
                  <p className="mt-2 text-sm text-ink-soft">
                    Professional and community gatherings.
                  </p>
                </div>

                <div className="rounded-xl border border-pine/10 bg-sage p-5">
                  <div className="font-display text-2xl font-semibold text-gold">
                    Community
                  </div>
                  <p className="mt-2 text-sm text-ink-soft">
                    Moments of service and connection.
                  </p>
                </div>

                <div className="rounded-xl border border-pine/10 bg-sage p-5">
                  <div className="font-display text-2xl font-semibold text-gold">
                    FJMU
                  </div>
                  <p className="mt-2 text-sm text-ink-soft">
                    Memories connecting alumni and university.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section> */}

        {/* Gallery cards */}
        <section
          id="memories"
          className="scroll-mt-32 bg-sage py-16 sm:py-20"
        >
          <div className="mx-auto max-w-7xl px-8 sm:px-2">
            <Reveal>
              <div className="mb-8 flex items-center gap-3">
                <div className="h-px w-10 bg-gold" />

                <h2 className="font-display text-3xl font-semibold text-pine-dark">
                  Explore Our Memories
                </h2>
              </div>

              <p className="mb-12 max-w-3xl text-lg text-ink-soft">
                Browse our collection of photographs and memories from
                important events and milestones throughout the years.
              </p>
            </Reveal>

            <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {galleryYears.map((item) => (
                <GalleryCard
                  key={`${item.title}-${item.year}`}
                  item={item}
                />
              ))}
            </Stagger>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="grain relative overflow-hidden bg-pine-dark py-16">
          <SealEmblem className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 text-gold opacity-[0.05]" />

          <Reveal className="relative z-10 mx-auto max-w-4xl px-6 text-center">
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              Every gathering becomes a memory
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-cream/85">
              Explore our gallery and relive the people, events, and
              experiences that continue to connect our community.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/events"
                className="rounded-full bg-gold px-8 py-3 font-accent text-sm font-semibold uppercase tracking-[0.1em] text-pine-dark transition hover:bg-gold-light"
              >
                Explore Events
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/40 px-8 py-3 font-accent text-sm font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
    </>
  );
}