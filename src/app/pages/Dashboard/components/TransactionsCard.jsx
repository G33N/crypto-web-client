import React from 'react';
import { i18n } from './i18n';
import styled from 'styled-components';
import { StyleConstants } from '../../../../styles/StyleConstants';
import alertblue from '../../../assets/icons/alertblue.svg';

const listado = [
  {
    id: '1',
    operacion: 'Venta',
    estado: 'Fallida',
    precio: '23455',
    fecha: '03/02/2026',
    hora: '12:00hs',
    color: 'fail',
  },
  {
    id: '2',
    operacion: 'Deposito',
    estado: 'En Revision',
    precio: '23455',
    fecha: '03/02/2026',
    hora: '',
    color: 'paid',
  },
  {
    id: '3',
    operacion: 'Compra',
    estado: 'En Proceso',
    fecha: '03/02/2026',
    precio: '23455',
    hora: '',
    color: 'glow',
  },
  {
    id: '4',
    operacion: 'Venta',
    estado: 'Aprovado',
    fecha: '03/02/2026',
    hora: '12:00hs',
    precio: '23455',
    color: 'paid',
  },
  {
    id: '5',
    operacion: 'Deposito',
    estado: 'En Revision',
    precio: '23455',
    fecha: '03/02/2026',
    hora: '',
    color: 'paid',
  },
  {
    id: '6',
    operacion: 'Deposito',
    estado: 'En Revision',
    precio: '23455',
    fecha: '03/02/2026',
    hora: '',
    color: 'paid',
  },
];

function TransactionsCard() {
  const { t } = i18n;

  return (
    <TransactionContainer>
      <CardContent>
        <BoxTitle>
          <TitleCard>{t('transactionCard__title')}</TitleCard>
          <LinkTitle>{t('transactionCard__linkTitle')}</LinkTitle>
        </BoxTitle>
        {listado.map(({ id, operacion, estado, fecha, hora, precio }) => (
          <Invoice>
            <Info>
              <Avatar>
                <img src={alertblue} alt="" />
              </Avatar>
              <TextContainer>
                <Title>{operacion}</Title>
                <SubTitle>
                  {fecha} {hora}
                </SubTitle>
              </TextContainer>
            </Info>
            <Container>
              <SubTitle>{estado}</SubTitle>
              <Price>{precio}</Price>
            </Container>
          </Invoice>
        ))}
      </CardContent>
    </TransactionContainer>
  );
}

const TransactionContainer = styled.div`
  width: 30rem;
  border-radius: 1rem;
  background-color: white;
  height: max-content;
  box-shadow: ${StyleConstants.cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${StyleConstants.hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const CardContent = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 2rem 0;
  }
`;

const BoxTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const LinkTitle = styled.h5`
  margin-right: 30px;
  text-align: end;
  color: ${p => p.theme.text};
  cursor: pointer;
`;
const TitleCard = styled.h5`
  margin-left: 30px;
  text-align: start;
  color: ${p => p.theme.text};
  cursor: pointer;
`;

const Invoice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0.4rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    width: 100%;
    text-align: center;
  }
`;
const Avatar = styled.div`
  img {
    height: 2rem;
    width: 2rem;
    border-radius: 3.5rem;
  }
`;
const TextContainer = styled.div`
  margin-left: 1rem;
`;
const Title = styled.h4``;
const SubTitle = styled.h5`
  font-weight: 400;
`;

const Container = styled.div`
  margin-left: 1rem;
  /* display: flex;
  justify-content: space-between;
  width: 30%;
  align-items: center; */
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    flex-direction: column;
    gap: 0.6rem;
  }
`;

const Price = styled.div``;

export default TransactionsCard;
