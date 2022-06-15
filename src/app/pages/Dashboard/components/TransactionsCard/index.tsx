import React from 'react';
import { i18n } from '../_i18n';
import Icon1 from '../../../../assets/icons/Moni in.svg';
import Icon2 from '../../../../assets/icons/Moni out.svg';
import Icon3 from '../../../../assets/icons/Deposit.svg';
import Icon4 from '../../../../assets/icons/Withdrawals.svg';
import {
  Avatar,
  BoxTitle,
  Container,
  TitleCard,
  Title,
  TransactionContainer,
  TextContainer,
  SubTitle,
  Info,
  Invoice,
  Price,
  LinkTitle,
} from './styles';

const listado = [
  {
    id: '1',
    image: Icon1,
    operacion: 'Venta',
    estado: 'Fallida',
    precio: '23455',
    fecha: '03/02/2026',
    hora: '12:00hs',
    color: 'fail',
  },
  {
    id: '2',
    image: Icon1,
    operacion: 'Deposito',
    estado: 'En Revision',
    precio: '23455',
    fecha: '03/02/2026',
    hora: '',
    color: 'paid',
  },
  {
    id: '3',
    image: Icon3,
    operacion: 'Compra',
    estado: 'En Proceso',
    fecha: '03/02/2026',
    precio: '23455',
    hora: '',
    color: 'glow',
  },
  {
    id: '4',
    image: Icon4,
    operacion: 'Venta',
    estado: 'Aprovado',
    fecha: '03/02/2026',
    hora: '12:00hs',
    precio: '23455',
    color: 'paid',
  },
  {
    id: '5',
    image: Icon2,
    operacion: 'Deposito',
    estado: 'En Revision',
    precio: '23455',
    fecha: '03/02/2026',
    hora: '',
    color: 'paid',
  },
  {
    id: '6',
    image: Icon1,
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
      <BoxTitle>
        <TitleCard>{t('transactionCard__title')}</TitleCard>
        <LinkTitle>{t('transactionCard__linkTitle')}</LinkTitle>
      </BoxTitle>
      {listado.map(({ id, image, operacion, estado, fecha, hora, precio }) => (
        <Invoice>
          <Info>
            <Avatar>
              <img src={image} alt="" />
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
    </TransactionContainer>
  );
}

export default TransactionsCard;
