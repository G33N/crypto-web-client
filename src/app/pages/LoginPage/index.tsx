import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import { FormLogin } from 'app/components/Forms/formLogin';
import { Container } from 'styles/StyleElements';

export const LoginPage = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Omni wallet application Loginpage" />
      </Helmet>

      <Container>
        <Title>Iniciar Sesión</Title>

        <FormLogin />

        <BoxNavigation>
          <Label> ¿No tenes cuenta? </Label>
          <Links to="/register">Crear cuenta</Links>
        </BoxNavigation>
      </Container>
    </>
  );
};

const Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 32px;
  letter-spacing: 0.0022em;
  color: ${p => p.theme.text};
  margin-right: 1rem;
`;
const Label = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  text-align: center;
  color: ${p => p.theme.text};
  margin-bottom: 13px;
  margin-top: 50px;
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
