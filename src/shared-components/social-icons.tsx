import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useLanguage } from "../hooks";

export const SocialIcons = () => {
  const { t } = useLanguage();

  return (
    <div className="flex items-center gap-7 text-white">
      <a
        href={t.social.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="transition-opacity hover:opacity-70"
      >
        <FaFacebookF className="h-3.5 w-3.5" />
      </a>

      <a
        href={t.social.x}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X"
        className="transition-opacity hover:opacity-70"
      >
        <FaXTwitter className="h-3.5 w-3.5" />
      </a>

      <a
        href={t.social.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="transition-opacity hover:opacity-70"
      >
        <FaInstagram className="h-3.5 w-3.5" />
      </a>

      <a
        href={t.social.youtube}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
        className="transition-opacity hover:opacity-70"
      >
        <FaYoutube className="h-3.5 w-3.5" />
      </a>
    </div>
  );
};
