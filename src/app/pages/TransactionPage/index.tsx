import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';
import TransactionsCard from './components/TransactionsCard';

export function TransactionPage() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Omni wallet application homepage" />
      </Helmet>

      <Conteiner>
        <Text> TRANSACCION PAGE</Text>
        <Text> - Se ve solo si hs iniciado sesion - </Text>
        <TransactionsCard />
      </Conteiner>
    </>
  );
}
const Conteiner = styled.div`
  margin-top: ${StyleConstants.NAV_BAR_HEIGHT};
  padding: 4em;
  background: white;
`;
const Text = styled.p`
  font-size: 18px;
  color: ${p => p.theme.textSecondary};
  font-weight: bold;
  width: 100%;
  text-align: left;
  display: block;
  margin-bottom: 13px;
  margin-top: 20px;
`;