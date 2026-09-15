import { HeartHandshake, Sparkles } from "lucide-react";
import { useLanguage } from "../../../../hooks";

export const WhyChooseUs = () => {
  const { t } = useLanguage();

  const items = [
    {
      icon: HeartHandshake,
      ...t.home.whyChooseUs.items.experiencedCare,
    },
    {
      icon: Sparkles,
      ...t.home.whyChooseUs.items.modernDentistry,
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="bg-white px-6 py-20 md:px-10 lg:px-16 xl:px-32"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* LEFT SIDE */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              {t.home.whyChooseUs.badge}
            </p>

            <h2 className="max-w-md text-4xl font-extrabold leading-tight text-slate-900">
              {t.home.whyChooseUs.title}
            </h2>

            <h3 className="mt-8 text-2xl font-semibold text-slate-900">
              {t.home.whyChooseUs.heading}
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {t.home.whyChooseUs.description}
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-12">
            {items.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-start gap-6"
                >
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>

                  <div>
                    <h4 className="text-2xl font-bold text-slate-900">
                      {item.title}
                    </h4>

                    <p className="mt-3 text-lg leading-8 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
