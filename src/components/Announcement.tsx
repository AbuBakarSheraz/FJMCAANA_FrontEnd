"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Announcement() {
  const pathname = usePathname();

  const [open, setOpen] = useState<boolean>(true);
  const [showFab, setShowFab] = useState<boolean>(false);

  const fabRef = useRef<HTMLDivElement | null>(null);

  // Auto close announcement after 5 seconds
  useEffect(() => {
    const hasSeenAnnouncement = sessionStorage.getItem(
      "appna-announcement-seen"
    );

    if (hasSeenAnnouncement) {
      setOpen(false);
      setShowFab(true);
      return;
    }

    const timer = setTimeout(() => {
      setOpen(false);
      setShowFab(true);

      sessionStorage.setItem(
        "appna-announcement-seen",
        "true"
      );
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleClose = (): void => {
    setOpen(false);
    setShowFab(true);

    sessionStorage.setItem(
      "appna-announcement-seen",
      "true"
    );
  };

  // Drag logic for floating button
  useEffect(() => {
    const fab = fabRef.current;

    if (!fab) return;

    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    const startDrag = (e: MouseEvent | TouchEvent): void => {
      isDragging = true;

      const event =
        e instanceof TouchEvent ? e.touches[0] : e;

      offsetX = event.clientX - fab.offsetLeft;
      offsetY = event.clientY - fab.offsetTop;
    };

    const onDrag = (e: MouseEvent | TouchEvent): void => {
      if (!isDragging) return;

      const event =
        e instanceof TouchEvent ? e.touches[0] : e;

      fab.style.left = `${event.clientX - offsetX}px`;
      fab.style.top = `${event.clientY - offsetY}px`;

      // Remove right positioning once the user starts dragging
      fab.style.right = "auto";
    };

    const stopDrag = (): void => {
      isDragging = false;
    };

    // Mouse events
    fab.addEventListener("mousedown", startDrag);

    // Touch events
    fab.addEventListener("touchstart", startDrag, {
      passive: true,
    });

    window.addEventListener("mousemove", onDrag);

    window.addEventListener("touchmove", onDrag, {
      passive: true,
    });

    window.addEventListener("mouseup", stopDrag);
    window.addEventListener("touchend", stopDrag);

    return () => {
      fab.removeEventListener("mousedown", startDrag);
      fab.removeEventListener("touchstart", startDrag);

      window.removeEventListener("mousemove", onDrag);
      window.removeEventListener("touchmove", onDrag);

      window.removeEventListener("mouseup", stopDrag);
      window.removeEventListener("touchend", stopDrag);
    };
  }, []);

  // Only show announcement on the homepage
  if (pathname !== "/") {
    return null;
  }

  return (
    <>
      {/* =========================================================
          ANNOUNCEMENT MODAL
      ========================================================= */}
      {open && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 py-8 md:py-12"
          onClick={handleClose}
        >
          {/* =====================================================
              MODAL CARD
          ===================================================== */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white w-full rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            style={{
              maxWidth: "420px",
              maxHeight: "calc(100vh - 80px)",
            }}
          >
            {/* ===================================================
                CLOSE BUTTON
            =================================================== */}
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close announcement"
              className="absolute top-3 right-3 z-20 flex items-center justify-center w-8 h-8 rounded-full transition hover:scale-110 active:scale-95"
              style={{
                background: "rgba(0,0,0,0.50)",
                border:
                  "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <X
                size={15}
                color="#fff"
                strokeWidth={2.5}
              />
            </button>

            {/* ===================================================
                ANNOUNCEMENT IMAGE
            =================================================== */}
            <div className="overflow-y-auto flex-1">
              <Image
                src="/future_events/dinner.jpeg"
                alt="APPNA NC Annual Banquet, Entertainment & CME"
                width={440}
                height={600}
                className="w-full h-auto block"
                priority
              />
            </div>

            {/* ===================================================
                CTA SECTION
            =================================================== */}
            <div
              className="flex-shrink-0 px-5 py-4 flex flex-col gap-2"
              style={{
                borderTop: "1px solid #f0f0f0",
              }}
            >
              <a
                href="https://appna.org"
                rel="noopener noreferrer"
                onClick={handleClose}
                className="flex items-center justify-center w-full rounded-xl text-white font-semibold text-sm py-3 px-6 transition-all duration-200 hover:opacity-90 active:scale-95"
                style={{
                  background:
                    "linear-gradient(135deg, #09521f 0%, #104324 100%)",
                  boxShadow:
                    "0 4px 14px rgba(7, 62, 32, 0.35)",
                }}
              >
                Buy Tickets Online
              </a>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          FLOATING EVENT BUTTON
      ========================================================= */}
      {showFab && (
        <div
          ref={fabRef}
          style={{
            top: "15%",
            right: "8px",
          }}
          className="fixed z-[998] flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500 text-white text-xs font-bold shadow-lg cursor-move animate-pulse select-none"
          onClick={() => setOpen(true)}
        >
          Event
        </div>
      )}
    </>
  );
}