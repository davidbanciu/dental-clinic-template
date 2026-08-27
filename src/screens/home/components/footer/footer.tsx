import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { SocialIcons } from "../hero/social-icons";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-900 pt-32 mt-16 text-white">
      {/* CONTACT CTA */}
      <div className="mx-auto -mt-56 max-w-[1200px] px-6 md:px-10 lg:px-16">
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-8 shadow-2xl md:p-12">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">
                Ready To Grow?
              </p>

              <h2 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
                Let's Bring More Patients To Your Dental Practice.
              </h2>

              <p className="mt-6 text-lg leading-8 text-blue-50">
                Schedule a free consultation and we'll show you exactly how your
                clinic can attract more high-value patients through proven
                digital marketing strategies.
              </p>
            </div>

            <a
              href="#contact-form"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 transition hover:bg-slate-100"
            >
              Book Free Consultation
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* FOOTER CONTENT */}
      <div className="mx-auto max-w-[1200px] px-6 pb-10 pt-20 md:px-10 lg:px-16">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold">
              Dentist Marketing
            </h3>

            <p className="mt-5 leading-7 text-slate-400">
              We help dental clinics grow through websites, SEO, Google Ads,
              and social media marketing that brings in real patients.
            </p>

            <div className="mt-6">
              <SocialIcons />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold">
              Company
            </h4>

            <ul className="mt-5 space-y-3 text-slate-400">
              <li>
                <a href="#about" className="transition hover:text-white">
                  About Us
                </a>
              </li>

              <li>
                <a href="#marketing" className="transition hover:text-white">
                  Marketing
                </a>
              </li>

              <li>
                <a href="#pricing" className="transition hover:text-white">
                  Pricing
                </a>
              </li>

              <li>
                <a href="#blog" className="transition hover:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold">
              Services
            </h4>

            <ul className="mt-5 space-y-3 text-slate-400">
              <li>Dental Website Design</li>
              <li>Google Ads (PPC)</li>
              <li>Local SEO</li>
              <li>Social Media Marketing</li>
              <li>Content Writing</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold">
              Contact
            </h4>

            <div className="mt-5 space-y-5 text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-cyan-400" />

                <span>
                  3 Abbey Rd,
                  <br />
                  London, United Kingdom
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-cyan-400" />

                <span>(+27) 81 343 4552</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-cyan-400" />

                <span>hello@dentistmarketing.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-16 border-t border-slate-700 pt-6">
          <div className="flex flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>
              © 2026 Dentist Marketing. All rights reserved.
            </p>

            <div className="flex gap-6">
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>

              <a href="#" className="hover:text-white">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
