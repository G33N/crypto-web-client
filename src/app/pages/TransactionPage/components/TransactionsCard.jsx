import React from 'react';
import i18next from 'i18next';
import styled from 'styled-components';
import { StyleConstants, device } from '../../../../styles/StyleConstants';
import Badge from '../../Dashboard/components/Badge';
import BlueAlert from '../../../assets/icons/alertblue.svg';

function TransactionsCard() {
  const { t } = i18next;

  return (
    <TransactionContainer>
      <CardContent>
        <Invoice>
          <Info>
            <Avatar>
              <img src={BlueAlert} alt="" />
            </Avatar>
            <TextContainer>
              <Title>{t('title')}Compra</Title>
              <SubTitle>03/02/2026 12:00hs.</SubTitle>
            </TextContainer>
          </Info>
          <Container>
            <Badge content="En Revision" paid />
          </Container>
        </Invoice>
        <Invoice>
          <Info>
            <Avatar>
              <img src={BlueAlert} alt="" />
            </Avatar>
            <TextContainer>
              <Title>Venta</Title>
              <SubTitle>02/05/22</SubTitle>
            </TextContainer>
          </Info>
          <Container>
            <Badge content="Fallida" late />
          </Container>
        </Invoice>
        <Invoice>
          <Info>
            <Avatar>
              <img src={BlueAlert} alt="" />
            </Avatar>
            <TextContainer>
              <Title>Compra</Title>
              <SubTitle>03/02/2026 12:00hs.</SubTitle>
            </TextContainer>
          </Info>
          <Container>
            <Badge content="En Revision" glow />
          </Container>
        </Invoice>
        <Invoice>
          <Info>
            <Avatar>
              <img src={BlueAlert} alt="" />
            </Avatar>
            <TextContainer>
              <Title>Venta</Title>
              <SubTitle>02/05/22</SubTitle>
            </TextContainer>
          </Info>
          <Container>
            <Badge content="En Proceso" paid />
          </Container>
        </Invoice>
      </CardContent>
    </TransactionContainer>
  );
}

const TransactionContainer = styled.div`
  width: 35rem;
  border-radius: 1rem;
  margin-top: 1rem;
  background-color: white;
  height: 140%;
  box-shadow: ${StyleConstants.cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${StyleConstants.hoverEffect};
  }
  @media screen and (${device.mobileS}) and (${device.mobileL}) {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const CardContent = styled.div`
  @media screen and (${device.mobileS}) and (${device.mobileL}) {
    margin: 2rem 0;
  }
`;
const Invoice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0.4rem;
  padding-top: 0.6rem;
  @media screen and (${device.mobileS}) and (${device.mobileL}) {
    flex-direction: column;
    gap: 1rem;
  }
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  @media screen and (${device.mobileS}) and (${device.mobileL}) {
    flex-direction: column;
    width: 100%;
    text-align: center;
  }
`;
const Avatar = styled.div`
  img {
    height: 3.5rem;
    width: 3.5rem;
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
  @media screen and (${device.mobileS}) and (${device.mobileL}) {
    width: 100%;
    flex-direction: column;
    gap: 0.6rem;
  }
`;

export default TransactionsCard;
