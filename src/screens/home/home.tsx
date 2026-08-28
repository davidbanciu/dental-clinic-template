import { AppLayout } from "../../navigation";
import { FeaturedArticle, Hero, MarketingApproach, WhyChooseUs } from "./components";

export const HomeScreen = () => {
  return (
    <AppLayout>
      <Hero />
      <WhyChooseUs />
      <MarketingApproach />
      <FeaturedArticle />
    </AppLayout>
  );
};
