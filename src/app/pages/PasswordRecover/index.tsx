import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppwriteService } from '../../../services/appwrite';
import { StyleConstants } from 'styles/StyleConstants';
import styled, { css } from 'styled-components/macro';
import Arrow from './assets/Back.png';
import { useForm } from 'react-hook-form';
import { ModalAlert } from '../../components/ModalAlert';

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
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { register, formState, handleSubmit } = useForm({
    mode: 'onChange',
  });
  const { isValid, touchedFields, errors } = formState;

  const onSubmit = (data, e) => {
    const { mail } = data;
    const url = 'http://localhost:3000/passCodeRecover';
    e.preventDefault();
    AppwriteService.recoverPasssword(mail, url)
      .then(res => {
        console.log('Success', res);
        navigate('/dashboard');
      })
      .catch(error => {
        console.log('Error', error);
        setIsOpen(true);
      });
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
