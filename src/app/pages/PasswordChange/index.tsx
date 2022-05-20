import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppwriteService } from '../../../services/appwrite';
import { StyleConstants } from 'styles/StyleConstants';
import styled, { css } from 'styled-components/macro';
import Arrow from '../../assets/icons/Back.png';
import { useForm } from 'react-hook-form';
import { CardValidationPass } from '../../components/Forms/components/CardValidationPass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { ModalAlert } from '../../components/ModalAlert';
import { ModalSuccess } from '../../components/ModalSuccess';
interface Props {
  success?: string;
}

const messages = {
  required: 'Este campo es obligatorio',
  passConfirm: 'Las contrasenas deben ser iguales',
};
const messageConfirmPass = 'Las contrasenas deben ser iguales';

export function PasswordChange() {
  const navigate = useNavigate();

  const { register, getValues, formState, handleSubmit } = useForm({
    mode: 'onChange',
  });
  const { isValid, touchedFields, errors } = formState;
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = (data, e) => {
    const { passConfirm } = data;
    e.preventDefault();
    AppwriteService.updatePasssword(passConfirm)
      .then(res => {
        console.log('Success', res);
        navigate('/login');
      })
      .catch(error => {
        console.log('Error', error);
        setIsOpen(true);
      });
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

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
        title={'contrasena modificada corretamente'}
        description={''}
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
          <Title>Nueva Contrasena</Title>
        </Head>
        <Body>
          Ingresá tu nueva contraseña.
          <InputBoxPass
            success={
              errors.password && touchedFields.password && errors.password.type
                ? 'red'
                : 'green'
            }
          >
            <InputPass
              placeholder="Ingrese su contraseña"
              type={passwordShown ? 'text' : 'password'}
              {...register('password', {
                required: messages.required,
                validate: {
                  oneUppercase: value => value && /^(?=.*?[A-Z])/.test(value),
                  oneLowercase: value => value && /^(?=.*?[a-z])/.test(value),
                  oneNumber: value => value && /^(?=.*?[0-9])/.test(value),
                  minLength: value => value && /.{8,}/.test(value),
                },
              })}
              name="password"
            />

            <IconPass
              onClick={togglePasswordVisiblity}
              success={
                errors.password &&
                touchedFields.password &&
                errors.password.type
                  ? 'red'
                  : 'green'
              }
            >
              {passwordShown ? (
                <FontAwesomeIcon icon={faEye} />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} />
              )}
            </IconPass>
          </InputBoxPass>
          {errors.password && touchedFields.password && errors.password.type && (
            <>
              <BoxPass>
                <CardValidationPass type={errors.password.type} />
              </BoxPass>
            </>
          )}
          <Label htmlFor="passwordConfirm">
            Confirmación de nueva contraseña
          </Label>
          <InputBoxPass
            success={
              !errors.passConfirm && touchedFields.passConfirm ? 'green' : 'red'
            }
          >
            <InputPass
              placeholder="Ingrese nuevamente su contraseña"
              type={passwordShown ? 'text' : 'password'}
              {...register('passConfirm', {
                required: messages.required,
                validate: value =>
                  value === getValues().password || messageConfirmPass,
              })}
              name="passConfirm"
            />

            <Icon
              onClick={togglePasswordVisiblity}
              success={
                !errors.passConfirm && touchedFields.passConfirm
                  ? 'green'
                  : 'red'
              }
            >
              {passwordShown ? (
                <FontAwesomeIcon icon={faEye} />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} />
              )}
            </Icon>
          </InputBoxPass>
          {errors.passConfirm && touchedFields.passConfirm && (
            <Validator>{errors.passConfirm.message}</Validator>
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
}

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

const BoxPass = styled.div`
  text-align: left;
  margin-top: 10px;
`;

const Label = styled.label`
  font-size: 0.875rem;
  color: ${p => p.theme.text};
  font-weight: bold;
  width: 100%;
  line-height: 2;
  text-align: left;
  display: block;
  margin-bottom: 13px;
  margin-top: 20px;
`;

const InputPass = styled.input`
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

const InputBoxPass = styled.div<Props>`
  height: 48px;
  display: flex;
  align-items: center;
  border: solid 2px ${props => props.success};
  opacity: 0.8;
  border-radius: 12px;
  background-color: transparent;

  ::placeholder {
    color: '#787878';
  }
`;
const IconPass = styled.i<Props>`
  padding-right: 10px;
  color: ${props => props.success};
  &:hover {
    color: ${p => p.theme.text};
    opacity: 0.8;
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
