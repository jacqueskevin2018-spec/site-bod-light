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
    <div className="mx-auto mb-8 max-w-3xl text-center lg:mb-10">
      <p className="text-sm font-semibold uppercase text-[#f28c28]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-semibold text-[#07182d] sm:text-4xl">
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
  const featuredProjects = portfolio.projects.slice(0, 4);

  return (
    <main className="flex-1 overflow-hidden bg-white">
      <HeroSection />

      <section id="realisations" className="px-5 py-10 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Réalisations"
            title="Nos réalisations"
            description="La preuve la plus simple reste visuelle : une marque plus claire, plus visible, plus crédible."
          />
          <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4">
            {featuredProjects.map((project) => (
              <article
                key={project.image}
                className="group min-w-[78vw] max-w-[20rem] snap-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0b2a5b]/10 md:min-w-0 md:max-w-none"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 78vw, 30vw"
                    className="object-cover transition-transform duration-500 md:group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase text-[#f28c28]">
                    {project.type}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-[#07182d] sm:text-xl">
                    {project.title}
                  </h3>
                  <a
                    href={company.whatsapp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex min-h-10 items-center gap-2 rounded-md bg-gradient-to-r from-[#f28c28] to-[#f5c542] px-4 py-2 text-xs font-semibold text-[#06162b] transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#f5c542]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#07182d]"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-4 w-4"
                      fill="currentColor"
                    >
                      <path d="M12.04 2.25A9.66 9.66 0 0 0 3.7 16.8l-1.1 4.03 4.13-1.08a9.62 9.62 0 0 0 5.3 1.52h.01a9.51 9.51 0 0 0 9.55-9.5 9.57 9.57 0 0 0-9.55-9.52Zm0 17.4h-.01a8.03 8.03 0 0 1-4.1-1.12l-.3-.18-2.45.64.65-2.38-.2-.31a8.04 8.04 0 1 1 6.41 3.35Zm4.42-6.03c-.24-.12-1.43-.7-1.65-.79-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
                    </svg>
                    Commander maintenant
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/realisations"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#07182d] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#0d4ca3] hover:shadow-lg hover:shadow-[#0d4ca3]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5c542] focus-visible:ring-offset-4"
            >
              Voir toutes les réalisations
            </Link>
          </div>
        </div>
      </section>

      {clients.length > 0 ? (
        <section className="bg-slate-50 px-5 py-10 sm:px-8 lg:px-10 lg:py-24">
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

      <section className="bg-[#020b18] px-5 py-14 text-white sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f5c542]">
              {homepage.serviceStory.eyebrow}
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              {homepage.serviceStory.title}
            </h2>
            <p className="mt-5 max-w-xl text-justify text-base leading-8 text-white/72 sm:text-left">
              {homepage.serviceStory.description}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {homepage.serviceStory.items.map((item, index) => (
              <article
                key={item.title}
                className="premium-reveal rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/10 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#f5c542]/40 hover:bg-white/[0.09]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f5c542]">
                  0{index + 1}
                </p>
                <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/68">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {homepage.serviceOffer.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#f5c542]/35 hover:bg-white/[0.08]"
            >
              <h3 className="text-base font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/62">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <AnimatedStats stats={homepage.stats} />

      <section className="px-5 py-10 sm:px-8 lg:px-10 lg:py-24">
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

      <section className="px-5 py-10 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 rounded-3xl border border-slate-200 bg-[#f8fafc] p-6 shadow-sm sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#f28c28]">
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
            className="flex min-h-12 items-center justify-center rounded-md bg-[#07182d] px-6 py-3 text-center text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#0d4ca3] hover:shadow-lg hover:shadow-[#0d4ca3]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5c542] focus-visible:ring-offset-4"
          >
            {homepage.freeDiagnostic.cta}
          </Link>
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
          📞 Appel 696951471
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
