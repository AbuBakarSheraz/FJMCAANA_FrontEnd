export default function Hero() {
  return (
    <header className="relative overflow-hidden min-h-[600px] text-cream">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-burgundy-dark/1" />

      {/* Optional burgundy gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-burgundy-dark/80 via-burgundy/60 to-burgundy-dark/90" />

      {/* Decorative circle */}
      <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-gold/10 blur-2xl" />

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-24 relative z-10">
        <span className="font-mono text-xs tracking-widest uppercase text-gold-light">
          FJMCAANA
        </span>

        <h1 className="font-display font-semibold text-4xl sm:text-5xl leading-tight max-w-2xl mt-3 text-white">
          Sisters in Medicine. Partners in Change.
        </h1>

        <p className="max-w-xl mt-4 text-[#EBD9DC] text-lg">
          Connecting women physicians of Fatima Jinnah Medical University
          worldwide — and channeling that strength into healthcare projects
          across Pakistan.
        </p>

        <div className="flex flex-wrap gap-3 mt-8">
          <a
            href="#involved"
            className="bg-gold text-burgundy-dark font-semibold text-sm px-6 py-3 rounded-lg hover:bg-gold-light transition"
          >
            Become a Member
          </a>

          <a
            href="#donate"
            className="border border-white/40 text-white font-semibold text-sm px-6 py-3 rounded-lg hover:bg-white/10 transition"
          >
            Support a Cause
          </a>
        </div>
      </div>
    </header>
  );
}