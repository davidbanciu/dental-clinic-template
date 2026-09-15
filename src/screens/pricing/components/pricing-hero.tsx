import { Navbar } from "../../../shared-components";
import { useLanguage } from "../../../hooks";

export const PricingHero = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-white">
      {/* Navbar */}
      <header className="border-b">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-16">
          <Navbar dark />
        </div>
      </header>

      {/* Hero */}
      <div className="mx-auto max-w-[900px] px-6 py-20 text-center lg:px-16">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">
          {t.pricing.hero.badge}
        </p>

        <h1 className="mt-4 text-5xl font-extrabold text-slate-900 md:text-6xl">
          {t.pricing.hero.title}
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-500">
          {t.pricing.hero.subtitle}
        </p>
      </div>
    </section>
  );
};
