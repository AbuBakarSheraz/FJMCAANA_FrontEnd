import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-pine-dark text-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-16 sm:flex-row">
        <p className="text-center font-display text-xl italic text-white sm:text-left sm:text-2xl">Change their world. Change yours.</p>
        <a href="https://www.paypal.com/us/fundraiser/charity/1554217" className="rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-pine-dark transition hover:bg-gold-light" target="_blank" rel="noopener noreferrer">Donate Now</a>
      </div>
      <div className="border-t border-white/10"><div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-center text-xs text-cream/70 sm:flex-row sm:text-left"><div>© {new Date().getFullYear()} FJMCAANA - Fatima Jinnah Medical College Alumnae Association of North America</div><a href="mailto:team@fjmcaana.org">team@fjmcaana.org</a></div></div>
    </footer>
  );
}
