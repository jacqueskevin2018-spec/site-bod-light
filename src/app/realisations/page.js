import FloatingActions from "@/components/FloatingActions";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import { portfolio } from "@/data/portfolio";

export const metadata = {
  title: "Réalisations | BOD LIGHT SARL",
  description:
    "Portfolio BOD LIGHT SARL : signalétique, design graphique et vidéo.",
};

export default function RealisationsPage() {
  return (
    <main className="bg-white">
      <section className="bg-[#020b18] px-5 py-16 text-white sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase text-[#f5c542]">
            Portfolio
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
            Nos réalisations complètes.
          </h1>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <PortfolioShowcase portfolio={portfolio} />
        </div>
      </section>
      <FloatingActions />
    </main>
  );
}
