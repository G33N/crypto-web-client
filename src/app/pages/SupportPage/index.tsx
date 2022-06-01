import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Conteiner, Text } from './styles';

export function SupportPage() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Omni wallet application homepage" />
      </Helmet>

      <Conteiner>
        <Text> SUPORT PAGE</Text>
        <Text> - Se ve solo si hs iniciado sesion - </Text>
      </Conteiner>
    </>
  );
}
