import Link from "next/link";

export default function Hero() {
  return (
    <header className="relative min-h-[600px] overflow-hidden bg-pine-dark text-cream">
      <video className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden" autoPlay muted loop playsInline preload="auto" poster="/videos/hero-poster.jpg" aria-hidden="true">
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-pine-dark/80 via-pine/60 to-pine-dark/90" />
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/10 blur-2xl" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-20">
        <span className="font-mono text-xs uppercase tracking-widest text-gold-light">FJMCAANA</span>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">Sisters in Medicine. Partners in Change.</h1>
        <p className="mt-4 max-w-xl text-lg text-cream/85">Connecting women physicians of Fatima Jinnah Medical University worldwide and channeling that strength into healthcare projects across Pakistan.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/get-involved/membership" className="rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-pine-dark transition hover:bg-gold-light">Become a Member</Link>
          <Link href="/donate" className="rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Support a Cause</Link>
        </div>
      </div>
    </header>
  );
}
