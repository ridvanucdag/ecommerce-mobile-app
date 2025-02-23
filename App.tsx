import React, {useEffect} from 'react';
import i18next from 'i18next';
import {I18nextProvider, initReactI18next} from 'react-i18next';
import en from './src/locales/en/en.json';
import tr from './src/locales/tr/tr.json';
import es from './src/locales/es/es.json';
import 'intl-pluralrules';
import AppNavigator from './src/navigators/AppNavigators';
import {Provider} from 'react-redux';
import {setFavorites} from './src/redux/slices/favoriteSlice';
import {setCart} from './src/redux/slices/basketSlice';
import {loadFromAsyncStorage} from './src/utils/AsyncStorage';
import useLanguage from '@hooks/useLocation';
import {store} from '@redux/store';
import { setLanguage } from '@redux/slices/languageSlice';

i18next.use(initReactI18next).init({
  fallbackLng: 'tr',
  resources: {
    en: {translation: en},
    tr: {translation: tr},
    es: {translation: es},
  },
});

const Index = () => {
  const {selectedLanguage} = useLanguage();
  useEffect(() => {
    const loadCartAndFavorites = async () => {
      try {
        const cartItems = (await loadFromAsyncStorage('cart')) || [];
        const favoriteIds = (await loadFromAsyncStorage('favorites')) || [];
        if (cartItems.length > 0) {
          store.dispatch(setCart(cartItems));
        }

        if (favoriteIds.length > 0) {
          store.dispatch(setFavorites(favoriteIds));
        }
      } catch (error) {
        console.error('Error', error);
      }
    };
    loadCartAndFavorites();
  }, []);

  useEffect(() => {
    if (selectedLanguage) {
      i18next.changeLanguage(selectedLanguage);
      store.dispatch(setLanguage(selectedLanguage));
    }
  }, [selectedLanguage]);

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18next} key={i18next.language}>
        <AppNavigator />
      </I18nextProvider>
    </Provider>
  );
};

export default Index;
