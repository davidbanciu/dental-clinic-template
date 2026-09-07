import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "250",
    popular: false,
    features: [
      "Get started with SEO",
      "Monthly ROI assessment",
      "Ongoing website support",
    ],
  },
  {
    name: "Premium",
    price: "390",
    popular: true,
    features: [
      "All features in Basic",
      "2x targeted blog articles",
      "Effective web design",
    ],
  },
  {
    name: "Enterprise",
    price: "430",
    popular: false,
    features: [
      "All features in Premium",
      "Daily social media engagement",
      "Advanced AdWords management",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section className="bg-slate-50 px-6 pb-24 lg:px-16">
      <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col rounded-3xl p-8 shadow-lg ${
              plan.popular
                ? "scale-105 bg-slate-900 text-white"
                : "bg-white text-slate-900"
            }`}
          >
            {/* Popular badge */}
            {plan.popular && (
              <div className="absolute right-6 top-6 rounded-full bg-gradient-to-r from-blue-500 to-emerald-400 px-4 py-1 text-xs font-semibold uppercase text-white">
                Popular
              </div>
            )}

            {/* Title */}
            <h2 className="text-center text-3xl font-bold">{plan.name}</h2>

            <p className="mt-8 text-center text-xs uppercase tracking-[0.3em] text-slate-400">
              Starts At
            </p>

            {/* Price */}
            <div className="mt-3 text-center">
              <span className="align-top text-base">$</span>

              <span className="text-5xl font-bold">{plan.price}</span>

              <span
                className={`ml-2 ${
                  plan.popular ? "text-slate-300" : "text-slate-500"
                }`}
              >
                / month
              </span>
            </div>

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

            {/* Button */}
            <button
              className={`mt-10 rounded-xl py-4 text-sm font-semibold uppercase transition ${
                plan.popular
                  ? "bg-gradient-to-r from-blue-500 to-emerald-400 text-white hover:opacity-90"
                  : "border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white"
              }`}
            >
              Contact Us
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
