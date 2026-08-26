import Image from "next/image";
import Link from "next/link";

export default function Leadership() {
  return (
    <section id="about" className="bg-sage animate-fade-in">
    <div className="mx-auto max-w-6xl px-6 py-20">
      <span className="font-mono text-xs uppercase tracking-widest text-gold">President's Message</span>
      <div className="mt-4 flex flex-col items-start gap-8 sm:flex-row">
        <div className="relative h-48 w-36 flex-none overflow-hidden rounded-xl border-2 border-gold-light bg-card animate-scale-in">
          <Image src="/images/president.png" alt="Dr. Umbreen Chaudhary" fill sizes="144px" className="object-cover" />
        </div>
        <div className="animate-slide-in-right">
          <p className="max-w-2xl font-display text-xl italic leading-snug text-pine-dark sm:text-2xl">&ldquo;Our focus remains on creating opportunities for mentorship, professional growth, and supporting our alma mater.&rdquo;</p>
          <p className="mt-4 text-sm text-ink-soft">Dr. Umbreen Chaudhary - President, FJMCAANA 2025 &amp; 2026, Class of &apos;97</p>
          <Link href="/about/presidents-message" className="mt-4 inline-block border-b border-pine/40 text-sm font-semibold text-pine hover:border-pine transition-all hover:translate-x-1">Read the full message <span aria-hidden="true">→</span></Link>
        </div>
      </div>
      </div>
    </section>
  );
}
