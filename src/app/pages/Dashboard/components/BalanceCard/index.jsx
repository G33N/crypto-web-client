import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { i18n } from '../i18n';
import { StyleResponsive } from '../../../../../styles/StyleConstants';
import PasswordOff from '../../../../assets/icons/Password off.svg';
import PasswordOn from '../../../../assets/icons/Password on.svg';
import BackUp from '../../../../assets/icons/Back Up.svg';
import ArrowDown from '../../../../assets/icons/Arrow down.svg';

function BalanceCard() {
  const { t } = i18n;
  const [coins, setCoins] = useState([]);
  const [totalBalance, setTotalBalance] = useState([]);
  const { register } = useForm({
    mode: 'onChange',
  });

  const coinBalance = 'USDT';

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const [arrowChange, setArrowChange] = useState();

  const getData = async () => {
    try {
      const res = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false',
      );
      const response = res.data;
      const resultado = response.find(change => change.id === 'tether');
      if (resultado === 'tether') {
        setArrowChange(true);
        console.log('arrowChange:', arrowChange);
      }

      setCoins(resultado.price_change_percentage_24h);
    } catch (error) {
      console.error(error);
    }
  };

  const getDataBalance = async () => {
    try {
      const res = await axios.get('http://localhost:8000/api/account/list');
      setTotalBalance(res.data.balance);
      console.log('Resultado de balance data: ', res.data);
    } catch (error) {
      setTotalBalance('7.033,22');
      console.error(error);
    }
  };

  useEffect(() => {
    getDataBalance();
    getData();
  }, []);

  return (
    <Box>
      <CardContent flex={true}>
        <Slack>
          <SlackText>
            <SlackTitle>{t('balanceCard__title')}</SlackTitle>
            <SlackHead>
              {t('balanceCard__subTitle')}
              <Icon onClick={togglePasswordVisiblity}>
                {passwordShown ? (
                  <Img src={PasswordOn} />
                ) : (
                  <Img src={PasswordOff} />
                )}
              </Icon>
            </SlackHead>
            <SlackFoot>
              <BoxInput>
                <InputPass
                  value={`$ ${totalBalance}  ${coinBalance}`}
                  type={passwordShown ? 'text' : 'password'}
                  {...register('balance')}
                  name="balance"
                />
                {arrowChange ? (
                  <>
                    <Img src={BackUp} />
                    <p style={{ color: 'green' }}>{coins}%</p>
                  </>
                ) : (
                  <>
                    <Img src={ArrowDown} />
                    <p style={{ color: 'red' }}>{coins}%</p>
                  </>
                )}
              </BoxInput>
            </SlackFoot>
          </SlackText>
        </Slack>
      </CardContent>
    </Box>
  );
}

const Box = styled.div`
  background-color: ${p => p.theme.background};
  height: 200px;
  width: 660px;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  transition: 0.4s ease-in-out;
  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
    position: absolute;
    width: 328px;
    height: 140px;
    left: 16px;
    top: 160px;
  }
`;

const CardContent = styled.div`
  margin: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
    flex-direction: column;
  }
`;

const Slack = styled.div`
  display: flex;
`;

const SlackText = styled.div`
  color: ${p => p.theme.background};
`;

const SlackHead = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #0a0a0a;
  /* identical to box height */
  display: flex;
  align-items: center;
  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
    font-size: 14px;
  }
`;

const SlackTitle = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: ${p => p.theme.text};
  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
    font-size: 20px;
    line-height: 8px;
  }
`;

const SlackFoot = styled.div`
  color: ${p => p.theme.text};
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 72px;
  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
    font-size: 36px;
    line-height: 42px;
  }
`;

export const Icon = styled.i`
  padding: 10px;
  color: grey;
  &:hover {
    color: ${p => p.theme.text};
    opacity: 0.8;
  }
`;

export const Img = styled.img`
  width: 24px;
  height: 24px;
`;
export const InputPass = styled.input`
  width: 70%;
  font-size: 48px;
  font-weight: 500;
  height: 50px;
  padding: 0px;
  border: transparent;
  outline: none;

  ::placeholder {
    color: ${p => p.theme.text};
  }
  &:active {
    color: ${p => p.theme.text};
  }
`;

export const BoxInput = styled.div`
  height: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  border: transparent;
  opacity: 0.8;
  border-radius: 12px;
  background-color: transparent;
  p {
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
  }
  ::placeholder {
    color: ${p => p.theme.text};
  }
`;

export default BalanceCard;
