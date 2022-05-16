import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';
import { useForm } from 'react-hook-form';
import { CardValidationPass } from './components/CardValidationPass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

interface Props {
  success?: string;
}

const messages = {
  required: 'Este campo es obligatorio',
  mail: 'Debes introducir una dirección de correo electronico correcta',
  passConfirm: 'Las contrasenas deben ser iguales',
};

const patterns = {
  fullname: /^[^-\s][a-zA-Z_\s-]+$/,
  mail: /^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
};

export function FormLogin() {
  const { register, formState, handleSubmit } = useForm({
    mode: 'onChange',
  });
  const { isValid, touchedFields, errors } = formState;

  const onSubmit = data => {
    alert(JSON.stringify(data));
    //navegar a dashboard
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <>
      <Form>
        <Label htmlFor="mail">Correo electrónico</Label>
        <Input
          type="email"
          placeholder="Ingrese su correo electrónico"
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
        <Label htmlFor="passsword">Contraseña </Label>
        <InputBoxPass
          success={errors.password && touchedFields.password ? 'red' : 'green'}
        >
          <InputPass
            placeholder="Ingrese su contraseña"
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

        <Button
          type="submit"
          disabled={!isValid}
          onClick={handleSubmit(onSubmit)}
        >
          Crear cuenta
        </Button>
      </Form>

      <ButtonRecover to={'/passRecover'}>
        ¿Olvidaste la contraseña?
      </ButtonRecover>
    </>
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
  color: ${p => p.theme.text};
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
  color: ${p => p.theme.text};
  font-weight: normal;
  padding: 10px;
  border-radius: 9px;
  border-color: #cdcbcb;
  border: 1px solid #cecece;
  ::placeholder {
    color: ${p => p.theme.text};
  }
`;

const InputPass = styled.input`
  width: 100%;
  font-size: 0.875rem;
  font-weight: normal;
  height: 4px;
  padding: 10px;
  border: transparent;
  outline: none;
  ::placeholder {
    color: ${p => p.theme.text};
  }
  &:active {
    color: ${p => p.theme.text};
  }
`;

const InputBoxPass = styled.div<Props>`
  height: 48px;
  display: flex;
  align-items: center;
  border: solid 2px ${props => props.success};
  opacity: 0.8;
  border-radius: 9px;
  padding: 6px;
  background-color: transparent;
  ::placeholder {
    color: ${p => p.theme.text};
  }
`;

const Icon = styled.i`
  padding-right: 10px;
  color: ${p => p.theme.successColor};
  &:hover {
    color: ${p => p.theme.successColor};
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
  border-color: transparent;
  color: ${p => p.theme.background};
  ::placeholder {
    color: ${p => p.theme.textSecondary};
    text-align: center;
  }
  ${props =>
    props.disabled &&
    css`
      background: ${p => p.theme.secondary};
    `}
`;

const ButtonRecover = styled(Link)`
  margin-top: 40px;
  width: 189px;
  height: 22px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.003em;
  color: ${p => p.theme.text};
  border: none;
  background-color: transparent;
`;
