"use client";

import Image from "next/image";
import { useState } from "react";

import { company } from "@/data/company";

export default function PortfolioShowcase({ portfolio }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {portfolio.categories.map((category) => (
          <span
            key={category}
            className="rounded-full border border-[#0b2a5b]/10 bg-white px-4 py-2 text-xs font-semibold uppercase text-[#0b2a5b] shadow-sm"
          >
            {category}
          </span>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {portfolio.projects.map((project) => (
          <button
            key={project.image}
            type="button"
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#0b2a5b]/12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5c542] focus-visible:ring-offset-4"
            onClick={() => setSelectedProject(project)}
          >
            <span className="relative block aspect-[4/3] overflow-hidden bg-slate-100">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 280px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </span>
            <span className="block p-4">
              <span className="text-xs font-semibold uppercase text-[#f28c28]">
                {project.type}
              </span>
              <span className="mt-2 block text-lg font-semibold text-[#07182d]">
                {project.title}
              </span>
              <span className="mt-2 block text-sm leading-6 text-slate-600">
                {project.description}
              </span>
            </span>
          </button>
        ))}
      </div>

      <article
        id="spot-video"
        className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-[#07182d] p-4 text-white shadow-sm"
      >
        <div className="mb-4">
          <p className="text-xs font-semibold uppercase text-[#f5c542]">
            {portfolio.video.type}
          </p>
          <h3 className="mt-1 text-xl font-semibold">{portfolio.video.title}</h3>
          <p className="mt-1 text-sm text-white/70">
            {portfolio.video.description}
          </p>
        </div>
        {portfolio.video.available ? (
          <video
            className="aspect-video w-full rounded-xl bg-black object-cover"
            controls
            preload="metadata"
            poster={portfolio.video.thumbnail}
          >
            <source src={portfolio.video.src} type="video/mp4" />
          </video>
        ) : (
          <div className="relative overflow-hidden rounded-xl bg-black">
            <div className="relative aspect-video">
              <Image
                src={portfolio.video.thumbnail}
                alt={portfolio.video.title}
                fill
                sizes="90vw"
                className="object-cover opacity-70"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/12 text-white backdrop-blur">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-7 w-7 translate-x-0.5"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="mt-4 text-lg font-semibold">
                  Vidéo bientôt disponible
                </p>
                <a
                  href={company.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex min-h-11 items-center justify-center rounded-md bg-gradient-to-r from-[#f28c28] to-[#f5c542] px-5 py-2.5 text-sm font-semibold text-[#06162b] transition hover:-translate-y-0.5"
                >
                  Demander un spot vidéo
                </a>
              </div>
            </div>
          </div>
        )}
      </article>

      {selectedProject ? (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-[#020b18]/85 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={selectedProject.title}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Fermer l’image"
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#07182d] shadow-md transition hover:bg-[#f28c28] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5c542]"
              onClick={() => setSelectedProject(null)}
            >
              X
            </button>
            <div className="relative aspect-video bg-slate-100">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold uppercase text-[#f28c28]">
                {selectedProject.type}
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-[#07182d]">
                {selectedProject.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {selectedProject.description}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
