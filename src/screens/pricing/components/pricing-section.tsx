import { Check } from "lucide-react";
import { useLanguage } from "../../../hooks";

export const PricingSection = () => {
  const { t } = useLanguage();

  const plans = [
    {
      name: t.pricing.starter.name,
      price: t.pricing.starter.price,
      period: t.pricing.starter.period,
      popular: false,
      features: t.pricing.starter.features,
      button: t.pricing.starter.button,
    },
    {
      name: t.pricing.professional.name,
      price: t.pricing.professional.price,
      period: t.pricing.professional.period,
      popular: true,
      badge: t.pricing.professional.badge,
      features: t.pricing.professional.features,
      button: t.pricing.professional.button,
    },
    {
      name: t.pricing.growth.name,
      price: t.pricing.growth.price,
      period: t.pricing.growth.period,
      popular: false,
      features: t.pricing.growth.features,
      button: t.pricing.growth.button,
    },
  ];

  return (
    <section className="bg-slate-50 px-6 pb-24 lg:px-16">
      <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col rounded-3xl p-8 shadow-lg transition-all duration-300 ${
              plan.popular
                ? "scale-105 bg-slate-900 text-white"
                : "bg-white text-slate-900"
            }`}
          >
            {/* Most Popular Badge */}
            {plan.popular && (
              <div className="absolute right-6 top-6 rounded-full bg-gradient-to-r from-blue-500 to-emerald-400 px-4 py-1 text-xs font-semibold uppercase text-white">
                {plan.badge}
              </div>
            )}

            {/* Package Name */}
            <h2 className="text-center text-3xl font-bold">{plan.name}</h2>

            {/* Price */}
            <div className="mt-8 text-center">
              <p
                className={`text-sm uppercase tracking-[0.3em] ${
                  plan.popular ? "text-slate-300" : "text-slate-400"
                }`}
              >
                {plan.period}
              </p>

              <p className="mt-2 text-5xl font-bold">{plan.price}</p>
            </div>

            {/* Divider */}
            <div
              className={`my-8 h-px ${
                plan.popular ? "bg-slate-700" : "bg-slate-200"
              }`}
            />

            {/* Features */}
            <ul className="space-y-5">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-emerald-400" />

                  <span
                    className={
                      plan.popular ? "text-slate-200" : "text-slate-600"
                    }
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              className={`mt-10 rounded-xl py-4 text-sm font-semibold uppercase transition ${
                plan.popular
                  ? "bg-gradient-to-r from-blue-500 to-emerald-400 text-white hover:opacity-90"
                  : "border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white"
              }`}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
