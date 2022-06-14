import React from 'react';
import {
  Avatar,
  TitleTransaction,
  RowTablePrice,
  RowTableb,
  TitleCoin,
  RowTable,
  Wrapper,
} from './styles';

const CoinRow = ({ coin, index }) => {
  return (
    <tr>
      <Wrapper>
        <Avatar>
          <td>
            <img src={coin.image} alt="" />
          </td>
        </Avatar>

        <RowTable>
          <td>{coin.name}</td>

          <td>
            <TitleTransaction>({coin.symbol.toUpperCase()})</TitleTransaction>
          </td>
        </RowTable>
        <RowTablePrice>
          <td>
            <TitleCoin>${coin.current_price.toLocaleString()}</TitleCoin>
          </td>
        </RowTablePrice>

        <RowTableb>
          <td>{coin.price_change_percentage_24h}</td>
        </RowTableb>
      </Wrapper>
    </tr>
  );
};

export default CoinRow;
