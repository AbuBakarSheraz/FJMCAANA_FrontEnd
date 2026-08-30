import Image from "next/image";

export default function Leadership() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-8 sm:px-2 py-20">
      <span className="font-mono text-xs uppercase tracking-widest text-gold">Leadership</span>
      <div className="mt-4 flex flex-col items-start gap-8 sm:flex-row"><div className="relative h-48 w-36 flex-none overflow-hidden rounded-xl border-2 border-gold-light bg-card"><Image src="/images/president.png" alt="Dr. Umbreen Chaudhary" fill sizes="144px" className="object-cover" /></div><div><p className="max-w-2xl font-display text-xl italic leading-snug text-pine-dark sm:text-2xl">&ldquo;Our focus remains on creating opportunities for mentorship, professional growth, and supporting our alma mater.&rdquo;</p><p className="mt-4 text-sm text-ink-soft">Dr. Umbreen Chaudhary - President, FJMCAANA 2025 &amp; 2026, Class of &apos;97</p></div></div>
    </section>
  );
}
