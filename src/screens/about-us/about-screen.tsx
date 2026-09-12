import { AppLayout } from "../../navigation";
import { AboutHero, OurStory } from "./components";

export const AboutScreen = () => {
  return (
    <AppLayout>
      <AboutHero />
      <OurStory />
    </AppLayout>
  );
};
