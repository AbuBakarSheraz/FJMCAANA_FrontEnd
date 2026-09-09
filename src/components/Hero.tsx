import Link from "next/link";

export default function Hero() {
  return (
    <header className="relative min-h-[480px] overflow-hidden bg-pine-dark text-cream sm:min-h-[420px] md:min-h-[580px]">
      <video className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden" autoPlay muted loop playsInline preload="auto" aria-hidden="true">
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-pine-dark/80 via-pine/60 to-pine-dark/90" />
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/10 blur-2xl" />
      <div className="relative z-10 mx-auto max-w-7xl px-8 pb-16 pt-14 md:px-4 md:py-4 sm:px-2 sm:pb-12 sm:pt-10">
       <span className="font-mono text-xs font-bold uppercase tracking-widest text-gold-light animate-fade-in">
  Welcome to FJMCAANA
</span>
        <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-cream/60">
          Fatima Jinnah Medical College Alumni Association of North America
        </p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold leading-tight text-white sm:text-6xl animate-slide-in-left">
          Connect.
          <br />
          Empower.
          <br />
          Elevate.
        </h1>
        <div className="mt-6 h-px w-24 bg-gold/50" />
        <p className="mt-6 max-w-xl text-lg text-cream/85 animate-slide-in-right">A community of FJMU physicians united by a shared legacy. Empowering one another to lead, serve, and create lasting impact across generations in the US & Canada.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/get-involved/membership" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-pine-dark transition hover:bg-gold-light">
            Join Membership
            <span aria-hidden="true">→</span>
          </Link>
          <Link href="/loan" className="rounded-lg border-2 border-gold bg-gold/10 px-6 py-3 text-sm font-semibold text-gold-light transition hover:bg-gold hover:text-pine-dark">Postgraduate Loans</Link>
          <Link href="/donate" className="rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Support a Cause</Link>
        </div>
      </div>
    </header>
  );
}