import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppwriteService } from '../../../services/appwrite';
import { StyleConstants } from 'styles/StyleConstants';
import styled, { css } from 'styled-components/macro';
import Arrow from './assets/Back.png';
import { useForm } from 'react-hook-form';
import { ModalAlert } from '../../components/ModalAlert';
import Alert from './assets/alert.png';
import Check from './assets/Check.png';

interface Props {
  successMail?: string;
}
const messages = {
  required: '* Este campo es obligatorio',
  mail: '* Debes introducir una dirección de correo electronico correcta',
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
        navigate('/home');
      })
      .catch(error => {
        console.log('Error', error);
        setIsOpen(true);
      });
  };

  const [iconShown, setIconShown] = useState(false);
  const toggleIconVisiblity = () => {
    setIconShown(iconShown ? false : true);
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
          <Title>Reestablecer contraseña</Title>
        </Head>
        <Body>
          <Description>
            Ingresá el correo electrónico con el que estás registrado en la
            aplicación.
          </Description>
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
            successMail={errors.mail ? 'red' : 'green'}
          />

          {errors.mail && touchedFields.mail && (
            <Validator>{errors.mail.message} </Validator>
          )}

          <Icon
            onClick={toggleIconVisiblity}
            successMail={errors.mail && touchedFields.mail ? 'green' : 'red'}
          >
            {!isValid ? <Img src={Alert} /> : <Img src={Check} />}
          </Icon>

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
  padding: 10px;
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 480px) {
    padding-left: 30%;
    padding-right: 25%;
  }
`;
const Head = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
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
  font-weight: bold;
  font-size: 24px;
  color: ${p => p.theme.text};
  letter-spacing: 0.0022em;
  line-height: 32px;
  margin-bottom: 24px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const Description = styled.p`
  text-align: left;
  width: 90%;
  font-weight: 400;
  line-height: 20px;
  font-size: 14px;
`;

const Label = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 0.875rem;
  width: 80%;
  text-align: left;
  line-height: 20px;
  color: ${p => p.theme.text};
  margin-bottom: 8px;
  margin-top: 32px;
`;

const Input = styled.input<Props>`
  width: 448px;
  height: 48px;
  font-size: 0.875rem;
  color: ${p => p.theme.text};
  font-weight: normal;
  border-radius: 12px;
  padding: 12px 14px;
  border: 1px solid ${props => props.successMail};
  ::placeholder {
    color: ${p => p.theme.textlight};
  }
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

const Icon = styled.i<Props>`
  padding-right: 10px;
  color: ${props => props.successMail};
  &:hover {
    color: ${p => p.theme.text};
    opacity: 0.8;
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
