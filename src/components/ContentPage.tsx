import Link from "next/link";
import Image from "next/image";
import type { ContentPage as ContentPageData, ContentSection } from "@/lib/siteContent";
import PageHeader from "@/components/PageHeader";

function SectionEyebrow({ children }: { children: string }) {
  return (
    <span className="font-mono text-xs tracking-widest uppercase text-gold">
      {children}
    </span>
  );
}

function ItemCard({ item }: { item: NonNullable<ContentSection["items"]>[number] }) {
  const content = (
    <>
      {item.image && (
        <div className="relative -mx-5 -mt-5 mb-4 aspect-[16/9] overflow-hidden rounded-t-xl">
          <Image
            src={item.image}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      )}
      <h3 className="font-display text-lg font-semibold text-pine-dark">{item.title}</h3>
      {item.detail && <p className="mt-1 text-sm leading-relaxed text-ink-soft">{item.detail}</p>}
    </>
  );

  const className =
    "group flex h-full flex-col rounded-xl border border-pine/10 bg-white p-5 transition hover:-translate-y-0.5 hover:border-pine/25 hover:shadow-sm";

  return item.href ? (
    <Link className={className} href={item.href} key={item.title}>
      {content}
      <span className="mt-4 inline-block text-sm font-semibold text-pine">
        Explore <span aria-hidden="true">→</span>
      </span>
    </Link>
  ) : (
    <div className={className} key={item.title}>
      {content}
    </div>
  );
}

export default function ContentPage({ page }: { page: ContentPageData }) {
  return (
    <>
      <PageHeader eyebrow={page.eyebrow} title={page.title} description={page.description} />

      <main className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
        <div className="space-y-14 sm:space-y-16">
          {page.sections.map((section, sectionIndex) => {
            const isFirst = sectionIndex === 0;
            const isProseOnly = !section.items && !section.bullets;

            return (
              <section
                key={`${section.title ?? "section"}-${sectionIndex}`}
                className={sectionIndex > 0 ? "border-t border-pine/10 pt-14 sm:pt-16" : undefined}
              >
                {/* Feature layout: first section, prose-only, with an optional decorative aside */}
                {isFirst && isProseOnly  ? (
                  <div className="grid md:grid-cols-[1fr_320px] gap-10 items-start">
                    <div className="max-w-2xl">
                      {section.title && <SectionEyebrow>{section.title}</SectionEyebrow>}
                      {section.paragraphs && (
                        <div className="mt-3 space-y-4 text-ink-soft leading-relaxed">
                          {section.paragraphs.map((paragraph, i) => (
                            <p
                              key={paragraph}
                              className={i === 0 ? "text-lg text-pine-dark" : undefined}
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                    <aside className="rounded-2xl border border-pine/10 bg-card p-6">
                      <div className="relative aspect-square overflow-hidden rounded-xl bg-sage border border-pine/10">
                        {/* <Image src={section.image} alt="" fill sizes="320px" className="object-cover" />b    bbb */}
                      </div>
                    </aside>
                  </div>
                ) : (
                  <>
                    {/* Prose sections (no items, no bullets) */}
                    {isProseOnly && section.paragraphs && (
                      <div className="max-w-2xl">
                        {section.title && <SectionEyebrow>{section.title}</SectionEyebrow>}
                        <div className={`space-y-4 text-ink-soft leading-relaxed ${section.title ? "mt-3" : ""}`}>
                          {section.paragraphs.map((paragraph, i) => (
                            <p
                              key={paragraph}
                              className={isFirst && i === 0 ? "text-lg text-pine-dark" : undefined}
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Bullet sections: boxed panel */}
                    {section.bullets && (
                      <div className="max-w-2xl">
                        {section.title && <SectionEyebrow>{section.title}</SectionEyebrow>}
                        {section.paragraphs && (
                          <div className="mt-3 space-y-4 text-ink-soft leading-relaxed">
                            {section.paragraphs.map((paragraph) => (
                              <p key={paragraph}>{paragraph}</p>
                            ))}
                          </div>
                        )}
                        <ul
                          className={`space-y-3 rounded-2xl border border-pine/10 bg-sage p-6 sm:p-7 text-ink-soft leading-relaxed ${
                            section.title || section.paragraphs ? "mt-5" : ""
                          }`}
                        >
                          {section.bullets.map((bullet) => (
                            <li className="flex gap-3" key={bullet}>
                              <span
                                className="mt-2 h-1.5 w-1.5 flex-none rounded-sm bg-gold"
                                aria-hidden="true"
                              />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Item grids: full-width cards */}
                    {section.items && (
                      <div>
                        {section.title && (
                          <div className="mb-6">
                            <SectionEyebrow>{section.title}</SectionEyebrow>
                          </div>
                        )}
                        {section.paragraphs && (
                          <div className="mb-6 max-w-2xl space-y-4 text-ink-soft leading-relaxed">
                            {section.paragraphs.map((paragraph) => (
                              <p key={paragraph}>{paragraph}</p>
                            ))}
                          </div>
                        )}
                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                          {section.items.map((item) => (
                            <ItemCard item={item} key={item.title} />
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </section>
            );
          })}
        </div>
      </main>
    </>
  );
}