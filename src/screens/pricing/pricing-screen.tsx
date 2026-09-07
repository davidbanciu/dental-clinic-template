import { AppLayout } from "../../navigation";
import { PricingHero, PricingSection } from "./components";


export const PricingScreen = () => {
  return (
    <AppLayout>
      <PricingHero />
      <PricingSection />
    </AppLayout>
  );
};
