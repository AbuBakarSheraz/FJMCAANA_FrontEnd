"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import Navbar from "@/components/Navbar";
import SealEmblem from "@/components/SealEmblem";

import {
  Reveal,
  Stagger,
  StaggerItem,
} from "@/components/motion/Reveal";

type GalleryImage = {
  id: string;
  width: number;
  height: number;
  aspectRatio: number;

  thumb: {
    avif: string;
    webp: string;
    fallback: string;
  };

  full: {
    avif: string;
    webp: string;
    fallback: string;
  };

  blur: string;
  alt: string;
};

type GalleryVideo = {
  id: string;
  width: number;
  height: number;
  aspectRatio: number;
  video: string;
  thumbnail: string;
  alt: string;
};

/*
 * This must exactly match the
 * Cloudinary Asset Folder.
 */
const FOLDER =
  "cornea_transplant";

export default function CorneaTransplantGalleryPage() {
  const [
    images,
    setImages,
  ] = useState<
    GalleryImage[]
  >([]);

  const [
    videos,
    setVideos,
  ] = useState<
    GalleryVideo[]
  >([]);

  const [
    loading,
    setLoading,
  ] = useState(true);

  const [
    error,
    setError,
  ] = useState<
    string | null
  >(null);

  useEffect(() => {
    async function loadGallery() {
      try {
        setLoading(true);
        setError(null);

        /*
         * Load images.
         */
        const imagesResponse =
          await fetch(
            `/api/gallery?folder=${encodeURIComponent(
              FOLDER
            )}`
          );

        if (
          !imagesResponse.ok
        ) {
          throw new Error(
            "Failed to load gallery images"
          );
        }

        const imagesData =
          await imagesResponse.json();

        if (
          !Array.isArray(
            imagesData
          )
        ) {
          throw new Error(
            "Invalid gallery response"
          );
        }

        /*
         * Load videos separately.
         */
        const videosResponse =
          await fetch(
            `/api/gallery/videos?folder=${encodeURIComponent(
              FOLDER
            )}`
          );

        if (
          !videosResponse.ok
        ) {
          throw new Error(
            "Failed to load gallery videos"
          );
        }

        const videosData =
          await videosResponse.json();

        if (
          !Array.isArray(
            videosData
          )
        ) {
          throw new Error(
            "Invalid gallery videos response"
          );
        }

        setImages(
          imagesData
        );

        setVideos(
          videosData
        );
      } catch (error: any) {
        console.error(
          "[gallery] loadGallery error:",
          error
        );

        setError(
          error?.message ??
            "Failed to load gallery"
        );
      } finally {
        setLoading(false);
      }
    }

    loadGallery();
  }, []);

  return (
    <>
      <Navbar />

      {/* =========================
          HEADER
      ========================== */}

      <header className="grain relative overflow-hidden bg-pine-dark py-20 text-cream">
        <SealEmblem
          className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 text-gold opacity-[0.07]"
        />

        <Reveal className="relative z-10 mx-auto max-w-6xl px-6 text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gold/60" />

            <span className="font-accent text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
              Moments Worth Keeping
            </span>

            <span className="h-px w-8 bg-gold/60" />
          </div>

          <h1 className="mt-5 font-display-alt text-4xl font-semibold text-white sm:text-5xl">
            Cornea Transplant Success Stories 2025
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-cream/80">
            Memories from our cornea
            transplant success stories.
          </p>
        </Reveal>
      </header>

      {/* =========================
          MAIN
      ========================== */}

      <main className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">

          {/* =========================
              LOADING
          ========================== */}

          {loading && (
            <div className="py-20 text-center">
              <p className="font-accent text-sm uppercase tracking-[0.15em] text-pine-dark/70">
                Loading gallery...
              </p>
            </div>
          )}

          {/* =========================
              ERROR
          ========================== */}

          {!loading &&
            error && (
              <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center text-red-700">
                {error}
              </div>
            )}

          {/* =========================
              CONTENT
          ========================== */}

          {!loading &&
            !error && (
              <>
                {/* =========================
                    PHOTOS
                ========================== */}

                {images.length >
                  0 && (
                  <section>
                    <div className="mb-8">
                      <h2 className="font-display-alt text-3xl font-semibold text-pine-dark">
                        Photos
                      </h2>

                      <div className="mt-3 h-px w-16 bg-gold" />
                    </div>

                    <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                      {images.map(
                        (
                          image
                        ) => (
                          <StaggerItem
                            key={
                              image.id
                            }
                            interactive
                          >
                            <a
                              href={
                                image
                                  .full
                                  .fallback
                              }
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group block overflow-hidden rounded-xl border border-pine/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                              <div
                                className="relative overflow-hidden bg-pine-dark/5"
                                style={{
                                  aspectRatio:
                                    image.aspectRatio,
                                }}
                              >
                                <Image
                                  src={
                                    image
                                      .thumb
                                      .fallback
                                  }
                                  alt={
                                    image.alt
                                  }
                                  fill
                                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                              </div>

                              <div className="p-4">
                                <p className="font-accent text-xs capitalize text-ink-soft">
                                  {
                                    image.alt
                                  }
                                </p>
                              </div>
                            </a>
                          </StaggerItem>
                        )
                      )}
                    </Stagger>
                  </section>
                )}

                {/* =========================
                    VIDEOS
                ========================== */}

                {videos.length >
                  0 && (
                  <section
                    className={
                      images.length >
                      0
                        ? "mt-20"
                        : ""
                    }
                  >
                    <div className="mb-8">
                      <h2 className="font-display-alt text-3xl font-semibold text-pine-dark">
                        Videos
                      </h2>

                      <div className="mt-3 h-px w-16 bg-gold" />
                    </div>

                    <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      {videos.map(
                        (
                          video
                        ) => (
                          <StaggerItem
                            key={
                              video.id
                            }
                            interactive
                          >
                            <div className="overflow-hidden rounded-xl border border-pine/10 bg-white shadow-sm">
                              {/* =========================
                                  VIDEO PLAYER
                              ========================== */}

                              <div className="relative overflow-hidden bg-black">
                                <video
                                  controls
                                  playsInline
                                  preload="metadata"
                                  poster={
                                    video.thumbnail
                                  }
                                  className="block h-auto w-full"
                                >
                                  <source
                                    src={
                                      video.video
                                    }
                                    type="video/mp4"
                                  />

                                  Your browser does not support the video element.
                                </video>
                              </div>

                              {/* =========================
                                  VIDEO TITLE
                              ========================== */}

                              <div className="p-5">
                                <h3 className="font-display text-lg font-semibold capitalize text-pine-dark">
                                  {
                                    video.alt
                                  }
                                </h3>
                              </div>
                            </div>
                          </StaggerItem>
                        )
                      )}
                    </Stagger>
                  </section>
                )}

                {/* =========================
                    NOTHING FOUND
                ========================== */}

                {images.length ===
                  0 &&
                  videos.length ===
                    0 && (
                    <div className="py-20 text-center">
                      <h2 className="font-display-alt text-2xl font-semibold text-pine-dark">
                        No media found
                      </h2>

                      <p className="mt-3 text-ink-soft">
                        There are currently no
                        photos or videos in this
                        gallery.
                      </p>
                    </div>
                  )}
              </>
            )}
        </div>
      </main>
    </>
  );
}