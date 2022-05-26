import { i18n } from '../i18n';
const { t } = i18n;

export const navigationItems = {
  sidebar: [
    {
      name: `${t('sidebar__title1')}`,
      to: '/dashboard',
      text: 'dashboard',
    },
    {
      name: `${t('sidebar__title2')}`,
      to: '/transaction',
      text: 'transaction',
    },
    {
      name: `${t('sidebar__title3')}`,
      to: '/tabs',
      text: 'tabsdemo',
    },
    {
      name: `${t('sidebar__title4')}`,
      to: '/settings',
      text: 'settings',
    },
    {
      name: `${t('sidebar__title5')}`,
      to: '/support',
      text: 'support',
    },
  ],
  footer: [],
};
export default navigationItems;
