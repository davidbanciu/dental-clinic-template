import { AppLayout } from "../../navigation";
import { ContactHero, ContactSection } from "./components";

export const ContactScreen = () => {
  return (
    <AppLayout>
      <ContactHero />
      <ContactSection />
    </AppLayout>
  );
}
