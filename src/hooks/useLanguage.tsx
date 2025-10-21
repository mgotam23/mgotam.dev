import { createContext, useContext, useState, useEffect } from 'react';

export type SupportedLanguage = 'en' | 'he';
export type TextDirection = 'ltr' | 'rtl';

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  dir: TextDirection;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<SupportedLanguage>('en');
  const dir: TextDirection = language === 'he' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [language, dir]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: setLanguageState, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};