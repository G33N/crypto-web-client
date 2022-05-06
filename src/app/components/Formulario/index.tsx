import React, { useState } from 'react';
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
};
const messageConfirmPass = 'Las contrasenas deben ser iguales';

const patterns = {
  fullname: /^[^-\s][a-zA-Z0-9_\s-]+$/,
  mail: /^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
};

export function Formulario() {
  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm({
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
            required: messages.required,
            validate: {
              oneLowercase: value => value && /^(?=.*?[a-z])/.test(value),
              oneUppercase: value => value && /^(?=.*?[A-Z])/.test(value),
              oneNumber: value => value && /\d/.test(value),
              minLenght: value => value && value.length < 7,
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
