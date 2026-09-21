import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useLanguage } from "../hooks";

export const SocialIcons = () => {
  const { t } = useLanguage();

  const iconClass =
    "transition duration-300 hover:text-[var(--secondary)]";

  return (
    <div className="flex items-center gap-7 text-current">
      <a
        href={t.social.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className={iconClass}
      >
        <FaFacebookF className="h-3.5 w-3.5" />
      </a>

      <a
        href={t.social.x}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X"
        className={iconClass}
      >
        <FaXTwitter className="h-3.5 w-3.5" />
      </a>

      <a
        href={t.social.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className={iconClass}
      >
        <FaInstagram className="h-3.5 w-3.5" />
      </a>

      <a
        href={t.social.youtube}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
        className={iconClass}
      >
        <FaYoutube className="h-3.5 w-3.5" />
      </a>
    </div>
  );
};
