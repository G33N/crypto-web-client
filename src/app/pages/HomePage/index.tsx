import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="Omni wallet application homepage" />
      </Helmet>

      <Conteiner>
        <Text>Pagina principal - se ve sin login</Text>
      </Conteiner>
    </>
  );
}
const Conteiner = styled.div`
  margin-top: ${StyleConstants.NAV_BAR_HEIGHT};
  padding: 4em;
  background: papayawhip;
`;
const Text = styled.p`
  font-size: 2rem;
  color: ${p => p.theme.textSecondary};
  font-weight: bold;
  width: 100%;
  text-align: left;
  display: block;
  margin-bottom: 13px;
  margin-top: 20px;
`;
