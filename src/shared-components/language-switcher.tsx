import { useLanguage } from "../hooks";

type Props = {
  dark?: boolean;
};

export const LanguageSwitcher = ({ dark = false }: Props) => {
  const { language, setLanguage } = useLanguage();

  const container = dark
    ? "border-slate-300 bg-slate-100"
    : "border-white/30 bg-white/15 backdrop-blur-md";

  const active = dark
    ? "bg-white text-slate-900 shadow-sm"
    : "bg-white text-slate-900 shadow-md";

  const inactive = dark
    ? "text-white/80 hover:text-white"
    : "text-slate-500 hover:text-slate-900";

  return (
    <div
      className={`flex items-center rounded-full border p-1 transition-all ${container}`}
    >
      <button
        onClick={() => setLanguage("ro")}
        className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
          language === "ro" ? active : inactive
        }`}
      >
        RO
      </button>

      <button
        onClick={() => setLanguage("en")}
        className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
          language === "en" ? active : inactive
        }`}
      >
        EN
      </button>
    </div>
  );
};
