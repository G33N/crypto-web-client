import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CardInfo } from 'app/components/CardInfo';
import { FormRegister } from 'app/components/Forms/formRegister';
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
        <FormRegister />

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

  @media (min-width: 480px) {
    padding-left: 20%;
    padding-right: 25%;
  }
  @media (min-width: 720px) {
    padding-left: 30%;
    padding-right: 35%;
  }
  @media (min-width: 1040px) {
    padding-left: 20%;
    padding-right: 20%;
  }
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 32px;
  letter-spacing: 0.0022em;
  color: ${p => p.theme.primary};
  margin-right: 1rem;
  margin-bottom: 24px;
`;
const Label = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  text-align: center;
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
  font-weight: 600;
  font-style: normal;
  font-size: 0.875rem;
  line-height: 1.375rem;
  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }
  &:active {
    opacity: 0.4;
  }
`;
