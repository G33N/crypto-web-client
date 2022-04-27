import React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { StyleConstants } from 'styles/StyleConstants';
import styled from 'styled-components/macro';

export function LoginPage() {
  return (
    <>
      <Helmet>
        <title>LoginPage</title>
        <meta name="description" content="Omni wallet application Loginpage" />
      </Helmet>
      <NavBar />
      <Conteiner>
        <span>Form Login</span>
      </Conteiner>
    </>
  );
}
const Conteiner = styled.div`
  margin-top: ${StyleConstants.NAV_BAR_HEIGHT};
  padding: 4em;
`;
