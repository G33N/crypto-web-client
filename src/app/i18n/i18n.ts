import i18n from 'i18n-js';
import en from './en.json';
import ja from './ja.json';
import cr from './es-CR.json';

i18n.fallbacks = true;
i18n.translations = { cr, ja, en };
i18n.locale = 'es-CR';

/**
 * Builds up valid keypaths for translations.
 * Update to your default locale of choice if not English.
 */
// @ts-ignore type DefaultLocale = typeof cr;
// @ts-ignore export type TxKeyPath = RecursiveKeyOf<DefaultLocale>;

// @ts-ignore type RecursiveKeyOf<TObj extends Record<string, any>> = {
// @ts-ignore  [TKey in keyof TObj & string]: TObj[TKey] extends Record<string, any>
// @ts-ignore    ? `${TKey}` | `${TKey}.${RecursiveKeyOf<TObj[TKey]>}`
// @ts-ignore    : `${TKey}`;
// @ts-ignore}[keyof TObj & string];
