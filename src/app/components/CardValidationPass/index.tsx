import * as React from 'react';
import styled from 'styled-components/macro';

export function CardValidationPass() {
  return (
    <Wrapper>
      <Title>La contrasena debe tener al menos:</Title>
      <Description> • Una mayuscula.</Description>
      <Description> • Una minuscula.</Description>
      <Description> • Un numero.</Description>
      <Description> • 8 caracteres.</Description>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  // display: flex;
  align-items: left;
`;

const Title = styled.div`
  font-size: 0.5rem;
  font-weight: bold;
  color: ${p => p.theme.text};
  margin-right: 1rem;
`;

const Description = styled.div`
  font-size: 0.5rem;
  color: ${p => p.theme.text};
  font-weight: normal;
`;
