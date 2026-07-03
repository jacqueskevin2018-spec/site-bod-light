import Image from "next/image";

import { company } from "@/data/company";
import { homepage } from "@/data/homepage";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#020b18] text-white lg:min-h-[calc(100svh-5rem)]">
      <Image
        src={homepage.hero.background}
        alt="Création visuelle BOD LIGHT SARL"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover saturate-125 blur-[3px]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#020814]/96 via-[#06162b]/91 to-[#020814]/96 backdrop-blur-[5px]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(13,76,163,0.42),transparent_28%),radial-gradient(circle_at_86%_18%,rgba(245,197,66,0.26),transparent_24%),radial-gradient(circle_at_58%_88%,rgba(242,140,40,0.18),transparent_31%)]" />
      <div className="hero-texture absolute inset-0 -z-10 opacity-[0.12]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-[#020814] to-transparent" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 px-5 py-9 sm:px-8 sm:py-14 lg:min-h-[calc(100svh-5rem)] lg:grid-cols-[0.95fr_0.9fr] lg:gap-14 lg:px-10 lg:py-20">
        <div className="max-w-3xl text-center lg:text-left">
          <p className="hero-fade-up mx-auto inline-flex rounded-full border border-white/12 bg-white/[0.07] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#f5c542] shadow-sm backdrop-blur lg:mx-0">
            {homepage.hero.brandLine}
          </p>
          <h1 className="hero-reference-title mx-auto mt-5 max-w-[22rem] text-[2rem] font-semibold leading-[1.18] text-white min-[380px]:text-4xl sm:max-w-2xl sm:text-5xl lg:mx-0 lg:mt-7 lg:text-6xl lg:leading-[1.08]">
            <span className="title-line normal-case">{homepage.hero.titleLineOne}</span>
            <span className="title-line">
              <span className="normal-case">{homepage.hero.titleLineTwoPrefix} </span>
              <span className="title-light normal-case">
                {homepage.hero.titleHighlight}
              </span>{" "}
              <span className="normal-case">{homepage.hero.titleLineTwoSuffix}</span>
            </span>
          </h1>
          <p className="hero-fade-up mt-5 text-sm font-semibold text-[#f5c542] lg:hidden">
            {homepage.hero.eyebrow}
          </p>
          <p className="hero-fade-up mx-auto mt-2 max-w-xs text-sm font-medium leading-6 text-white/72 lg:hidden">
            {homepage.hero.expertise}
          </p>
          <p className="hero-fade-up mx-auto mt-5 max-w-lg text-sm leading-7 text-white/[0.78] sm:text-base lg:mx-0 lg:mt-7 lg:text-lg lg:leading-8">
            {homepage.hero.subtitle}
          </p>
          <p className="hero-fade-up mx-auto mt-4 max-w-sm text-xs font-semibold uppercase tracking-[0.18em] text-white/45 lg:mx-0">
            {homepage.hero.proof}
          </p>

          <div className="hero-fade-up mt-7 flex flex-col items-center gap-2.5 sm:flex-row sm:flex-wrap sm:justify-center lg:mt-10 lg:items-stretch lg:justify-start lg:gap-3">
            <a
              href="/realisations"
              className="flex min-h-12 w-full max-w-xs items-center justify-center rounded-md bg-white px-5 py-2.5 text-center text-xs font-extrabold uppercase tracking-[0.08em] text-[#06162b] shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:bg-[#f5c542] hover:shadow-[#f5c542]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5c542] focus-visible:ring-offset-4 focus-visible:ring-offset-[#06162b] sm:w-auto lg:min-h-14 lg:px-6 lg:py-3 lg:text-sm"
            >
              Voir les réalisations
            </a>
            <a
              href={company.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 w-full max-w-xs items-center justify-center rounded-md border border-white/15 bg-white/[0.06] px-5 py-2.5 text-center text-xs font-semibold uppercase tracking-[0.08em] text-white/86 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#f5c542]/50 hover:bg-white/[0.12] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5c542] focus-visible:ring-offset-4 focus-visible:ring-offset-[#06162b] sm:w-auto lg:min-h-14 lg:px-6 lg:py-3 lg:text-sm"
            >
              Parler du projet
            </a>
          </div>
        </div>

        <div className="hero-logo-float relative mx-auto flex w-full max-w-md flex-col items-center gap-5 lg:max-w-xl">
          <div className="absolute inset-2 -z-10 rounded-full bg-[#f5c542]/20 blur-3xl" />
          <div className="absolute inset-12 -z-10 rounded-full bg-[#0d4ca3]/34 blur-3xl" />
          <div className="relative aspect-[4/5] w-full max-w-[12rem] overflow-hidden rounded-[1.35rem] bg-[#06162b]/35 shadow-2xl shadow-black/30 ring-1 ring-white/12 backdrop-blur sm:max-w-[16rem] lg:max-w-md lg:rounded-[2rem]">
            <Image
              src="/hero/hero-visual.png"
              alt="Visuel publicitaire BOD LIGHT SARL"
              fill
              priority
              sizes="(max-width: 640px) 288px, (max-width: 1024px) 384px, 448px"
              className="object-cover drop-shadow-[0_0_34px_rgba(245,197,66,0.42)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
