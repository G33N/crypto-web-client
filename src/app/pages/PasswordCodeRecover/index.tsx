import React from 'react';
import {
  Head,
  Title,
  TitleSecond,
  Subtitle,
  TextMail,
  TextIn,
  Label,
  Wrapper,
  Body,
  InputNum,
  Validator,
  WrapperCounter,
  TextCounter,
} from './styles';
import { useForm } from 'react-hook-form';
import CountDownTimer from './CountDownTimer';
import { Container } from 'styles/StyleElements';
import { Button } from 'styles/StyleElements';

export const PasswordCodeRecover = () => {
  const { formState, handleSubmit } = useForm({
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
        <Title>Verificación de seguridad</Title>
      </Head>
      <Body>
        <TitleSecond>Confirmacion de Contacto</TitleSecond>
        <Subtitle>
          Se ha enviado un código OTP a tu correo electrónico:
        </Subtitle>
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
