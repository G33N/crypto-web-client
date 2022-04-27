import React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { CardInfo } from 'app/components/CardInfo';
import { Formulario } from 'app/components/Formulario';
import { StyleConstants } from 'styles/StyleConstants';
import styled from 'styled-components/macro';

export function RegisterPage() {
  return (
    <>
      <Helmet>
        <title>RegisterPage</title>
        <meta name="description" content="Omni wallet application Loginpage" />
      </Helmet>
      <NavBar />
      <Conteiner>
        <Title>Crear una cuenta</Title>
        <CardInfo />
        <Formulario />
      </Conteiner>
    </>
  );
}
const Conteiner = styled.div`
  margin-top: ${StyleConstants.NAV_BAR_HEIGHT};
  padding: 4em;
  padding-left: 30rem;
  padding-right: 30rem;
`;

const Title = styled.div`
  font-size: 2rem;
  color: ${p => p.theme.text};
  font-weight: bold;
  margin-right: 1rem;
`;
