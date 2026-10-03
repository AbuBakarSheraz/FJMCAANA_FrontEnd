"use client";

/**
 * FEATURED MEMBER PAGE — app/featured-member/page.tsx
 *
 * Everything under "PLACEHOLDER DATA" below is dummy content for layout
 * purposes only (per the president: the Dr. Ayesha Khan mockup was just an
 * example, not a real member). To publish a real feature, replace:
 *   1. MEMBER — name, credentials, bio, accomplishments, quote
 *   2. GALLERY_IMAGES — swap in real photos under /public/images/featured-member/
 *   3. HERO_IMAGE — a campus/building photo for the header background
 *   4. NOMINATE_EMAIL — the inbox that should receive nominations
 *
 * The photo gallery here is a lightweight on-page strip (per your call to
 * link out rather than embed the full lightbox). It links to the existing
 * /gallery/[folder] route — set GALLERY_FOLDER_SLUG to match whatever
 * folder you create for this member in the gallery's data source.
 */

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

import SealEmblem from "@/components/SealEmblem";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

/* ─── Placeholder data — replace per real feature ──────────────────── */

const HERO_IMAGE = "/images/featured-member/hero-campus.jpg";

const MEMBER = {
  name: "Dr. [Member Name], MD",
  classYear: "FJMU Class of [20XX]",
  photo: "/images/featured-member/placeholder-headshot.jpg",
  quickFacts: [
    {
      icon: "building",
      title: "[Specialty / Role]",
      subtitle: "[City, State/Country]",
    },
    {
      icon: "gradCap",
      title: "[Academic Affiliation]",
      subtitle: "[Institution Name]",
    },
    {
      icon: "heart",
      title: "[One-line advocacy or mission statement]",
    },
  ],
  bio: "[2-3 sentence biography describing the member's career, specialty, and what they're passionate about. This should highlight their path since FJMU, their current work, and what makes their story worth celebrating.]",
  accomplishments: [
    {
      icon: "stethoscope",
      title: "[Accomplishment Title]",
      description: "[Short description of the accomplishment.]",
    },
    {
      icon: "gradCap",
      title: "[Accomplishment Title]",
      description: "[Short description of the accomplishment.]",
    },
    {
      icon: "fileText",
      title: "[Accomplishment Title]",
      description: "[Short description of the accomplishment.]",
    },
    {
      icon: "users",
      title: "[Accomplishment Title]",
      description: "[Short description of the accomplishment.]",
    },
    {
      icon: "globe",
      title: "[Accomplishment Title]",
      description: "[Short description of the accomplishment.]",
    },
  ],
  quote:
    "[A short quote from the member about what FJMU and FJMCAANA have meant to them.]",
};

const CAREER_HIGHLIGHTS = [
  "[Career highlight one — e.g. a role, award, or milestone.]",
  "[Career highlight two.]",
  "[Career highlight three.]",
];

const COMMUNITY_IMPACT = [
  "[Community or service contribution one.]",
  "[Community or service contribution two.]",
  "[Community or service contribution three.]",
];

const GALLERY_IMAGES = [
  { src: "/images/featured-member/gallery-1.jpg", alt: "[Describe photo 1]" },
  { src: "/images/featured-member/gallery-2.jpg", alt: "[Describe photo 2]" },
  { src: "/images/featured-member/gallery-3.jpg", alt: "[Describe photo 3]" },
  { src: "/images/featured-member/gallery-4.jpg", alt: "[Describe photo 4]" },
  { src: "/images/featured-member/gallery-5.jpg", alt: "[Describe photo 5]" },
  { src: "/images/featured-member/gallery-6.jpg", alt: "[Describe photo 6]" },
];

const GALLERY_FOLDER_SLUG = "featured-member-placeholder";
const NOMINATE_EMAIL = "info@fjmcaana.org";

/* ─── Icons (simple stroke icons, matching the rest of the site) ────── */

function Icon({ name, className = "h-5 w-5" }: { name: string; className?: string }) {
  const common = {
    className,
    fill: "none" as const,
    stroke: "currentColor" as const,
    strokeWidth: 1.7,
    viewBox: "0 0 24 24",
    "aria-hidden": true as const,
  };

  switch (name) {
    case "trophy":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 4h10v4a5 5 0 01-10 0V4z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 5H4v1a4 4 0 004 4M17 5h3v1a4 4 0 01-4 4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 13v4m-3 3h6" />
        </svg>
      );
    case "stethoscope":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 4v6a4 4 0 008 0V4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 4H4m10 0h-2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 10v2a6 6 0 01-12 0v-1" />
          <circle cx="19" cy="15" r="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 10v3" />
        </svg>
      );
    case "gradCap":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 9l10-5 10 5-10 5-10-5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M22 9v6" />
        </svg>
      );
    case "fileText":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 3.5h7l4 4V20a1 1 0 01-1 1H7a1 1 0 01-1-1V4.5a1 1 0 011-1z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 3.5V8h4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6M9 15.5h6M9 19h3" />
        </svg>
      );
    case "users":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 20v-1a6 6 0 016-6h0a6 6 0 016 6v1" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 6.2a3 3 0 010 5.6M20 20v-1a5.5 5.5 0 00-3.5-5.1" />
        </svg>
      );
    case "globe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
        </svg>
      );
    case "building":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 21V7l8-4 8 4v14" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 21h16M9 21v-5h6v5M9 11h.01M15 11h.01M9 8h.01M15 8h.01" />
        </svg>
      );
    case "heart":
      return (
        <svg {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 20s-7-4.4-9.3-8.7C1.3 8 2.6 4.8 5.6 4.1 7.6 3.6 9.6 4.4 12 6.6c2.4-2.2 4.4-3 6.4-2.5 3 .7 4.3 3.9 2.9 7.2C19 15.6 12 20 12 20z"
          />
        </svg>
      );
    case "chevronLeft":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
        </svg>
      );
    case "chevronRight":
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
        </svg>
      );
    case "quote":
      return (
        <svg {...common} fill="currentColor" stroke="none" viewBox="0 0 32 24">
          <path d="M9 0C4 2 0 7 0 13c0 5 3 9 8 9 4 0 7-3 7-7 0-4-3-7-6-7-.5 0-1 0-1.5.2C8.5 5 11 2 15 0L9 0zm17 0c-5 2-9 7-9 13 0 5 3 9 8 9 4 0 7-3 7-7 0-4-3-7-6-7-.5 0-1 0-1.5.2C25.5 5 28 2 32 0h-6z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 6 9-6" />
        </svg>
      );
    default:
      return null;
  }
}

/* ─── Quick-fact row (photo card details) ──────────────────────────── */

function QuickFact({ icon, title, subtitle }: { icon: string; title: string; subtitle?: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage text-pine">
        <Icon name={icon} className="h-4 w-4" />
      </span>
      <div>
        <p className="font-semibold text-pine-dark">{title}</p>
        {subtitle && <p className="text-sm italic text-ink-soft">{subtitle}</p>}
      </div>
    </div>
  );
}

/* ─── Accomplishment row (sidebar) ──────────────────────────────────── */

function AccomplishmentRow({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-3 border-t border-pine/10 py-4 first:border-t-0 first:pt-0">
      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
        <Icon name={icon} className="h-4 w-4" />
      </span>
      <div>
        <p className="font-semibold text-pine-dark">{title}</p>
        <p className="mt-1 text-sm leading-6 text-ink-soft">{description}</p>
      </div>
    </div>
  );
}

/* ─── Mini photo gallery strip with paging ─────────────────────────── */

function GalleryStrip() {
  const perPage = 4;
  const pageCount = Math.max(1, Math.ceil(GALLERY_IMAGES.length / perPage));
  const [page, setPage] = useState(0);

  const visible = GALLERY_IMAGES.slice(page * perPage, page * perPage + perPage);

  const goPrev = () => setPage((p) => (p - 1 + pageCount) % pageCount);
  const goNext = () => setPage((p) => (p + 1) % pageCount);

  return (
    <div>
      <div className="flex items-center gap-3">
        {pageCount > 1 && (
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous photos"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-pine/15 bg-white text-pine-dark shadow-sm transition hover:bg-sage"
          >
            <Icon name="chevronLeft" className="h-4 w-4" />
          </button>
        )}

        <div className="flex flex-1 gap-3 overflow-hidden">
          {visible.map((image) => (
            <div
              key={image.src}
              className="h-32 flex-1 overflow-hidden rounded-xl bg-sage sm:h-36"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        {pageCount > 1 && (
          <button
            type="button"
            onClick={goNext}
            aria-label="Next photos"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-pine/15 bg-white text-pine-dark shadow-sm transition hover:bg-sage"
          >
            <Icon name="chevronRight" className="h-4 w-4" />
          </button>
        )}
      </div>

      {pageCount > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setPage(i)}
              aria-label={`Go to page ${i + 1}`}
              className={`h-2 w-2 rounded-full transition ${
                i === page ? "bg-pine-dark" : "bg-pine/20"
              }`}
            />
          ))}
        </div>
      )}

      <div className="mt-5">
        <Link
          href={`/gallery/${GALLERY_FOLDER_SLUG}`}
          className="font-accent text-xs font-semibold uppercase tracking-wide text-pine underline-offset-4 hover:text-pine-dark hover:underline"
        >
          View Full Gallery →
        </Link>
      </div>
    </div>
  );
}

/* ─── Tabs ──────────────────────────────────────────────────────────── */

const TABS = ["Photo Gallery", "Career Highlights", "Community Impact"] as const;
type Tab = (typeof TABS)[number];

function TabList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
          <span className="text-sm leading-6 text-ink-soft">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────── */

export default function FeaturedMemberPage() {
  const [activeTab, setActiveTab] = useState<Tab>("Photo Gallery");

  return (
    <>
      <Navbar />


        <PageHeader
                 eyebrow="Community Spotlight"
                 title="Featured Member"
                 description="Celebrating the inspiring journeys, achievements, and contributions of FJMU graduates making a difference around the world."
               />

      <main className="bg-cream">
        <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <div className="flex flex-col gap-10 lg:flex-row">
            {/* Main column */}
            <div className="flex-1">
              <Reveal>
                <div className="flex flex-col gap-6 sm:flex-row">
                  <div className="h-80 overflow-hidden rounded-2xl bg-sage sm:h-auto sm:w-64 sm:shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={MEMBER.photo}
                      alt={MEMBER.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <h2 className="font-display text-3xl font-semibold text-pine-dark">
                      {MEMBER.name}
                    </h2>
                    <p className="mt-1 text-ink-soft">{MEMBER.classYear}</p>

                    <div className="mt-5 flex flex-col gap-4">
                      {MEMBER.quickFacts.map((fact, i) => (
                        <QuickFact key={i} {...fact} />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="my-8 h-px bg-pine/10" />

                <p className="max-w-3xl text-base leading-7 text-ink-soft">
                  {MEMBER.bio}
                </p>
              </Reveal>

              {/* Tabs */}
              <div className="mt-8 flex flex-wrap gap-3">
                {TABS.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`rounded-lg px-4 py-2.5 font-accent text-xs font-semibold uppercase tracking-wide transition ${
                      activeTab === tab
                        ? "bg-pine-dark text-white"
                        : "bg-sage text-pine-dark hover:bg-sage/70"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="mt-6">
                {activeTab === "Photo Gallery" && <GalleryStrip />}
                {activeTab === "Career Highlights" && <TabList items={CAREER_HIGHLIGHTS} />}
                {activeTab === "Community Impact" && <TabList items={COMMUNITY_IMPACT} />}
              </div>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-6 lg:w-80 lg:shrink-0">
              <Reveal>
                <div className="rounded-2xl border border-pine/10 bg-sage/40 p-6">
                  <div className="flex items-center gap-2">
                    <Icon name="trophy" className="h-5 w-5 text-gold" />
                    <h3 className="font-display text-lg font-semibold text-pine-dark">
                      Key Accomplishments
                    </h3>
                  </div>

                  <div className="mt-4">
                    {MEMBER.accomplishments.map((item, i) => (
                      <AccomplishmentRow key={i} {...item} />
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal>
                <div className="rounded-2xl border border-pine/10 bg-white p-6 shadow-sm">
                  <Icon name="quote" className="h-6 w-6 text-gold" />
                  <p className="mt-3 text-sm italic leading-6 text-ink-soft">
                    {MEMBER.quote}
                  </p>
                  <p className="mt-3 text-right text-sm font-semibold text-pine-dark">
                    — {MEMBER.name}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Nominate CTA */}
        <section className="relative overflow-hidden bg-pine-dark">
          <SealEmblem className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 text-gold-light opacity-[0.08]" />

          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:py-16">
            <Reveal>
              <span className="font-accent text-xs font-semibold uppercase tracking-wide text-gold">
                Know Someone Who Should Be Featured?
              </span>

              <h2 className="mt-2 font-display text-3xl font-semibold text-white sm:text-4xl">
                Nominate a Featured Member
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-cream/80">
                Help us celebrate the women of FJMU. Email us the
                nominee&apos;s name, achievements, and a short bio, and
                we&apos;ll take it from there.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href={`mailto:${NOMINATE_EMAIL}?subject=Featured%20Member%20Nomination`}
                  className="inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 font-accent text-xs font-semibold uppercase tracking-wide text-pine-dark transition hover:bg-gold-light"
                >
                  <Icon name="mail" className="h-4 w-4" />
                  Nominate a Member
                </a>
              </div>

              <p className="mt-5 text-sm text-cream/70">{NOMINATE_EMAIL}</p>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}