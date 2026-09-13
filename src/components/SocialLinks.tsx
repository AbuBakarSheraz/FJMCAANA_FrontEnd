type SocialLinksProps = {
  variant?: "hero" | "footer";
};

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/fj.alumni.usa.canada/",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1CVN8TzqE8/?mibextid=wwXIfr",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M13.7 21v-8h2.7l.4-3.1h-3.1V7.92c0-.9.25-1.52 1.55-1.52h1.66V3.62A22.2 22.2 0 0 0 14.5 3.5c-2.4 0-4.05 1.47-4.05 4.16V9.9H7.73V13h2.72v8h3.25Z" />
      </svg>
    ),
  },
];

export default function SocialLinks({ variant = "footer" }: SocialLinksProps) {
  const isHero = variant === "hero";

  return (
    <nav aria-label="Follow FJMCAANA on social media" className="flex flex-wrap items-center gap-2">
      {socialLinks.map(({ name, href, icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Follow FJMCAANA on ${name}`}
          className={
            isHero
              ? "group inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-3.5 py-2 font-accent text-[11px] font-semibold uppercase tracking-[0.1em] text-cream transition hover:border-gold hover:bg-gold hover:text-pine-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light"
              : "inline-flex h-9 items-center gap-2 rounded-full border border-cream/25 px-3 text-cream transition hover:border-gold-light hover:bg-gold hover:text-pine-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light"
          }
        >
          {icon}
          <span className={isHero ? "" : "font-accent text-[10px] font-semibold uppercase tracking-[0.1em]"}>{name}</span>
        </a>
      ))}
    </nav>
  );
}
