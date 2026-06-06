import React, { createContext, useContext, useState, ReactNode } from 'react';
import { TRANSLATIONS, LANGUAGES } from '../data/translations';

interface LanguageContextType {
  lang: string;
  dir: string;
  setLang: (code: string) => void;
  t: (key: string) => string;
  languages: typeof LANGUAGES;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  dir: 'ltr',
  setLang: () => {},
  t: (k) => k,
  languages: LANGUAGES,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState('en');

  const setLang = (code: string) => {
    setLangState(code);
    document.documentElement.lang = code;
    document.documentElement.dir = LANGUAGES[code as keyof typeof LANGUAGES]?.dir || 'ltr';
  };

  const t = (key: string): string => {
    return TRANSLATIONS[lang]?.[key] || TRANSLATIONS.en?.[key] || key;
  };

  const dir = LANGUAGES[lang as keyof typeof LANGUAGES]?.dir || 'ltr';

  return (
    <LanguageContext.Provider value={{ lang, dir, setLang, t, languages: LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
