import {useEffect, useState} from 'react';
import {loadFromAsyncStorage, saveAsyncStorage} from '@utils/AsyncStorage';
import i18next from 'i18next';

const useLanguage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('');
  const [savedLang, setSavedLang] = useState<string>('');

  useEffect(() => {
    const loadLanguage = async () => {
      const lang = await loadFromAsyncStorage('lang');
      if (lang) {
        i18next.changeLanguage(lang);
        setSavedLang(lang);
      } else {
        setSavedLang('tr');
      }
    };
    loadLanguage();
  }, []);

  useEffect(() => {
    if (savedLang) {
      setSelectedLanguage(savedLang);
    }
  }, [savedLang]);

  const changeLanguage = (lang: string) => {
    i18next.changeLanguage(lang);
    saveAsyncStorage('lang', lang);
    setSelectedLanguage(lang);
    setSavedLang(lang);
  };

  return {selectedLanguage, changeLanguage};
};

export default useLanguage;
