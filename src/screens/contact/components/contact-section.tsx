import {
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

import officeImage from "../../../images/contact.jpg";
import { useLanguage } from "../../../hooks";

export const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-white px-6 py-20 md:px-10 lg:px-16 xl:px-32">
      <div className="mx-auto max-w-[1200px] overflow-hidden rounded-3xl shadow-xl lg:grid lg:grid-cols-2">
        {/* LEFT PANEL */}
        <div className="relative min-h-[500px] lg:min-h-[720px]">
          <img
            src={officeImage}
            alt="Dental Office"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-slate-900/65" />

          <div className="relative z-10 flex h-full flex-col justify-center p-10 text-white md:p-14">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              {t.contact.hero.badge}
            </p>

            <h2 className="mt-4 text-4xl font-extrabold leading-tight">
              {t.contact.hero.title}
            </h2>

            <p className="mt-5 leading-8 text-slate-200">
              {t.contact.hero.subtitle}
            </p>

            <div className="mt-12 space-y-8">
              {/* Phone */}
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
                  <Phone className="h-6 w-6 text-emerald-500" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
                    {t.contact.info.phoneLabel}
                  </p>

                  <p className="mt-1 text-lg font-semibold">
                    {t.contact.info.phone}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
                  <Mail className="h-6 w-6 text-emerald-500" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
                    {t.contact.info.emailLabel}
                  </p>

                  <p className="mt-1 text-lg font-semibold">
                    {t.contact.info.email}
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
                  <MapPin className="h-6 w-6 text-emerald-500" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
                    {t.contact.info.addressLabel}
                  </p>

                  <p className="mt-1 text-lg font-semibold whitespace-pre-line">
                    {t.contact.info.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div id="contact-form" className="bg-white p-8 md:p-14 lg:p-16">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            {t.contact.form.title}
          </p>

          <h3 className="mt-4 text-4xl font-bold text-slate-900">
            {t.contact.hero.title}
          </h3>

          <p className="mt-5 leading-8 text-slate-500">
            {t.contact.form.subtitle}
          </p>

          <form className="mt-10 space-y-8">
            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                {t.contact.form.name}
              </label>

              <input
                type="text"
                placeholder={t.contact.form.namePlaceholder}
                className="w-full border-b border-slate-300 bg-transparent py-3 outline-none transition focus:border-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                {t.contact.form.email}
              </label>

              <input
                type="email"
                placeholder={t.contact.form.emailPlaceholder}
                className="w-full border-b border-slate-300 bg-transparent py-3 outline-none transition focus:border-blue-500"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                {t.contact.form.subject}
              </label>

              <input
                type="text"
                placeholder={t.contact.form.subjectPlaceholder}
                className="w-full border-b border-slate-300 bg-transparent py-3 outline-none transition focus:border-blue-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                {t.contact.form.message}
              </label>

              <textarea
                rows={6}
                placeholder={t.contact.form.messagePlaceholder}
                className="w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-400 px-6 py-4 text-lg font-semibold text-white transition hover:opacity-90 md:w-auto"
            >
              <Send className="h-5 w-5" />

              {t.contact.form.button}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
