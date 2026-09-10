import {
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

import officeImage from "../../../images/contact.jpg";

export const ContactSection = () => {
  return (
    <section className="bg-white px-6 py-20 md:px-10 lg:px-16 xl:px-32">
      <div className="mx-auto max-w-[1200px] overflow-hidden rounded-3xl shadow-xl lg:grid lg:grid-cols-2">
        {/* LEFT PANEL */}
        <div className="relative min-h-[500px] lg:min-h-[720px]">
          {/* Background Image */}
          <img
            src={officeImage}
            alt="Office"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-slate-900/65" />

          {/* Contact Details */}
          <div className="relative z-10 flex h-full flex-col justify-center p-10 text-white md:p-14">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Contact Us
            </p>

            <h2 className="mt-4 text-4xl font-extrabold leading-tight">
              Let's Talk About Growing Your Practice.
            </h2>

            <p className="mt-5 leading-8 text-slate-200">
              Whether you're looking for more patients, better SEO, or a brand
              new website, we'd love to hear about your clinic.
            </p>

            <div className="mt-12 space-y-8">
              {/* Phone */}
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
                  <Phone className="h-6 w-6 text-emerald-500" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
                    Telephone Number
                  </p>

                  <p className="mt-1 text-lg font-semibold">
                    (+27) 81 343 4552
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
                    Email Address
                  </p>

                  <p className="mt-1 text-lg font-semibold">
                    hello@dentistmarketing.com
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
                    Physical Address
                  </p>

                  <p className="mt-1 text-lg font-semibold">
                    3 Abbey Rd, London,
                    <br />
                    United Kingdom
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div
          id="contact-form"
          className="bg-white p-8 md:p-14 lg:p-16"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Have a Question?
          </p>

          <h3 className="mt-4 text-4xl font-bold text-slate-900">
            Send Us a Message.
          </h3>

          <p className="mt-5 leading-8 text-slate-500">
            Fill out the form below and we'll get back to you within one
            business day.
          </p>

          <form className="mt-10 space-y-8">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Name
              </label>

              <input
                type="text"
                placeholder="Your name"
                className="w-full border-b border-slate-300 bg-transparent py-3 outline-none transition focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Email
              </label>

              <input
                type="email"
                placeholder="Your email address"
                className="w-full border-b border-slate-300 bg-transparent py-3 outline-none transition focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Subject
              </label>

              <input
                type="text"
                placeholder="Website / SEO / Google Ads..."
                className="w-full border-b border-slate-300 bg-transparent py-3 outline-none transition focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Your Message
              </label>

              <textarea
                rows={6}
                placeholder="Tell us a little about your dental practice and what you're looking for."
                className="w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-400 px-6 py-4 text-lg font-semibold text-white transition hover:opacity-90 md:w-auto"
            >
              <Send className="h-5 w-5" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
