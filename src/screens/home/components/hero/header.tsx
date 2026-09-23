import { Navbar } from "../../../../shared-components";
import { MediaAddress } from "./media-address";

export const Header = () => {
  return (
    <header className="absolute left-0 top-0 z-50 w-full px-6 md:px-10 lg:px-16 xl:px-32">
      <div className="mx-auto max-w-[1200px]">
        <MediaAddress />

        <Navbar />
      </div>
    </header>
  );
}
