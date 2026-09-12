import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";

export default function Leadership() {
  return (
    <section id="about" className="relative overflow-hidden bg-sage">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-gold">President&apos;s Message</span>

        <div className="mt-8 grid gap-8 sm:grid-cols-[220px_1fr] sm:items-start lg:gap-12">
         <Reveal className="relative mx-auto aspect-square w-full max-w-sm flex-none overflow-hidden rounded-2xl border-2 border-gold-light bg-card shadow-sm sm:mx-0 sm:w-56">
  <Image
    src="/images/president.png"
    alt="Dr. Umbreen Chaudhary"
    fill
    sizes="(max-width: 640px) 100vw, 224px"
    className="object-contain p-3"
  />
</Reveal>

          <Reveal className="relative">
            <span
              className="pointer-events-none absolute -left-3 -top-10 select-none font-display text-[120px] italic leading-none text-pine/10"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <p className="relative max-w-5xl font-display text-2xl italic leading-snug text-pine-dark sm:text-3xl">
              Our focus remains on creating opportunities for mentorship, professional growth, and
              supporting our alma mater.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <span className="h-px w-8 bg-rose" />
              <p className="text-sm text-ink-soft">
                Dr. Umbreen Chaudhary — President, FJMCAANA 2025 &amp; 2026, Class of &apos;97
              </p>
            </div>
            <Link
              href="/about/presidents-message"
              className="mt-5 inline-block border-b border-pine/40 text-sm font-semibold text-pine transition-all hover:translate-x-1 hover:border-pine"
            >
              Read the full message <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
