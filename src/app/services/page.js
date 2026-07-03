import FloatingActions from "@/components/FloatingActions";
import PremiumCarousel from "@/components/PremiumCarousel";
import ServiceGalleryTabs from "@/components/ServiceGalleryTabs";
import { company } from "@/data/company";
import { recommendedServices, serviceGalleries } from "@/data/internalPages";

export const metadata = {
  title: "Services | BOD LIGHT SARL",
  description:
    "Infographie, montage vidéo, Coach IA et enseigne lumineuse avec BOD LIGHT SARL à Douala.",
};

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <section className="bg-[#020b18] px-5 py-14 text-white sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f5c542]">
            Services
          </p>
          <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">
            Choisissez le support qui donnera plus de présence à votre marque.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
            Visuels, vidéos, IA et signalétique : chaque service est pensé pour
            rendre votre activité plus claire, plus crédible et plus visible.
          </p>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <ServiceGalleryTabs services={serviceGalleries} />
        </div>
      </section>

      <PremiumCarousel
        eyebrow="Recommandé"
        title="Solutions à combiner pour un impact complet"
        items={recommendedServices}
        ctaHref={company.whatsapp.href}
        ctaLabel="Commander maintenant"
      />

      <FloatingActions />
    </main>
  );
}
