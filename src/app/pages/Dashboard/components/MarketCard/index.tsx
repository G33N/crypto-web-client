import React, { useEffect, useState } from 'react';
import { i18n } from '../_i18n';
import axios from 'axios';
import { Card, Title, BoxTitle } from './styles';
import TableCoins from './TableCoins';

function MarketCard() {
  const { t } = i18n;
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  const limit = 7;

  const getData = async () => {
    try {
      const res = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false',
      );

      setCoins(res.data.slice(0, limit));
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Card>
      <BoxTitle>
        <Title>{t('marketCard__title')}</Title>
      </BoxTitle>
      <TableCoins coins={coins} search={search} />
    </Card>
  );
}

export default MarketCard;
