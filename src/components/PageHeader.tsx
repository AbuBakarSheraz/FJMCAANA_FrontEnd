// components/PageHeader.tsx
import { Reveal } from "@/components/motion/Reveal";
interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <Reveal className="max-w-7xl mx-auto px-8 sm:px-2 pt-16 pb-10 border-b border-pine/10">
      <span className="font-accent text-xs font-semibold tracking-widest uppercase text-pine-dark">{eyebrow}</span>
      <h1 className="font-display-alt font-semibold text-3xl sm:text-4xl text-pine-dark mt-3">
        {title}
      </h1>
      {description && (
        <p className="text-ink-soft mt-3 max-w-xl">{description}</p>
      )}
    </Reveal>
  );
}
