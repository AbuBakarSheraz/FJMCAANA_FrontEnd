export default function HeritageBadge() {
  return (
    <div className="pointer-events-none fixed bottom-20 right-3 z-40 sm:right-4 md:bottom-6 md:right-6">
      <div className="pointer-events-auto flex items-center gap-2 rounded-full border border-gold/50 bg-pine-dark/95 px-4 py-2 shadow-lg backdrop-blur">
        <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
        <span className="whitespace-nowrap font-accent text-[11px] font-semibold uppercase tracking-[0.1em] text-cream/90">
          Est. 1978
        </span>
      </div>
    </div>
  );
}
