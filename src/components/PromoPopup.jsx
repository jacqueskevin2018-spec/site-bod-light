"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { company } from "@/data/company";
import { homepage } from "@/data/homepage";

const SESSION_KEY = "bod-light-promo-closed";

export default function PromoPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) !== "true") {
      const openTimer = window.setTimeout(() => setIsVisible(true), 80);

      return () => window.clearTimeout(openTimer);
    }
  }, []);

  const closePopup = () => {
    sessionStorage.setItem(SESSION_KEY, "true");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-[#06162b]/70 px-4 py-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Promotion BOD LIGHT"
    >
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl shadow-black/25">
        <button
          type="button"
          aria-label="Fermer la promotion"
          className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-[#07182d] shadow-md transition-colors hover:bg-[#f28c28] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5c542] focus-visible:ring-offset-2"
          onClick={closePopup}
        >
          X
        </button>
        <div className="relative aspect-[4/3] w-full bg-slate-100">
          <Image
            src={homepage.popup.image}
            alt="Promotion BOD LIGHT SARL"
            fill
            sizes="(max-width: 640px) 92vw, 512px"
            className="object-cover"
            priority
          />
        </div>
        <div className="space-y-4 p-5 sm:p-6">
          <p className="text-sm font-semibold uppercase text-[#f28c28]">
            Offre BOD LIGHT SARL
          </p>
          <a
            href={company.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-12 w-full items-center justify-center rounded-md bg-[#0b2a5b] px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#f28c28] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5c542] focus-visible:ring-offset-4"
          >
            {homepage.popup.cta}
          </a>
        </div>
      </div>
    </div>
  );
}
