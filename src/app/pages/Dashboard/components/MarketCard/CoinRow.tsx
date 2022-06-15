import React, { useState } from 'react';
import {
  Avatar,
  TitleTransaction,
  RowTablePrice,
  RowTableb,
  TitleCoin,
  RowTable,
  Img,
  BoxArrow,
  ResponsiveBox,
  Wrapper,
} from './styles';
import BackUp from '../../../../assets/icons/Back Up.svg';
import ArrowDown from '../../../../assets/icons/Arrow down.svg';
import { isRejected } from '@reduxjs/toolkit';

const CoinRow = ({ coin, index }) => {
  const [arrowChange, setArrowChange] = useState(false);
  console.log('arrowChange: ', arrowChange);
  console.log('CoinPrice: ', coin.price_change_percentage_24h);
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
            {arrowChange ? (
              <BoxArrow>
                +
                <p style={{ color: 'green' }}>
                  {coin.price_change_percentage_24h}%
                </p>
              </BoxArrow>
            ) : (
              <BoxArrow>
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
