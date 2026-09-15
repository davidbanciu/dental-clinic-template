import { FileText } from "lucide-react";

import { Navbar } from "../../../shared-components";
import { useLanguage } from "../../../hooks";

export const TermsHero = () => {
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
      <div className="mx-auto flex max-w-[900px] flex-col items-center px-6 py-20 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
          <FileText className="h-8 w-8 text-blue-600" />
        </div>

        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
          {t.terms.hero.badge}
        </p>

        <h1 className="mt-4 text-5xl font-extrabold text-slate-900 md:text-6xl">
          {t.terms.hero.title}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-500">
          {t.terms.hero.subtitle}
        </p>
      </div>
    </section>
  );
};
