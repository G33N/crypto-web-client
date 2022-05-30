import React from 'react';
import styled from 'styled-components';
import { i18n } from './i18n';
import { StyleConstants } from '../../../../styles/StyleConstants';
function BalanceCard() {
  const { t } = i18n;

  return (
    <Box>
      <CardContent flex={true}>
        <Slack>
          <SlackText>
            <SlackTitle>{t('balanceCard__title')}</SlackTitle>
            <SlackHead>{t('balanceCard__subTitle')}</SlackHead>
            <SlackFoot>$ 0000000</SlackFoot>
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
  box-shadow: ${StyleConstants.hoverEffect};
  transition: 0.4s ease-in-out;
  /* &:hover {
    box-shadow:${StyleConstants.hoverEffect};
  } */
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
  position: absolute;
  width: 78px;
  height: 27px;
  left: 319px;
  top: 205px;

  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */

  display: flex;
  align-items: center;
`;

const SlackTitle = styled.p`
  position: absolute;
  width: 101px;
  height: 36px;
  left: 319px;
  top: 152px;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: ${p => p.theme.text};
`;

const SlackFoot = styled.div`
  color: ${p => p.theme.text};
  position: absolute;
  width: 372px;
  height: 72px;
  left: 319px;
  top: 240px;

  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 72px;
`;

export default BalanceCard;
