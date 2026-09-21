import { Link } from "react-router-dom";
import { useLanguage } from "../hooks";

type Props = {
  isOpen: boolean;
};

export const MobileMenu = ({ isOpen }: Props) => {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="rounded-2xl bg-white p-6 shadow-xl lg:hidden">
      <div className="flex flex-col gap-5 text-slate-800">
        <Link to="/about">{t.navbar.about}</Link>

        <Link to="/pricing">{t.navbar.pricing}</Link>

        <Link to="/services">{t.navbar.services}</Link>

        <Link
          to="/contact"
          className="rounded-lg bg-[var(--primary)] py-3 text-center font-medium text-white transition hover:opacity-90"
        >
          {t.navbar.contact}
        </Link>
      </div>
    </div>
  );
};
