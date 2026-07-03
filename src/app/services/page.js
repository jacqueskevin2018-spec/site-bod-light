import Link from "next/link";

import FloatingActions from "@/components/FloatingActions";
import { homepage } from "@/data/homepage";

const SERVICE_ICONS = [
  <path key="design" d="M5 5h14v10H5zM8 19h8M10 15v4M8 8h8M8 11h5" />,
  <path key="video" d="M4 6h12v12H4zM16 10l4-2v8l-4-2M8 10l4 2-4 2z" />,
  <path key="ia" d="M12 4v3M12 17v3M4 12h3M17 12h3M8 8h8v8H8z" />,
  <path key="sign" d="M12 3l2.2 5.2L20 9l-4.3 3.8L17 19l-5-3.2L7 19l1.3-6.2L4 9l5.8-.8z" />,
];

export const metadata = {
  title: "Services | BOD LIGHT SARL",
  description:
    "Infographie, montage vidéo, Coach IA et enseigne lumineuse avec BOD LIGHT SARL à Douala.",
};

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <section className="bg-[#020b18] px-5 py-16 text-white sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase text-[#f5c542]">
            Services
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
            Des solutions créatives pour rendre votre marque visible.
          </h1>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {homepage.serviceOffer.map((service, index) => (
            <article
              key={service.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#f5c542]/70 hover:shadow-xl hover:shadow-[#0b2a5b]/10"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#07182d] text-[#f5c542]">
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
                  {SERVICE_ICONS[index]}
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-[#07182d]">
                {service.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-7xl">
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-gradient-to-r from-[#f28c28] to-[#f5c542] px-6 py-3 text-sm font-semibold text-[#06162b] transition duration-300 hover:-translate-y-1"
          >
            Demander un devis
          </Link>
        </div>
      </section>
      <FloatingActions />
    </main>
  );
}
