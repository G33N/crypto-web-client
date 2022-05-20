import React, { useState } from 'react';
import { StyleConstants } from 'styles/StyleConstants';
import styled, { css } from 'styled-components/macro';
import { useForm } from 'react-hook-form';
import CountDownTimer from './CountDownTimer';
import { AppwriteService } from 'services/appwrite';
import { ModalAlert } from 'app/components/ModalAlert';
import { ModalSuccess } from 'app/components/ModalSuccess';

export const AccountVerify = () => {
  const { formState, handleSubmit } = useForm({
    mode: 'onChange',
  });
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = (data, e) => {
    const { mail } = data;
    e.preventDefault();
    AppwriteService.verificationUser(mail)
      .then(res => {
        console.log('SuccessVerify', res);
        setIsOpen(true);
      })
      .catch(error => {
        console.log('Error', error);
        setIsOpenAlert(true);
      });
  };

  const { isValid, touchedFields, errors } = formState;

  return (
    <>
      <ModalAlert
        openModal={isOpenAlert}
        closeModal={setIsOpenAlert}
        titleAlert={'Hubo un error'}
        descriptionAlert={
          'Ocurrió un error en el proceso de recuperación de contraseña. Por favor intentá de nuevo.'
        }
        labelButton={'Regresar'}
        isVisibleButonSuport={false}
      />
      <ModalSuccess
        openModal={isOpen}
        closeModal={setIsOpen}
        title={'Cuenta verificada corectamente'}
        description={'Su cuenta ha sido verificada, puede seguir navegando.'}
        labelButton={'Continuar'}
        pathTo={'/dashboard'}
        isVisibleButonClose={false}
        isVisibleButonNavigate
        isVisibleButonSuport={false}
      />
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
  text-align: left;
`;

const Title = styled.h3`
  width: 100%;
  height: 32px;
  font-weight: 700;
  font-size: 24px;
  color: ${p => p.theme.text};
  letter-spacing: 0.0022em;
  line-height: 32px;
  margin-bottom: 20px;
`;

const Body = styled.div`
  text-align: left;
`;

const TitleSecond = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: ${p => p.theme.text};
  margin-bottom: 16px;
`;

const Subtitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: ${p => p.theme.text};
  margin-bottom: 16px;
`;

const TextMail = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: ${p => p.theme.text};
  margin-bottom: 8px;
`;
const TextIn = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${p => p.theme.text};
  margin-bottom: 24px;
`;

const Label = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 0.75rem;
  width: 100%;
  text-align: left;
  line-height: 20px;
  color: ${p => p.theme.text};
  margin-bottom: 8px;
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

const Validator = styled.p`
  font-size: 0.6rem;
  color: ${p => p.theme.textSecondary};
  font-weight: bold;
  width: 100%;
  text-align: left;
  display: block;
  margin-bottom: 13px;
`;

const WrapperCounter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${p => p.theme.primary};
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 45px;
`;

const TextCounter = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  padding-right: 5px;
`;

const Button = styled.button`
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
