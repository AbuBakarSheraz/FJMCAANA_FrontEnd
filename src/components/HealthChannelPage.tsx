import Image from "next/image";
import {
  CONTENT_PAGES,
  HEALTH_CHANNEL_VIDEOS,
} from "@/lib/siteContent";

function getYouTubeEmbedUrl(videoId: string) {
  return `https://www.youtube.com/embed/${videoId}`;
}

export default function HealthChannelPage() {
  const page = CONTENT_PAGES.find(
    (item) => item.path.join("/") === "get-involved/health-channel"
  );

  const section = page?.sections?.[0];

  const sessions = section?.items ?? [];

  return (
    <main className="bg-white">
      {/* -------------------------------------------------
          HERO
      -------------------------------------------------- */}
      <section className="relative overflow-hidden bg-pine-dark text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold blur-3xl" />
          <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-pine blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28">
          <div className="max-w-4xl">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold">
              {page?.eyebrow ?? "Community Health"}
            </p>

            <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {page?.title ?? "FJMCAANA Health Channel"}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              {page?.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/85 backdrop-blur">
                Free Medical Education
              </span>

              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/85 backdrop-blur">
                Physician Led
              </span>

              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/85 backdrop-blur">
                FJMU Collaboration
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------
          INTRODUCTION
      -------------------------------------------------- */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
              The Program
            </p>

            <h2 className="mt-3 font-display text-3xl font-semibold text-pine-dark sm:text-4xl">
              Prevention is Our Passion
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-lg leading-8 text-ink-soft">
              FJMCAANA Health Channel was created to make medical education
              and health awareness accessible to the public in Pakistan.
            </p>

            <p className="mt-5 leading-8 text-ink-soft">
              The initiative was developed in collaboration with Fatima Jinnah
              Medical University and the Health Channel, bringing physician
              experts together to discuss important health topics with the
              community.
            </p>

            <p className="mt-5 leading-8 text-ink-soft">
              The original program featured live educational sessions covering
              diabetes, childhood asthma, healthy living, sexually transmitted
              diseases, and hypertension.
            </p>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------
          PHYSICIAN SESSIONS
      -------------------------------------------------- */}
      <section className="bg-sage/20">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
                Featured Physicians
              </p>

              <h2 className="mt-3 font-display text-3xl font-semibold text-pine-dark sm:text-4xl">
                Health education from our experts
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-ink-soft">
              Physician-led sessions covering some of the most important
              health and wellness topics for our communities.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sessions.map((session, index) => (
              <article
                key={session.title}
                className={`group overflow-hidden rounded-2xl border border-pine/10 bg-white ${
                  index === 0 ? "lg:col-span-1" : ""
                }`}
              >
                {/* Doctor Image */}
                <div className="relative aspect-[4/5] overflow-hidden bg-sage/30">
                  {session.image ? (
                    <Image
                      src={session.image}
                      alt={session.detail ?? session.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-ink-soft">
                      Physician
                    </div>
                  )}

                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/40 to-transparent" />

                  <div className="absolute bottom-5 left-5">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-pine-dark backdrop-blur">
                      Session {index + 1}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-gold">
                    Health Channel
                  </p>

                  <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-pine-dark">
                    {session.title}
                  </h3>

                  {session.detail && (
                    <p className="mt-3 text-sm font-medium text-ink-soft">
                      {session.detail}
                    </p>
                  )}

                  <div className="mt-5 h-px w-10 bg-pine/20 transition-all duration-300 group-hover:w-16" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------
          VIDEO LIBRARY
      -------------------------------------------------- */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-24">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
            Watch & Learn
          </p>

          <h2 className="mt-3 font-display text-3xl font-semibold text-pine-dark sm:text-4xl">
            Health Channel Videos
          </h2>

          <p className="mt-5 leading-8 text-ink-soft">
            Explore educational sessions and conversations from the FJMCAANA
            Health Channel.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {HEALTH_CHANNEL_VIDEOS.map((video) => (
            <article
              key={video.videoId}
              className="overflow-hidden rounded-2xl border border-pine/10 bg-white shadow-sm"
            >
              <div className="relative aspect-video bg-black">
                <iframe
                  src={getYouTubeEmbedUrl(video.videoId)}
                  title={video.title}
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="font-display text-lg font-semibold leading-snug text-pine-dark">
                  {video.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* -------------------------------------------------
          COLLABORATION
      -------------------------------------------------- */}
      <section className="border-y border-pine/10 bg-pine-dark text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-16">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
                In Collaboration With
              </p>

              <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
                Fatima Jinnah Medical University
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-white/65">
                FJMCAANA's Health Channel brings together medical expertise,
                education, and community outreach in partnership with FJMU
                and health education collaborators.
              </p>
            </div>

            <div className="rounded-full border border-white/10 bg-white/5 px-6 py-4 text-sm text-white/75">
              Prevention is Our Passion
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}