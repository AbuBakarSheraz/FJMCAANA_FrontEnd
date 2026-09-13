"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  {
    href: "/",
    label: "Home",
    icon: (
      <path d="M3 11.5 12 4l9 7.5M5 10v9a1 1 0 0 0 1 1h4v-5h4v5h4a1 1 0 0 0 1-1v-9" />
    ),
  },
  {
    href: "/get-involved",
    label: "Involved",
    icon: (
      <path d="M12 20s-7-4.4-7-9.5A4.5 4.5 0 0 1 12 8a4.5 4.5 0 0 1 7 2.5C19 15.6 12 20 12 20Z" />
    ),
  },
  null, // reserved for the raised Donate button
  {
    href: "/projects",
    label: "Projects",
    icon: (
      <>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3.2" />
      </>
    ),
  },
  {
    href: "__more__",
    label: "More",
    icon: (
      <>
        <circle cx="6" cy="6" r="1.3" fill="currentColor" stroke="none" />
        <circle cx="12" cy="6" r="1.3" fill="currentColor" stroke="none" />
        <circle cx="18" cy="6" r="1.3" fill="currentColor" stroke="none" />
        <circle cx="6" cy="12" r="1.3" fill="currentColor" stroke="none" />
        <circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none" />
        <circle cx="18" cy="12" r="1.3" fill="currentColor" stroke="none" />
        <circle cx="6" cy="18" r="1.3" fill="currentColor" stroke="none" />
        <circle cx="12" cy="18" r="1.3" fill="currentColor" stroke="none" />
        <circle cx="18" cy="18" r="1.3" fill="currentColor" stroke="none" />
      </>
    ),
  },
];

const MORE_LINKS = [
  { href: "/about", label: "About" },
  { href: "/team", label: "Our Team" },
  { href: "/projects", label: "Projects" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reports", label: "Reports & Financials" },
  { href: "/help", label: "Help & Resources" },
  { href: "/contact", label: "Contact" },
];

function TabIcon({ children, className = "h-5 w-5" }: { children: React.ReactNode; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {children}
    </svg>
  );
}

export default function BottomNav() {
  const pathname = usePathname();
  const [moreOpen, setMoreOpen] = useState(false);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname?.startsWith(href));

  return (
    <>
      <nav
        className="fixed inset-x-0 bottom-0 z-40 border-t border-pine/10 bg-cream/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden"
        aria-label="Primary"
      >
        <div className="relative mx-auto grid max-w-md grid-cols-5 items-center px-2 py-1.5">
          {TABS.map((tab) => {
            if (tab === null) {
              // Raised Donate button
              return (
                <div key="donate" className="flex justify-center">
                  <a
                    href="https://www.paypal.com/us/fundraiser/charity/1554217"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="-mt-6 flex h-12 w-12 flex-none items-center justify-center rounded-full border-4 border-cream bg-gold text-pine-dark shadow-md shadow-pine-dark/20 transition active:scale-95"
                    aria-label="Donate"
                  >
                    <TabIcon className="h-5 w-5">
                      <path d="M12 20s-7-4.4-7-9.5A4.5 4.5 0 0 1 12 8a4.5 4.5 0 0 1 7 2.5C19 15.6 12 20 12 20Z" />
                    </TabIcon>
                  </a>
                </div>
              );
            }

            if (tab.href === "__more__") {
              const active = moreOpen;
              return (
                <button
                  key="more"
                  onClick={() => setMoreOpen(true)}
                  className="flex flex-col items-center gap-0.5 py-1"
                  aria-label="More"
                  aria-expanded={moreOpen}
                >
                  <span
                    className={`flex h-7 w-9 items-center justify-center rounded-full transition-colors ${
                      active ? "bg-gold/15 text-gold" : "text-ink-soft"
                    }`}
                  >
                    <TabIcon>{tab.icon}</TabIcon>
                  </span>
                  <span
                    className={`font-accent text-[9.5px] font-semibold uppercase tracking-wide transition-colors ${
                      active ? "text-gold" : "text-ink-soft"
                    }`}
                  >
                    {tab.label}
                  </span>
                </button>
              );
            }

            const active = isActive(tab.href);
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className="flex flex-col items-center gap-0.5 py-1"
              >
                <span
                  className={`flex h-7 w-9 items-center justify-center rounded-full transition-colors ${
                    active ? "bg-pine/10 text-pine" : "text-ink-soft"
                  }`}
                >
                  <TabIcon>{tab.icon}</TabIcon>
                </span>
                <span
                  className={`font-accent text-[9.5px] font-semibold uppercase tracking-wide transition-colors ${
                    active ? "text-pine font-semibold" : "text-ink-soft"
                  }`}
                >
                  {tab.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* More sheet */}
      <AnimatePresence>
      {moreOpen && (
        <motion.div
          className="fixed inset-0 z-50 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="More links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="absolute inset-0 bg-pine-dark/50 backdrop-blur-sm"
            onClick={() => setMoreOpen(false)}
          />
          <motion.div
            className="absolute inset-x-0 bottom-0 rounded-t-2xl border-t border-pine/10 bg-cream pb-[env(safe-area-inset-bottom)] shadow-2xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-pine/15" />

            <div className="px-6 pb-3 pt-4">
              <span className="font-accent text-xs font-semibold uppercase tracking-[0.18em] text-pine-dark">More</span>
            </div>

            <div className="max-h-[60vh] overflow-y-auto px-2 pb-2">
              {MORE_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMoreOpen(false)}
                  className="flex items-center justify-between rounded-lg px-4 py-3 font-accent text-sm font-semibold uppercase tracking-[0.08em] text-pine-dark transition hover:bg-sage"
                >
                  {link.label}
                  <span aria-hidden="true" className="text-ink-soft">→</span>
                </Link>
              ))}
            </div>

            <div className="border-t border-pine/10 px-6 py-4 text-center">
              <p className="font-accent text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-soft">
                FJMCAANA · Established 1978
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  );
}
