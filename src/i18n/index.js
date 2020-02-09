import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { ru } from './ru';

const resources = {
  ru: {
    translation: {
      ...ru,
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru',
    interpolation: {
      format: (value, format, lng) => {
        if (format === 'intlDate') {
          return new Intl.DateTimeFormat(lng, {
            day: 'numeric',
            month: 'long',
          }).format(value);
        }

        return value;
      },
    },
  });

export default i18n;
