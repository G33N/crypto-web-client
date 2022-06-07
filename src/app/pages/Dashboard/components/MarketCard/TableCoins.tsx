import React from 'react';
import CoinRow from './CoinRow';
import { i18n } from '../_i18n';
import { Box } from './styles';

const TableCoins = ({ coins, search }) => {
  const { t } = i18n;
  const isMobile = false;

  const titles = [
    `${t('marketCard__tableTitle1')}`,
    `${t('marketCard__tableTitle2')}`,
    `${t('marketCard__tableTitle3')}`,
    `${t('marketCard__tableTitle4')}`,
  ];

  const mobileTitles = [
    `${t('marketCard__tableTitle1')}`,
    `${t('marketCard__tableTitle2')}`,
    `${t('marketCard__tableTitle4')}`,
  ];

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase()),
  );

  if (!coins) return <div>{t('marketCard__errorMessageAApi')}</div>;

  return (
    <table className="table table-dark mt-4 table-hover">
      {isMobile ? (
        <thead>
          <Box>
            <tr>
              {mobileTitles.map((title, i) => (
                <td key={i}>{title}</td>
              ))}
            </tr>
          </Box>
        </thead>
      ) : (
        <thead>
          <Box>
            <tr>
              {titles.map((title, i) => (
                <td key={i}>{title}</td>
              ))}
            </tr>
          </Box>
        </thead>
      )}
      <tbody>
        <Box>
          {filteredCoins.map((coin, index) => (
            <CoinRow key={coin.id} coin={coin} index={index + 1} />
          ))}
        </Box>
      </tbody>
    </table>
  );
};

export default TableCoins;
