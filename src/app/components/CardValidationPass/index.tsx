import * as React from 'react';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircle } from '@fortawesome/free-solid-svg-icons';

const check = <FontAwesomeIcon icon={faCheck} />;
const dot = <FontAwesomeIcon icon={faCircle} />;

export function CardValidationPass({}) {
  return (
    <Wrapper>
      <Title> La contrasena debe tener al menos:</Title>

      <Description>Una mayuscula.</Description>

      <Description>Una minuscula.</Description>

      <Description>Al menos un numero</Description>

      <Description>bien el componente</Description>
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
  color: ${p => p.theme.text};
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
`;

const Icon = styled.i`
  &:active {
    color: #4caf50;
  }
  .valid {
    color: green;
  }

  .invalid {
    color: red;
  }
`;
