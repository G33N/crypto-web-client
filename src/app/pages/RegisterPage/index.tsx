import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CardInfo } from 'app/components/CardInfo';
import { Formulario } from 'app/components/Formulario/index';
import { StyleConstants } from 'styles/StyleConstants';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export function RegisterPage() {
  return (
    <>
      <Helmet>
        <title>RegisterPage</title>
        <meta name="description" content="Omni wallet application Loginpage" />
      </Helmet>

      <Conteiner>
        <Title>Crear una cuenta</Title>
        <CardInfo />
        <Formulario />

        <BoxNavigation>
          <Label> ya estas registrado ? </Label>
          <Links to="">Iniciar Sesion</Links>
        </BoxNavigation>
      </Conteiner>
    </>
  );
}
const Conteiner = styled.div`
  margin-top: ${StyleConstants.NAV_BAR_HEIGHT};
  padding: 4em;

  @media (min-width: 780px) {
    padding-left: 20%;
    padding-right: 25%;
  }

  @media (min-width: 1040px) {
    padding-left: 30%;
    padding-right: 35%;
  }
`;

const Title = styled.div`
  font-size: 2rem;
  color: ${p => p.theme.primary};
  font-weight: bold;
  margin-right: 1rem;
`;
const Label = styled.div`
  font-size: 0.7rem;
  color: ${p => p.theme.primary};
  margin-bottom: 13px;
  margin-top: 50px;
`;
const BoxNavigation = styled.div`
  text-align: center;
`;
const Links = styled(Link)`
  color: ${p => p.theme.primary};
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }
`;
