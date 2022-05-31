import React from 'react';
import { CardInfo } from 'app/components/Forms/components/CardInfo';
import { Helmet } from 'react-helmet-async';
import { Title, BoxNavigation, Label, Links } from './styles';
import { FormLogin } from 'app/components/Forms/formLogin';
import { Container } from 'styles/StyleElements';
import { i18n } from './i18n';

export const LoginPage = () => {
  const { t } = i18n;
  return (
    <>
      <Helmet>
        <meta name="description" content="Omni wallet application Loginpage" />
      </Helmet>

      <Container>
        <Title>Iniciar Sesión</Title>
        {/* <CardInfo
          title={t('LoginPage__title')}
          description={t('RegisterPage__description')}
        /> */}

        <FormLogin />

        <BoxNavigation>
          <Label> ¿No tenes cuenta? </Label>
          <Links to="/register">Crear cuenta</Links>
        </BoxNavigation>
      </Container>
    </>
  );
};
