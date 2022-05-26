import React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';

export function SupportPage() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Omni wallet application homepage" />
      </Helmet>

      <Conteiner>
        <Text> SUPORT PAGE</Text>
        <Text> - Se ve solo si hs iniciado sesion - </Text>
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
