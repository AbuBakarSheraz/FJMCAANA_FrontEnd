// components/PageHeader.tsx
interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="max-w-6xl mx-auto px-6 pt-16 pb-10 border-b border-pine/10">
      <span className="font-mono text-xs tracking-widest uppercase text-gold">{eyebrow}</span>
      <h1 className="font-display font-semibold text-3xl sm:text-4xl text-pine-dark mt-3">
        {title}
      </h1>
      {description && (
        <p className="text-ink-soft mt-3 max-w-xl">{description}</p>
      )}
    </header>
  );
}