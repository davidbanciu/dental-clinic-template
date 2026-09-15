import { AppLayout } from "../../navigation";
import { FeaturedArticle, Hero, OurApproach, WhyChooseUs } from "./components";

export const HomeScreen = () => {
  return (
    <AppLayout>
      <Hero />
      <WhyChooseUs />
      <OurApproach />
      <FeaturedArticle />
    </AppLayout>
  );
};
