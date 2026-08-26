import { Header } from "./header";
import agency_hero from "../../images/agency_hero.jpg";

export const Hero = () => {
  return (
    <div className="relative min-h-[795px] overflow-hidden rounded-br-[320px]">
      {/* Background image */}
      <img
        src={agency_hero}
        alt=""
        className="absolute inset-0 z-0 h-full w-full object-cover max-h-full max-w-full"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10 bg-linear-to-r from-blue-600/80 via-cyan-500/70 to-emerald-400/80" />

      {/* Header */}
      <Header />

      {/* Hero content */}
      <div className="relative z-20 mx-auto flex min-h-[795px] max-w-[1040px] items-center">
        <div className="max-w-[520px] pt-20 px-12">
          <h1 className="text-5xl font-extrabold leading-[1.05] text-white xl:text-6xl">
            Are you ready for
            <br />
            a ton more
            <br />
            patients?
          </h1>

          <p className="mt-5 max-w-[500px] text-lg leading-relaxed text-white">
            We specialize in marketing for a focused cause
            <br />
            to bring you results - more business.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex bg-blue-600 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            LEARN HOW
          </a>
        </div>
      </div>
    </div>
  );
}
