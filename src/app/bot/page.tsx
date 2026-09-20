import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import {
  Reveal,
  Stagger,
  StaggerItem,
} from "@/components/motion/Reveal";

const TRUSTEES = [
  {
    number: "01",
    name: "Dr. Shaheen Mian",
    role: "Past President, FJMCAANA",
  },
  {
    number: "02",
    name: "Dr. Hibba Haider",
    role: "Past President, FJMCAANA",
  },
  {
    number: "03",
    name: "Dr. Shagufta Jabeen",
    role: "Past President, FJMCAANA",
  },
  {
    number: "04",
    name: "Dr. Nighat Mehdi",
    role: "Past President, FJMCAANA",
  },
  {
    number: "05",
    name: "Dr. Amna Buttar",
    role: "Past President, FJMCAANA",
  },
  {
    number: "06",
    name: "Dr. Fizza Rafiq",
    role: "Past President, FJMCAANA",
  },
];

function TrusteeIcon() {
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
        d="M4 20h16"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 20V9l6-4 6 4v11"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 20v-6h6v6"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 9h16"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4"
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

export default function BoardOfTrusteesPage() {
  return (
    <>
      <Navbar />

      <PageHeader
        eyebrow="Board of Trustees • 2026"
        title="Meet Our Board of Trustees"
        description="A legacy of leadership, service, and continued commitment to the FJMCAANA community."
      />

      <main className="bg-cream">
        {/* Introduction */}
        <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
              <div>
                <span className="font-accent text-xs font-semibold uppercase tracking-[0.18em] text-pine-dark">
                  A Legacy of Leadership
                </span>

                <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-pine-dark sm:text-4xl">
                  Experience that guides our future
                </h2>
              </div>

              <div className="space-y-5 text-base leading-7 text-ink-soft sm:text-lg">
                <p>
                  The FJMCAANA Board of Trustees (BOT) is composed of former
                  Presidents of the Fatima Jinnah Medical College Alumni
                  Association of North America whose leadership and service
                  have helped shape the organization over the years.
                </p>

                <p>
                  Drawing on their experience as past Presidents, our Trustees
                  provide institutional knowledge, continuity, and guidance
                  while supporting FJMCAANA&apos;s mission and future growth.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Trustees */}
        <section className="bg-sage/30">
          <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
            <Reveal>
              <div className="max-w-3xl">
                <span className="font-accent text-xs font-semibold uppercase tracking-[0.18em] text-pine-dark">
                  Leadership
                </span>

                <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-pine-dark sm:text-4xl">
                  Our Board of Trustees
                </h2>

                <p className="mt-4 max-w-2xl text-base leading-7 text-ink-soft sm:text-lg">
                  Former Presidents whose experience and continued service
                  provide guidance and continuity for FJMCAANA.
                </p>
              </div>
            </Reveal>

            <Stagger className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {TRUSTEES.map((trustee) => (
                <StaggerItem
                  key={trustee.number}
                  interactive
                  className="group h-full"
                >
                  <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-pine/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pine/20 hover:shadow-xl sm:p-7">
                    {/* Background number */}
                    <span
                      aria-hidden="true"
                      className="absolute right-5 top-2 font-display text-6xl font-semibold text-pine/[0.045]"
                    >
                      {trustee.number}
                    </span>

                    {/* Icon */}
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-sage text-pine">
                      <TrusteeIcon />
                    </div>

                    {/* Content */}
                    <div className="relative mt-6 flex flex-1 flex-col">
                      <span className="font-accent text-[10px] font-semibold uppercase tracking-[0.16em] text-gold">
                        Board of Trustees
                      </span>

                      <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-pine-dark">
                        {trustee.name}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-ink-soft">
                        {trustee.role}
                      </p>

                      <div className="mt-6 h-px bg-pine/10" />

                     </div>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="bg-pine-dark">
          <div className="mx-auto max-w-5xl px-5 py-14 text-center sm:px-8 sm:py-20">
            <Reveal>
              <span className="font-accent text-xs font-semibold uppercase tracking-[0.18em] text-gold-light">
                Experience. Continuity. Commitment.
              </span>

              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
                A legacy of service that continues forward
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-cream/80 sm:text-lg">
                Our Board of Trustees represents a legacy of service to
                FJMCAANA and the broader FJMU alumni community. Their continued
                involvement helps preserve our history, strengthen our
                organization, and support the generations of alumni who will
                lead FJMCAANA into the future.
              </p>

              <div className="mx-auto mt-8 h-px w-16 bg-gold/60" />
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}