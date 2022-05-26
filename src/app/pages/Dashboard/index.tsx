import * as React from 'react';

import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AppwriteService } from 'services/appwrite';
import { Container } from 'styles/StyleElements';
import {
  Container,
  SubContainer,
  SectionOne,
  SectionTwo,
  ColumnOne1,
  ColumnTwo1,
  ColumnOne2,
} from './styles';
import Navbar from './components/Navbar';
import ButtonCard from './components/ButtonCard';
import BalanceCard from './components/BalanceCard';
import TransactionsCard from './components/TransactionsCard';
import MarketCard from './components/MarketCard';

export const Dashboard = (props: any) => {
  const { userName } = props.props;

  return (
    <>
 <Container>
        <Navbar userName={userName} />
        <SubContainer>
          <SectionOne>
            <ColumnOne1>
              <BalanceCard />
              <ButtonCard />
            </ColumnOne1>
            <ColumnTwo1>
              <TransactionsCard />
            </ColumnTwo1>
          </SectionOne>
          <SectionTwo>
            <ColumnOne2>
              <MarketCard />
            </ColumnOne2>
          </SectionTwo>
        </SubContainer>
      </Container>
    </>
  );
};
