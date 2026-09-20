import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const ABOUT_CARDS = [
  {
    number: "01",
    title: "Mission",
    description:
      "Learn about FJMCAANA's goals, commitments, and the ways we support our alma mater and communities.",
    href: "/about/mission",
  },
  {
    number: "02",
    title: "President's Message",
    description:
      "Read a message from the current president and learn about the association's vision and priorities.",
    href: "/about/presidents-message",
  },
  {
    number: "03",
    title: "Executive Committee",
    description:
      "Meet the physicians and alumni serving on the current FJMCAANA leadership team.",
    href: "/about/executive-committee",
  },
  {
    number: "04",
    title: "Board of Trustees",
    description:
      "The FJMCAANA Board of Trustees (BOT) is composed of former Presidents of the FJMCAANA whose leadership and service have helped shape the organization over the years.",
    href: "/bot",
  },
  {
    number: "05",
    title: "Constitution & Bylaws",
    description:
      "Explore the governing principles, structure, membership, and responsibilities of the association.",
    href: "/about/constitution-bylaws",
  },
  {
    number: "06",
    title: "Alumni Presidents",
    description:
      "Recognize the alumni leaders who have helped guide FJMCAANA throughout its history.",
    href: "/about/alumni-presidents",
  },
];

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12h14M13 6l6 6-6 6"
      />
    </svg>
  );
}

function NetworkIcon() {
  return (
    <svg
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle cx="12" cy="5" r="2.5" />
      <circle cx="5" cy="18" r="2.5" />
      <circle cx="19" cy="18" r="2.5" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 7.5v4M9.8 13.2 7 16M14.2 13.2 17 16M7.5 18h9"
      />
    </svg>
  );
}

function EducationIcon() {
  return (
    <svg
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m3 9 9-5 9 5-9 5-9-5Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 11.5V16c2.2 1.7 4 2.5 6 2.5s3.8-.8 6-2.5v-4.5"
      />
      <path strokeLinecap="round" d="M21 10v5" />
    </svg>
  );
}

function CommunityIcon() {
  return (
    <svg
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 19c0-2.2-1.8-4-4-4s-4 1.8-4 4"
      />
      <circle cx="12" cy="9" r="3" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 17.5c-1.7-.5-3-2-3-3.8a4 4 0 0 1 6.2-3.3M19 17.5c1.7-.5 3-2 3-3.8a4 4 0 0 0-6.2-3.3"
      />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <PageHeader
        eyebrow="About FJMCAANA"
        title="Connecting Our Alumni. Serving Our Communities."
        description="Connecting Fatima Jinnah graduates. Supporting our alma mater. Serving our communities."
      />

      <main className="bg-cream">
        {/* Introduction */}
        <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <span className="font-accent text-xs font-semibold uppercase tracking-[0.18em] text-pine-dark">
                  Who We Are
                </span>

                <h2 className="mt-2 max-w-3xl font-display text-3xl font-semibold leading-tight text-pine-dark sm:text-4xl">
                  A lifelong connection to our alma mater and one another
                </h2>

                <div className="mt-6 max-w-3xl space-y-4 text-base leading-7 text-ink-soft sm:text-lg">
                  <p>
                    The Fatima Jinnah Medical College Alumni Association of
                    North America (FJMCAANA) brings together graduates of Fatima
                    Jinnah Medical University (previously college) who live,
                    train, and practice across North America.
                  </p>

                  <p>
                    As a not-for-profit organization, FJMCAANA is dedicated to
                    strengthening the lifelong connection between our alumni,
                    our alma mater, and the communities we serve.
                  </p>

                  <p>
                    For nearly five decades, FJMCAANA has fostered a network
                    built on education, mentorship, service, philanthropy, and
                    professional collaboration.
                  </p>
                </div>
              </div>

              {/* Highlight card */}
              <div className="relative overflow-hidden rounded-2xl border border-pine/10 bg-sage p-7 sm:p-9">
                <div
                  aria-hidden="true"
                  className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gold/10"
                />

                <div
                  aria-hidden="true"
                  className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-pine/5"
                />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pine text-white">
                    <NetworkIcon />
                  </div>

                  <p className="mt-5 font-accent text-[11px] font-semibold uppercase tracking-[0.18em] text-pine-dark">
                    Nearly Five Decades
                  </p>

                  <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-pine-dark">
                    A community connected by medicine, service, and friendship
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-ink-soft">
                    From supporting students and graduates to strengthening
                    medical education and contributing to humanitarian work,
                    our alumni continue to build on a shared legacy.
                  </p>

                  <div className="mt-6 h-px bg-pine/10" />

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    <div>
                      <p className="font-display text-2xl font-semibold text-pine-dark">
                        50
                      </p>
                      <p className="mt-1 font-accent text-[10px] font-semibold uppercase tracking-[0.1em] text-pine-dark">
                        Years
                      </p>
                    </div>

                    <div>
                      <p className="font-display text-2xl font-semibold text-pine-dark">
                        1
                      </p>
                      <p className="mt-1 font-accent text-[10px] font-semibold uppercase tracking-[0.1em] text-pine-dark">
                        Community
                      </p>
                    </div>

                    <div>
                      <p className="font-display text-2xl font-semibold text-pine-dark">
                        ∞
                      </p>
                      <p className="mt-1 font-accent text-[10px] font-semibold uppercase tracking-[0.1em] text-pine-dark">
                        Connections
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Our Work */}
        <section className="bg-sage/30">
          <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
            <Reveal>
              <div className="max-w-3xl">
                <span className="font-accent text-xs font-semibold uppercase tracking-[0.18em] text-pine-dark">
                  What We Do
                </span>

                <h2 className="mt-2 font-display text-3xl font-semibold text-pine-dark sm:text-4xl">
                  Turning our shared legacy into meaningful action
                </h2>

                <p className="mt-4 text-base leading-7 text-ink-soft sm:text-lg">
                  Through the collective efforts of our alumni, FJMCAANA
                  supports initiatives that advance medical education, promote
                  research, assist students and graduates, and contribute to
                  meaningful humanitarian and charitable work in Pakistan and
                  North America.
                </p>
              </div>
            </Reveal>

            <Stagger className="mt-9 grid gap-5 md:grid-cols-3">
              <StaggerItem
                interactive
                className="group rounded-2xl border border-pine/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pine/20 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sage text-pine">
                  <EducationIcon />
                </div>

                <h3 className="mt-5 font-display text-xl font-semibold text-pine-dark">
                  Education & Research
                </h3>

                <p className="mt-3 text-sm leading-6 text-ink-soft">
                  Supporting medical education, research, professional
                  development, and opportunities that strengthen the future of
                  medicine.
                </p>
              </StaggerItem>

              <StaggerItem
                interactive
                className="group rounded-2xl border border-pine/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pine/20 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/15 text-pine-dark">
                  <NetworkIcon />
                </div>

                <h3 className="mt-5 font-display text-xl font-semibold text-pine-dark">
                  Mentorship & Collaboration
                </h3>

                <p className="mt-3 text-sm leading-6 text-ink-soft">
                  Connecting alumni across generations and creating
                  opportunities for mentorship, professional collaboration, and
                  lifelong relationships.
                </p>
              </StaggerItem>

              <StaggerItem
                interactive
                className="group rounded-2xl border border-pine/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pine/20 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sage text-pine">
                  <CommunityIcon />
                </div>

                <h3 className="mt-5 font-display text-xl font-semibold text-pine-dark">
                  Service & Philanthropy
                </h3>

                <p className="mt-3 text-sm leading-6 text-ink-soft">
                  Supporting humanitarian, charitable, and community initiatives
                  that make a meaningful difference in Pakistan and North
                  America.
                </p>
              </StaggerItem>
            </Stagger>
          </div>
        </section>

        {/* Our Story */}
        <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
              <div>
                <span className="font-accent text-xs font-semibold uppercase tracking-[0.18em] text-pine-dark">
                  Our Story
                </span>

                <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-pine-dark sm:text-4xl">
                  Rooted in FJMU, connected across North America
                </h2>
              </div>

              <div className="space-y-5 text-base leading-7 text-ink-soft sm:text-lg">
                <p>
                  FJMCAANA brings together women physicians who share a common
                  educational heritage and a commitment to supporting one
                  another. Our alumni network extends across North America,
                  creating a community where experiences, knowledge, and
                  opportunities can be shared.
                </p>

                <p>
                  Our connection to Fatima Jinnah Medical University goes beyond
                  the years spent in medical school. It is a continuing
                  relationship with our alma mater, our fellow graduates, and
                  the communities that benefit from the work of our alumni.
                </p>

                <p>
                  Today, FJMCAANA continues this tradition through educational
                  initiatives, mentorship, professional collaboration,
                  philanthropy, and service.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Areas of Focus */}
        <section className="bg-pine-dark">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
                <div>
                  <span className="font-accent text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                    Our Commitment
                  </span>

                  <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
                    Supporting our alma mater. Serving our communities.
                  </h2>

                  <p className="mt-5 text-base leading-7 text-cream/80 sm:text-lg">
                    Through the collective efforts of our alumni, FJMCAANA
                    continues to support initiatives that create opportunities
                    for students, graduates, physicians, and communities.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-7 sm:p-9">
                  <p className="font-accent text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                    Areas of Focus
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      "Medical Education",
                      "Research",
                      "Student Support",
                      "Graduate Support",
                      "Mentorship",
                      "Professional Collaboration",
                      "Humanitarian Work",
                      "Community Service",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                      >
                        <span className="font-accent text-xs font-semibold uppercase tracking-[0.1em] text-cream/90">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Explore */}
        <section className="bg-cream">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
            <Reveal>
              <div className="max-w-3xl">
                <span className="font-accent text-xs font-semibold uppercase tracking-[0.18em] text-pine">
                  Learn More
                </span>

                <h2 className="mt-2 font-display text-3xl font-semibold text-pine-dark sm:text-4xl">
                  Discover FJMCAANA
                </h2>

                <p className="mt-4 text-base leading-7 text-ink-soft sm:text-lg">
                  Explore our mission, leadership, history, governance, and the
                  people who continue to shape our alumni community.
                </p>
              </div>
            </Reveal>

            <Stagger className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {ABOUT_CARDS.map((card) => (
                <StaggerItem
                  key={card.number}
                  interactive
                  className="group h-full"
                >
                  <Link
                    href={card.href}
                    className="flex h-full flex-col rounded-2xl border border-pine/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pine/20 hover:shadow-xl"
                  >
                    <span className="font-accent text-xs font-bold tracking-[0.12em] text-gold">
                      {card.number}
                    </span>

                    <h3 className="mt-3 font-display text-xl font-semibold text-pine-dark">
                      {card.title}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-6 text-ink-soft">
                      {card.description}
                    </p>

                    <div className="mt-5 flex items-center gap-2 font-accent text-xs font-semibold uppercase tracking-[0.12em] text-pine">
                      Explore
                      <ArrowIcon />
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-sage/30">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:py-20">
            <Reveal>
              <span className="font-accent text-xs font-semibold uppercase tracking-[0.18em] text-pine">
                Our Community
              </span>

              <h2 className="mt-2 font-display text-3xl font-semibold text-pine-dark sm:text-4xl">
                Connected by our past. Inspired by our future.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-ink-soft sm:text-lg">
                FJMCAANA is a community of graduates united by a shared
                heritage, a commitment to medicine, and a desire to make a
                positive difference.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/about/mission"
                  className="group inline-flex items-center gap-2 rounded-lg bg-pine px-6 py-3 font-accent text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-pine-dark"
                >
                  Our Mission
                  <ArrowIcon />
                </Link>

                <Link
                  href="/contact"
                  className="rounded-lg border border-pine/30 px-6 py-3 font-accent text-xs font-semibold uppercase tracking-[0.12em] text-pine-dark transition hover:border-pine hover:bg-pine/5"
                >
                  Contact Us
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}