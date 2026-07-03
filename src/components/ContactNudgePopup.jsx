"use client";

import { useEffect, useState } from "react";

import { company } from "@/data/company";
import { homepage } from "@/data/homepage";

const SESSION_KEY = "bod-light-contact-nudge-closed";

export default function ContactNudgePopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === "true") {
      return undefined;
    }

    const openTimer = window.setTimeout(() => setIsVisible(true), 4200);

    return () => window.clearTimeout(openTimer);
  }, []);

  const closePopup = () => {
    sessionStorage.setItem(SESSION_KEY, "true");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <aside className="fixed bottom-24 left-4 z-[60] w-[calc(100%-2rem)] max-w-sm rounded-2xl border border-white/10 bg-[#07182d]/94 p-4 text-white shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-500 sm:bottom-5 sm:left-5">
      <button
        type="button"
        aria-label="Fermer le message de contact"
        className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#f28c28] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5c542]"
        onClick={closePopup}
      >
        X
      </button>
      <p className="pr-9 text-sm font-semibold leading-6">
        {homepage.contactNudge.text}
      </p>
      <a
        href={company.whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex min-h-11 items-center justify-center rounded-md bg-gradient-to-r from-[#f28c28] to-[#f5c542] px-5 py-2.5 text-sm font-semibold text-[#06162b] transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#f5c542]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        {homepage.contactNudge.cta}
      </a>
    </aside>
  );
}
