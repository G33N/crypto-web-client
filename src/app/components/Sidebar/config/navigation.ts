import { i18n } from '../i18n';
import Home from '../../../assets/icons/Home.svg';
import Account from '../../../assets/icons/Accounts.svg';
import Settings from '../../../assets/icons/Settings.svg';
import Transaction from '../../../assets/icons/Transactions.svg';
import Questions from '../../../assets/icons/Question.svg';

const { t } = i18n;

export const navigationItems = {
  sidebar: [
    {
      name: `${t('sidebar__title1')}`,
      to: '/dashboard',
      text: 'dashboard',
      icon: `${Home}`,
    },
    {
      name: `${t('sidebar__title2')}`,
      to: '/transaction',
      text: 'transaction',
      icon: `${Transaction}`,
    },
    {
      name: `${t('sidebar__title3')}`,
      to: '/tabs',
      text: 'tabsdemo',
      icon: `${Account}`,
    },
    {
      name: `${t('sidebar__title4')}`,
      to: '/settings',
      text: 'settings',
      icon: `${Settings}`,
    },
    {
      name: `${t('sidebar__title5')}`,
      to: '/support',
      text: 'support',
      icon: `${Questions}`,
    },
  ],
  footer: [],
};
export default navigationItems;
