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
        <Title>{t('RegisterPage_title')}</Title>
        <CardInfo
          title={t('RegisterPage__titleCardInfo')}
          description={t('RegisterPage__descriptionCardInfo')}
        />
        <FormRegister />

        <BoxNavigation>
          <Label>{t('RegisterPage_label')} </Label>
          <Links to="/login">{t('RegisterPage_links')}</Links>
        </BoxNavigation>
      </Container>
    </>
  );
}
