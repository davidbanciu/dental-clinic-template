import { Link } from "react-router-dom";

type Props = {
  isOpen: boolean;
};

export const MobileMenu = ({ isOpen }: Props) => {
  return (
    <div
      className={`absolute right-0 w-full md:relative md:w-auto ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <nav className="w-full rounded bg-white px-6 py-4 shadow-lg md:bg-transparent md:p-0 md:shadow-none">
        <ul className="items-center md:flex">
          <li>
            <Link
              to="/about"
              className="inline-block py-2 font-semibold hover:underline md:text-white"
            >
              About
            </Link>
          </li>

          <li className="md:ml-4">
            <Link
              to="/pricing"
              className="inline-block py-2 font-semibold hover:underline md:px-2 md:text-white"
            >
              Pricing
            </Link>
          </li>

          <li className="md:ml-4">
            <Link
              to="/services"
              className="inline-block py-2 font-semibold hover:underline md:px-2 md:text-white"
            >
              Services
            </Link>
          </li>

          <li className="mt-3 md:ml-6 md:mt-0">
            <Link
              to="/contact"
              className="inline-block rounded border border-white bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-white hover:text-green-400 md:bg-transparent"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
