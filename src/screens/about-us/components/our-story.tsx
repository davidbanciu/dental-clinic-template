import clinicImage from "../../../images/agency_hero.jpg";
import { useLanguage } from "../../../hooks";

export const OurStory = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-white px-6 py-24 lg:px-16">
      <div className="mx-auto max-w-[900px]">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--secondary)]-600">
            {t.about.hero.badge}
          </p>

          <h2 className="mt-5 text-4xl font-extrabold text-slate-900">
            {t.about.story.title}
          </h2>
        </div>

        {/* Image */}
        <img
          src={clinicImage}
          alt="Dental clinic"
          className="mt-12 h-[420px] w-full rounded-3xl object-cover shadow-lg"
        />

        {/* Story */}
        <div className="mx-auto mt-14 max-w-[760px] space-y-8 text-lg leading-8 text-slate-600">
          <p>{t.about.story.paragraph1}</p>

          <p>{t.about.story.paragraph2}</p>

          <p>{t.about.story.paragraph3}</p>

          <p className="pt-2 font-semibold text-slate-900">
            — {t.about.story.signature}
          </p>
        </div>
      </div>
    </section>
  );
};
