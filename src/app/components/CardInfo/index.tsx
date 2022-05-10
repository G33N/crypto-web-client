import * as React from 'react';
import styled from 'styled-components/macro';

export function CardInfo() {
  return (
    <Wrapper>
      <Title>Informacion de usuario</Title>
      <Description>
        Ingresa tu nombre, numero telefonico y correo electronico para comenzar
        tu proceso de registro.
      </Description>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex-center;
  align-items: left;
  position: relative;
`;

const Title = styled.div`
  font-size: 0.875rem;
  font-weight: bold;
  color: ${p => p.theme.primary};
  font-weight: bold;
  margin-right: 1rem;
`;

const Description = styled.div`
  font-size: 0.875rem;
  color: ${p => p.theme.primary};
  font-weight: normal;
`;
