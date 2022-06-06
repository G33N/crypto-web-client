import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { i18n } from '../i18n';
import PasswordOff from '../../../../assets/icons/Password off.svg';
import PasswordOn from '../../../../assets/icons/Password on.svg';
import BackUp from '../../../../assets/icons/Back Up.svg';
import ArrowDown from '../../../../assets/icons/Arrow down.svg';
import {
  Box,
  CardContent,
  Slack,
  SlackText,
  SlackHead,
  SlackTitle,
  Icon,
  Img,
  SlackFoot,
  BoxInput,
  InputPass,
} from './styles';

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
      if (resultado.price_change_percentage_24h > 0) {
        setArrowChange(true);
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

export default BalanceCard;
