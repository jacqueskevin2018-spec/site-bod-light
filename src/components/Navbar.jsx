"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { company } from "@/data/company";

const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "A propos", href: "/#manager" },
  { label: "Services", href: "/#services" },
  { label: "Réalisations", href: "/#realisations" },
  { label: "Spot Vidéo", href: "/#spot-video" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#020b18]/88 shadow-2xl shadow-black/10 backdrop-blur-xl transition-shadow duration-300">
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex h-24 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-28 lg:px-10"
      >
        <Link
          href="/"
          aria-label="BOD LIGHT SARL - Accueil"
          className="group flex items-center gap-3 rounded-sm outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#f5c542] focus-visible:ring-offset-4 focus-visible:ring-offset-[#020b18]"
          onClick={closeMenu}
        >
          <span className="relative flex h-16 w-28 items-center justify-center overflow-visible sm:h-20 sm:w-36 lg:h-24 lg:w-44">
            <Image
              src={company.logo}
              alt=""
              fill
              sizes="(max-width: 640px) 112px, (max-width: 1024px) 144px, 176px"
              className="object-contain mix-blend-screen"
            />
          </span>
          <span className="sr-only flex-col leading-none">
            <span className="text-base font-semibold tracking-wide text-[#0b1f3a]">
              BOD LIGHT
            </span>
            <span className="mt-1 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-slate-500">
              SARL
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-sm px-4 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5c542] focus-visible:ring-offset-4 focus-visible:ring-offset-[#020b18] ${
                    isActive
                      ? "text-white"
                      : "text-white/82 hover:text-white"
                  }`}
                >
                  <span className="relative">
                    {link.label}
                    <span
                      className={`absolute -bottom-2 left-0 h-0.5 rounded-full bg-[#f5c542] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={company.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-gradient-to-r from-[#f28c28] to-[#f5c542] px-5 py-3 text-sm font-extrabold uppercase text-[#06162b] shadow-lg shadow-[#f28c28]/25 transition duration-300 hover:-translate-y-0.5 hover:shadow-[#f5c542]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#020b18]"
          >
            DEMANDER UN DEVIS
          </Link>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          className="flex h-11 w-11 items-center justify-center rounded-md border border-white/15 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5c542] focus-visible:ring-offset-4 focus-visible:ring-offset-[#020b18] lg:hidden"
          onClick={() => setIsMenuOpen((currentState) => !currentState)}
        >
          <span className="sr-only">
            {isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          </span>
          <span className="flex h-5 w-5 flex-col justify-center gap-1.5">
            <span
              className={`h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
                isMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-current transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
                isMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-white/10 bg-[#020b18]/96 backdrop-blur-xl transition-[max-height,opacity] duration-300 ease-out lg:hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav aria-label="Navigation mobile" className="px-5 pb-6 pt-3 sm:px-8">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`block rounded-md px-4 py-3 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5c542] focus-visible:ring-offset-2 ${
                      isActive
                        ? "bg-[#f5c542] text-[#06162b]"
                        : "text-white/85 hover:bg-white/10 hover:text-white"
                    }`}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href={company.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex min-h-12 items-center justify-center rounded-md bg-gradient-to-r from-[#f28c28] to-[#f5c542] px-5 py-3 text-center text-sm font-extrabold uppercase text-[#06162b] shadow-sm transition-colors hover:from-[#f5c542] hover:to-[#f28c28] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#020b18]"
            onClick={closeMenu}
          >
            DEMANDER UN DEVIS
          </Link>
        </nav>
      </div>
    </header>
  );
}
