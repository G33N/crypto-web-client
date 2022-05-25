import * as React from 'react';
import { StyleConstants } from 'styles/StyleConstants';
import styled from 'styled-components/macro';
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

const Container = styled.div`
  margin-top: ${StyleConstants.NAV_BAR_HEIGHT};
  background: ${p => p.theme.background};
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    margin-top: ${StyleConstants.NAV_BAR_HEIGHT};
    padding: 4em;
  }
`;

const SubContainer = styled.div`
  margin: 0.5rem 0;
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: 100%;
  }
`;
const SectionOne = styled.div`
  display: flex;
  //  justify-content: space-between;
  height: 40%;
  gap: 2rem;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    height: max-content;
  }
`;
const ColumnOne1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }
`;

const ColumnTwo1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 115%;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    justify-content: center;
    align-items: center;
  }
`;

const SectionTwo = styled.div`
  display: flex;
  gap: 2rem;
  height: 26vh;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    height: max-content;
    width: 100%;
  }
`;
const ColumnOne2 = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;
const MarketContainer = styled.div`
  height: 60%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;
