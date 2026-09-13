import { Reveal } from "@/components/motion/Reveal";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export default function PageHeader({
  eyebrow,
  title,
  description,
}: PageHeaderProps) {
  return (
    <section className="border-b border-pine/10 bg-sage">
      <Reveal className="mx-auto max-w-7xl px-5 py-8 sm:px-6 sm:py-10 lg:px-8">
        {eyebrow && (
          <p className="font-accent text-[10px] font-semibold uppercase tracking-[0.2em] text-pine-dark">
            {eyebrow}
          </p>
        )}

        <h1 className="mt-3 font-display text-4xl font-medium leading-[1.1] text-pine-dark sm:text-5xl">
          {title}
        </h1>

        {description && (
          <p className="mt-4 max-w-2xl font-body text-sm leading-6 text-ink-soft sm:text-base sm:leading-7">
            {description}
          </p>
        )}
      </Reveal>
    </section>
  );
}