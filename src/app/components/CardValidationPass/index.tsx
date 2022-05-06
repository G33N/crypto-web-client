import * as React from 'react';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircle } from '@fortawesome/free-solid-svg-icons';

export const CardValidationPass = (props?: any) => {
  console.log('props', props);
  return (
    <Wrapper>
      <Title> La contrasena debe tener al menos:</Title>
      <Row>
        <Icon>
          {props.type === 'oneUppercase' ? (
            <FontAwesomeIcon icon={faCircle} />
          ) : (
            <FontAwesomeIcon icon={faCheck} />
          )}
        </Icon>

        <Description>Una mayuscula.</Description>
      </Row>
      <Row>
        <Icon>
          {props.type === 'oneLowercase' ? (
            <FontAwesomeIcon icon={faCircle} />
          ) : (
            <FontAwesomeIcon icon={faCheck} />
          )}
        </Icon>
        <Description>Una minuscula.</Description>
      </Row>
      <Row>
        <Icon>
          {props.type === 'oneNumber' ? (
            <FontAwesomeIcon icon={faCircle} />
          ) : (
            <FontAwesomeIcon icon={faCheck} />
          )}
        </Icon>
        <Description>Al menos un numero.</Description>
      </Row>
      <Row>
        <Icon>
          {props.type === 'minLenght' ? (
            <FontAwesomeIcon icon={faCheck} />
          ) : (
            <FontAwesomeIcon icon={faCircle} />
          )}
        </Icon>
        <Description>8 digitos.</Description>
      </Row>
    </Wrapper>
  );
};

// ----- Styles ------ //

const Wrapper = styled.div`
  align-items: left;
`;

const Row = styled.div`
  display: flex;
  margin-right: -1rem;
  padding: 5px;
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
  margin-right: 10px;
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
