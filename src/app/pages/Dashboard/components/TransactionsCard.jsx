import React from 'react';
import { i18n } from './i18n';
import styled from 'styled-components';
import { StyleConstants } from '../../../../styles/StyleConstants';
import Badge from './Badge';
import alertblue from '../../../assets/icons/alertblue.svg';

function TransactionsCard() {
  const { t } = i18n;

  return (
    <TransactionContainer>
      <CardContent>
        <BoxTitle>
          <TitleCard>{t('transactionCard__title')}</TitleCard>
          <LinkTitle>{t('transactionCard__linkTitle')}</LinkTitle>
        </BoxTitle>
        <Invoice>
          <Info>
            <Avatar>
              <img src={alertblue} alt="" />
            </Avatar>
            <TextContainer>
              <Title>Compra</Title>
              <SubTitle>03/02/2026 12:00hs.</SubTitle>
            </TextContainer>
          </Info>
          <Container>
            <Badge content="" paid />
            <Price>En Revision</Price>
          </Container>
        </Invoice>
        <Invoice>
          <Info>
            <Avatar>
              <img src={alertblue} alt="" />
            </Avatar>
            <TextContainer>
              <Title>Venta</Title>
              <SubTitle>02/05/22</SubTitle>
            </TextContainer>
          </Info>
          <Container>
            <Badge content="" late />
            <Price>Fallida</Price>
          </Container>
        </Invoice>
        <Invoice>
          <Info>
            <Avatar>
              <img src={alertblue} alt="" />
            </Avatar>
            <TextContainer>
              <Title>Compra</Title>
              <SubTitle>03/02/2026 12:00hs.</SubTitle>
            </TextContainer>
          </Info>
          <Container>
            <Badge content=" " glow />
            <Price>En Revision</Price>
          </Container>
        </Invoice>
        <Invoice>
          <Info>
            <Avatar>
              <img src={alertblue} alt="" />
            </Avatar>
            <TextContainer>
              <Title>Venta</Title>
              <SubTitle>02/05/22</SubTitle>
            </TextContainer>
          </Info>
          <Container>
            <Badge content="" paid />
            <Price>En proceso</Price>
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
  padding-top: 0.6rem;
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
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    flex-direction: column;
    gap: 0.6rem;
  }
`;

const Price = styled.div``;

export default TransactionsCard;
