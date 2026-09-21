import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import { SocialIcons } from "./social-icons";
import { useLanguage } from "../hooks";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer
      id="contact"
      className="mt-16 bg-[var(--footer-bg)] pt-32 text-white"
    >
      {/* CONTACT CTA */}
      <div className="mx-auto -mt-56 max-w-[1200px] px-6 md:px-10 lg:px-16">
        <div className="rounded-3xl bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] p-8 shadow-2xl md:p-12">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--primary-light)]">
                {t.footer.ctaBadge}
              </p>

              <h2 className="mt-4 text-4xl font-extrabold leading-tight text-white md:text-5xl">
                {t.footer.ctaTitle}
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/90">
                {t.footer.ctaDescription}
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-[var(--primary)] transition hover:bg-slate-100"
            >
              {t.footer.ctaButton}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* FOOTER CONTENT */}
      <div className="mx-auto max-w-[1200px] px-6 pb-10 pt-20 md:px-10 lg:px-16">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold text-white">
              {t.navbar.logo}
            </h3>

            <p className="mt-5 leading-7 text-slate-400">
              {t.footer.description}
            </p>

            <div className="mt-6">
              <SocialIcons />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold text-white">
              {t.footer.company}
            </h4>

            <ul className="mt-5 space-y-3 text-slate-400">
              <li>
                <Link
                  to="/about"
                  className="transition hover:text-white"
                >
                  {t.navbar.about}
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="transition hover:text-white"
                >
                  {t.navbar.services}
                </Link>
              </li>

              <li>
                <Link
                  to="/pricing"
                  className="transition hover:text-white"
                >
                  {t.navbar.pricing}
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="transition hover:text-white"
                >
                  {t.navbar.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white">
              {t.footer.services}
            </h4>

            <ul className="mt-5 space-y-3 text-slate-400">
              <li>{t.footer.serviceWebsite}</li>
              <li>{t.footer.serviceAds}</li>
              <li>{t.footer.serviceSeo}</li>
              <li>{t.footer.serviceSocial}</li>
              <li>{t.footer.serviceContent}</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white">
              {t.footer.contact}
            </h4>

            <div className="mt-5 space-y-5 text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-[var(--secondary)]" />
                <span>{t.contact.info.address}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[var(--secondary)]" />
                <span>{t.contact.info.phone}</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[var(--secondary)]" />
                <span>{t.contact.info.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-16 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>{t.footer.rights}</p>

            <div className="flex gap-6">
              <Link
                to="/privacy_policy"
                className="transition hover:text-white"
              >
                {t.footer.privacyPolicy}
              </Link>

              <Link
                to="/terms_and_conditions"
                className="transition hover:text-white"
              >
                {t.footer.terms}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
