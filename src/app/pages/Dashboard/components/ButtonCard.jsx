import { i18n } from './i18n';
import React from 'react';
import styled from 'styled-components';
import { StyleConstants } from '../../../../styles/StyleConstants';
import Home from '../../../assets/icons/primary.svg';

function ButtonCard() {
  const { t } = i18n;

  return (
    <InfoCard>
      <Row>
        <Card>
          <Avatar>
            <img src={Home} alt="" />
          </Avatar>
          <Title>{t('buttonCard__titleButton1')}</Title>
        </Card>
        <Card>
          <Avatar>
            <img src={Home} alt="" />
          </Avatar>
          <Title>{t('buttonCard__titleButton2')}</Title>
        </Card>
        <Card>
          <Avatar>
            <img src={Home} alt="" />
          </Avatar>
          <Title>{t('buttonCard__titleButton3')}</Title>
        </Card>
        <Card>
          <Avatar>
            <img src={Home} alt="" />
          </Avatar>
          <Title>{t('buttonCard__titleButton4')}</Title>
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
  box-shadow: ${StyleConstants.cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${StyleConstants.hoverEffect};
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.4rem;
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
