import React from 'react';
import CoinRow from './CoinRow';
import { i18n } from '../_i18n';
import {
  TableCoin,
  TitleRowTable,
  WrapperBox,
  TitleRowTablePrice,
  TitleRowTableb,
} from './styles';

const TableCoins = ({ coins, search }) => {
  const { t } = i18n;

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase()),
  );

  if (!coins) return <div>{t('marketCard__errorMessageAApi')}</div>;

  return (
    <TableCoin>
      <thead hidden={false}>
        <WrapperBox>
          <TitleRowTable>
            <td>{t('marketCard__tableTitle2')}</td>
          </TitleRowTable>
          <TitleRowTablePrice>
            <td>{t('marketCard__tableTitle3')}</td>
          </TitleRowTablePrice>

          <TitleRowTableb>
            <td>{t('marketCard__tableTitle4')}</td>
          </TitleRowTableb>
        </WrapperBox>
      </thead>
      <tbody>
        {filteredCoins.map((coin, index) => (
          <CoinRow key={coin.id} coin={coin} index={index + 1} />
        ))}
      </tbody>
    </TableCoin>
  );
};

export default TableCoins;
