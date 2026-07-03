"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { company } from "@/data/company";

export default function FeaturedPortfolioTabs({ categories }) {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.label);

  const activeItems = useMemo(() => {
    return (
      categories.find((category) => category.label === activeCategory)?.items ??
      []
    );
  }, [activeCategory, categories]);

  return (
    <div>
      <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-3 sm:mx-0 sm:justify-center sm:px-0">
        {categories.map((category) => {
          const isActive = activeCategory === category.label;

          return (
            <button
              key={category.label}
              type="button"
              className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition duration-300 ${
                isActive
                  ? "border-[#07182d] bg-[#07182d] text-white shadow-lg shadow-[#07182d]/15"
                  : "border-slate-200 bg-white text-slate-600 hover:border-[#f5c542] hover:text-[#07182d]"
              }`}
              onClick={() => setActiveCategory(category.label)}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <div className="-mx-5 mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3">
        {activeItems.map((project) => (
          <article
            key={`${activeCategory}-${project.title}`}
            className="group min-w-[78vw] max-w-[20rem] snap-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0b2a5b]/10 md:min-w-0 md:max-w-none"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 78vw, (max-width: 1024px) 45vw, 31vw"
                className="object-cover transition-transform duration-500 md:group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold uppercase text-[#f28c28]">
                {activeCategory}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-[#07182d]">
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
                  <path d="M7 4h-2l-1 2H2v2h1.2l2.3 7.4A2 2 0 0 0 7.4 17H17v-2H7.4l-.4-1.2h10.6a2 2 0 0 0 1.9-1.4L21 7H6.1L5.5 5A2 2 0 0 0 3.6 4H2v2h1.6l2.5 8.2L7 17a2 2 0 1 0 2 2 2 2 0 0 0-2-2Zm10 0a2 2 0 1 0 2 2 2 2 0 0 0-2-2Z" />
                </svg>
                Commander maintenant
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
