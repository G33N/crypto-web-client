import * as React from 'react';
import {
  Container,
  SubContainer,
  SectionOne,
  ColumnOne1,
  ColumnTwo1,
} from './styles';
import Navbar from './components/NavBar';
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
              <MarketCard />
            </ColumnOne1>
            <ColumnTwo1>
              <TransactionsCard />
            </ColumnTwo1>
          </SectionOne>
        </SubContainer>
      </Container>
    </>
  );
};
