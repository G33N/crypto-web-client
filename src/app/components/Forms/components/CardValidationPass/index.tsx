import * as React from 'react';
import Check from '../../../../assets/icons/Check.svg';
import Oval from '../../../../assets/icons/Oval.svg';
import {
  Wrapper,
  TitleCardPass,
  Row,
  IconCardPass,
  DescriptionCardPass,
  Circle,
  Img,
  ImgTwo,
} from '../../styles';

export const CardValidationPass = (props?: any) => {
  console.log('props', props);
  return (
    <Wrapper>
      <TitleCardPass> La contraseña debe tener al menos:</TitleCardPass>
      <Row>
        {props.type === 'oneUppercase' ? (
          <Circle>
            <ImgTwo src={Oval} />
          </Circle>
        ) : (
          <IconCardPass>
            <Img src={Check} />
          </IconCardPass>
        )}

        <DescriptionCardPass>Una mayuscula.</DescriptionCardPass>
      </Row>
      <Row>
        {props.type === 'oneLowercase' ? (
          <IconCardPass>
            <Img src={Check} />
          </IconCardPass>
        ) : (
          <Circle>
            <ImgTwo src={Oval} />
          </Circle>
        )}

        <DescriptionCardPass>Una minuscula.</DescriptionCardPass>
      </Row>
      <Row>
        {props.type === 'oneNumber' ? (
          <IconCardPass>
            <Img src={Check} />
          </IconCardPass>
        ) : (
          <Circle>
            <ImgTwo src={Oval} />
          </Circle>
        )}

        <DescriptionCardPass>Al menos un numero.</DescriptionCardPass>
      </Row>
      <Row>
        {props.type === 'minLenght' ? (
          <IconCardPass>
            <Img src={Check} />
          </IconCardPass>
        ) : (
          <Circle>
            <ImgTwo src={Oval} />
          </Circle>
        )}
        <DescriptionCardPass>8 digitos.</DescriptionCardPass>
      </Row>
    </Wrapper>
  );
};
