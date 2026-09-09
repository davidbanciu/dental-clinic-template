import { AppLayout } from "../../navigation";
import { TermsContent, TermsHero } from "./components";


export const TermsAndConditionsScreen = () => {
  return (
    <AppLayout>
      <TermsHero />
      <TermsContent />
    </AppLayout>
  );
};
