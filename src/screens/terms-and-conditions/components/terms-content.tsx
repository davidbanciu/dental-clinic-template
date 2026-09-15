import { useLanguage } from "../../../hooks";

export const TermsContent = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-slate-50 px-6 py-20 lg:px-16">
      <div className="mx-auto max-w-[850px] rounded-3xl bg-white p-8 shadow-sm lg:p-12">
        <p className="text-sm text-slate-500">
          {t.terms.lastUpdated}
        </p>

        <div className="mt-10 space-y-10 text-slate-600">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              {t.terms.sections.acceptance}
            </h2>

            <p className="mt-4 leading-8">
              {t.terms.sections.acceptanceText}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              {t.terms.sections.websiteUse}
            </h2>

            <p className="mt-4 leading-8">
              {t.terms.sections.websiteUseText}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              {t.terms.sections.appointments}
            </h2>

            <p className="mt-4 leading-8">
              {t.terms.sections.appointmentsText}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              {t.terms.sections.pricing}
            </h2>

            <p className="mt-4 leading-8">
              {t.terms.sections.pricingText}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              {t.terms.sections.intellectualProperty}
            </h2>

            <p className="mt-4 leading-8">
              {t.terms.sections.intellectualPropertyText}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              {t.terms.sections.liability}
            </h2>

            <p className="mt-4 leading-8">
              {t.terms.sections.liabilityText}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              {t.terms.sections.changes}
            </h2>

            <p className="mt-4 leading-8">
              {t.terms.sections.changesText}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              {t.terms.sections.contact}
            </h2>

            <p className="mt-4 leading-8">
              {t.terms.sections.contactText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
