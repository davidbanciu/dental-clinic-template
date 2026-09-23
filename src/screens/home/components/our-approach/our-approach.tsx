import {
  HeartHandshake,
  Microscope,
  Smile,
  ShieldCheck,
  MessageCircle,
  Target,
} from "lucide-react";
import { useLanguage } from "../../../../hooks";

export const OurApproach = () => {
  const { t } = useLanguage();

  const items = [
    {
      icon: HeartHandshake,
      ...t.home.ourApproach.items.personalizedCare,
    },
    {
      icon: Microscope,
      ...t.home.ourApproach.items.modernTechnology,
    },
    {
      icon: Smile,
      ...t.home.ourApproach.items.comfortableExperience,
    },
    {
      icon: ShieldCheck,
      ...t.home.ourApproach.items.preventiveCare,
    },
    {
      icon: MessageCircle,
      ...t.home.ourApproach.items.clearCommunication,
    },
    {
      icon: Target,
      ...t.home.ourApproach.items.longTermResults,
    },
  ];

  return (
    <section
      id="our-approach"
      className="bg-slate-50 px-6 py-24 md:px-10 lg:px-16 xl:px-32"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl font-extrabold text-slate-900 md:text-5xl">
            {t.home.ourApproach.title}
          </h2>

          <div className="mt-5">
            <p className="max-w-2xl text-center text-lg leading-8 text-slate-500">
              {t.home.ourApproach.description}
            </p>
          </div>

        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--accent-light)] transition-colors group-hover:bg-[var(--accent)]">
                  <Icon className="h-8 w-8 text-[var(--accent)] group-hover:text-white" />
                </div>

                {/* Title */}
                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-4 leading-8 text-slate-600">
                  {item.description}
                </p>

                {/* Link */}
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center font-medium text-[var(--primary)] transition-colors hover:text-[var(--primary)]"
                >
                  {t.home.ourApproach.readMore} →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
