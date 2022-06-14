import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import { TableTransaction } from './components/TableTransaction';

export function TransactionPage() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Omni wallet application homepage" />
      </Helmet>

      <Conteiner>
        <Text> TRANSACTION PAGE</Text>
        <TableTransaction />
      </Conteiner>
    </>
  );
}
const Conteiner = styled.div`
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
