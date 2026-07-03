import Link from "next/link";

import FloatingActions from "@/components/FloatingActions";
import { company } from "@/data/company";

export const metadata = {
  title: "Contact | BOD LIGHT SARL",
  description:
    "Contactez BOD LIGHT SARL à Douala par appel ou WhatsApp pour votre projet.",
};

export default function ContactPage() {
  return (
    <main className="bg-white">
      <section className="bg-[#020b18] px-5 py-16 text-white sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase text-[#f5c542]">
            Contact
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
            Parlons de votre projet.
          </h1>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#07182d]">
              Coordonnées
            </h2>
            <div className="mt-6 grid gap-3 text-sm">
              <Link
                href={company.phone.href}
                className="rounded-lg bg-[#07182d] px-5 py-4 font-semibold text-white transition hover:bg-[#0d4ca3]"
              >
                Appel : {company.phone.display}
              </Link>
              <Link
                href={company.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-[#f28c28] px-5 py-4 font-semibold text-white transition hover:bg-[#d97706]"
              >
                WhatsApp : {company.whatsapp.display}
              </Link>
              <div className="rounded-lg border border-slate-200 px-5 py-4 text-slate-700">
                Adresse : Douala
              </div>
              <div className="rounded-lg border border-slate-200 px-5 py-4 text-slate-700">
                Zone : {company.location.zone}
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#07182d]">
              Demande rapide
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Envoyez-nous directement votre besoin sur WhatsApp : visuel,
              enseigne, vidéo, formation ou accompagnement IA.
            </p>
          </div>
        </div>
      </section>
      <FloatingActions />
    </main>
  );
}
