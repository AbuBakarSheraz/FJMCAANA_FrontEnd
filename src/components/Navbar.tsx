"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/events", label: "Events" },
  { href: "/reports", label: "Reports" },
  { href: "/gallery", label: "Gallery" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/help", label: "Residency Pathways" },
  { href: "/featured_member", label: "Featured Member" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-pine/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-3 py-2 sm:px-6 lg:px-4">

        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/images/FJMCAANA_Logo.png"
            alt="FJMCAANA logo"
            width={248}
            height={80}
            priority
            className="h-auto w-[150px] sm:w-[190px] lg:w-[210px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-5">
          {NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href ||
              pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative whitespace-nowrap py-1 font-accent text-[10px] font-semibold uppercase tracking-[0.08em] transition ${
                  isActive
                    ? "text-pine-dark"
                    : "text-ink-soft hover:text-pine-dark"
                }`}
              >
                {link.label}

                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden xl:flex shrink-0 items-center gap-2">
          <Link
            href="/get-involved/membership"
            className="inline-flex items-center rounded-full bg-gold px-4 py-2 font-accent text-xs font-semibold uppercase tracking-[0.1em] text-pine-dark transition hover:bg-gold-light"
          >
            Join Us
          </Link>

          <a
            href="https://www.paypal.com/us/fundraiser/charity/1554217"
            className="inline-flex items-center rounded-full bg-gold px-4 py-2 font-accent text-xs font-semibold uppercase tracking-[0.1em] text-pine-dark transition hover:bg-gold-light"
            target="_blank"
            rel="noopener noreferrer"
          >
            Donate
          </a>
        </div>

        {/* Tablet / Mobile */}
        <div className="flex items-center gap-2 xl:hidden">
          <Link
            href="/get-involved/membership"
            className="inline-flex items-center rounded-full bg-gold px-3 py-1.5 font-accent text-[10px] font-semibold uppercase tracking-[0.1em] text-pine-dark transition hover:bg-gold-light"
          >
            Join
          </Link>

          <a
            href="https://www.paypal.com/us/fundraiser/charity/1554217"
            className="inline-flex items-center rounded-full bg-gold px-3 py-1.5 font-accent text-[10px] font-semibold uppercase tracking-[0.1em] text-pine-dark transition hover:bg-gold-light"
            target="_blank"
            rel="noopener noreferrer"
          >
            Donate
          </a>

          {/* Mobile menu button */}
          
        </div>
      </div>
    </nav>
  );
}
