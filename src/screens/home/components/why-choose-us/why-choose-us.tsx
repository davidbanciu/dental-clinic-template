import { BriefcaseBusiness, Megaphone } from "lucide-react";

export const WhyChooseUs = () => {
  return (
    <div
      id="about"
      className="bg-white px-6 py-20 md:px-10 lg:px-16 xl:px-32"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* LEFT SIDE */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Why Choose Us
            </p>

            <h2 className="max-w-md text-4xl font-extrabold leading-tight text-slate-900">
              This is the start of your business success.
            </h2>

            <h3 className="mt-8 text-2xl font-semibold text-slate-900">
              Where industry insight and marketing expertise meet.
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              We help dentists attract higher-value patients through targeted
              digital marketing, SEO, Google Ads, social media, and conversion
              focused websites designed specifically for dental practices.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-12">
            {/* Service 1 */}
            <div className="flex items-start gap-6">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                <BriefcaseBusiness className="h-8 w-8 text-blue-600" />
              </div>

              <div>
                <h4 className="text-2xl font-bold text-slate-900">
                  We Provide the Full Package
                </h4>

                <p className="mt-3 text-lg leading-8 text-slate-600">
                  From website design and SEO to paid advertising and lead
                  generation, we manage every part of your online marketing so
                  you can focus on treating patients.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="flex items-start gap-6">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                <Megaphone className="h-8 w-8 text-blue-600" />
              </div>

              <div>
                <h4 className="text-2xl font-bold text-slate-900">
                  A Comprehensive Marketing Approach
                </h4>

                <p className="mt-3 text-lg leading-8 text-slate-600">
                  Every campaign is built to increase appointments, improve local
                  visibility, and help your clinic consistently attract new,
                  high-value patients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
