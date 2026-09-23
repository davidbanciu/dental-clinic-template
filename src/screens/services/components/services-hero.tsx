import { Navbar } from "../../../shared-components";
import { useLanguage } from "../../../hooks";

export const ServicesHero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[var(--primary)] via-sky-500 to-[var(--accent)]">
      {/* Navbar */}
      <div className="mx-auto max-w-[1200px] px-6 lg:px-16">
        <Navbar />
      </div>

      {/* Hero Content */}
      <div className="mx-auto max-w-[1200px] px-6 pb-36 pt-20 lg:px-16 lg:pt-28">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--primary-light)]">
          {t.services.hero.badge}
        </p>

        <h1 className="mt-6 max-w-3xl text-5xl font-extrabold leading-tight text-white md:text-6xl">
          {t.services.hero.title}
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--primary-light)]">
          {t.services.hero.subtitle}
        </p>
      </div>

      {/* Bottom Wave */}
      <svg
        viewBox="0 0 1440 220"
        className="block w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#ffffff"
          d="M0,170 C140,120 240,210 370,165 C520,110 590,215 730,170 C860,125 930,20 1040,80 C1140,135 1230,190 1330,120 C1395,75 1425,50 1440,60 L1440,240 L0,240 Z"
        />
      </svg>
    </section>
  );
};
