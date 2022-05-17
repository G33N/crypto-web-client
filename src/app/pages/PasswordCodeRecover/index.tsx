import React from 'react';
import { Link } from 'react-router-dom';
import { StyleConstants } from 'styles/StyleConstants';
import styled, { css } from 'styled-components/macro';
import Arrow from './assets/Back.png';
import { useForm } from 'react-hook-form';

const messages = {
  required: 'Este campo es obligatorio',
  mail: 'Debes introducir una dirección de correo electronico correcta',
  passConfirm: 'Las contrasenas deben ser iguales',
};

const patterns = {
  fullname: /^[^-\s][a-zA-Z_\s-]+$/,
  mail: /^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
};

export const PasswordCodeRecover = () => {
  const { register, formState, handleSubmit } = useForm({
    mode: 'onChange',
  });

  const onSubmit = data => {
    alert(JSON.stringify(data));
    //navegar a dashboard
  };

  const { isValid, touchedFields, errors } = formState;

  return (
    <>
      <Conteiner>
        <Contenido>
          <ButonBack to={'/login'}>
            {''}
            <Img src={Arrow} />
          </ButonBack>
          <h3>Verificación de seguridad</h3>
          <p>
            Ingresá el correo electrónico con el que estás registrado en la
            aplicación.
          </p>

          <Label>Correo electrónico</Label>
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
          <Button
            type="submit"
            disabled={!isValid}
            onClick={handleSubmit(onSubmit)}
          >
            Continuar
          </Button>
        </Contenido>
      </Conteiner>
    </>
  );
};

const Conteiner = styled.div`
  margin-top: ${StyleConstants.NAV_BAR_HEIGHT};
  padding: 4em;
  background: white;
  @media (min-width: 480px) {
    padding-left: 20%;
    padding-right: 25%;
  }
  @media (min-width: 720px) {
    padding-left: 30%;
    padding-right: 35%;
  }
  @media (min-width: 1040px) {
    padding-left: 35%;
    padding-right: 40%;
  }
`;
const Text = styled.p`
  font-size: 2rem;
  color: ${p => p.theme.textSecondary};
  font-weight: bold;
  width: 100%;
  text-align: left;
  margin-bottom: 13px;
  margin-top: 20px;
`;

const Label = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 0.75rem;
  font-size: 14px;
  text-align: left;
  line-height: 20px;
  color: ${p => p.theme.text};
  margin-bottom: 8px;
  margin-top: 32px;
`;

const Links = styled(Link)`
  color: ${p => p.theme.text};
  text-decoration: none;
  font-weight: 700;
  font-style: normal;
  font-size: 0.875rem;
  line-height: 1.375rem;
  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }
  &:active {
    opacity: 0.4;
  }
`;

const ButonBack = styled(Link)`
  width: 24px;
  height: 24px;
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.3s easy all;
  border-radius: 5px;
  color: ${p => p.theme.primary};
  &:hover {
    background: ${p => p.theme.textSecondary};
  }
`;

const Img = styled.img`
  width: 24px;
  height: 24px;
`;

const Contenido = styled.div`
  p {
    width: 448px;
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    margin-top: 24px;
    margin-bottom: 32px;
    line-height: 20px;
    color: ${p => p.theme.text};
  }

  h3 {
    margin-top: 64px;
    margin-left: 20px;
    margin-bottom: 24px;
    width: 448px;
    height: 32px;
    font-weight: bold;
    font-size: 24px;
    color: ${p => p.theme.text};
    letter-spacing: 0.0022em;
    line-height: 32px;
    font-style: normal;
  }
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
  width: 448px;
  height: 48px;
  font-size: 0.875rem;
  color: ${p => p.theme.text};
  font-weight: normal;
  padding: 10px;
  border-radius: 12px;
  padding: 14px 16px;
  border: 1px solid #cecece;
  ::placeholder {
    color: ${p => p.theme.text};
  }
`;

const Button = styled.button`
  margin-top: 40px;
  width: 448px;
  height: 48px;
  font-size: 18px;
  padding: 10px;
  background-color: ${p => p.theme.primary};
  border-color: transparent;
  border-radius: 12px;
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
