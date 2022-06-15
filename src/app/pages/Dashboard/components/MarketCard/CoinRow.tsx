import React, { useState } from 'react';
import {
  Avatar,
  TitleTransaction,
  RowTablePrice,
  RowTableb,
  TitleCoin,
  RowTable,
  BoxArrow,
  ResponsiveBox,
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
        <ResponsiveBox>
          <RowTablePrice>
            <td>
              <TitleCoin>${coin.current_price.toLocaleString()}</TitleCoin>
            </td>
          </RowTablePrice>
          <RowTableb>
            {coin.price_change_percentage_24h > 0 ? (
              <BoxArrow
                ColorPrice={
                  coin.price_change_percentage_24h > 0 ? 'green' : 'red'
                }
              >
                <p>{coin.price_change_percentage_24h}%</p>
              </BoxArrow>
            ) : (
              <BoxArrow
                ColorPrice={
                  coin.price_change_percentage_24h > 0 ? 'green' : 'red'
                }
              >
                <p style={{ color: 'red' }}>
                  {coin.price_change_percentage_24h}%
                </p>
              </BoxArrow>
            )}
          </RowTableb>
        </ResponsiveBox>
      </Wrapper>
    </tr>
  );
};

export default CoinRow;
