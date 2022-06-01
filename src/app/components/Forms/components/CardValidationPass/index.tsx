import React, { useEffect, useState } from 'react';
import Check from '../../../../assets/icons/Check.svg';
import Oval from '../../../../assets/icons/Oval.svg';
import { Wrapper, TitleCardPass, Row, Img, ImgTwo } from '../../styles';

export const CardValidationPass = ({ valueOfNewPassword }) => {
  const [passwordValidity, setPasswordValidity] = useState({
    minLength: false,
    minUpperCase: false,
    minLowerCase: false,
    nimNumber: false,
  });

  const oneLowerCase = /^(?=.*?[a-z])/;
  const oneUpperCase = /^(?=.*?[A-Z])/;
  const isNumberRegex = /^(?=.*?[0-9])/;

  useEffect(() => {
    setPasswordValidity({
      minLength: valueOfNewPassword?.length >= 8,
      minLowerCase: oneLowerCase.test(valueOfNewPassword),
      minUpperCase: oneUpperCase.test(valueOfNewPassword),
      nimNumber: isNumberRegex.test(valueOfNewPassword),
    });
  }, [valueOfNewPassword]);

  console.log('passValidity', passwordValidity);

  const PasswordStrengthIndicatorItem = ({ text, icon }) => {
    return (
      <ul>
        {icon} {text}{' '}
      </ul>
    );
  };

  return (
    <Wrapper>
      <TitleCardPass> La contraseña debe tener al menos:</TitleCardPass>

      <Row>
        <PasswordStrengthIndicatorItem
          text="Una mayuscula"
          icon={
            passwordValidity?.minUpperCase ? (
              <Img src={Check} />
            ) : (
              <ImgTwo src={Oval} />
            )
          }
        />
      </Row>
      <Row>
        <PasswordStrengthIndicatorItem
          text="Una minúscula"
          icon={
            passwordValidity?.minLowerCase ? (
              <Img src={Check} />
            ) : (
              <ImgTwo src={Oval} />
            )
          }
        />
      </Row>
      <Row>
        <PasswordStrengthIndicatorItem
          text="Un número"
          icon={
            passwordValidity?.nimNumber ? (
              <Img src={Check} />
            ) : (
              <ImgTwo src={Oval} />
            )
          }
        />
      </Row>
      <Row>
        <PasswordStrengthIndicatorItem
          text="8 caracteres."
          icon={
            passwordValidity?.minLength ? (
              <Img src={Check} />
            ) : (
              <ImgTwo src={Oval} />
            )
          }
        />
      </Row>
    </Wrapper>
  );
};

// original CardValidationPass

// export const CardValidationPass = (props?: any) => {
//   console.log('props', props);
//   return (
//     <Wrapper>
//       <TitleCardPass> La contraseña debe tener al menos:</TitleCardPass>
//       <Row>
//         {props.type === 'oneUppercase' ? (
//           <Circle>
//             <ImgTwo src={Oval} />
//           </Circle>
//         ) : (
//           <IconCardPass>
//             <Img src={Check} />
//           </IconCardPass>
//         )}

//         <DescriptionCardPass>Una mayuscula.</DescriptionCardPass>
//       </Row>
//       <Row>
//         {props.type === 'oneLowercase' ? (
//           <IconCardPass>
//             <Img src={Check} />
//           </IconCardPass>
//         ) : (
//           <Circle>
//             <ImgTwo src={Oval} />
//           </Circle>
//         )}

//         <DescriptionCardPass>Una minuscula.</DescriptionCardPass>
//       </Row>
//       <Row>
//         {props.type === 'oneNumber' ? (
//           <IconCardPass>
//             <Img src={Check} />
//           </IconCardPass>
//         ) : (
//           <Circle>
//             <ImgTwo src={Oval} />
//           </Circle>
//         )}

//         <DescriptionCardPass>Al menos un numero.</DescriptionCardPass>
//       </Row>
//       <Row>
//         {props.type === 'minLenght' ? (
//           <IconCardPass>
//             <Img src={Check} />
//           </IconCardPass>
//         ) : (
//           <Circle>
//             <ImgTwo src={Oval} />
//           </Circle>
//         )}
//         <DescriptionCardPass>8 digitos.</DescriptionCardPass>
//       </Row>
//     </Wrapper>
//   );
// };
