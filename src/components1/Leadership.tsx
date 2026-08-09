export default function Leadership() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-20">
      <span className="font-mono text-xs tracking-widest uppercase text-gold">
        Leadership
      </span>

      <div className="flex flex-col sm:flex-row gap-8 items-start mt-4">
        <div className="w-30 h-38 sm:w-36 sm:h-48 rounded-xl bg-card border-2 border-gold-light flex-none overflow-hidden">
          <img
            src="/images/president.png"
            alt="Dr. Umbreen Chaudhary"
            className="w-full h-full object-cover scale-110 sm:scale-100"
          />
        </div>

        <div>
          <p className="font-display italic text-xl sm:text-2xl text-pine-dark max-w-2xl leading-snug">
            &ldquo;Our focus remains on creating opportunities for mentorship, professional growth,
            and supporting our alma mater.&rdquo;
          </p>

          <p className="text-sm text-ink-soft mt-4">
            Dr. Umbreen Chaudhary — President, FJMCAANA 2025 &amp; 2026, Class &apos;97
          </p>

          <a
            href="#"
            className="inline-block mt-4 text-sm font-semibold text-pine border-b border-pine/40 hover:border-pine"
          >
            Read the full message →
          </a>
        </div>
      </div>
    </section>
  );
}