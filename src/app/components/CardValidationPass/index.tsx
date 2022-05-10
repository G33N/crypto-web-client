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
        {props.type === 'oneUppercase' ? (
          <Circle>
            <FontAwesomeIcon icon={faCircle} />
          </Circle>
        ) : (
          <Icon>
            <FontAwesomeIcon icon={faCheck} />
          </Icon>
        )}

        <Description>Una mayuscula.</Description>
      </Row>
      <Row>
        {props.type === 'oneLowercase' ? (
          <Circle>
            <FontAwesomeIcon icon={faCircle} />
          </Circle>
        ) : (
          <Icon>
            <FontAwesomeIcon icon={faCheck} />
          </Icon>
        )}

        <Description>Una minuscula.</Description>
      </Row>
      <Row>
        {props.type === 'oneNumber' ? (
          <Circle>
            <FontAwesomeIcon icon={faCircle} />
          </Circle>
        ) : (
          <Icon>
            <FontAwesomeIcon icon={faCheck} />
          </Icon>
        )}

        <Description>Al menos un numero.</Description>
      </Row>
      <Row>
        {props.type === 'minLenght' ? (
          <Icon>
            <FontAwesomeIcon icon={faCheck} />
          </Icon>
        ) : (
          <Circle>
            <FontAwesomeIcon icon={faCircle} />
          </Circle>
        )}
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
  font-size: 13px;
  line-height: 16px;
`;

const Icon = styled.i`
  font-size: 15px;
  color: #4caf50;
  padding-right: 15px;

  &:active {
    color: #4caf50;
  }
`;
const Circle = styled.i`
  font-size: 12px;
  color: ${p => p.theme.text};
  padding-right: 15px;
`;
