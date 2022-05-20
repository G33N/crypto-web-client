import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyleConstants } from 'styles/StyleConstants';
import styled, { css } from 'styled-components/macro';
import { useForm } from 'react-hook-form';
import CountDownTimer from './CountDownTimer';
import { AppwriteService } from 'services/appwrite';
import { ModalAlert } from 'app/components/ModalAlert';
import { ModalSuccess } from 'app/components/ModalSuccess';

export const AccountVerify = () => {
  const { formState, handleSubmit, register } = useForm({
    mode: 'onChange',
  });

  const messages = {
    required: '* Este campo es obligatorio',
    codigo: '* Ingresa el codigo de 6 digitos a ser***@gmail.com',
  };

  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const onSubmit = (data, e) => {
    const { mail } = data;
    e.preventDefault();
    AppwriteService.verificationUser(mail)
      .then(res => {
        if (res) {
          console.log('SuccessUpdatePass', res);
          alert('Su cuenta se verifico correctamente.');
          navigate('/login');
        } else {
          return setIsOpenAlert(true);
        }
        navigate('/dashboard');
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
          <Subtitle>
            Se ha enviado un código OTP a tu correo electrónico:
          </Subtitle>
          <TextMail>ser*****@gmail.com</TextMail>
          <TextIn>Ingresa el codigo en el espacio a continuación.</TextIn>
          <Label>Código de verificación de correo electrónico</Label>
          <InputNum
            type="email"
            placeholder="Ingresa el codigo de verificacion"
            {...register('codigo', {
              required: messages.required,
            })}
          />

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
  @media (min-width: 720px) {
    padding-left: 30%;
    padding-right: 35%;
  }
  @media (min-width: 1340px) {
    padding-left: 35%;
    padding-right: 40%;
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

const InputNum = styled.input`
  width: 100%;
  font-size: 0.875rem;
  font-weight: normal;
  height: 48px;
  padding: 10px;
  border-radius: 12px;
  border: 1px solid ${p => p.theme.text};
  outline: none;
  ::placeholder {
    color: ${p => p.theme.text};
  }
  &:active {
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
  justify-content: end;
  align-items: center;
  color: #92c1fd;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 45px;
`;

const TextCounter = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
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
