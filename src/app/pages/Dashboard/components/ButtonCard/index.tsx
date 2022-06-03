import { i18n } from './../i18n';
import React from 'react';
import IconButton1 from '../../../../assets/icons/Withdrawals.svg';
import IconButton2 from '../../../../assets/icons/Deposit.svg';
import IconButton3 from '../../../../assets/icons/Moni out.svg';
import IconButton4 from '../../../../assets/icons/Moni in.svg';
import { Avatar, Card, LastCard, Title, Row, InfoCard } from './styles';

function ButtonCard() {
  const { t } = i18n;

  return (
    <InfoCard>
      <Row>
        <Card>
          <Avatar>
            <img src={IconButton1} alt="" />
          </Avatar>
          <Title>{t('buttonCard__titleButton1')}</Title>
        </Card>
        <Card>
          <Avatar>
            <img src={IconButton2} alt="" />
          </Avatar>
          <Title>{t('buttonCard__titleButton2')}</Title>
        </Card>
        <Card>
          <Avatar>
            <img src={IconButton3} alt="" />
          </Avatar>
          <Title>{t('buttonCard__titleButton3')}</Title>
        </Card>
        <LastCard>
          <Avatar>
            <img src={IconButton4} alt="" />
          </Avatar>
          <Title>{t('buttonCard__titleButton4')}</Title>
        </LastCard>
      </Row>
    </InfoCard>
  );
}

export default ButtonCard;
