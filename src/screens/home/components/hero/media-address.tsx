import { MapPin, Phone } from "lucide-react";

import { LanguageSwitcher, SocialIcons } from "../../../../shared-components";
import { useLanguage } from "../../../../hooks";

export const MediaAddress = () => {
  const { t } = useLanguage();

  return (
    <div className="hidden h-12 items-center justify-between border-b border-white/50 lg:flex">
      <div className="flex items-center text-sm text-white">
        <div className="flex items-center">
          <MapPin className="h-4 w-4" />

          <span className="ml-2">{t.home.hero.address}</span>
        </div>

        <div className="ml-8 flex items-center">
          <Phone className="h-4 w-4" />

          <span className="ml-2">{t.home.hero.phone}</span>
        </div>
      </div>

      <LanguageSwitcher />

      <SocialIcons />
    </div>
  );
};
