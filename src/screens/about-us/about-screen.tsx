import { AppLayout } from "../../navigation";
import { AboutHero, OurStory, ClinicValues } from "./components";

export const AboutScreen = () => {
  return (
    <AppLayout>
      <AboutHero />
      <OurStory />
      <ClinicValues />
    </AppLayout>
  );
};
