import React from 'react';
import { Avatar, RowTableb, TitleTransaction, Title, RowTable } from './styles';

const CoinRow = ({ coin, index }) => {
  return (
    <tr>
      <td>
        <Avatar>
          <img src={coin.image} alt="" />
        </Avatar>
      </td>
      <td>
        <RowTableb>
          <TitleTransaction>{coin.name}</TitleTransaction>
          <TitleTransaction>{coin.symbol.toUpperCase()}</TitleTransaction>
        </RowTableb>
      </td>
      <RowTable>
        <td>
          <Title>${coin.current_price.toLocaleString()}</Title>
        </td>

        <td>{coin.price_change_percentage_24h}</td>
      </RowTable>
    </tr>
  );
};

export default CoinRow;
