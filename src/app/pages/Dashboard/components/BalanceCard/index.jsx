import React from 'react';
import styled from 'styled-components';
import { i18n } from '../i18n';
import { StyleConstants } from '../../../../../styles/StyleConstants';
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
  transition: 0.4s ease-in-out;
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
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */

  display: flex;
  align-items: center;
`;

const SlackTitle = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: ${p => p.theme.text};
`;

const SlackFoot = styled.div`
  color: ${p => p.theme.text};

  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 72px;
`;

export default BalanceCard;
