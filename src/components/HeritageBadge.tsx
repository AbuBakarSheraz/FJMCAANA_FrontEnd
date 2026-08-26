export default function HeritageBadge() {
  return (
    <div className="fixed bottom-6 right-6 z-40 animate-fade-in">
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/30 to-gold-light/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
        <div className="relative bg-pine-dark border-2 border-gold rounded-full p-6 shadow-xl hover:scale-105 transition-transform duration-300">
          <div className="flex flex-col items-center justify-center text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-gold-light">Since</span>
            <span className="font-display text-4xl font-bold text-white leading-none mt-1">1978</span>
            <span className="font-mono text-xs uppercase tracking-widest text-gold-light mt-1">48 Years</span>
            <span className="text-[10px] text-cream/70 mt-1">of Service</span>
          </div>
        </div>
      </div>
    </div>
  );
}
