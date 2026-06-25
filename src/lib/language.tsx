"use client";

import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export const languages = [
  { code: "en", label: "English", flagSrc: "/img/UK-flag.png" },
  { code: "km", label: "Khmer", flagSrc: "/img/Cam-flag.png" },
] as const;

export type Language = (typeof languages)[number]["code"];

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("fastone-language");

    if (savedLanguage === "en" || savedLanguage === "km") {
      const frameId = window.requestAnimationFrame(() => {
        setLanguage(savedLanguage);
      });

      return () => window.cancelAnimationFrame(frameId);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("fastone-language", language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      <div className={language === "km" ? "font-['Kantumruy_Pro',sans-serif]" : "font-sans"}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
