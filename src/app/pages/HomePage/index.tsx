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
        <span>Pagina principal - se ve sin login</span>

        {/* <button type="button" onClick={handleLogin}>
          Ingresar
        </button> */}
      </Conteiner>
    </>
  );
}
const Conteiner = styled.div`
  margin-top: ${StyleConstants.NAV_BAR_HEIGHT};
  padding: 4em;
  background: papayawhip;
`;
