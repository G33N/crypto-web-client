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

export const PasswordRecover = () => {
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
        <Title>Iniciar Sesión</Title>
        <ConteinerModal>
          <HeadModal>
            <ButonBack to={'/login'}>
              {''}
              <Img src={Arrow} />
            </ButonBack>
            <h3>Restablecer contraseña</h3>
          </HeadModal>

          <Contenido>
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
        </ConteinerModal>

        <BoxNavigation>
          <Label> ¿No tenes cuenta? </Label>
          <Links to="/register">Crear cuenta</Links>
        </BoxNavigation>
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
  display: block;
  margin-bottom: 13px;
  margin-top: 20px;
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 32px;
  letter-spacing: 0.0022em;
  color: ${p => p.theme.text};
  margin-right: 1rem;
`;
const Label = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  text-align: center;
  color: ${p => p.theme.text};
  margin-bottom: 13px;
  margin-top: 50px;
`;
const BoxNavigation = styled.div`
  text-align: center;
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
const ConteinerModal = styled.div`
  width: 600px;
  min-height: 400px;
  background: #fff;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
`;

const HeadModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-weight: 700;
    position: absolute;
    font-size: 24px;
    color: ${p => p.theme.text};
    letter-spacing: 0.0022em;
    line-height: 32px;
    font-style: normal;
    left: 16.67%;
    right: 16.68%;
    top: 20px;
  }
`;

const ButonBack = styled(Link)`
  position: relative;
  top: 20px;
  right: 20px;
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
  top: 38px;
  display: flex;
`;

const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    margin-top: 24px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: ${p => p.theme.text};
    float: right;
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
  width: 100%;
  height: 48px;
  font-size: 0.875rem;
  color: ${p => p.theme.text};
  font-weight: normal;
  padding: 10px;
  border-radius: 12px;
  border-color: #cdcbcb;
  border: inset 1px;
  ::placeholder {
    color: ${p => p.theme.text};
  }
`;

const Button = styled.button`
  margin-top: 40px;
  width: 100%;
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
