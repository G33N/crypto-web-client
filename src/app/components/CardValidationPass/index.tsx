import * as React from 'react';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faDotCircle } from '@fortawesome/free-solid-svg-icons';

const check = <FontAwesomeIcon icon={faCheck} />;
const dot = <FontAwesomeIcon icon={faDotCircle} />;

export function CardValidationPass() {
  return (
    <Wrapper>
      <Title> La contrasena debe tener al menos:</Title>

      <Description>
        <Icon> {check} </Icon>Una mayuscula.
      </Description>

      <Description>
        <Icon> {dot} </Icon>Una minuscula.
      </Description>
      <Description> • Un numero.</Description>
      <Description> • 8 caracteres.</Description>
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
    color: #4caf50;
    opacity: 0.8;
  }

  &:active {
    color: #4caf50;
  }
`;
