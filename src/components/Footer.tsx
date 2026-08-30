import SealEmblem from "./SealEmblem";

export default function Footer() {
  return (
    <footer id="contact" className="grain relative bg-pine-dark text-cream">
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-8 py-16 sm:px-2 sm:flex-row">
        <div className="flex items-center gap-4">
          <SealEmblem className="hidden h-10 w-10 text-gold-light sm:block" />
          <p className="text-center font-display text-xl italic text-white sm:text-left sm:text-2xl">
            Change their world. Change yours.
          </p>
        </div>
        <a
          href="https://www.paypal.com/us/fundraiser/charity/1554217"
          className="rounded-full bg-gold px-7 py-3 text-sm font-semibold text-pine-dark transition hover:bg-gold-light"
          target="_blank"
          rel="noopener noreferrer"
        >
          Donate Now
        </a>
      </div>
      <div className="relative z-10 border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-8 sm:px-2 py-8 text-center text-xs text-cream/70 sm:flex-row sm:text-left">
          <div>© {new Date().getFullYear()} FJMCAANA — Fatima Jinnah Medical College Alumni Association of North America</div>
          <a href="mailto:team@fjmcaana.org" className="hover:text-cream">team@fjmcaana.org</a>
        </div>
      </div>
    </footer>
  );
}