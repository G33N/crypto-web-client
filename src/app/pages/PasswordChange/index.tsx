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
  successPass?: string;
  Color?: string;
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
  const { isValid, touchedFields, errors, isValidating, isDirty } = formState;
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = (data, e) => {
    const { passConfirm } = data;
    e.preventDefault();
    AppwriteService.updatePasssword(passConfirm)
      .then(res => {
        console.log('Success', res);
        if (res) {
          console.log('SuccessUpdatePass', res);
          alert('La contrasena se modifico correctamente.');
          navigate('/login');
        } else {
          return setIsOpenAlert(true);
        }
        navigate('/login');
      })
      .catch(error => {
        console.log('Error', error);
        setIsOpenAlert(true);
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
          <Form onClick={handleSubmit(onSubmit)}>
            <Label
              Color={
                (isValidating && 'black') ||
                (touchedFields.password && !errors.password && 'green') ||
                (touchedFields.password && errors.password && 'red')
              }
            >
              Contrasena nueva
            </Label>

            <BoxInput
              Color={
                (!isDirty && 'black') ||
                (isDirty && !touchedFields.password && 'blue') ||
                (touchedFields.mail && !errors.password && 'green') ||
                'red'
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
                Color={
                  (isValidating && 'black') ||
                  (touchedFields.password && !errors.password && 'green') ||
                  (touchedFields.password && errors.password && 'red')
                }
              >
                {passwordShown ? (
                  <FontAwesomeIcon icon={faEye} />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} />
                )}
              </IconPass>
            </BoxInput>

            {errors.password && touchedFields.password && errors.password.type && (
              <>
                <BoxPass>
                  <CardValidationPass type={errors.password.type} />
                </BoxPass>
              </>
            )}

            <Label
              Color={
                (isValidating && 'black') ||
                (touchedFields.passConfirm && !errors.passConfirm && 'green') ||
                (touchedFields.passConfirm && errors.passConfirm && 'red')
              }
            >
              Confirmación de nueva contraseña
            </Label>

            <BoxInput
              Color={
                (!isDirty && 'black') ||
                (isDirty && !touchedFields.passConfirm && 'blue') ||
                (touchedFields.passConfirm && !errors.passConfirm && 'green') ||
                'red'
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
                Color={
                  (isValidating && 'black') ||
                  (touchedFields.password && !errors.password && 'green') ||
                  (touchedFields.password && errors.password && 'red')
                }
              >
                {passwordShown ? (
                  <FontAwesomeIcon icon={faEye} />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} />
                )}
              </Icon>
            </BoxInput>

            {errors.passConfirm && touchedFields.passConfirm && (
              <Validator>{errors.passConfirm.message}</Validator>
            )}

            <Button type="submit" disabled={!isValid}>
              Continuar
            </Button>
          </Form>
        </Body>
      </Container>
    </>
  );
}

const Container = styled.div`
  margin-top: ${StyleConstants.NAV_BAR_HEIGHT};
  padding: 4em;

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
  text-align: left;
`;

const Form = styled.form`
  text-align: center;
`;
const IconPass = styled.i<Props>`
  padding-right: 10px;
  color: ${props => props.successPass};
  &:hover {
    color: ${p => p.theme.text};
    opacity: 0.8;
  }
`;
const Icon = styled.i<Props>`
  padding-right: 10px;
  color: ${props => props.successPass};
  &:hover {
    color: ${p => p.theme.text};
    opacity: 0.8;
  }
`;

const BoxPass = styled.div`
  text-align: left;
  margin-top: 10px;
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
  border: solid 2px ${props => props.Color};
  opacity: 0.8;
  border-radius: 12px;
  background-color: transparent;

  ::placeholder {
    color: '#787878';
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
