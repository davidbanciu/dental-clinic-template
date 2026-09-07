import { ArrowRight } from "lucide-react";

import cosmetic from "../../../images/work1.jpg";
import implants from "../../../images/work2.jpg";
import whitening from "../../../images/work3.jpg";

const services = [
  {
    title: "Cosmetic Dentistry",
    description:
      "Transform your smile with veneers, bonding, and aesthetic treatments designed to improve the appearance of your teeth while maintaining a natural look.",
    image: cosmetic,
  },
  {
    title: "Dental Implants",
    description:
      "Restore missing teeth with durable, natural-looking dental implants that improve both function and confidence with long-lasting results.",
    image: implants,
  },
  {
    title: "Professional Teeth Whitening",
    description:
      "Brighten your smile safely with professional whitening treatments that deliver faster, longer-lasting results than over-the-counter products.",
    image: whitening,
  },
];

export const ServicesSection = () => {
  return (
    <section className="bg-white px-6 py-24 lg:px-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-24 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">
            Select Services
          </p>

          <h2 className="mt-5 text-4xl font-extrabold text-slate-900">
            Treatments We Offer
          </h2>
        </div>

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
                  Learn More
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
