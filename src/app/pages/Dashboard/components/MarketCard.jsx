import React from 'react';
import { i18n } from './i18n';
import styled from 'styled-components';
import { StyleConstants } from '../../../../styles/StyleConstants';
import Alert from '../../../assets/icons/Alert.png';

const listado = [
  {
    id: '1',
    image: 'Alert',
    name: 'moneda1',
    price: '2066',
    change: '95',
  },
  {
    id: '2',
    name: 'moneda2',
    price: '2000',
    change: '45',
  },
  {
    id: '3',
    name: 'moneda3',
    price: '8800',
    change: '22',
  },
];

function MarketCard() {
  const { t } = i18n;

  return (
    <Card>
      <BoxTitle>
        <Title>{t('marketCard__title')}</Title>
      </BoxTitle>
      <ul>
        {listado.map(({ id, name, price, change }) => (
          <li key={id}>
            <Project>
              <Avatar>
                <img src={Alert} alt="" />
              </Avatar>
              <Detail>
                <TitleTransaction>{name}</TitleTransaction>
                <Title> $ {price} </Title>
                <SubTitle>{change}</SubTitle>
              </Detail>
            </Project>
          </li>
        ))}
      </ul>
    </Card>
  );
}

const Card = styled.div`
  height: max-content;
  width: max-content;
  background-color: white;
  margin: 0;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: ${StyleConstants.cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${StyleConstants.hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 75%;
    margin-top: 1rem;
  }
`;

const BoxTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Project = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
`;

const Avatar = styled.div`
  img {
    height: 3rem;
    width: 3rem;
    border-radius: 4rem;
  }
`;

const Detail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 1rem;
`;
const TitleTransaction = styled.h3`
  padding-right: 6rem;
  font-weight: 500;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1rem;
  }
`;

const SubTitle = styled.h5`
  padding-right: 2rem;
  font-weight: 300;
  padding-left: 4rem;
`;

const Title = styled.h5`
  text-align: start;
  color: ${p => p.theme.text};
  cursor: pointer;
`;

export default MarketCard;
