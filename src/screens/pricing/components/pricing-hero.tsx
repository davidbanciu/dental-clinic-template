import { Navbar } from "../../../shared-components";

export const PricingHero = () => {
  return (
    <section className="bg-white">
      {/* Navbar */}
      <header className="border-b">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-16">
          <Navbar dark />
        </div>
      </header>

      {/* Hero */}
      <div className="mx-auto max-w-[900px] px-6 py-20 text-center lg:px-16">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">
          Pricing
        </p>

        <h1 className="mt-4 text-5xl font-extrabold text-slate-900 md:text-6xl">
          Flexible <span className="text-emerald-500">Plans</span>
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-500">
          Choose a plan that works best for you and your business.
        </p>
      </div>
    </section>
  );
};
