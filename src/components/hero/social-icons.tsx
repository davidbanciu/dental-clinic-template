import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const SocialIcons = () => {
  return (
    <div className="flex items-center gap-7 text-white">
      <a
        href="#"
        aria-label="Facebook"
        className="transition-opacity hover:opacity-70"
      >
        <FaFacebookF className="h-3.5 w-3.5" />
      </a>

      <a
        href="#"
        aria-label="X"
        className="transition-opacity hover:opacity-70"
      >
        <FaXTwitter className="h-3.5 w-3.5" />
      </a>

      <a
        href="#"
        aria-label="Instagram"
        className="transition-opacity hover:opacity-70"
      >
        <FaInstagram className="h-3.5 w-3.5" />
      </a>

      <a
        href="#"
        aria-label="YouTube"
        className="transition-opacity hover:opacity-70"
      >
        <FaYoutube className="h-3.5 w-3.5" />
      </a>
    </div>
  );
}
