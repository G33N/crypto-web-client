import React from 'react';
import styled from 'styled-components';
import Home from '../../../assets/icons/primary.svg';

import { cardShadow, hoverEffect } from '../utils';
function ButtonCard() {
  return (
    <InfoCard>
      <Row>
        <Card>
          <Avatar>
            <img src={Home} alt="" />
          </Avatar>
          <Title>Vender</Title>
        </Card>
        <Card>
          <Avatar>
            <img src={Home} alt="" />
          </Avatar>
          <Title>Comprar</Title>
        </Card>
        <Card>
          <Avatar>
            <img src={Home} alt="" />
          </Avatar>
          <Title>Enviar</Title>
        </Card>
        <Card>
          <Avatar>
            <img src={Home} alt="" />
          </Avatar>
          <Title>Depositar</Title>
        </Card>
      </Row>
    </InfoCard>
  );
}

const InfoCard = styled.div`
  height: 14rem;
  width: 100%;
  padding: 1rem;
  color: white;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
  }
`;

const Card = styled.div`
  background-color: ${p => p.theme.background};
  border-radius: 1rem;
  margin-right: 15px;
  padding: 1rem 1rem 0.3rem 1rem;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.4rem;
  /* ${({ justify }) =>
    justify &&
    `
      justify-content:space-around;
      width:90%
  `} */
`;
const Avatar = styled.div`
  img {
    height: 1.5rem;
    width: 1.5rem;
    color: ${p => p.theme.background};
  }
`;

const Title = styled.h3`
  color: black;
`;

export default ButtonCard;
