import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

import { MobileMenu } from "./mobile-menu";

type Props = {
  dark?: boolean;
};

export const Navbar = ({ dark = false }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const textColor = dark ? "text-slate-900" : "text-white";

  const buttonBorder = dark
    ? "border-slate-300 hover:bg-slate-900 hover:text-white"
    : "border-white hover:bg-white hover:text-black";

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden h-20 items-center justify-between lg:flex">
        {/* Logo */}
        <Link
          to="/"
          className={`text-2xl font-bold tracking-tight ${textColor}`}
        >
          Dentist Marketing
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <Link
            to="/about"
            className={`text-sm font-medium transition-opacity hover:opacity-70 ${textColor}`}
          >
            About Us
          </Link>

          <Link
            to="/pricing"
            className={`text-sm font-medium transition-opacity hover:opacity-70 ${textColor}`}
          >
            Pricing
          </Link>

          <Link
            to="/services"
            className={`text-sm font-medium transition-opacity hover:opacity-70 ${textColor}`}
          >
            Services
          </Link>

          <Link
            to="/contact"
            className={`rounded border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${textColor} ${buttonBorder}`}
          >
            Contact Us
          </Link>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="flex h-20 items-center justify-between lg:hidden">
        <Link
          to="/"
          className={`text-2xl font-bold tracking-tight ${textColor}`}
        >
          Dentist Marketing
        </Link>

        <button
          type="button"
          aria-label="Toggle mobile menu"
          onClick={handleMobileMenu}
          className={textColor}
        >
          {isOpen ? (
            <X className="h-7 w-7" />
          ) : (
            <Menu className="h-7 w-7" />
          )}
        </button>
      </nav>

      <MobileMenu isOpen={isOpen} />
    </>
  );
};
