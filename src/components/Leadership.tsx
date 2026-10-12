
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";

export default function Leadership() {
  return (
    <section id="about" className="relative overflow-hidden bg-sage">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-14 lg:py-20">

        <span className="font-accent text-xs font-semibold uppercase tracking-[0.18em] text-pine-dark">
          President&apos;s Message
        </span>

        <div
          className="
            mt-8
            grid
            gap-8
            sm:grid-cols-[260px_1fr]
            sm:items-start
            sm:gap-10
            lg:grid-cols-[320px_1fr]
            lg:gap-16
            xl:grid-cols-[360px_1fr]
            xl:gap-20
          "
        >

          {/* President Image */}
        

          {/* Message */}
          <Reveal className="relative pt-2 lg:pt-4">

            <span
              className="
                pointer-events-none
                absolute
                -left-3
                -top-8
                select-none
                font-display
                text-8xl
                italic
                leading-none
                text-pine/10
                sm:-left-4
                sm:-top-10
                sm:text-9xl
              "
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <p
              className="
                relative
                max-w-3xl
                font-display
                text-2xl
                italic
                leading-snug
                text-pine-dark
                sm:text-3xl
                lg:text-[2rem]
                xl:text-[2.15rem]
              "
            >
              Our focus remains on creating opportunities for mentorship,
              professional growth, and supporting our alma mater.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />

              <p className="text-sm leading-relaxed text-ink-soft">
                Dr. Umbreen Chaudhary — President, FJMCAANA 2025 &amp; 2026,
                Class of &apos;97
              </p>
            </div>

            <Link
              href="/about/presidents-message"
              className="
                mt-5
                inline-block
                border-b
                border-pine/40
                font-accent
                text-sm
                font-semibold
                uppercase
                tracking-[0.1em]
                text-pine
                transition-all
                hover:translate-x-1
                hover:border-pine
              "
            >
              Read the full message{" "}
              <span aria-hidden="true">→</span>
            </Link>

          </Reveal>
        </div>
      </div>
    </section>
  );
}

