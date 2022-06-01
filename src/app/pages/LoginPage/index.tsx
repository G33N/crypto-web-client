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
        <Title>{t('LoginPage__title')}</Title>

        <FormLogin />

        <BoxNavigation>
          <Label>{t('LoginPage__label')}</Label>
          <Links to="/register">{t('LoginPage__link')}</Links>
        </BoxNavigation>
      </Container>
    </>
  );
};
