import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppwriteService } from '../../../services/appwrite';
import { StyleConstants } from 'styles/StyleConstants';
import styled, { css } from 'styled-components/macro';
import { useForm } from 'react-hook-form';
import { ModalAlert } from '../../components/ModalAlert';
import Arrow from '../../assets/icons/Back.png';
import Alert from '../../assets/icons/Alert.png';
import Check from '../../assets/icons/Check.png';

interface Props {
  successMail?: string;
  failMail?: string;
  Color?: any;
}

const messages = {
  required: 'Este campo es obligatorio',
  mail: 'Debes introducir una dirección de correo electronico correcta',
  passConfirm: 'Las contrasenas deben ser iguales',
};

const patterns = {
  fullname: /^[^-\s][a-zA-Z_\s-]+$/,
  mail: /^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
};

export const AccountVerify = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { register, formState, handleSubmit } = useForm({
    mode: 'onChange',
  });

  const { isValid, touchedFields, errors, isValidating, isDirty } = formState;
  const [iconShown, setIconShown] = useState(false);
  const toggleIconVisiblity = () => {
    setIconShown(iconShown ? false : true);
  };

  const onSubmit = (data, e) => {
    const { mail } = data;
    e.preventDefault();
    AppwriteService.verificationUser(mail)
      .then(res => {
        console.log('SuccessVerify', res);
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
        titleAlert={'Hubo un error'}
        descriptionAlert={
          'Ocurrió un error al cargar la información. Por favor intentá de nuevo.'
        }
        labelButton={'Regresar'}
        isVisibleButonSuport={false}
      />
      <Container>
        <Head>
          <ButonBack to={'/login'}>
            <Img src={Arrow} />
          </ButonBack>
          <Title>Verificación de seguridad</Title>
        </Head>
        <Body>
          <p>
            Ingresá el correo electrónico con el que estás registrado en la
            aplicación.
          </p>
          <p>Te enviaremos un mail para validar tu cuenta.</p>
          <Label
            Color={
              (isValidating && 'black') ||
              (touchedFields.mail && !errors.mail && 'green') ||
              (touchedFields.mail && errors.mail && 'red')
            }
          >
            Correo electrónico
          </Label>

          <BoxInput
            Color={
              (!isDirty && 'black') ||
              (isDirty && !touchedFields.mail && 'blue') ||
              (touchedFields.mail && !errors.mail && 'green') ||
              'red'
            }
          >
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
            <Icon onClick={toggleIconVisiblity} hidden={!touchedFields.mail}>
              {errors.mail && touchedFields.mail ? (
                <Img src={Alert} />
              ) : (
                <Img src={Check} />
              )}
            </Icon>
          </BoxInput>
          {errors.mail && touchedFields.mail && (
            <Validator>{errors.mail.message} </Validator>
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

const Icon = styled.i<Props>`
  padding-right: 10px;
  color: ${props => props.successMail};
  &:hover {
    color: ${p => p.theme.text};
    opacity: 0.8;
  }
`;

const BoxInput = styled.div<Props>`
  height: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  border: solid 2px ${props => props.Color};
  opacity: 0.8;
  border-radius: 12px;
  background-color: transparent;

  ::placeholder {
    color: '#787878';
  }
`;
const Input = styled.input`
  width: 100%;
  font-size: 0.875rem;
  font-weight: normal;
  padding-left: 10px;
  border: transparent;
  outline: none;
  ::placeholder {
    color: '#787878';
  }
  &:active {
    color: ${p => p.theme.text};
  }
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

const Label = styled.div<Props>`
  font-style: normal;
  font-weight: 700;
  font-size: 0.875rem;
  width: 80%;
  text-align: left;
  color: ${props => props.Color};
  line-height: 20px;
  margin-bottom: 8px;
  margin-top: 32px;
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
