import { NewsItem } from "@/lib/types";

const FALLBACK_NEWS: NewsItem[] = [
  { slug: "president-report-2022", title: "Annual President Report 2022", date: "December 31, 2022" },
  { slug: "annual-report-2022", title: "FJMCAANA Annual Report 2022", date: "December 31, 2022" },
  { slug: "project-highlights-2022", title: "Annual Projects Highlights", date: "December 31, 2022" },
];

export default function NewsSection({ items = FALLBACK_NEWS }: { items?: NewsItem[] }) {
  return (
    <section id="news" className="bg-card/60">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <span className="font-mono text-xs tracking-widest uppercase text-gold">Events &amp; News</span>
        <h2 className="font-display font-semibold text-3xl text-burgundy-dark mt-2 mb-10">
          Stay in the loop
        </h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {items.map((item) => (
            <a
              key={item.slug}
              href={`/news/${item.slug}`}
              className="bg-white rounded-xl overflow-hidden border border-burgundy/10 block"
            >
              <div className="h-32 bg-gradient-to-br from-burgundy-dark to-burgundy" />
              <div className="p-4">
                <div className="font-semibold text-sm">{item.title}</div>
                <div className="text-xs text-ink-soft mt-1">{item.date}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
