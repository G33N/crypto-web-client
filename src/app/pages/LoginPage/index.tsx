import React from 'react';

import { Helmet } from 'react-helmet-async';
import { Title, BoxNavigation, Label, Links } from './styles';
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
