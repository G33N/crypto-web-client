import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CardInfo } from 'app/components/Forms/components/CardInfo';
import { FormRegister } from 'app/components/Forms/formRegister';
import { Container } from 'styles/StyleElements';
import { Title, BoxNavigation, Label, Links } from './styles';
import { i18n } from './i18n';

export function RegisterPage() {
  const { t } = i18n;

  return (
    <>
      <Helmet>
        <meta name="description" content="Omni wallet application Loginpage" />
      </Helmet>

      <Container>
        <Title>Crear una cuenta</Title>
        <CardInfo
          title={t('RegisterPage__title')}
          description={t('RegisterPage__description')}
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
