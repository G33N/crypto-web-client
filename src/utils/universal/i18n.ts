import i18n from 'i18n-js';

i18n.defaultLocale = 'es-CR';
i18n.locale = 'es-CR';
i18n.fallbacks = true;

interface Translation {
  'es-CR': Record<string, unknown>;
  [locale: string]: Record<string, unknown>; // any other translation should be optional
}

export default (translations: Translation) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const key in translations) {
    if (Object.prototype.hasOwnProperty.call(translations, key)) {
      const translation = translations[key];
      if (Object.prototype.hasOwnProperty.call(i18n.translations, key)) {
        i18n.translations[key] = Object.assign(
          i18n.translations[key],
          translation,
        );
      } else {
        i18n.translations[key] = translation;
      }
    }
  }
  return i18n;
};
