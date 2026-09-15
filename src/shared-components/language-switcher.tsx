import ReactCountryFlag from "react-country-flag";
import { useLanguage } from "../hooks";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const active = "shadow-md border";

  return (
    <div className="flex items-center p-0.5">
      <button
        type="button"
        onClick={() => setLanguage("ro")}
        aria-label="Romanian"
        className={`rounded-full px-2 py-1 focus:outline-none transition-all ${
          language === "ro" ? active : ""
        }`}
      >
        <ReactCountryFlag
          countryCode="RO"
          svg
          style={{ width: "1.2em", height: "1.2em", marginBottom: "2px" }}
        />
      </button>

      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-label="English"
        className={`rounded-full px-2 py-1 focus:outline-none transition-all ${
          language === "en" ? active : ""
        }`}
      >
        <ReactCountryFlag
          countryCode="GB"
          svg
          style={{ width: "1.2em", height: "1.2em", marginBottom: "2px" }}
        />
      </button>
    </div>
  );
};
