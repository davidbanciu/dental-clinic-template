import { ArrowRight } from "lucide-react";

import cosmetic from "../../../images/work1.jpg";
import implants from "../../../images/work2.jpg";
import whitening from "../../../images/work3.jpg";

import { useLanguage } from "../../../hooks";

export const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t.services.service1.title,
      description: t.services.service1.description,
      button: t.services.service1.button,
      image: cosmetic,
    },
    {
      title: t.services.service2.title,
      description: t.services.service2.description,
      button: t.services.service2.button,
      image: implants,
    },
    {
      title: t.services.service3.title,
      description: t.services.service3.description,
      button: t.services.service3.button,
      image: whitening,
    },
  ];

  return (
    <section className="bg-white px-6 py-24 lg:px-16">
      <div className="mx-auto max-w-[1200px]">
        {/* Section Heading */}
        <div className="mb-24 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">
            {t.services.sectionBadge}
          </p>

          <h2 className="mt-5 text-4xl font-extrabold text-slate-900">
            {t.services.sectionTitle}
          </h2>
        </div>

        {/* Services */}
        <div className="space-y-28">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Text */}
              <div>
                <h3 className="text-3xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-6 leading-8 text-slate-600">
                  {service.description}
                </p>

                <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-7 py-4 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-slate-800">
                  {service.button}

                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="h-[360px] w-full rounded-3xl object-cover shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
