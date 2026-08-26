import {
  Monitor,
  MousePointerClick,
  Search,
  Megaphone,
  PenTool,
  Users,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Effective Websites",
    description:
      "We build modern, conversion-focused websites that turn visitors into booked appointments for your dental clinic.",
  },
  {
    icon: MousePointerClick,
    title: "Google Ads (PPC)",
    description:
      "High-performing PPC campaigns designed to attract patients searching for dental services in your area.",
  },
  {
    icon: Search,
    title: "SEO",
    description:
      "Improve your Google rankings with local SEO, technical optimization, and content that brings in organic traffic.",
  },
  {
    icon: Megaphone,
    title: "Online Advertising",
    description:
      "Reach the right audience through Facebook, Instagram, and Google advertising campaigns that generate leads.",
  },
  {
    icon: PenTool,
    title: "Content Writing",
    description:
      "Professional content written specifically for dental practices to build trust and improve search visibility.",
  },
  {
    icon: Users,
    title: "Social Media",
    description:
      "Grow your practice with engaging social media content that attracts new patients and strengthens your brand.",
  },
];

export const MarketingApproach = () => {
  return (
    <div
      id="marketing"
      className="bg-slate-50 px-6 py-24 md:px-10 lg:px-16 xl:px-32"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-slate-900 md:text-5xl">
            Our Marketing Approach
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-500">
            Tailored to help your dental practice succeed in a competitive market.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 transition-colors group-hover:bg-emerald-500">
                  <Icon className="h-8 w-8 text-emerald-600 group-hover:text-white" />
                </div>

                {/* Title */}
                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-4 leading-8 text-slate-600">
                  {service.description}
                </p>

                {/* Link */}
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center font-medium text-blue-600 transition-colors hover:text-blue-700"
                >
                  Read More →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
