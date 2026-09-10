import { ShieldCheck } from "lucide-react";
import { Navbar } from "../../../shared-components";

export const PrivacyPolicyHero = () => {
  return (
    <section className="bg-white">
      {/* Navbar */}
      <header className="border-b">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-16">
          <Navbar dark />
        </div>
      </header>

      {/* Hero */}
      <div className="mx-auto flex max-w-[900px] flex-col items-center px-6 py-20 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
          <ShieldCheck className="h-8 w-8 text-emerald-600" />
        </div>

        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
          Legal
        </p>

        <h1 className="mt-4 text-5xl font-extrabold text-slate-900 md:text-6xl">
          Privacy Policy
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-500">
          Learn how we collect, use, and protect your personal information when
          you visit our website or contact our clinic.
        </p>
      </div>
    </section>
  );
};
