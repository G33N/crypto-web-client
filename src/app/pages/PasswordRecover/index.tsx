import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppwriteService } from '../../../services/appwrite';
import styled from 'styled-components/macro';
import { useForm } from 'react-hook-form';
import { ModalAlert } from '../../components/ModalAlert';
import { ModalSuccess } from '../../components/ModalSuccess';
import Alert from '../../assets/icons/alert.svg';
import Arrow from '../../assets/icons/Back.svg';
import { Container } from '../../../styles/StyleElements';
import { Button } from 'styles/StyleElements';

interface Props {
  success?: string;
  Color?: any;
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
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { register, formState, handleSubmit } = useForm({ mode: 'onChange' });
  const { isValid, touchedFields, errors, isValidating, isDirty } = formState;

  const onSubmit = (data, e) => {
    const { mail } = data;
    const url = 'http://localhost:3000/passCodeRecover';
    e.preventDefault();
    AppwriteService.recoverPasssword(mail, url)
      .then(res => {
        console.log('Success', res);
        setIsOpen(true);
      })
      .catch(error => {
        console.log('Error', error);
        setIsOpenAlert(true);
      });
  };

  const [iconShown, setIconShown] = useState(false);
  const toggleIconVisiblity = () => {
    setIconShown(iconShown ? false : true);
  };

  return (
    <>
      <ModalAlert
        openModal={isOpenAlert}
        closeModal={setIsOpenAlert}
        titleAlert={'Usuario y/o contraseña incorrectos'}
        descriptionAlert={
          'El usuario y contraseña que ingresaste no coinciden.  Revisá los datos e intentá de nuevo.'
        }
        labelButton={'Regresar'}
        isVisibleButonSuport={false}
      />
      <ModalSuccess
        openModal={isOpen}
        closeModal={setIsOpen}
        title={'PERFECTO'}
        description={
          'Enviamos un mail a su correo electronico para que pueda recuperar su contrasena'
        }
        labelButton={'Continuar'}
        pathTo={'/login'}
        isVisibleButonClose={false}
        isVisibleButonNavigate
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
          <Form>
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
                (!isDirty && 'grey') ||
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
                {errors.mail && touchedFields.mail ? <Img src={Alert} /> : ''}
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
          </Form>
        </Body>
      </Container>
    </>
  );
};

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
  margin-right: 10px;
  &:hover {
    background: ${p => p.theme.textSecondary};
  }
`;

const Title = styled.h3`
  font-weight: 700;
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

const Form = styled.form``;

const Description = styled.p`
  text-align: left;
  width: 90%;
  font-weight: 400;
  line-height: 20px;
  font-size: 14px;
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

const BoxInput = styled.div<Props>`
  height: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  border: solid 1px ${props => props.Color};
  opacity: 0.8;
  border-radius: 12px;
  background-color: transparent;

  ::placeholder {
    color: '#787878';
  }
`;

const Icon = styled.i<Props>`
  padding-right: 10px;
  color: ${props => props.success};
  &:hover {
    color: ${p => p.theme.text};
    opacity: 0.8;
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
