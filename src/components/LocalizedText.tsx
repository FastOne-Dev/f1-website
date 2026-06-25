"use client";

import { useLanguage, type Language } from "@/lib/language";
import { kmDictionary } from "@/lib/km-dictionary";

export type LocalizedString =
  | string
  | {
      en: string;
      km: string;
    };

export function getLocalizedText(value: LocalizedString, language: Language) {
  if (typeof value !== "string") {
    return value[language];
  }

  return language === "km" ? kmDictionary[value] ?? value : value;
}

export default function LocalizedText({ value }: { value: LocalizedString }) {
  const { language } = useLanguage();

  return <>{getLocalizedText(value, language)}</>;
}
