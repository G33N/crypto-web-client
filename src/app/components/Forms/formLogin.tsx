import React, { useState } from 'react';
import { AppwriteService } from '../../../services/appwrite';
import { Link, useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { ModalAlert } from '../../components/ModalAlert';

interface Props {
  success?: string;
}

const messages = {
  required: '* Este campo es obligatorio',
  mail: '* El formato introducido no es el correcto',
  password: '* Las contrasenas no tiene un formato correcto',
};

const patterns = {
  fullname: /^[^-\s][a-zA-Z_\s-]+$/,
  mail: /^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
};

export function FormLogin() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { register, formState, handleSubmit } = useForm({
    mode: 'onChange',
  });
  const { isValid, touchedFields, errors } = formState;

  const onSubmit = data => {
    const { mail, password } = data;
    console.log('dataForm', data);
    AppwriteService.loginUser(mail, password)
      .then(res => {
        console.log('Success', res);
        localStorage.setItem('auth', 'tokenFake');
        setTimeout(() => {
          navigate('/dashboard');
        }, 3000);
      })
      .catch(error => {
        console.log('Error', error);
        setIsOpen(true);
      });
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <>
      <ModalAlert
        openModal={isOpen}
        closeModal={setIsOpen}
        titleAlert={'Usuario y/o contraseña incorrectos'}
        descriptionAlert={
          'El usuario y contraseña que ingresaste no coinciden.  Revisá los datos e intentá de nuevo.'
        }
        labelButton={'Regresar'}
        isVisibleButonSuport={false}
      />
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
          success={
            errors.password && touchedFields.password && errors.password.type
              ? 'red'
              : 'green'
          }
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

          <Icon
            onClick={togglePasswordVisiblity}
            success={
              errors.password && touchedFields.password ? 'red' : 'green'
            }
          >
            {passwordShown ? (
              <FontAwesomeIcon icon={faEye} />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} />
            )}
          </Icon>
        </InputBoxPass>

        {errors.password && touchedFields.password && errors.password.type && (
          <Validator>{errors.password.message}</Validator>
        )}

        <Button
          type="submit"
          disabled={!isValid}
          onClick={handleSubmit(onSubmit)}
        >
          Iniciar sesión
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
  color: ${p => p.theme.errorColor};
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
  border: solid 1px ${props => props.success};
  opacity: 0.8;
  border-radius: 9px;
  padding: 6px;
  background-color: transparent;
  ::placeholder {
    color: ${p => p.theme.text};
  }
`;

const Icon = styled.i<Props>`
  padding-right: 10px;
  color: ${props => props.success};
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
