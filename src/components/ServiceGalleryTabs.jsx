"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { company } from "@/data/company";

export default function ServiceGalleryTabs({ services }) {
  const [activeServiceTitle, setActiveServiceTitle] = useState(services[0]?.title);

  const activeService = useMemo(
    () =>
      services.find((service) => service.title === activeServiceTitle) ??
      services[0],
    [activeServiceTitle, services],
  );

  if (!activeService) {
    return null;
  }

  return (
    <div>
      <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-3 sm:mx-0 sm:flex-wrap sm:px-0">
        {services.map((service) => {
          const isActive = activeService.title === service.title;

          return (
            <button
              key={service.title}
              type="button"
              className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition duration-300 ${
                isActive
                  ? "border-[#07182d] bg-[#07182d] text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:border-[#f5c542] hover:text-[#07182d]"
              }`}
              onClick={() => setActiveServiceTitle(service.title)}
            >
              {service.title}
            </button>
          );
        })}
      </div>

      <article className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="grid gap-0 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="bg-[#020b18] p-6 text-white sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#f5c542]">
              Service
            </p>
            <h2 className="mt-4 text-3xl font-semibold">
              {activeService.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/72">
              {activeService.description}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a
                href="#galerie-service"
                className="flex min-h-11 items-center justify-center rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-[#07182d] transition hover:-translate-y-0.5 hover:bg-[#f5c542]"
              >
                Découvrir
              </a>
              <a
                href={company.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-center justify-center rounded-md bg-gradient-to-r from-[#f28c28] to-[#f5c542] px-5 py-2.5 text-sm font-semibold text-[#06162b] transition hover:-translate-y-0.5"
              >
                Commander maintenant
              </a>
            </div>
          </div>

          <div
            id="galerie-service"
            className="grid gap-3 p-4 sm:grid-cols-2 sm:p-5"
          >
            {activeService.images.map((image, index) => (
              <div
                key={image}
                className={`relative overflow-hidden rounded-2xl bg-slate-100 ${
                  index === 0 ? "aspect-[4/3] sm:col-span-2" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={image}
                  alt={`${activeService.title} ${index + 1}`}
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
