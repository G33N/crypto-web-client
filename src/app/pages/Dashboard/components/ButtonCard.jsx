import React from 'react';
import styled from 'styled-components';
import { cardShadow, hoverEffect } from '../utils';
function ButtonCard() {
  return (
    <InfoCard>
      <Row>
        <Card>
          <CardContent>
            <Digit>98</Digit>
            <InfoContainer>
              <Title>Vender</Title>
            </InfoContainer>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Digit>98</Digit>
            <InfoContainer>
              <Title>Comprar</Title>
            </InfoContainer>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Digit>98</Digit>
            <Title>Enviar</Title>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Digit>98</Digit>
            <InfoContainer>
              <Title>Depositar</Title>
            </InfoContainer>
          </CardContent>
        </Card>
      </Row>
    </InfoCard>
  );
}

const InfoCard = styled.div`
  height: 14rem;
  width: 100%;
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
  color: white;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
  }
`;

const Card = styled.div`
  background-color: rgba(183, 194, 243, 0.3);
  border-radius: 1rem;
  margin-right: 15px;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
`;

const CardContent = styled.div`
  padding: 0.7rem 1rem 0.3rem 1rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.4rem;
  ${({ justify }) =>
    justify &&
    `
      justify-content:space-around;
      width:90%
  `}
`;
const Digit = styled.div`
  background-color: ${p => p.theme.text};
  padding: 0.8rem 1rem;
  font-size: 1.3rem;
  border-radius: 1rem;
`;
const InfoContainer = styled.div`
  margin-left: 0.7rem;
`;
const Title = styled.h3`
  color: black;
`;

export default ButtonCard;
