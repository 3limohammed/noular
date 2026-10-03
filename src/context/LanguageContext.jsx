import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem('noular_lang');
      if (saved && ['ar', 'fr', 'en'].includes(saved)) return saved;
      // If user browser is Arabic or French
      const navLang = navigator.language || '';
      if (navLang.startsWith('ar')) return 'ar';
      return 'fr';
    } catch {
      return 'fr';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('noular_lang', lang);
      document.documentElement.lang = lang;
      if (lang === 'ar') {
        document.documentElement.dir = 'rtl';
      } else {
        document.documentElement.dir = 'ltr';
      }
    } catch (e) {
      console.warn(e);
    }
  }, [lang]);

  const setLanguage = (newLang) => {
    if (['ar', 'fr', 'en'].includes(newLang)) {
      setLang(newLang);
    }
  };

  const toggleLanguage = () => {
    setLang((prev) => {
      if (prev === 'fr') return 'ar';
      if (prev === 'ar') return 'en';
      return 'fr';
    });
  };

  const t = (obj) => {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[lang] || obj['fr'] || obj['en'] || obj['ar'] || '';
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang: setLanguage,
        toggleLanguage,
        t,
        isAr: lang === 'ar',
        isFr: lang === 'fr',
        isEn: lang === 'en',
        dir: lang === 'ar' ? 'rtl' : 'ltr'
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
