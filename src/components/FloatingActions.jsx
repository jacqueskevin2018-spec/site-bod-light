"use client";

import { useEffect, useState } from "react";

import { company } from "@/data/company";

export default function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 420);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-20 right-4 z-[70] flex flex-col items-end gap-3 sm:bottom-5 sm:right-5">
      <button
        type="button"
        aria-label="Retour en haut"
        className={`flex h-12 w-12 items-center justify-center rounded-full border border-[#f5c542]/40 bg-[#06162b] text-[#f5c542] shadow-2xl shadow-[#06162b]/35 transition duration-300 hover:-translate-y-1 hover:bg-[#f28c28] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5c542] focus-visible:ring-offset-4 ${
          showBackToTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
        onClick={scrollToTop}
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.2"
        >
          <path d="M12 19V5" />
          <path d="m5 12 7-7 7 7" />
        </svg>
      </button>

      <a
        href={company.whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Commander sur WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-2xl shadow-[#25d366]/35 transition duration-300 hover:-translate-y-1 hover:shadow-[#25d366]/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5c542] focus-visible:ring-offset-4"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-7 w-7"
          fill="currentColor"
        >
          <path d="M12.04 2.25A9.66 9.66 0 0 0 3.7 16.8l-1.1 4.03 4.13-1.08a9.62 9.62 0 0 0 5.3 1.52h.01a9.51 9.51 0 0 0 9.55-9.5 9.57 9.57 0 0 0-9.55-9.52Zm0 17.4h-.01a8.03 8.03 0 0 1-4.1-1.12l-.3-.18-2.45.64.65-2.38-.2-.31a8.04 8.04 0 1 1 6.41 3.35Zm4.42-6.03c-.24-.12-1.43-.7-1.65-.79-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
        </svg>
      </a>
    </div>
  );
}
