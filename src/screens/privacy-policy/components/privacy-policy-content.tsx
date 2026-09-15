import { useLanguage } from "../../../hooks";

export const PrivacyPolicyContent = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-slate-50 px-6 py-20 lg:px-16">
      <div className="mx-auto max-w-[850px] rounded-3xl bg-white p-8 shadow-sm lg:p-12">
        <p className="text-sm text-slate-500">
          {t.privacyPolicy.lastUpdated}
        </p>

        <div className="mt-10 space-y-10 text-slate-600">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              {t.privacyPolicy.sections.informationCollected}
            </h2>

            <p className="mt-4 leading-8">
              {t.privacyPolicy.sections.informationCollectedText}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              {t.privacyPolicy.sections.howWeUse}
            </h2>

            <p className="mt-4 leading-8">
              {t.privacyPolicy.sections.howWeUseText}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              {t.privacyPolicy.sections.cookies}
            </h2>

            <p className="mt-4 leading-8">
              {t.privacyPolicy.sections.cookiesText}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              {t.privacyPolicy.sections.security}
            </h2>

            <p className="mt-4 leading-8">
              {t.privacyPolicy.sections.securityText}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              {t.privacyPolicy.sections.thirdParty}
            </h2>

            <p className="mt-4 leading-8">
              {t.privacyPolicy.sections.thirdPartyText}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              {t.privacyPolicy.sections.rights}
            </h2>

            <p className="mt-4 leading-8">
              {t.privacyPolicy.sections.rightsText}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              {t.privacyPolicy.sections.contact}
            </h2>

            <p className="mt-4 leading-8">
              {t.privacyPolicy.sections.contactText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
