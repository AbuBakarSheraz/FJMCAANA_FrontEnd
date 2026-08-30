import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/impact", label: "Our Impact" },
  { href: "/reports", label: "Reports" },
  { href: "/gallery", label: "Gallery" },
  { href: "/help", label: "Help & Resources" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-pine/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 sm:px-6 sm:py-3">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <Image
            src="/images/Logo.png"
            alt="FJMCAANA logo"
            width={56}
            height={56}
            priority
            className="h-12 w-12 flex-none object-contain sm:h-14 sm:w-14"
          />
          <span className="font-display text-lg font-semibold leading-tight text-pine-dark">
            FJMCAANA
          </span>
        </Link>

        {/* Desktop nav — mobile uses the bottom tab bar instead */}
        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative py-1 font-mono text-[11.5px] font-medium uppercase tracking-[0.08em] text-ink-soft transition hover:text-pine-dark"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>
<a
        
          href="https://www.paypal.com/us/fundraiser/charity/1554217"
          className="hidden items-center gap-1.5 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-pine-dark transition hover:bg-gold-light md:inline-flex"
          target="_blank"
          rel="noopener noreferrer"
        >
          Donate
        </a>
      </div>
    </nav>
  );
}