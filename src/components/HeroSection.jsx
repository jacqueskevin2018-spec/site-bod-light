import Image from "next/image";

import { company } from "@/data/company";
import { homepage } from "@/data/homepage";

export default function HeroSection() {
  return (
    <section className="relative isolate min-h-[calc(100svh-6rem)] overflow-hidden bg-[#020b18] text-white lg:min-h-[calc(100svh-7rem)]">
      <Image
        src={homepage.hero.background}
        alt="Création visuelle BOD LIGHT SARL"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover saturate-125 blur-[2px]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#020b18]/94 via-[#06162b]/88 to-[#031126]/92 backdrop-blur-[4px]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_18%,rgba(16,80,170,0.46),transparent_27%),radial-gradient(circle_at_80%_24%,rgba(245,197,66,0.34),transparent_24%),radial-gradient(circle_at_58%_82%,rgba(242,140,40,0.26),transparent_30%)]" />
      <div className="hero-texture absolute inset-0 -z-10 opacity-[0.18]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#020b18] to-transparent" />

      <div className="mx-auto grid min-h-[calc(100svh-6rem)] w-full max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-18 lg:min-h-[calc(100svh-7rem)] lg:grid-cols-[1fr_0.9fr] lg:px-10 lg:py-24">
        <div className="max-w-3xl text-center lg:text-left">
          <p className="hero-fade-up inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase text-[#f5c542] shadow-sm backdrop-blur">
            {homepage.hero.eyebrow}
          </p>
          <h1 className="hero-reference-title mt-7 text-4xl font-semibold leading-[1.08] text-white min-[380px]:text-5xl sm:text-6xl lg:text-6xl xl:text-7xl">
            <span className="title-line normal-case">{homepage.hero.titleLineOne}</span>
            <span className="title-line">
              <span className="normal-case">{homepage.hero.titleLineTwoPrefix} </span>
              <span className="title-light normal-case">
                {homepage.hero.titleHighlight}
              </span>{" "}
              <span className="normal-case">{homepage.hero.titleLineTwoSuffix}</span>
            </span>
          </h1>
          <p className="hero-fade-up mx-auto mt-7 max-w-2xl text-base leading-8 text-white/[0.82] sm:text-lg lg:mx-0">
            {homepage.hero.subtitle}
          </p>
          <p className="hero-fade-up mt-5 text-sm font-semibold text-[#f5c542] sm:text-base">
            {homepage.hero.expertise}
          </p>
          <p className="hero-fade-up mt-3 text-sm font-medium text-white/70">
            {company.location.mention}
          </p>

          <div className="hero-fade-up mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
            <a
              href={company.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-14 flex-col items-center justify-center rounded-md bg-gradient-to-r from-[#f28c28] to-[#f5a21c] px-6 py-3 text-center text-sm font-extrabold uppercase text-white shadow-lg shadow-[#f28c28]/30 transition duration-300 hover:-translate-y-1 hover:from-[#f5a21c] hover:to-[#f5c542] hover:shadow-[#f5c542]/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#06162b]"
            >
              <span>Commander sur WhatsApp</span>
              <span className="text-base">{company.whatsapp.display}</span>
            </a>
            <a
              href={company.phone.href}
              className="flex min-h-14 flex-col items-center justify-center rounded-md bg-[#0d4ca3] px-6 py-3 text-center text-sm font-extrabold uppercase text-white shadow-lg shadow-[#0d4ca3]/30 transition duration-300 hover:-translate-y-1 hover:bg-[#145bb4] hover:shadow-[#145bb4]/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5c542] focus-visible:ring-offset-4 focus-visible:ring-offset-[#06162b]"
            >
              <span>Appeler maintenant</span>
              <span className="text-base">{company.phone.display}</span>
            </a>
            <a
              href="#realisations"
              className="flex min-h-14 items-center justify-center rounded-md border border-white/20 bg-white/10 px-6 py-3 text-center text-sm font-extrabold uppercase text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/[0.18] hover:shadow-lg hover:shadow-[#145bb4]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5c542] focus-visible:ring-offset-4 focus-visible:ring-offset-[#06162b]"
            >
              Voir nos réalisations
            </a>
          </div>
        </div>

        <div className="hero-logo-float relative mx-auto flex w-full max-w-md flex-col items-center gap-5 lg:max-w-xl">
          <div className="absolute inset-4 -z-10 rounded-full bg-[#f5c542]/30 blur-3xl" />
          <div className="absolute inset-14 -z-10 rounded-full bg-[#009dff]/32 blur-3xl" />
          <div className="relative aspect-[4/5] w-full max-w-[16rem] overflow-hidden rounded-[2rem] bg-[#06162b]/35 shadow-2xl shadow-[#f5c542]/18 ring-1 ring-[#f5c542]/20 backdrop-blur sm:max-w-xs lg:max-w-sm">
            <Image
              src="/hero/hero-visual.png"
              alt="Visuel publicitaire BOD LIGHT SARL"
              fill
              priority
              sizes="(max-width: 640px) 288px, (max-width: 1024px) 384px, 448px"
              className="object-cover drop-shadow-[0_0_34px_rgba(245,197,66,0.42)]"
            />
          </div>

          <div className="w-full max-w-md rounded-2xl border border-white/12 bg-white/[0.10] p-4 text-left shadow-xl shadow-black/20 backdrop-blur">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-white/10">
                <Image
                  src={homepage.manager.photo}
                  alt="Kevin Bodol, Manager de BOD LIGHT SARL"
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  {homepage.manager.name}
                </p>
                <p className="mt-1 text-xs font-medium text-[#f5c542]">
                  {homepage.manager.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
