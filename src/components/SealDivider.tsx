import SealEmblem from "./SealEmblem";

export default function SealDivider() {
  return (
    <div className="seal-divider" aria-hidden="true">
      <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-cream text-gold">
        <SealEmblem className="h-6 w-6" />
      </div>
    </div>
  );
}