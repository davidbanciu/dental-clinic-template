import dentistArticle from "../../../../images/lead_generation.jpg"; // Change to your image

export const FeaturedArticle = () => {
  return (
    <div className="bg-white px-6 py-24 md:px-10 lg:px-16 xl:px-32">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* LEFT CONTENT */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Improve Right Now
            </p>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
              7 Lead Generation Tips for Dentist Websites
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Discover practical strategies that help dental clinics generate
              more appointments through better websites, SEO, paid advertising,
              and conversion-focused landing pages.
            </p>

            <a
              href="#blog"
              className="mt-10 inline-flex items-center gap-2 text-lg font-medium text-slate-700 transition-colors hover:text-blue-600"
            >
              Read article
              <span>→</span>
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div>
            <img
              src={dentistArticle}
              alt="Dentist marketing article"
              className="h-[420px] w-full rounded-2xl object-cover shadow-lg"
            />

            <p className="mt-4 text-right text-sm italic text-slate-500">
              Aenean ante nisi, gravida non mattis semper.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
