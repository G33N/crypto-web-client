import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import { Container } from 'styles/StyleElements';
import { ModalAlert } from '../../components/ModalAlert';

export function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

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
          titleAlert={'Has superado el límite de intentos'}
          descriptionAlert={
            'Por seguridad, hemos bloqueado tu usuario temporalmente debido a que ingresaste de forma errónea tu contraseña muchas veces. Podés intentarlo de nuevo más tarde.'
          }
          labelButton={'Regresar'}
          isVisibleButonSuport
        />
      </Container>
    </>
  );
}

const Text = styled.p`
  font-size: 18px;
  color: ${p => p.theme.textSecondary};
  font-weight: bold;
  width: 100%;
  text-align: left;
  display: block;
  margin-bottom: 13px;
  margin-top: 20px;
`;
