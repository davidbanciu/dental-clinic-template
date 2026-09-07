import { AppLayout } from "../../navigation";
import { PrivacyPolicyContent, PrivacyPolicyHero } from "./components";


export const PrivacyPolicyScreen = () => {
  return (
    <AppLayout>
      <PrivacyPolicyHero />
      <PrivacyPolicyContent />
    </AppLayout>
  );
};
