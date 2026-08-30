import Link from "next/link";

export default function Footer() {
  return (
    <footer id="donate" className="bg-pine-dark text-cream">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-8 sm:px-2 py-16 sm:flex-row">
        <p className="text-center font-display text-xl italic text-white sm:text-left sm:text-2xl">Change their world. Change yours.</p>
        <Link href="/donate" className="rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-pine-dark transition hover:bg-gold-light">Donate Now</Link>
      </div>
      <div id="contact" className="border-t border-white/10"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-8 sm:px-2 py-8 text-xs text-cream/70 sm:flex-row"><div>© {new Date().getFullYear()} FJMCAANA</div><a href="mailto:team@fjmcaana.org">team@fjmcaana.org</a></div></div>
    </footer>
  );
}
