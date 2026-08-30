export default function HeritageBadge({ since = 1978 }: { since?: number }) {
  const years = new Date().getFullYear() - since;

  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-40 sm:bottom-6 sm:right-6">
      <div className="pointer-events-auto flex items-center gap-2 rounded-full border border-gold/50 bg-pine-dark/95 px-4 py-2 shadow-lg backdrop-blur">
        <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
        <span className="whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.1em] text-cream/90">
          Serving for {years} years
        </span>
      </div>
    </div>
  );
}