import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const PROJECTS = [
  {
    title: "Cornea Transplant",
    FundsRaised: "$21,900",
  },
  {
    title: "Takmil",
    FundsRaised: "$15,350",
  },
  {
    title: "School Renovation",
    FundsRaised: "$10,450",
  },
  {
    title: "School Meals",
    FundsRaised: "$6,500",
  },
  {
    title: "Food Hamper",
    FundsRaised: "$7,500",
  },
  {
    title: "Kashani Basti",
    FundsRaised: "$6,200",
  },
  {
    title: "Turkey Earthquake",
    FundsRaised: "$4,050",
  },
  {
    title: "SGRH Ramp",
    FundsRaised: "$8,220",
  },
  {
    title: "Winter Drive — Kashani Basti",
    FundsRaised: "$7,285",
  },
];

export default function AnnualProjects2023Page() {
  return (
    <>
      <Navbar />

      <PageHeader
        eyebrow="Annual Projects"
        title="Annual Projects — 2023"
        description="Our 2023 initiatives supported healthcare, education, disaster relief, nutrition, and community welfare across Pakistan and beyond."
      />

      <main className="bg-cream">

        {/* Summary */}
        <section className="mx-auto max-w-7xl px-8 py-8 sm:px-2">
          <Reveal>
            <div className="rounded-2xl bg-pine-dark p-8 shadow-xl sm:p-10">
              <div className="grid gap-8 sm:grid-cols-2">

                <div>
                  <p className="font-accent text-xs font-semibold uppercase tracking-[0.15em] text-gold-light">
                    Projects
                  </p>

                  <p className="mt-2 font-mono text-4xl font-semibold text-white">
                    {PROJECTS.length}
                  </p>

                  <p className="mt-1 text-sm text-cream/70">
                    Annual initiatives
                  </p>
                </div>

                <div>
                  <p className="font-accent text-xs font-semibold uppercase tracking-[0.15em] text-gold-light">
                    Total Funds Raised
                  </p>

<p className="mt-2 font-mono text-3xl font-semibold tracking-tight text-white">
                    $87,455
                  </p>

                  <p className="mt-1 text-sm text-cream/70">
                    Supporting communities through meaningful action
                  </p>
                </div>

              </div>
            </div>
          </Reveal>
        </section>

        {/* Projects */}
        <section className="mx-auto max-w-7xl px-8 py-12 sm:px-2">

          <Reveal>
            <div className="mb-10 flex items-center gap-3">
              <div className="h-1 w-12 rounded-full bg-gold" />

              <h2 className="font-display text-3xl font-extrabold text-pine">
                2023 Projects
              </h2>
            </div>
          </Reveal>

          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {PROJECTS.map((project) => (
              <StaggerItem
                key={project.title}
                interactive
                className="group"
              >
                <div className="relative h-full overflow-hidden rounded-xl border border-pine/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                  {/* Gold accent */}
                  <div className="h-1 w-full bg-gold" />

                  <div className="p-6">

                    <div className="flex items-start justify-between gap-4">

                      <div>
                        <p className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-gold">
                          Annual Project
                        </p>

                        <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-pine-dark">
                          {project.title}
                        </h3>
                      </div>

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage">
                        <span className="text-lg text-pine">
                          +
                        </span>
                      </div>

                    </div>

                    <div className="mt-8 border-t border-pine/10 pt-5">

                      <p className="font-accent text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">
                        Funds Raised
                      </p>

                      <p className="mt-1 font-mono text-2xl font-semibold tracking-tight text-pine">
  {project.FundsRaised}
</p>

                    </div>

                  </div>

                </div>
              </StaggerItem>
            ))}

          </Stagger>

        </section>

        {/* Impact Statement */}
        <section className="mx-auto max-w-7xl px-8 py-16 sm:px-2">

          <Reveal className="rounded-2xl bg-sage p-10 text-center">

            <h2 className="font-display text-3xl font-semibold text-pine-dark">
              A Legacy of Compassion and Action
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
              From supporting life-changing healthcare and education to
              responding to humanitarian crises, the 2023 initiatives reflect
              our commitment to serving communities in need.
            </p>

          </Reveal>

        </section>

      </main>

      <Footer />
    </>
  );
}

