
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

function NetworkIcon() {
  return (
    <svg
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="10" r="2.5" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.5 19c.6-3.1 2.5-5 5.5-5s4.9 1.9 5.5 5M14.5 15c.7-.9 1.7-1.4 3-1.4 1.8 0 3.1 1.1 3.5 3.4"
      />
    </svg>
  );
}

function ChapterIcon() {
  return (
    <svg
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 20V8.5L12 4l8 4.5V20"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 20v-5h8v5M8 10h.01M12 10h.01M16 10h.01"
      />
    </svg>
  );
}

function EventsIcon() {
  return (
    <svg
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 3v4M16 3v4M4 9h16M8 13h3M8 16h5"
      />
    </svg>
  );
}

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

const NETWORKING_OPTIONS = [
  {
    icon: ChapterIcon,
    eyebrow: "Grow Our Network",
    title: "Establish a Chapter",
    description:
      "Are you an FJMU graduate interested in establishing a FJMCAANA chapter in your state?",
    body: "We welcome alumni who want to bring FJMU graduates together locally and strengthen our growing network across North America.",
  },
  {
    icon: EventsIcon,
    eyebrow: "Stay Connected",
    title: "Join Us at FJMCAANA Events",
    description:
      "FJMCAANA hosts events throughout the year, often in conjunction with APPNA conferences and gatherings.",
    body: "One of our signature traditions is the Annual FJMCAANA Dinner, held during Alumni Night at the APPNA Summer Convention. It is an opportunity to reconnect with classmates, meet fellow FJMU graduates, and strengthen ties within our alumni community.",
  },
  {
    icon: NetworkIcon,
    eyebrow: "Find Your Community",
    title: "Connect With Fellow FJMU Alumni",
    description:
      "Living in the United States or Canada and looking to connect with other FJMU graduates?",
    body: "Join our FJMCAANA alumni group chat to stay connected with fellow graduates, hear about upcoming events, and become part of our growing community.",
  },
];

export default function NetworkingPage() {
  return (
    <>
      <Navbar />

      <PageHeader
        eyebrow="Alumni Network"
        title="Networking"
        description="Your FJMU connection continues beyond graduation. Stay connected, build relationships, and grow our alumni community across North America."
      />

      <main className="bg-cream">
        {/* Introduction */}
        <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <span className="font-accent text-xs font-semibold uppercase tracking-[0.18em] text-pine-dark">
                  FJMCAANA Community
                </span>

                <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-pine-dark sm:text-4xl">
                  Your FJMU Connection Continues Beyond Graduation
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-ink-soft sm:text-lg">
                  Whether you’re looking to connect with fellow alumni, become
                  more involved with FJMCAANA, or help build a stronger alumni
                  network in your area, we’d love to hear from you.
                </p>

                <p className="mt-4 max-w-2xl text-base leading-7 text-ink-soft">
                  FJMCAANA brings together FJMU graduates across the United
                  States and Canada, creating opportunities to reconnect,
                  collaborate, and continue the friendships and traditions that
                  began at Fatima Jinnah Medical University.
                </p>
              </div>

              {/* Community Highlight */}
              <div className="relative overflow-hidden rounded-2xl border border-pine/10 bg-sage p-7 sm:p-9">
                <div
                  aria-hidden="true"
                  className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gold/10"
                />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pine text-white">
                    <NetworkIcon />
                  </div>

                  <p className="mt-5 font-accent text-[11px] font-semibold uppercase tracking-[0.18em] text-pine-dark">
                    Stronger Together
                  </p>

                  <h3 className="mt-2 font-display text-2xl font-semibold text-pine-dark">
                    One Alumni Community
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-ink-soft">
                    From local chapters to annual gatherings and online
                    connections, every FJMU graduate has a place in our growing
                    FJMCAANA community.
                  </p>

                  <div className="mt-6 h-px bg-pine/10" />

                  <p className="mt-5 font-accent text-[11px] font-semibold uppercase tracking-[0.15em] text-pine-dark">
                    Connect • Participate • Belong
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Networking Options */}
        <section className="bg-sage/30">
          <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
            <Reveal>
              <div className="max-w-3xl">
                <span className="font-accent text-xs font-semibold uppercase tracking-[0.18em] text-pine-dark">
                  Get Connected
                </span>

                <h2 className="mt-2 font-display text-3xl font-semibold text-pine-dark sm:text-4xl">
                  Find Your Place in Our Network
                </h2>

                <p className="mt-4 text-base leading-7 text-ink-soft">
                  There are many ways to stay connected with FJMU graduates and
                  become part of the FJMCAANA community.
                </p>
              </div>
            </Reveal>

            <Stagger className="mt-9 grid gap-5 lg:grid-cols-3">
              {NETWORKING_OPTIONS.map((option) => {
                const Icon = option.icon;

                return (
                  <StaggerItem
                    key={option.title}
                    interactive
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-pine/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pine/20 hover:shadow-xl sm:p-7"
                  >
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gold/10 transition-transform duration-500 group-hover:scale-125"
                    />

                    <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-sage text-pine">
                      <Icon />
                    </div>

                    <div className="relative mt-6 flex flex-1 flex-col">
                      <p className="font-accent text-[11px] font-semibold uppercase tracking-[0.18em] text-pine">
                        {option.eyebrow}
                      </p>

                      <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-pine-dark">
                        {option.title}
                      </h3>

                      <p className="mt-4 text-sm font-medium leading-6 text-pine-dark">
                        {option.description}
                      </p>

                      <p className="mt-3 flex-1 text-sm leading-6 text-ink-soft">
                        {option.body}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </section>

        {/* Establish a Chapter */}
        <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="relative overflow-hidden rounded-2xl border border-pine/10 bg-sage p-7 sm:p-9">
                <div
                  aria-hidden="true"
                  className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-gold/10"
                />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pine text-white">
                    <ChapterIcon />
                  </div>

                  <p className="mt-5 font-accent text-[11px] font-semibold uppercase tracking-[0.18em] text-pine-dark">
                    Build Locally
                  </p>

                  <h3 className="mt-2 font-display text-2xl font-semibold text-pine-dark">
                    committees
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-ink-soft">
                   
Connect with fellow alumni and contribute to the FJMCAANA community by joining a committee.
                  </p>
                </div>
              </div>

              <div>
                <span className="font-accent text-xs font-semibold uppercase tracking-[0.18em] text-pine-dark">
                  Establish a Chapter
                </span>

                <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-pine-dark sm:text-4xl">
                  Help Strengthen Our Growing Network
                </h2>

                <p className="mt-5 text-base leading-7 text-ink-soft">
                  Are you an FJMU graduate interested in establishing a
                  FJMCAANA chapter in your state?
                </p>

                <p className="mt-4 text-base leading-7 text-ink-soft">
                  We welcome alumni who want to bring FJMU graduates together
                  locally and strengthen our growing network across North
                  America.
                </p>

                <a
                  href="mailto:team@fjmcaana.org"
                  className="group mt-7 inline-flex items-center gap-2 rounded-lg bg-pine px-6 py-3 font-accent text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-pine-dark"
                >
                  Email Us
                  <ArrowIcon />
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Events */}
        <section className="bg-sage/30">
          <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
            <Reveal>
              <div className="mx-auto max-w-4xl text-center">
                <span className="font-accent text-xs font-semibold uppercase tracking-[0.18em] text-pine-dark">
                  FJMCAANA Events
                </span>

                <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-pine-dark sm:text-4xl">
                  Reconnect. Celebrate. Belong.
                </h2>

                <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-ink-soft sm:text-lg">
                  FJMCAANA hosts events throughout the year, often in
                  conjunction with APPNA conferences and gatherings.
                </p>
              </div>

              <div className="mx-auto mt-9 max-w-4xl rounded-2xl border border-pine/10 bg-white p-7 shadow-sm sm:p-9">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sage text-pine">
                    <EventsIcon />
                  </div>

                  <div>
                    <p className="font-accent text-[11px] font-semibold uppercase tracking-[0.18em] text-pine">
                      A Signature Tradition
                    </p>

                    <h3 className="mt-2 font-display text-2xl font-semibold text-pine-dark">
                      Annual FJMCAANA Dinner
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-ink-soft sm:text-base">
                      Held during Alumni Night at the APPNA Summer Convention,
                      the Annual FJMCAANA Dinner is an opportunity to reconnect
                      with classmates, meet fellow FJMU graduates, and
                      strengthen ties within our alumni community.
                    </p>

                    <p className="mt-4 font-display text-xl italic text-pine-dark">
                      Come find us! We would love to see you there.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Alumni Group */}
        <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <span className="font-accent text-xs font-semibold uppercase tracking-[0.18em] text-pine-dark">
                Stay Connected
              </span>

              <h2 className="mt-2 font-display text-3xl font-semibold text-pine-dark sm:text-4xl">
                Connect With Fellow FJMU Alumni
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-ink-soft sm:text-lg">
                Living in the United States or Canada and looking to connect
                with other FJMU graduates?
              </p>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-ink-soft">
                Join our FJMCAANA alumni group chat to stay connected with
                fellow graduates, hear about upcoming events, and become part
                of our growing community.
              </p>

              <div className="mt-8 rounded-2xl border border-pine/10 bg-sage p-7 sm:p-9">
                <p className="text-sm leading-6 text-ink-soft">
                  Email us and we’ll be happy to add you to the FJMCAANA alumni
                  group chat.
                </p>

                <a
                  href="mailto:team@fjmcaana.org"
                  className="group mt-5 inline-flex items-center gap-2 font-accent text-xs font-semibold uppercase tracking-[0.12em] text-pine-dark transition hover:text-pine"
                >
                  team@fjmcaana.org
                  <ArrowIcon />
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        {/* CTA */}
        <section className="bg-pine-dark">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:py-16 lg:py-20">
            <Reveal>
              <span className="font-accent text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                Join Our Community
              </span>

              <h2 className="mt-2 font-display text-3xl font-semibold text-white sm:text-4xl">
                Stay Connected With FJMCAANA
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-cream/80">
                Whether you want to become a member, connect with alumni, or
                get involved in your local community, there is a place for you
                in the FJMCAANA network.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/membership"
                  className="inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 font-accent text-xs font-semibold uppercase tracking-[0.12em] text-pine-dark transition hover:bg-gold-light"
                >
                  Join Membership
                  <ArrowIcon />
                </Link>

                <a
                  href="mailto:team@fjmcaana.org"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-6 py-3 font-accent text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:border-white hover:bg-white/10"
                >
                  Email Us
                  <ArrowIcon />
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
