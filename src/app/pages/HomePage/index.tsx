import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Text } from './styles';
import { Container } from 'styles/StyleElements';
import { ModalAlert } from '../../components/ModalAlert';
import { i18n } from './i18n';

export function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = i18n;

  return (
    <>
      <Helmet>
        <meta name="description" content="Omni wallet application homepage" />
      </Helmet>

      <Container>
        <Text> HOME PAGE</Text>
        <Text> - Se ve sin haber iniciado sesion - </Text>
        <button onClick={() => setIsOpen(!isOpen)}>ver errores test</button>
        <ModalAlert
          openModal={isOpen}
          closeModal={setIsOpen}
          titleAlert={t('HomePage_titleAlert')}
          descriptionAlert={t('HomePage__descriptionAlert')}
          labelButton={t('HomePage__labelButtonAlert')}
          isVisibleButonSuport
        />
      </Container>
    </>
  );
}
