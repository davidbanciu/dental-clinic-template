import { Navbar } from "../../components";
import { AppLayout } from "../../navigation";
import { ContactSection } from "./components";

export const ContactScreen = () => {
  return (
    <AppLayout>
      <header className="border-b bg-white">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
          <Navbar dark />
        </div>
      </header>

      <ContactSection />
    </AppLayout>
  );
}
