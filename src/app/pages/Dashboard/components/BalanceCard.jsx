import React from 'react';
import styled from 'styled-components';
import { hoverEffect } from '../utils';
function BalanceCard() {
  return (
    <Box>
      <CardContent flex={true}>
        <Slack>
          <SlackText>
            <SlackHead>Billetera</SlackHead>
            <SlackHead>Balance</SlackHead>
            <SlackFoot>$ 0000000</SlackFoot>
          </SlackText>
        </Slack>
      </CardContent>
    </Box>
  );
}

const Box = styled.div`
  background-color: ${p => p.theme.background};
  height: 50%;
  width: 100%;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
    height: max-content;
    width: 80%;
  }
`;

const CardContent = styled.div`
  margin: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Slack = styled.div`
  display: flex;
`;

const SlackText = styled.div`
  color: ${p => p.theme.background};
`;

const SlackHead = styled.h2`
  font-weight: 500;
`;
const SlackFoot = styled.p`
  color: ${p => p.theme.text};
  font-size: 40px;
`;

export default BalanceCard;
