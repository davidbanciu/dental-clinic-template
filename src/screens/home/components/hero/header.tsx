import { Navbar } from "./navbar";
import { MediaAddress } from "./media-address";

export const Header = () => {
  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="mx-auto max-w-[1040px] px-12">
        <MediaAddress />

        <Navbar />
      </div>
    </header>
  );
}