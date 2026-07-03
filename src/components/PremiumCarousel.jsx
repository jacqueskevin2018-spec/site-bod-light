"use client";

import Image from "next/image";
import { useState } from "react";

export default function PremiumCarousel({ items, eyebrow, title, ctaHref, ctaLabel }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? items.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current === items.length - 1 ? 0 : current + 1));
  };

  if (!items.length) {
    return null;
  }

  return (
    <section className="px-5 py-12 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            {eyebrow ? (
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#f28c28]">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="mt-2 text-2xl font-semibold text-[#07182d] sm:text-3xl">
              {title}
            </h2>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              aria-label="Précédent"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#07182d] shadow-sm transition hover:-translate-y-0.5 hover:border-[#f5c542]"
              onClick={goToPrevious}
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Suivant"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#07182d] shadow-sm transition hover:-translate-y-0.5 hover:border-[#f5c542]"
              onClick={goToNext}
            >
              →
            </button>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          <article className="overflow-hidden rounded-3xl bg-[#020b18] text-white shadow-2xl shadow-[#07182d]/15">
            <div className="relative aspect-[16/10] min-h-72">
              <Image
                src={items[activeIndex].image}
                alt={items[activeIndex].title}
                fill
                sizes="(max-width: 1024px) 90vw, 55vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020b18]/86 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-semibold">
                  {items[activeIndex].title}
                </h3>
                {items[activeIndex].description ? (
                  <p className="mt-2 max-w-xl text-sm leading-7 text-white/72">
                    {items[activeIndex].description}
                  </p>
                ) : null}
              </div>
            </div>
          </article>

          <div className="grid gap-3">
            {items.map((item, index) => (
              <button
                key={`${item.title}-${index}`}
                type="button"
                className={`grid grid-cols-[4.75rem_1fr] items-center gap-4 rounded-2xl border p-3 text-left transition duration-300 ${
                  activeIndex === index
                    ? "border-[#f5c542] bg-[#07182d] text-white shadow-lg shadow-[#07182d]/15"
                    : "border-slate-200 bg-white text-[#07182d] hover:-translate-y-0.5 hover:border-[#f5c542]/60"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </span>
                <span>
                  <span className="block text-sm font-semibold">{item.title}</span>
                  {item.description ? (
                    <span
                      className={`mt-1 line-clamp-2 block text-xs leading-5 ${
                        activeIndex === index ? "text-white/68" : "text-slate-500"
                      }`}
                    >
                      {item.description}
                    </span>
                  ) : null}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2">
          {items.map((item, index) => (
            <button
              key={`${item.title}-dot`}
              type="button"
              aria-label={`Afficher ${item.title}`}
              className={`h-2 rounded-full transition-all ${
                activeIndex === index ? "w-7 bg-[#f28c28]" : "w-2 bg-slate-300"
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>

        {ctaHref && ctaLabel ? (
          <div className="mt-7 text-center">
            <a
              href={ctaHref}
              target={ctaHref.startsWith("http") ? "_blank" : undefined}
              rel={ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#07182d] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#0d4ca3]"
            >
              {ctaLabel}
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}
