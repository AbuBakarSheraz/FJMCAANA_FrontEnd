import Link from "next/link";
import type { ContentPage as ContentPageData } from "@/lib/siteContent";
import PageHeader from "@/components/PageHeader";

export default function ContentPage({ page }: { page: ContentPageData }) {
  return (
    <>
      <PageHeader eyebrow={page.eyebrow} title={page.title} description={page.description} />
      <main className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
        <div className="max-w-3xl space-y-12">
          {page.sections.map((section, sectionIndex) => (
            <section key={`${section.title ?? "section"}-${sectionIndex}`}>
              {section.title && <h2 className="font-display text-2xl font-semibold text-pine-dark">{section.title}</h2>}
              {section.paragraphs && <div className="mt-4 space-y-4 text-ink-soft leading-relaxed">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>}
              {section.bullets && <ul className="mt-5 space-y-3 text-ink-soft leading-relaxed">{section.bullets.map((bullet) => <li className="flex gap-3" key={bullet}><span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gold" aria-hidden="true" />{bullet}</li>)}</ul>}
              {section.items && <div className="mt-6 grid gap-3 sm:grid-cols-2">{section.items.map((item) => {
                const content = <><h3 className="font-display text-lg font-semibold text-pine-dark">{item.title}</h3>{item.detail && <p className="mt-1 text-sm leading-relaxed text-ink-soft">{item.detail}</p>}</>;
                const className = "group rounded-xl border border-pine/10 bg-white p-5 transition hover:-translate-y-0.5 hover:border-pine/25 hover:shadow-sm";
                return item.href ? <Link className={className} href={item.href} key={item.title}>{content}<span className="mt-4 inline-block text-sm font-semibold text-pine">Explore <span aria-hidden="true">→</span></span></Link> : <div className={className} key={item.title}>{content}</div>;
              })}</div>}
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
