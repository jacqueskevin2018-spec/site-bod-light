import Link from "next/link";

import FloatingActions from "@/components/FloatingActions";
import { company } from "@/data/company";
import { homepage } from "@/data/homepage";

export const metadata = {
  title: "Formations | BOD LIGHT Academy",
  description:
    "BOD LIGHT Academy : infographie, création de contenu, montage vidéo et intelligence artificielle.",
};

export default function FormationsPage() {
  return (
    <main className="bg-white">
      <section className="bg-[#020b18] px-5 py-16 text-white sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase text-[#f5c542]">
            {homepage.training.title}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
            {homepage.training.description}
          </h1>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {homepage.training.items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#f5c542]/70 hover:shadow-xl hover:shadow-[#0b2a5b]/10"
            >
              <p className="text-sm font-semibold uppercase text-[#f28c28]">
                Module
              </p>
              <h2 className="mt-3 text-xl font-semibold text-[#07182d]">
                {item.title}
              </h2>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-7xl">
          <Link
            href={company.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-gradient-to-r from-[#f28c28] to-[#f5c542] px-6 py-3 text-sm font-semibold text-[#06162b] transition duration-300 hover:-translate-y-1"
          >
            Inscription WhatsApp
          </Link>
        </div>
      </section>
      <FloatingActions />
    </main>
  );
}
