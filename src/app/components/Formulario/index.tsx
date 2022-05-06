import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { useForm } from 'react-hook-form';
import { CardValidationPass } from '../CardValidationPass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const messages = {
  required: 'Este campo es obligatorio',
  fullname: 'El formato introducido no es el correcto',
  mail: 'Debes introducir una dirección de correo electronico correcta',
  minCaracterpass: 'La contrasena debe tener 8 caracteres como minimo',
};
const messageConfirmPass = 'Las contrasenas deben ser iguales';

const patterns = {
  fullname: /^[^-\s][a-zA-Z0-9_\s-]+$/,
  mail: /^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  oneLowercase: /.*[a-z].*/,
  oneUppercase: /.*[A-Z].*/,
  oneNumber: /.*\\d.*/,
};

// const DefaultValuesForForm = {
//   registration: {
//     password: '',
//     passConfirm: '',
//     fullname: '',
//     mail: '',
//     phone: '',
//   },
// };

export function Formulario() {
  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm({
    //defaultValues: DefaultValuesForForm.registration
    mode: 'onChange',
  });

  const [userInfo, setUserInfo] = useState({
    fullname: '',
    mail: '',
    password: '',
    phone: '',
  });

  const onSubmit = userInfo => {
    console.log('userInfo: ', JSON.stringify(userInfo));
  };
  const handleOnChange = value => {
    console.log(value);
    setUserInfo(value);
  };

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  return (
    <Form>
      <Label htmlFor="fullname">Nombre completo</Label>
      <Input
        type="text"
        placeholder="Ingrese su nombre completo"
        {...register('fullname', {
          required: messages.required,
          pattern: {
            value: patterns.fullname,
            message: messages.fullname,
          },
        })}
        name="fullname"
      />
      {errors.fullname && <Validator>{errors.fullname.message}</Validator>}

      <Label htmlFor="mail">Correo electronico</Label>
      <Input
        type="email"
        placeholder="Ingrese su correo electronico"
        {...register('mail', {
          required: messages.required,
          pattern: {
            value: patterns.mail,
            message: messages.mail,
          },
          minLength: {
            value: 5,
            message: messages.mail,
          },
          maxLength: {
            value: 50,
            message: messages.mail,
          },
        })}
        name="mail"
      />
      {errors.mail && <Validator>{errors.mail.message}</Validator>}

      <Label htmlFor="phone">Numero telefonico</Label>
      <PhoneInput
        value={userInfo.phone}
        placeholder="Ingrese su nombre completo"
        {...register('phone', {
          required: messages.required,
        })}
        onChange={handleOnChange}
        inputStyle={{
          borderColor: 'black',
          width: '100%',
          height: '60px',
        }}
        buttonStyle={{
          borderColor: 'black',
          height: '60px',
          background: 'white',
        }}
      />
      {errors.phone && <Validator>{errors.phone.message}</Validator>}

      <Label htmlFor="passsword">Contrasena nueva</Label>

      <InputBoxPass>
        <InputPass
          placeholder="Ingrese su contrasena"
          type={passwordShown ? 'text' : 'password'}
          {...register('password', {
            required: messages.minCaracterpass,
            minLength: {
              value: 8,
              message: messages.minCaracterpass,
            },
            validate: {
              oneLowercase: value => value && /(?:.*[a-z]){1}/.test(value),
              oneUppercase: value => value && /(?:.*[A-Z]){1}/.test(value),
              oneNumber: value => value && /(?:.*[0-9]){1}/.test(value),
            },
          })}
          name="password"
        />

        <Icon onClick={togglePasswordVisiblity}>
          {passwordShown ? (
            <FontAwesomeIcon icon={faEye} />
          ) : (
            <FontAwesomeIcon icon={faEyeSlash} />
          )}
        </Icon>
      </InputBoxPass>
      {errors.password && <p>{errors.password.message}</p>}
      <PasswordComplexity
        valueOfNewPassword={getValues().password?.toString()}
      />

      <BoxPass>
        <CardValidationPass />
      </BoxPass>

      {errors.password && (
        <>
          <BoxPass>
            <CardValidationPass type={errors.password.type} />
          </BoxPass>
        </>
      )}

      <Label htmlFor="passwordConfirm">Confirmacion de nueva contrasena</Label>

      <InputBoxPass>
        <InputPass
          id="passConfirm"
          placeholder="Ingrese nuevamente su contrasena"
          type={passwordShown ? 'text' : 'password'}
          {...register('passConfirm', {
            required: messages.required,
            validate: value =>
              value === getValues().password || messageConfirmPass,
          })}
        />

        <Icon onClick={togglePasswordVisiblity}>
          {passwordShown ? (
            <FontAwesomeIcon icon={faEye} />
          ) : (
            <FontAwesomeIcon icon={faEyeSlash} />
          )}
        </Icon>
      </InputBoxPass>

      {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      <Button type="submit" onClick={handleSubmit(onSubmit)}>
        Crear cuenta
      </Button>
      <div></div>
    </Form>
  );
}

export const PasswordComplexity = ({ valueOfNewPassword }) => {
  const [passwordValidity, setPasswordValidity] = useState({
    minLength: false,
    minLowerCase: false,
    minUpperCase: false,
    nimNumber: false,
  });

  const oneLowerCase = /^(?=.*?[a-z])/;
  const oneUpperCase = /^(?=.*?[A-Z])/;
  const isNumberRegex = /\d/;

  useEffect(() => {
    setPasswordValidity({
      minLength: valueOfNewPassword?.length >= 8,
      minLowerCase: oneLowerCase.test(valueOfNewPassword),
      minUpperCase: oneUpperCase.test(valueOfNewPassword),
      nimNumber: isNumberRegex.test(valueOfNewPassword),
    });
  }, [valueOfNewPassword]);

  const PasswordStrengthIndicatorItem = ({ isValid, text }) => {
    return <div style={{ color: isValid ? 'green' : 'grey' }}>{text}</div>;
  };

  return (
    <>
      <ul>
        <PasswordStrengthIndicatorItem
          text="al menos 8 caracteres"
          isValid={passwordValidity?.minLength}
        />
        <PasswordStrengthIndicatorItem
          text="al menos 1 minuscula"
          isValid={passwordValidity?.minLowerCase}
        />
        <PasswordStrengthIndicatorItem
          text="al menos 1 mayuscula"
          isValid={passwordValidity?.minUpperCase}
        />
        <PasswordStrengthIndicatorItem
          text="al menos 1 numero"
          isValid={passwordValidity?.nimNumber}
        />
      </ul>
    </>
  );
};

// ----- Styles ------ //

const Form = styled.form`
  text-align: center;
`;

const BoxPass = styled.div`
  text-align: left;
  margin-top: 10px;
`;

const Label = styled.label`
  font-size: 0.875rem;
  color: ${p => p.theme.primary};
  font-weight: bold;
  width: 100%;
  line-height: 2;
  text-align: left;
  display: block;
  margin-bottom: 13px;
  margin-top: 20px;
`;
const Validator = styled.p`
  font-size: 0.6rem;
  color: ${p => p.theme.textSecondary};
  font-weight: bold;
  width: 100%;
  text-align: left;
  display: block;
  margin-bottom: 13px;
  margin-top: 20px;
`;

const Input = styled.input`
  width: 100%;
  height: 60px;
  font-size: 0.875rem;
  color: ${p => p.theme.primary};
  font-weight: normal;
  padding: 10px;
  border-radius: 6px;
  ::placeholder {
    color: ${p => p.theme.text};
  }
`;

const InputPass = styled.input`
  width: 100%;
  height: 60px;
  font-size: 0.875rem;
  font-weight: normal;
  padding: 10px;
  border: transparent;
  outline: none;
  ::placeholder {
    color: ${p => p.theme.text};
  }
  &:active {
    color: ${p => p.theme.primary};
  }
`;

const InputBoxPass = styled.div`
  display: flex;
  align-items: center;
  color: ${p => p.theme.primary};
  border: inset 2px ${p => p.theme.primary};
  opacity: 0.8;
  border-radius: 6px;
  padding: 6px;
  background-color: transparent;
  ::placeholder {
    color: ${p => p.theme.text};
  }
`;

const Icon = styled.i`
  &:hover {
    color: ${p => p.theme.text};
    opacity: 0.8;
  }
`;

const Button = styled.button`
  margin-top: 40px;
  width: 100%;
  height: 70px;
  font-size: 18px;
  padding: 10px;
  background-color: ${p => p.theme.primary};
  border-radius: 6px;
  color: ${p => p.theme.background};
  ::placeholder {
    color: ${p => p.theme.primary};
    text-align: center;
  }
`;
