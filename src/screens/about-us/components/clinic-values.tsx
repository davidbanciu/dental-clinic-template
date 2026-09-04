import { Award, HeartHandshake, ShieldCheck } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Experienced Team",
    description:
      "Our dentists combine years of experience with the latest treatment techniques to deliver exceptional care.",
  },
  {
    icon: HeartHandshake,
    title: "Patient First",
    description:
      "Every treatment plan is personalized to your goals, comfort, and long-term oral health.",
  },
  {
    icon: ShieldCheck,
    title: "Modern Dentistry",
    description:
      "We use modern equipment and digital technology for precise, comfortable treatments.",
  },
];

export const ClinicValues = () => {
  return (
    <section className="bg-slate-50 px-6 py-24 lg:px-16">
      <div className="mx-auto max-w-[1200px]">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">
            Why Choose Us
          </p>

          <h2 className="mt-5 text-4xl font-extrabold text-slate-900">
            Dentistry Focused on Your Comfort
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            We combine compassionate care with modern technology to create a
            dental experience that patients trust and recommend.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="rounded-2xl bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100">
                  <Icon className="h-8 w-8 text-cyan-600" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {value.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
