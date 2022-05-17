import React from 'react';
import { Link } from 'react-router-dom';
import { StyleConstants } from 'styles/StyleConstants';
import styled, { css } from 'styled-components/macro';
import Arrow from './assets/Back.png';
import { useForm } from 'react-hook-form';
import CountDownTimer from './CountDownTimer';

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
    <Container>
      <Head>
        <ButonBack to={'/login'}>
          {''}
          <Img src={Arrow} />
        </ButonBack>
        <Title>Verificación de seguridad</Title>
      </Head>
      <Body>
        <TitleSecond>Confirmacion de Contacto</TitleSecond>
        <p>Se ha enviado un código OTP a tu correo electrónico:</p>
        <TextMail>ser*****@gmail.com</TextMail>
        <TextIn>Ingresalo en el espacio a continuación.</TextIn>
        <Label>Código de verificación de correo electrónico</Label>
        <Wrapper>
          <InputNum />
          <InputNum />
          <InputNum />
          <InputNum />
          <InputNum />
        </Wrapper>

        {errors.mail && touchedFields.mail && (
          <Validator>{errors.mail.message}</Validator>
        )}

        <WrapperCounter>
          <TextCounter>Reenviar código: </TextCounter>{' '}
          <CountDownTimer minutes={3} seconds={0} />
        </WrapperCounter>
        <Button
          type="submit"
          disabled={!isValid}
          onClick={handleSubmit(onSubmit)}
        >
          Verificar
        </Button>
      </Body>
    </Container>
  );
};

const Container = styled.div`
  margin-top: ${StyleConstants.NAV_BAR_HEIGHT};

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
`;

const Body = styled.div``;

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

const TitleSecond = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: ${p => p.theme.text};
  margin-bottom: 16px;
  margin-top: 24px;
`;

const TextMail = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: ${p => p.theme.text};
  margin-top: 24px;
  margin-bottom: 8px;
`;
const TextIn = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${p => p.theme.text};
  margin-top: 8px;
  margin-bottom: 24px;
`;
const WrapperCounter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #92c1fd;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
`;

const TextCounter = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  padding-right: 5px;
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

const Wrapper = styled.div`
  padding: 20px;
`;

const InputNum = styled.input`
  box-sizing: border-box;
  width: 32px;
  height: 32px;
  margin-left: 14px;
  border: 1px solid #cecece;
  border-radius: 8.64px;
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
