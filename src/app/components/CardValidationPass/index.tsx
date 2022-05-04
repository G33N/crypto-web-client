import * as React from 'react';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircle } from '@fortawesome/free-solid-svg-icons';

const check = <FontAwesomeIcon icon={faCheck} />;
const dot = <FontAwesomeIcon icon={faCircle} />;

export function CardValidationPass(prop: any) {
  //TODO: modificar los types any a a cada tipo correcto, ver bottom link
  return (
    <Wrapper>
      <Title> La contrasena debe tener al menos:</Title>
      <Description>
        <Icon> {check} </Icon>Una mayuscula. //TODO: sumar el chequeo de cada
        validacion y cambiar a check verde o dot.
      </Description>
      <Description>
        <Icon> {dot} </Icon>Una minuscula.
      </Description>
      <Description> • Un numero.</Description>
      <Description> {prop.minpass}</Description> //TODO: Verificar si se paso
      bien el componente
    </Wrapper>
  );
}

// ----- Styles ------ //

const Wrapper = styled.div`
  // display: flex;
  align-items: left;
`;

const Title = styled.div`
  font-size: 12px;
  width: 216px;
  font-weight: 400;
  color: ${p => p.theme.text};
  margin-right: 1rem;
`;

const Description = styled.div`
  // color: ${p => p.theme.text};
  color: #4caf50;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
`;

const Icon = styled.i`
  &:hover {
    color: ${p => p.theme.text};
    opacity: 0.8;
  }

  &:active {
    color: #4caf50;
  }
`;
