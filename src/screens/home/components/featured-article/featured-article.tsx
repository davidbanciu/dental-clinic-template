import { Link } from "react-router-dom";

import dentistArticle from "../../../../images/lead_generation.jpg";

import { useLanguage } from "../../../../hooks";

export const FeaturedArticle = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-white px-6 py-24 md:px-10 lg:px-16 xl:px-32">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* LEFT CONTENT */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              {t.home.featuredArticle.badge}
            </p>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
              {t.home.featuredArticle.title}
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              {t.home.featuredArticle.description}
            </p>

            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 text-lg font-medium text-slate-700 transition-colors hover:text-blue-600"
            >
              {t.home.featuredArticle.readMore}
              <span>→</span>
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div>
            <img
              src={dentistArticle}
              alt={t.home.featuredArticle.title}
              className="h-[420px] w-full rounded-2xl object-cover shadow-lg"
            />

            <p className="mt-4 text-right text-sm italic text-slate-500">
              {t.home.featuredArticle.caption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
