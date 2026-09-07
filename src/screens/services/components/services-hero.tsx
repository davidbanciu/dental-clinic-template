import { Navbar } from "../../../components";

export const ServicesHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-sky-500 to-emerald-400">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-16">
        <Navbar />
      </div>

      <div className="mx-auto max-w-[1200px] px-6 pb-36 pt-20 lg:px-16 lg:pt-28">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">
          Our Services
        </p>

        <h1 className="mt-6 max-w-3xl text-5xl font-extrabold leading-tight text-white md:text-6xl">
          Complete dental care for healthy, confident smiles.
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8 text-blue-50">
          We provide a full range of dental treatments tailored to patients of
          all ages in a modern and comfortable clinic.
        </p>
      </div>

      <svg
        viewBox="0 0 1440 220"
        className="block w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#ffffff"
          d="M0,170 C140,120 240,210 370,165 C520,110 590,215 730,170 C860,125 930,20 1040,80 C1140,135 1230,190 1330,120 C1395,75 1425,50 1440,60 L1440,240 L0,240 Z"
        />
      </svg>
    </section>
  );
};
