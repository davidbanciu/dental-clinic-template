import { AppLayout } from "../../navigation";
import { ServicesHero, ServicesSection } from "./components";


export const ServicesScreen = () => {
  return (
    <AppLayout>
      <ServicesHero />
      <ServicesSection />
    </AppLayout>
  );
};
