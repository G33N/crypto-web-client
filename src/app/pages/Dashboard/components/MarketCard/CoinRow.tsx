import React from 'react';
import { Avatar, TitleTransaction, Title } from './styles';

const CoinRow = ({ coin, index }) => {
  return (
    <tr>
      <td>
        <Avatar>
          <img src={coin.image} alt="" />
        </Avatar>
      </td>
      <td>
        <TitleTransaction>{coin.name}</TitleTransaction>
      </td>

      <td>
        <Title>${coin.current_price.toLocaleString()}</Title>
      </td>

      <td
        className={
          coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'
        }
      >
        {coin.price_change_percentage_24h}
      </td>
    </tr>
  );
};

export default CoinRow;
