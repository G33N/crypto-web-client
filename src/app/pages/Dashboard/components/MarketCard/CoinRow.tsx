import React from 'react';
import {
  Avatar,
  TitleTransaction,
  RowTableb,
  Title,
  RowTable,
  Wrapper,
} from './styles';

const CoinRow = ({ coin, index }) => {
  return (
    <tr>
      <Wrapper>
        <RowTable>
          <td>
            <Avatar>
              <img src={coin.image} alt="" />
            </Avatar>
          </td>
        </RowTable>

        <RowTable>
          <td>{coin.name}</td>

          <td>
            <TitleTransaction>({coin.symbol.toUpperCase()})</TitleTransaction>
          </td>
        </RowTable>
        <RowTableb>
          <td>
            <Title>${coin.current_price.toLocaleString()}</Title>
          </td>
        </RowTableb>

        <RowTableb>
          <td>{coin.price_change_percentage_24h}</td>
        </RowTableb>
      </Wrapper>
    </tr>
  );
};

export default CoinRow;
