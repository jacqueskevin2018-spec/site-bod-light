import Image from "next/image";
import Link from "next/link";

import FloatingActions from "@/components/FloatingActions";
import { company } from "@/data/company";
import { homepage } from "@/data/homepage";

export const metadata = {
  title: "Contact | BOD LIGHT SARL",
  description:
    "Contactez BOD LIGHT SARL à Douala par appel ou WhatsApp pour votre projet.",
};

export default function ContactPage() {
  return (
    <main className="bg-white">
      <section className="bg-[#020b18] px-5 py-14 text-white sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f5c542]">
              Contact
            </p>
            <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">
              Parlons de votre prochaine image.
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
              Une question, un projet ou une urgence visuelle ? BOD LIGHT SARL
              vous accompagne depuis Douala, partout au Cameroun.
            </p>
          </div>

          <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/20 backdrop-blur">
            <div className="grid sm:grid-cols-[0.85fr_1.15fr]">
              <div className="relative min-h-72 bg-[#07182d]">
                <Image
                  src={homepage.manager.photo}
                  alt="Kevin BODOL"
                  fill
                  sizes="(max-width: 768px) 90vw, 360px"
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#f5c542]">
                  Manager
                </p>
                <h2 className="mt-3 text-3xl font-semibold">Kevin BODOL</h2>
                <p className="mt-3 text-sm font-semibold text-white/82">
                  Manager & Directeur Créatif de BOD LIGHT SARL
                </p>
                <p className="mt-5 text-sm leading-7 text-white/68">
                  Passionné par la créativité, l’innovation et la communication
                  visuelle, il accompagne les entreprises vers une image forte
                  et professionnelle.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold text-[#07182d]">
              Coordonnées
            </h2>
            <div className="mt-6 grid gap-3 text-sm">
              <Link
                href={company.phone.href}
                className="rounded-2xl bg-[#07182d] px-5 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0d4ca3]"
              >
                Appel : 696951471
              </Link>
              <Link
                href={company.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-gradient-to-r from-[#f28c28] to-[#f5c542] px-5 py-4 font-semibold text-[#06162b] transition hover:-translate-y-0.5"
              >
                WhatsApp : 641883097
              </Link>
              <div className="rounded-2xl border border-slate-200 px-5 py-4 text-slate-700">
                Localisation : Douala, Cameroun
              </div>
              <div className="rounded-2xl border border-slate-200 px-5 py-4 text-slate-700">
                Intervention : Tout le Cameroun
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold text-[#07182d]">
              Demande rapide
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Envoyez-nous directement votre besoin sur WhatsApp : visuel,
              enseigne, vidéo, formation ou accompagnement IA. Nous revenons
              vers vous avec une orientation claire.
            </p>
            <Link
              href={company.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-md bg-[#07182d] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#0d4ca3]"
            >
              Écrire sur WhatsApp
            </Link>
          </div>
        </div>
      </section>
      <FloatingActions />
    </main>
  );
}
