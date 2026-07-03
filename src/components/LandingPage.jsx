import Image from "next/image";

import AnimatedStats from "@/components/AnimatedStats";
import ContactNudgePopup from "@/components/ContactNudgePopup";
import FloatingActions from "@/components/FloatingActions";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import PromoPopup from "@/components/PromoPopup";
import { clients } from "@/data/clients";
import { company } from "@/data/company";
import { homepage } from "@/data/homepage";
import { portfolio } from "@/data/portfolio";
import HeroSection from "./HeroSection";

const SERVICE_ICONS = {
  "Identité & Design": (
    <path d="M5 5h14v10H5zM8 19h8M10 15v4M8 8h8M8 11h5" />
  ),
  "Création vidéo": (
    <path d="M4 6h12v12H4zM16 10l4-2v8l-4-2M8 10l4 2-4 2z" />
  ),
  "Intelligence Artificielle": (
    <path d="M12 4v3M12 17v3M4 12h3M17 12h3M8 8h8v8H8zM10 10h4v4h-4z" />
  ),
  Signalétique: (
    <path d="M12 3l2.2 5.2L20 9l-4.3 3.8L17 19l-5-3.2L7 19l1.3-6.2L4 9l5.8-.8z" />
  ),
};

const TRAINING_STYLES = {
  blue: {
    className: "border-[#145bb4]/40 bg-[#145bb4]/15 text-[#bcd8ff]",
    icon: <path d="M5 5h14v14H5zM8 9h8M8 13h5M8 17h3" />,
  },
  gold: {
    className: "border-[#f5c542]/40 bg-[#f5c542]/15 text-[#ffe7a0]",
    icon: <path d="M12 3l2.5 5 5.5.8-4 3.9.9 5.5-4.9-2.6-4.9 2.6.9-5.5-4-3.9 5.5-.8z" />,
  },
  orange: {
    className: "border-[#f28c28]/45 bg-[#f28c28]/15 text-[#ffc48a]",
    icon: <path d="M4 7h16v10H4zM8 7v10M16 7v10M10 12l4-2.5v5z" />,
  },
};

const WHY_ICONS = [
  <path key="creativity" d="M12 3l2.2 5.2L20 9l-4.3 3.8L17 19l-5-3.2L7 19l1.3-6.2L4 9l5.8-.8z" />,
  <path key="speed" d="M13 2 4 14h7l-1 8 9-12h-7z" />,
  <path key="support" d="M6 12a6 6 0 0 1 12 0v4a3 3 0 0 1-3 3h-2M6 12v5h3v-5zm12 0v5h-3v-5z" />,
  <path key="location" d="M12 21s7-5.1 7-11a7 7 0 1 0-14 0c0 5.9 7 11 7 11zM12 10.5h.01" />,
];

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
        <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
      ) : null}
    </div>
  );
}

export default function LandingPage() {
  return (
    <main className="flex-1 overflow-hidden bg-white">
      <HeroSection />

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Diagnostic"
            title="Votre image mérite mieux"
            description="Une bonne communication commence par une image claire, mémorable et cohérente."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {homepage.problemSolutions.map((item) => (
              <article
                key={item.problem}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0b2a5b]/10"
              >
                <p className="text-sm font-semibold uppercase text-[#f28c28]">
                  Problème
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[#07182d]">
                  {item.problem}
                </h3>
                <div className="mt-6 rounded-xl bg-[#07182d] p-5 text-white">
                  <p className="text-sm font-semibold uppercase text-[#f5c542]">
                    Solution BOD LIGHT
                  </p>
                  <p className="mt-2 text-base leading-7 text-white/[0.82]">
                    {item.solution}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Services"
            title="Des solutions créatives pour grandir"
            description="Nous ne livrons pas seulement des outils : nous construisons des supports qui servent votre visibilité."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {homepage.services.map((service) => (
              <article
                key={service.title}
                className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#f5c542]/70 hover:shadow-2xl hover:shadow-[#0b2a5b]/15"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#0b2a5b] text-[#f5c542] shadow-lg shadow-[#0b2a5b]/15 transition duration-300 group-hover:bg-[#f5c542] group-hover:text-[#0b2a5b] group-hover:shadow-[#f5c542]/35">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                  >
                    {SERVICE_ICONS[service.title]}
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#07182d]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Pourquoi nous choisir"
            title="Une équipe créative, proche et orientée résultat"
            description="BOD LIGHT associe sens visuel, rapidité d’exécution et accompagnement pour faire avancer votre marque."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {homepage.whyChoose.map((item, index) => (
              <article
                key={item.title}
                className="premium-reveal rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#f5c542]/60 hover:shadow-xl hover:shadow-[#0b2a5b]/10"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#07182d] text-[#f5c542]">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                  >
                    {WHY_ICONS[index]}
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#07182d]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#07182d] px-5 py-16 text-white sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase text-[#f5c542]">
              Processus
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Notre méthode
            </h2>
            <p className="mt-4 text-base leading-8 text-white/72">
              Une progression simple pour transformer votre besoin en résultat
              professionnel.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {homepage.method.map((step, index) => (
              <article
                key={step.step}
                className="relative rounded-2xl border border-white/10 bg-white/[0.08] p-6 shadow-sm backdrop-blur"
              >
                {index < homepage.method.length - 1 ? (
                  <span className="absolute left-12 top-10 hidden h-px w-full bg-gradient-to-r from-[#f5c542] to-transparent md:block" />
                ) : null}
                <p className="relative z-10 text-3xl font-semibold text-[#f5c542]">
                  {step.step}
                </p>
                <h3 className="relative z-10 mt-5 text-xl font-semibold">
                  {step.title}
                </h3>
                <p className="relative z-10 mt-3 text-sm leading-6 text-white/70">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#07182d] px-5 py-16 text-white sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-[#f5c542]">
              {homepage.training.title}
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Développez vos compétences créatives et digitales.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/75">
              {homepage.training.description}
            </p>
            <a
              href={company.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-[#f5c542] px-6 py-3 text-sm font-semibold text-[#07182d] transition duration-300 hover:-translate-y-1 hover:bg-[#ffd96a] hover:shadow-lg hover:shadow-[#f5c542]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#07182d]"
            >
              {homepage.training.cta}
            </a>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {homepage.training.items.map((item) => (
              <div
                key={item.title}
                className={`premium-reveal rounded-xl border p-5 text-sm font-semibold shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  TRAINING_STYLES[item.accent].className
                }`}
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-current">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                  >
                    {TRAINING_STYLES[item.accent].icon}
                  </svg>
                </div>
                <span className="text-white">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="realisations"
        className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Réalisations"
            title="Des projets pensés pour être vus"
            description="Signalétique, design graphique et vidéo : chaque réalisation est cadrée pour servir votre marque."
          />
          <PortfolioShowcase portfolio={portfolio} />
        </div>
      </section>

      <section id="manager" className="bg-[#07182d] px-5 py-16 text-white sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-xl shadow-slate-900/10">
            <Image
              src={homepage.manager.photo}
              alt="Kevin Bodol, Manager de BOD LIGHT SARL"
              fill
              sizes="(max-width: 1024px) 90vw, 384px"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase text-[#f28c28]">
              {homepage.manager.title}
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              {homepage.manager.name}
            </h2>
            <p className="mt-2 text-lg font-semibold text-[#f5c542]">
              {homepage.manager.role}
            </p>
            <p className="mt-1 text-sm text-white/60">
              {homepage.manager.company}
            </p>
            <blockquote className="mt-6 max-w-2xl text-2xl font-medium leading-10 text-white/88">
              “{homepage.manager.quote}”
            </blockquote>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
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

      <AnimatedStats stats={homepage.stats} />

      <section className="bg-[#020b18] px-5 py-16 text-white sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-3xl border border-white/10 bg-white/[0.08] p-6 shadow-2xl shadow-black/20 backdrop-blur sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-[#f5c542]">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              {homepage.finalCta.title}
            </h2>
            <p className="mt-3 text-base leading-8 text-white/72">
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

      {clients.length > 0 ? (
        <section className="bg-slate-50 px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Clients"
              title="Ils nous font confiance"
            />
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

      <section id="contact" className="bg-[#07182d] px-5 py-16 text-white sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-white/[0.08] p-6 shadow-xl shadow-black/10 backdrop-blur sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase text-[#f5c542]">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Parlons de votre projet.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/75">
                Appel, WhatsApp ou rendez-vous : BOD LIGHT SARL vous accompagne
                depuis Douala dans tout le Cameroun.
              </p>
            </div>
            <div className="grid gap-3 text-sm">
              <a
                href={company.phone.href}
                className="rounded-lg bg-white px-5 py-4 font-semibold text-[#07182d] transition-colors hover:bg-[#f5c542]"
              >
                Appel : {company.phone.display}
              </a>
              <a
                href={company.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-[#f28c28] px-5 py-4 font-semibold text-white transition-colors hover:bg-[#d97706]"
              >
                WhatsApp : {company.whatsapp.display}
              </a>
              <div className="rounded-lg border border-white/10 px-5 py-4 text-white/[0.85]">
                Ville : {company.location.city}
              </div>
              <div className="rounded-lg border border-white/10 px-5 py-4 text-white/[0.85]">
                Zone : {company.location.zone}
              </div>
            </div>
          </div>
        </div>
      </section>

      <PromoPopup />
      <ContactNudgePopup />
      <FloatingActions />
    </main>
  );
}
