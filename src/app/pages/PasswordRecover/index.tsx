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
      <Container>
        <Head>
          <ButonBack to={'/login'}>
            {''}
            <Img src={Arrow} />
          </ButonBack>
          <Title>Verificación de seguridad</Title>
        </Head>
        <Body>
          Ingresá el correo electrónico con el que estás registrado en la
          aplicación.
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
        </Body>
      </Container>
    </>
  );
};

const Container = styled.div`
  margin-top: ${StyleConstants.NAV_BAR_HEIGHT};
  text-align: center;

  @media (min-width: 480px) {
    padding-left: 20%;
    padding-right: 25%;
  }
`;
const Head = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Img = styled.img`
  width: 24px;
  height: 24px;
`;

const ButonBack = styled(Link)`
  cursor: pointer;
  transition: 0.3s easy all;
  border-radius: 5px;
  color: ${p => p.theme.primary};
  &:hover {
    background: ${p => p.theme.textSecondary};
  }
`;

const Title = styled.h3`
  padding-left: 16px;
  width: 448px;
  height: 32px;
  font-weight: bold;
  font-size: 24px;
  color: ${p => p.theme.text};
  letter-spacing: 0.0022em;
  line-height: 32px;
  font-style: normal;
  margin-bottom: 24px;
`;

const Body = styled.div`
  text-align: left;
`;

const Label = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 0.75rem;
  width: 448px;
  text-align: left;
  line-height: 20px;
  color: ${p => p.theme.text};
  margin-bottom: 8px;
  margin-top: 32px;
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

const Button = styled.button`
  margin-top: 40px;
  width: 80%;
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
