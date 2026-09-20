import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const COMMITTEES = [
  {
    number: "01",
    title: "Young Professionals Committee",
    abbreviation: "YPC",
    description:
      "Mentor FJMU graduates pursuing training and careers in North America.",
  },
  {
    number: "02",
    title: "Membership Committee",
    abbreviation: null,
    description:
      "Welcome new members, strengthen connections, and help grow FJMCAANA.",
  },
  {
    number: "03",
    title: "Shelter, Welfare & Disaster Relief Committee",
    abbreviation: "SWDRC",
    description:
      "Support FJMCAANA’s humanitarian initiatives and help raise funds for communities in need.",
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

function CommitteeIcon({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle cx="12" cy="8" r="3" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 19c.5-3.2 2.8-5 7-5s6.5 1.8 7 5"
        />
        <path
          strokeLinecap="round"
          d="M5 8a2.5 2.5 0 0 0-1 4.8M19 8a2.5 2.5 0 0 1 1 4.8"
        />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="10" r="2.5" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.5 19c.5-3.2 2.3-5 5.5-5s5 1.8 5.5 5"
        />
        <path
          strokeLinecap="round"
          d="M14 16c.8-.9 1.8-1.4 3.3-1.4 2 0 3.2 1.2 3.6 3.4"
        />
      </svg>
    );
  }

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
        d="M12 21s7-3.5 7-10V5l-7-2-7 2v6c0 6.5 7 10 7 10Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m9 12 2 2 4-4"
      />
    </svg>
  );
}

export default function GetInvolvedPage() {
  return (
    <>
      <Navbar />

      <PageHeader
        eyebrow="Get Involved"
        title="Join an FJMCAANA Committee"
        description="Get involved. Stay connected. Make an impact."
      />

      <main className="bg-cream">
        {/* Introduction */}
        <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <Reveal>
            <div className="max-w-3xl">
              <span className="font-accent text-xs font-semibold uppercase tracking-[0.18em] text-pine-dark">
                Get Involved
              </span>

              <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-pine-dark sm:text-4xl">
                Connect with fellow alumni and make a difference
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-ink-soft sm:text-lg">
                Connect with fellow alumni and contribute to the FJMCAANA
                community by joining a committee.
              </p>
            </div>
          </Reveal>
        </section>

        {/* Committees */}
        <section className="bg-sage/30">
          <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
            <Reveal>
              <div className="max-w-3xl">
                <span className="font-accent text-xs font-semibold uppercase tracking-[0.18em] text-pine-dark">
                  Our Committees
                </span>

                <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-pine-dark sm:text-4xl">
                  Find a way to contribute
                </h2>

                <p className="mt-4 max-w-2xl text-base leading-7 text-ink-soft sm:text-lg">
                  Our committees provide opportunities to mentor, connect,
                  support our members, and serve communities in need.
                </p>
              </div>
            </Reveal>

            <Stagger className="mt-9 grid gap-5 md:grid-cols-3">
              {COMMITTEES.map((committee, index) => (
                <StaggerItem
                  key={committee.number}
                  interactive
                  className="group h-full"
                >
                  <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-pine/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pine/20 hover:shadow-xl sm:p-7">
                    {/* Background number */}
                    <span
                      aria-hidden="true"
                      className="absolute right-5 top-3 font-display text-6xl font-semibold text-pine/[0.045]"
                    >
                      {committee.number}
                    </span>

                    {/* Icon */}
                    <div
                      className={`relative flex h-14 w-14 items-center justify-center rounded-2xl ${
                        index === 1
                          ? "bg-gold/15 text-pine-dark"
                          : "bg-sage text-pine"
                      }`}
                    >
                      <CommitteeIcon index={index} />
                    </div>

                    {/* Content */}
                    <div className="relative mt-5 flex flex-1 flex-col">
                      <div className="flex items-center gap-2">
                        <span className="font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-gold">
                          Committee
                        </span>

                        {committee.abbreviation && (
                          <>
                            <span className="h-1 w-1 rounded-full bg-gold/60" />
                            <span className="font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-gold">
                              {committee.abbreviation}
                            </span>
                          </>
                        )}
                      </div>

                      <h3 className="mt-3 font-display text-xl font-semibold leading-tight text-pine-dark sm:text-2xl">
                        {committee.title}
                      </h3>

                      <p className="mt-3 flex-1 text-sm leading-6 text-ink-soft">
                        {committee.description}
                      </p>

                      <div className="mt-6 h-px bg-pine/10" />

                     
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-cream">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center sm:py-20">
            <Reveal>
              <span className="font-accent text-xs font-semibold uppercase tracking-[0.18em] text-pine">
                Get Connected
              </span>

              <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-pine-dark sm:text-4xl">
                Ready to get involved?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-ink-soft sm:text-lg">
                Reach out to the FJMCAANA team to learn more about joining a
                committee and contributing to our alumni community.
              </p>

              <div className="mt-8">
                <a
                  href="mailto:team@fjmcaana.org"
                  className="group inline-flex items-center gap-2 rounded-lg bg-pine px-6 py-3 font-accent text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-pine-dark"
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
