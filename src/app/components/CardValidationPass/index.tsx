import * as React from 'react';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircle } from '@fortawesome/free-solid-svg-icons';

const check = <FontAwesomeIcon icon={faCheck} />;
const dot = <FontAwesomeIcon icon={faCircle} />;

export function CardValidationPass({
  uppCapsLetterFlag,
  lowCapsLetterFlag,
  numberFlag,
  pwdLengthFlag,
}) {
  return (
    <Wrapper>
      <Title> La contrasena debe tener al menos:</Title>
      <Icon className={uppCapsLetterFlag}>
        {'valid' ? (
          <FontAwesomeIcon icon={faCheck} />
        ) : (
          <FontAwesomeIcon icon={faCircle} />
        )}
      </Icon>
      <Description>Una mayuscula.</Description>
      <Icon className={lowCapsLetterFlag}>
        {'valid' ? (
          <FontAwesomeIcon icon={faCheck} />
        ) : (
          <FontAwesomeIcon icon={faCircle} />
        )}
      </Icon>
      <Description>Una minuscula.</Description>
      <Icon className={numberFlag}>
        {'valid' ? (
          <FontAwesomeIcon icon={faCheck} />
        ) : (
          <FontAwesomeIcon icon={faCircle} />
        )}
      </Icon>
      <Description>Al menos un numero</Description>
      <Icon className={pwdLengthFlag}>
        {'valid' ? (
          <FontAwesomeIcon icon={faCheck} />
        ) : (
          <FontAwesomeIcon icon={faCircle} />
        )}
      </Icon>
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
