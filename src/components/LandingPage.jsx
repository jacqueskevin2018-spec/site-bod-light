import Image from "next/image";
import Link from "next/link";

import AnimatedStats from "@/components/AnimatedStats";
import ContactNudgePopup from "@/components/ContactNudgePopup";
import FloatingActions from "@/components/FloatingActions";
import { clients } from "@/data/clients";
import { company } from "@/data/company";
import { homepage } from "@/data/homepage";
import { portfolio } from "@/data/portfolio";
import HeroSection from "./HeroSection";

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase text-[#f28c28]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold text-[#07182d] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-4 max-w-2xl text-justify text-base leading-7 text-slate-600 sm:text-center">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function LandingPage() {
  const featuredProjects = portfolio.projects.slice(0, 3);

  return (
    <main className="flex-1 overflow-hidden bg-white">
      <HeroSection />

      <section className="px-5 py-12 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 rounded-3xl border border-slate-200 bg-[#f8fafc] p-6 shadow-sm sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-[#f28c28]">
              {homepage.freeDiagnostic.title}
            </p>
            <h2 className="mt-3 max-w-3xl text-2xl font-semibold leading-tight text-[#07182d] sm:text-3xl">
              {homepage.freeDiagnostic.text}
            </h2>
            <p className="mt-3 max-w-2xl text-justify text-sm leading-7 text-slate-600 sm:text-left">
              {homepage.freeDiagnostic.description}
            </p>
          </div>
          <Link
            href={company.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-12 items-center justify-center rounded-md bg-gradient-to-r from-[#f28c28] to-[#f5c542] px-6 py-3 text-center text-sm font-semibold text-[#06162b] transition duration-300 hover:-translate-y-1"
          >
            {homepage.freeDiagnostic.cta}
          </Link>
        </div>
      </section>

      <section id="realisations" className="px-5 py-12 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Réalisations"
            title="Nos réalisations"
            description="Quelques projets pour découvrir l’univers visuel BOD LIGHT."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <article
                key={project.image}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0b2a5b]/10"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 90vw, 30vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase text-[#f28c28]">
                    {project.type}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-[#07182d]">
                    {project.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/realisations"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#07182d] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#0d4ca3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5c542] focus-visible:ring-offset-4"
            >
              Voir toutes les réalisations
            </Link>
          </div>
        </div>
      </section>

      {clients.length > 0 ? (
        <section className="bg-slate-50 px-5 py-12 sm:px-8 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeader eyebrow="Clients" title="Ils nous font confiance" />
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
              {clients.map((client) => (
                <div
                  key={client.logo}
                  className="relative flex aspect-[4/3] items-center justify-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    sizes="(max-width: 640px) 45vw, 160px"
                    className="object-contain p-4"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <AnimatedStats stats={homepage.stats} />

      <section className="px-5 py-12 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Témoignages" title="Ce que disent nos clients" />
          <div className="grid gap-4 md:grid-cols-3">
            {homepage.testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="premium-reveal rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0b2a5b]/10"
              >
                <p className="text-base leading-8 text-slate-700">
                  “{testimonial.text}”
                </p>
                <p className="mt-6 font-semibold text-[#07182d]">
                  {testimonial.name}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#020b18] px-5 py-12 pb-28 text-white sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-3xl border border-white/10 bg-white/[0.08] p-6 shadow-2xl shadow-black/20 backdrop-blur sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-[#f5c542]">
              Contact final
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              {homepage.finalCta.title}
            </h2>
            <p className="mt-3 max-w-2xl text-justify text-base leading-8 text-white/72 sm:text-left">
              {homepage.finalCta.description}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={company.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 items-center justify-center rounded-md bg-gradient-to-r from-[#f28c28] to-[#f5a21c] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#f5c542]/35"
            >
              WhatsApp
            </a>
            <a
              href={company.phone.href}
              className="flex min-h-12 items-center justify-center rounded-md border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/[0.18]"
            >
              Appel
            </a>
          </div>
        </div>
      </section>

      <ContactNudgePopup />
      <FloatingActions />
      <div className="fixed inset-x-0 bottom-0 z-[75] grid grid-cols-2 gap-2 border-t border-white/10 bg-[#020b18]/94 p-3 shadow-2xl shadow-black/20 backdrop-blur-xl sm:hidden">
        <a
          href={company.phone.href}
          className="flex min-h-12 items-center justify-center rounded-md bg-[#0d4ca3] px-3 py-2 text-center text-sm font-semibold text-white"
        >
          Appel 696951471
        </a>
        <a
          href={company.whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-12 items-center justify-center rounded-md bg-[#25d366] px-3 py-2 text-center text-sm font-semibold text-white"
        >
          WhatsApp 641883097
        </a>
      </div>
    </main>
  );
}
