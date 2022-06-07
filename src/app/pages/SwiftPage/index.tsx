import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Conteiner, Text } from './styles';

export function SwiftPage() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Omni wallet application homepage" />
      </Helmet>

      <Conteiner>
        <Text> SWift PAGE</Text>
        <Text> - Se ve solo si has iniciado sesion - </Text>
      </Conteiner>
    </>
  );
}
