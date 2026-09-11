import { createContext, useState, type ReactNode } from "react";
import { content, type Language } from "../content";

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: typeof content.en;
};

export const LanguageContext = createContext<LanguageContextType | null>(null);

type Props = {
  children: ReactNode;
};

export const LanguageProvider = ({ children }: Props) => {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ro" : "en"));
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t: content[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
