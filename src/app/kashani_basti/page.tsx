import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const IMPACT_STATS = [
  {
    value: "70",
    label: "New Homes Built",
    description: "Homes constructed for families whose houses were destroyed by the floods.",
  },
  {
    value: "70+",
    label: "Homes Rehabilitated",
    description: "Homes repaired and renovated in Kashani Basti and nearby villages.",
  },
  {
    value: "$145K+",
    label: "Raised to Date",
    description: "Funds raised by FJMCAANA for the rehabilitation of its adopted village.",
  },
  {
    value: "$96,545",
    label: "2022–2023 Support",
    description: "Provided toward flood recovery and rehabilitation efforts.",
  },
];

const RELIEF_EFFORTS = [
  {
    number: "01",
    title: "New Homes",
    description:
      "Construction of 70 new homes for families whose houses were destroyed during the devastating 2022 floods.",
  },
  {
    number: "02",
    title: "Home Rehabilitation",
    description:
      "Repair and renovation of 70 additional homes, including homes in nearby villages affected by the disaster.",
  },
  {
    number: "03",
    title: "Primary School",
    description:
      "Repair and renovation of the Kashani Basti Primary School to help restore access to education for local children.",
  },
  {
    number: "04",
    title: "Mosque",
    description:
      "Repair and renovation of the local mosque as part of the broader community rehabilitation effort.",
  },
  {
    number: "05",
    title: "Dispensary & Community Center",
    description:
      "Construction and establishment of a dispensary and community center to provide essential services within the community.",
  },
  {
    number: "06",
    title: "Medical & Relief Camps",
    description:
      "Medical and relief camps were organized to provide immediate assistance to flood-affected families.",
  },
  {
    number: "07",
    title: "Clean Water",
    description:
      "Installation of a clean-water filtration plant to improve access to safe drinking water for the community.",
  },
];

function ImpactIcon() {
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
        d="M3.5 20.5h17M5 20.5V10l7-5 7 5v10.5M8.5 20.5V14h7v6.5"
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

export default function KashaniBastiPage() {
  return (
    <>
      <Navbar />

      <PageHeader
        eyebrow="Our Impact"
        title="Kashani Basti"
        description="From flood relief to long-term community development, FJMCAANA continues to stand with its adopted village."
      />

      <main className="bg-cream">
        {/* Introduction */}
        <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <span className="font-accent text-xs font-semibold uppercase tracking-[0.18em] text-pine-dark">
                  Kashani Basti Flood Relief & Community Development
                </span>

                <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-pine-dark sm:text-4xl">
                  Rebuilding Lives After the 2022 Floods
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-ink-soft sm:text-lg">
                  In 2022, devastating floods displaced communities across
                  Pakistan, destroying homes and disrupting access to basic
                  necessities.
                </p>

                <p className="mt-4 max-w-2xl text-base leading-7 text-ink-soft">
                  Under the leadership of Dr. Fizza Rafiq, President of
                  FJMCAANA, and Vice Chancellor Professor Dr. Khalid Gondal,
                  FJMU was the first medical college to travel outside Lahore
                  to witness firsthand the devastation caused by the floods.
                </p>

                <p className="mt-4 max-w-2xl text-base leading-7 text-ink-soft">
                  During this visit, members of the Kashani Basti community,
                  many of whom had lost their homes, appealed for assistance.
                  Their call for help reached FJMCAANA, and our alumni
                  community responded.
                </p>
              </div>

              {/* Highlight */}
              <div className="relative overflow-hidden rounded-2xl border border-pine/10 bg-sage p-7 sm:p-9">
                <div
                  aria-hidden="true"
                  className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gold/10"
                />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pine text-white">
                    <ImpactIcon />
                  </div>

                  <p className="mt-5 font-accent text-[11px] font-semibold uppercase tracking-[0.18em] text-pine-dark">
                    A Community Rebuilt
                  </p>

                  <h3 className="mt-2 font-display text-2xl font-semibold text-pine-dark">
                    From an emergency response to a lasting commitment
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-ink-soft">
                    What began as a response to the 2022 floods has grown into
                    a long-term commitment to the people of Kashani Basti and
                    surrounding communities.
                  </p>

                  <div className="mt-6 h-px bg-pine/10" />

                  <div className="mt-5 flex items-end gap-3">
                    <span className="font-display text-4xl font-semibold text-pine-dark">
                      $145K+
                    </span>

                    <span className="pb-1 font-accent text-[11px] font-semibold uppercase tracking-[0.12em] text-pine-dark">
                      Raised to date
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Impact Stats */}
        <section className="bg-sage/30">
          <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
            <Reveal>
              <div className="max-w-3xl">
                <span className="font-accent text-xs font-semibold uppercase tracking-[0.18em] text-pine-dark">
                  Our Impact
                </span>

                <h2 className="mt-2 font-display text-3xl font-semibold text-pine-dark sm:text-4xl">
                  Turning Support Into Action
                </h2>

                <p className="mt-4 text-base leading-7 text-ink-soft">
                  The support provided by FJMCAANA members and donors has helped
                  families rebuild their homes, restore community spaces, and
                  regain access to essential services.
                </p>
              </div>
            </Reveal>

            <Stagger className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {IMPACT_STATS.map((stat) => (
                <StaggerItem
                  key={stat.label}
                  interactive
                  className="group relative overflow-hidden rounded-2xl border border-pine/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pine/20 hover:shadow-xl"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gold/10 transition-transform duration-500 group-hover:scale-125"
                  />

                  <div className="relative">
                    <p className="font-display text-4xl font-semibold text-pine-dark">
                      {stat.value}
                    </p>

                    <h3 className="mt-3 font-accent text-xs font-bold uppercase tracking-[0.14em] text-pine">
                      {stat.label}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-ink-soft">
                      {stat.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Rebuilding After Floods */}
        <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <span className="font-accent text-xs font-semibold uppercase tracking-[0.18em] text-pine-dark">
                  2022–2023
                </span>

                <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-pine-dark sm:text-4xl">
                  Rebuilding After the Floods
                </h2>

                <p className="mt-5 text-base leading-7 text-ink-soft">
                  Through the generosity of FJMCAANA members and supporters,
                  $96,545 was provided during 2022–2023 toward flood recovery
                  and rehabilitation efforts.
                </p>

                <div className="mt-6 rounded-2xl border border-gold/20 bg-gold/10 p-6">
                  <p className="font-accent text-[11px] font-semibold uppercase tracking-[0.15em] text-pine-dark">
                    Flood Recovery Support
                  </p>

                  <p className="mt-2 font-display text-3xl font-semibold text-pine-dark">
                    $96,545
                  </p>

                  <p className="mt-2 text-sm leading-6 text-ink-soft">
                    Provided during 2022–2023 for recovery and rehabilitation.
                  </p>
                </div>
              </div>

              <Stagger className="grid gap-4 sm:grid-cols-2">
                {RELIEF_EFFORTS.map((item) => (
                  <StaggerItem
                    key={item.number}
                    interactive
                    className="group rounded-2xl border border-pine/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pine/20 hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <span className="font-accent text-xs font-bold tracking-[0.12em] text-gold">
                        {item.number}
                      </span>

                      <div>
                        <h3 className="font-display text-xl font-semibold text-pine-dark">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-ink-soft">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </Reveal>
        </section>

        {/* More Than Flood Relief */}
        <section className="bg-pine-dark">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
                <div>
                  <span className="font-accent text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                    More Than Flood Relief
                  </span>

                  <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
                    Building a Future Beyond Recovery
                  </h2>

                  <p className="mt-5 text-base leading-7 text-cream/80">
                    What began as an emergency response has grown into a
                    long-term commitment to Kashani Basti. FJMCAANA has to
                    date raised over $145,000 for the rehabilitation of its
                    adopted village.
                  </p>

                  <p className="mt-4 text-base leading-7 text-cream/80">
                    FJMCAANA continues to support its adopted village annually,
                    with an increasing focus on creating sustainable
                    opportunities for the community.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-7 sm:p-9">
                  <p className="font-accent text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                    Looking Ahead
                  </p>

                  <h3 className="mt-3 font-display text-2xl font-semibold text-white">
                    Investing in sustainable community development
                  </h3>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      "Education",
                      "Vocational Development",
                      "Healthcare",
                      "Community Initiatives",
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

        {/* Closing Statement */}
        <section className="bg-cream">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:py-20">
            <Reveal>
              <span className="font-accent text-xs font-semibold uppercase tracking-[0.18em] text-pine">
                Our Ongoing Commitment
              </span>

              <h2 className="mt-2 font-display text-3xl font-semibold text-pine-dark sm:text-4xl">
                Standing With Kashani Basti
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-ink-soft sm:text-lg">
                FJMCAANA's commitment to Kashani Basti goes beyond rebuilding
                what was lost. Together with our members, supporters, and
                partners, we continue working toward a healthier, more
                educated, and more sustainable future for the community.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-2 rounded-lg bg-pine px-6 py-3 font-accent text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-pine-dark"
                >
                  Explore Our Projects
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

