import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Conteiner, Text } from './styles';

export function TabInner() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Omni wallet application homepage" />
      </Helmet>

      <Conteiner>
        <Text> SWIFT PAGE PRINCIPAL</Text>
        <Text> - Se ve solo si hs iniciado sesion - </Text>
      </Conteiner>
    </>
  );
}
