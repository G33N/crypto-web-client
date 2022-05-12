import React, { useState } from 'react';
import styled, { css } from 'styled-components/macro';
import { useForm } from 'react-hook-form';
import { CardValidationPass } from '../CardValidationPass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

interface Props {
  success?: string;
}

const messages = {
  required: 'Este campo es obligatorio',
  fullname: 'El formato introducido no es el correcto',
  mail: 'Debes introducir una dirección de correo electronico correcta',
  passConfirm: 'Las contrasenas deben ser iguales',
};
const messageConfirmPass = 'Las contrasenas deben ser iguales';

const patterns = {
  fullname: /^[^-\s][a-zA-Z_\s-]+$/,
  mail: /^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
};

export function FormRegister() {
  const { register, getValues, formState, handleSubmit } = useForm({
    mode: 'onChange',
  });
  const { isValid, touchedFields, errors } = formState;
  const [userInfo, setUserInfo] = useState({
    fullname: '',
    mail: '',
    password: '',
    phone: '',
  });
  console.log('user info', userInfo);
  console.log('error: ', errors);
  const onSubmit = data => {
    alert(JSON.stringify(data));
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
      {errors.fullname && touchedFields.fullname && (
        <Validator>{errors.fullname.message}</Validator>
      )}

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
      {errors.mail && touchedFields.mail && (
        <Validator>{errors.mail.message}</Validator>
      )}

      <Label htmlFor="phone">Numero telefonico</Label>
      <PhoneInput
        placeholder="Ingrese su numero telefonico"
        {...register('phone', {})}
        onChange={handleOnChange}
        inputStyle={{
          borderColor: 'cdcbcb',
          width: '100%',
          height: '48px',
          borderRadius: '9px',
        }}
        buttonStyle={{
          borderColor: 'cdcbcb',
          height: '48px',
          background: 'white',
        }}
        value="phone"
      />
      {errors.phone && touchedFields.phone && (
        <Validator>{errors.phone.message}</Validator>
      )}

      <Label htmlFor="passsword">Contrasena nueva</Label>

      <InputBoxPass
        success={errors.password && touchedFields.password ? 'red' : 'green'}
      >
        <InputPass
          placeholder="Ingrese su contrasena"
          type={passwordShown ? 'text' : 'password'}
          {...register('password', {
            required: messages.required,
            validate: {
              oneUppercase: value => value && /^(?=.*?[A-Z])/.test(value),
              oneLowercase: value => value && /^(?=.*?[a-z])/.test(value),
              oneNumber: value => value && /^(?=.*?[0-9])/.test(value),
              minLength: value => value && /.{8,}/.test(value),
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

      {errors.password && touchedFields.password && errors.password.type && (
        <>
          <BoxPass>
            <CardValidationPass type={errors.password.type} />
          </BoxPass>
        </>
      )}

      <Label htmlFor="passwordConfirm">Confirmacion de nueva contrasena</Label>

      <InputBoxPass
        success={
          errors.passConfirm && touchedFields.passConfirm ? 'red' : 'green'
        }
      >
        <InputPass
          placeholder="Ingrese nuevamente su contrasena"
          type={passwordShown ? 'text' : 'password'}
          {...register('passConfirm', {
            required: messages.required,
            validate: value =>
              value === getValues().password || messageConfirmPass,
          })}
          name="passConfirm"
        />

        <Icon onClick={togglePasswordVisiblity}>
          {passwordShown ? (
            <FontAwesomeIcon icon={faEye} />
          ) : (
            <FontAwesomeIcon icon={faEyeSlash} />
          )}
        </Icon>
      </InputBoxPass>

      {errors.passConfirm && touchedFields.passConfirm && (
        <Validator>{errors.passConfirm.message}</Validator>
      )}

      <Button
        type="submit"
        disabled={!isValid}
        onClick={handleSubmit(onSubmit)}
      >
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
  height: 48px;
  font-size: 0.875rem;
  color: ${p => p.theme.primary};
  font-weight: normal;
  padding: 10px;
  border-radius: 9px;
  border-color: #cdcbcb;
  border: inset 1px;
  ::placeholder {
    color: ${p => p.theme.text};
  }
`;

const InputPass = styled.input`
  width: 100%;
  font-size: 0.875rem;
  font-weight: normal;
  padding-left: 10px;
  border: transparent;
  outline: none;
  ::placeholder {
    color: ${p => p.theme.text};
  }
  &:active {
    color: ${p => p.theme.primary};
  }
`;

const InputBoxPass = styled.div<Props>`
  height: 48px;
  display: flex;
  align-items: center;
  border: inset 2px ${props => props.success};
  opacity: 0.8;
  border-radius: 9px;
  background-color: transparent;
  ::placeholder {
    color: ${p => p.theme.text};
  }
`;

const Icon = styled.i`
  padding-right: 10px;
  &:hover {
    color: ${p => p.theme.text};
    opacity: 0.8;
  }
`;

const Button = styled.button`
  margin-top: 40px;
  width: 100%;
  height: 48px;
  font-size: 18px;
  padding: 10px;
  background-color: ${p => p.theme.primary};
  border-radius: 9px;
  color: ${p => p.theme.background};
  ::placeholder {
    color: ${p => p.theme.primary};
    text-align: center;
  }
  ${props =>
    props.disabled &&
    css`
      background: ${p => p.theme.text};
    `}
`;
