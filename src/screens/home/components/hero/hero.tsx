import { Link } from "react-router-dom";

import { Header } from "./header";
import agencyHero from "../../../../images/agency_hero.jpg";

import { useLanguage } from "../../../../hooks";

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[795px] overflow-hidden rounded-br-[320px] px-6 md:px-10 lg:px-16 xl:px-32">
      {/* Background image */}
      <img
        src={agencyHero}
        alt="Dental clinic"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to right, color-mix(in srgb, var(--primary) 80%, transparent), color-mix(in srgb, var(--secondary) 70%, transparent), color-mix(in srgb, var(--accent) 75%, transparent))",
        }}
      />

      {/* Header */}
      <Header />

      {/* Hero content */}
      <div className="relative z-20 mx-auto flex min-h-[795px] max-w-[1200px] items-center">
        <div className="max-w-[520px] pt-20">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--primary-light)]">
            {t.home.hero.badge}
          </p>

          <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] text-white xl:text-6xl">
            {t.home.hero.title}
          </h1>

          <p className="mt-6 max-w-[500px] text-lg leading-relaxed text-white">
            {t.home.hero.subtitle}
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-[var(--primary)] px-8 py-4 text-sm font-semibold uppercase tracking-wide !text-white transition-colors hover:bg-[var(--primary)]"
          >
            {t.home.hero.button}
          </Link>
        </div>
      </div>
    </section>
  );
};
