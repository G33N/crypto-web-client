import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CardInfo } from 'app/components/Forms/components/CardInfo';
import { FormRegister } from 'app/components/Forms/formRegister';
import { Container } from 'styles/StyleElements';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export function RegisterPage() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Omni wallet application Loginpage" />
      </Helmet>

      <Container>
        <Title>Crear una cuenta</Title>
        <CardInfo
          title="Informacion de usuario"
          description="Ingresa tu nombre, numero telefonico y correo electronico para comenzar
        tu proceso de registro."
        />
        <FormRegister />

        <BoxNavigation>
          <Label> ¿Ya estas registrado ? </Label>
          <Links to="/login">Iniciar Sesión</Links>
        </BoxNavigation>
      </Container>
    </>
  );
}

const Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 32px;
  letter-spacing: 0.0022em;
  color: ${p => p.theme.text};
  margin-right: 1rem;
  margin-bottom: 24px;
`;
const Label = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  text-align: center;
  color: ${p => p.theme.text};
  margin-bottom: 13px;
  margin-top: 28px;
`;
const BoxNavigation = styled.div`
  text-align: center;
`;
const Links = styled(Link)`
  color: ${p => p.theme.primary};
  text-decoration: none;
  font-weight: 700;
  font-style: normal;
  font-size: 0.875rem;
  line-height: 1.375rem;
  &:hover {
    text-decoration: none;
    opacity: 0.8;
  }
  &:active {
    opacity: 0.4;
  }
`;
