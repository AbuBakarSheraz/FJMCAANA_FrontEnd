export default function Footer() {
  return (
    <footer id="donate" className="bg-pine-dark text-[#EDE6D3]">
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="font-display italic text-xl sm:text-2xl text-white text-center sm:text-left">
          Change their world. Change yours.
        </p>
        <a
          href="/donate"
          className="bg-gold text-pine-dark font-semibold text-sm px-6 py-3 rounded-lg hover:bg-gold-light transition"
        >
          Donate Now
        </a>
      </div>
      <div id="contact" className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#B7C4BB]">
          <div>© {new Date().getFullYear()} FJMCAANA — Fatima Jinnah Medical College Alumnae Association of North America</div>
          <div>Email: team@fjmcaana.org</div>
        </div>
      </div>
    </footer>
  );
}
