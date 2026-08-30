export default function SealEmblem({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="27" stroke="currentColor" strokeWidth="1" opacity="0.45" />
      <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="0.75" opacity="0.3" />
      <path
        d="M32 17v30M26.5 22.5c0 4 4.5 4 4.5 9s-4.5 5-4.5 9M37.5 22.5c0 4-4.5 4-4.5 9s4.5 5 4.5 9"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M13 33c4.5-7 9-7 11-2.5M51 33c-4.5-7-9-7-11-2.5"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}