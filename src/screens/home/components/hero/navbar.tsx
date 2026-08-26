import { useState } from "react";
import { Menu } from "lucide-react";
import { MobileMenu } from "./mobile-menu";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleMobileMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <nav className="md:flex w-full py-6 h-20 items-center justify-between">
          <div>
            <a
              href="/"
              className="text-2xl font-bold tracking-tight text-white"
            >
              Dentist Marketing
            </a>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="hidden lg:flex text-sm font-medium text-white transition-opacity hover:opacity-70"
            >
              About Us
            </a>

            <a
              href="#pricing"
              className="lg:flex text-sm font-medium text-white transition-opacity hover:opacity-70"
            >
              Pricing
            </a>

            <a
              href="#marketing"
              className="lg:flex text-sm font-medium text-white transition-opacity hover:opacity-70"
            >
              Marketing
            </a>

            <a
              href="#blog"
              className="hidden lg:flex text-sm font-medium text-white transition-opacity hover:opacity-70"
            >
              Blog
            </a>

            <a
              href="#contact"
              className="rounded border border-white px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-sky-500"
            >
              Contact Us
            </a>
          </div>
        </nav>
        <div className="flex h-20 items-center justify-end md:hidden">
          <button
            type="button"
            onClick={handleMobileMenu}
            aria-label="Open mobile menu"
            className="text-white"
          >
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </div>
      <MobileMenu isOpen={isOpen} />
    </>
  );
}
