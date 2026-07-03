import Image from "next/image";

import FloatingActions from "@/components/FloatingActions";
import PremiumCarousel from "@/components/PremiumCarousel";
import { company } from "@/data/company";
import { homepage } from "@/data/homepage";
import { trainingPrograms } from "@/data/internalPages";

export const metadata = {
  title: "Formations | BOD LIGHT Academy",
  description:
    "BOD LIGHT Academy : infographie, création de contenu, montage vidéo, marketing digital et intelligence artificielle.",
};

export default function FormationsPage() {
  return (
    <main className="bg-white">
      <section className="bg-[#020b18] px-5 py-14 text-white sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f5c542]">
            {homepage.training.title}
          </p>
          <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">
            Apprenez à créer des contenus plus beaux, plus rapides et plus utiles.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
            Des formations pratiques pour progresser en infographie, vidéo,
            intelligence artificielle, contenu et marketing digital.
          </p>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {trainingPrograms.map((program) => (
            <article
              key={program.title}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#07182d]/10"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 31vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f28c28]">
                  Formation
                </p>
                <h2 className="mt-3 text-xl font-semibold text-[#07182d]">
                  {program.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {program.description}
                </p>
                <a
                  href={company.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-11 items-center justify-center rounded-md bg-gradient-to-r from-[#f28c28] to-[#f5c542] px-5 py-2.5 text-sm font-semibold text-[#06162b] transition hover:-translate-y-0.5"
                >
                  Inscris-toi maintenant
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <PremiumCarousel
        eyebrow="Academy"
        title="Parcours recommandés"
        items={trainingPrograms}
        ctaHref={company.whatsapp.href}
        ctaLabel="Inscris-toi maintenant"
      />

      <FloatingActions />
    </main>
  );
}
