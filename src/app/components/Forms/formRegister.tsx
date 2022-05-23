import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppwriteService } from '../../../services/appwrite';
import styled, { css } from 'styled-components/macro';
import { useForm } from 'react-hook-form';
import { CardValidationPass } from './components/CardValidationPass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { ModalAlert } from '../../components/ModalAlert';
import { themes } from '../../../styles/theme/themes';
import Alert from '../../assets/icons/Alert.png';
import Check from '../../assets/icons/Check.png';
import { ModalSuccess } from '../ModalSuccess';

interface Props {
  successPass?: string;
  Color?: string;
}

const messages = {
  required: '* Este campo es obligatorio',
  fullname: '* El formato introducido no es el correcto',
  mail: '* Debes introducir una dirección de correo electronico correcta',
  passConfirm: '* Las contrasenas deben ser iguales',
};
const messageConfirmPass = '* Las contrasenas deben ser iguales';

const patterns = {
  fullname: /^[^-\s][a-zA-Z_\s-]+$/,
  mail: /^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
};

export function FormRegister() {
  const navigate = useNavigate();

  const { register, getValues, formState, handleSubmit } = useForm({
    mode: 'onChange',
  });
  const { isValid, touchedFields, errors, isValidating, isDirty } = formState;

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const [iconShown, setIconShown] = useState(false);
  const toggleIconVisiblity = () => {
    setIconShown(iconShown ? false : true);
  };

  const onSubmit = (data, e) => {
    const { fullname, mail, password } = data;

    e.preventDefault();
    AppwriteService.createUser(fullname, mail, password)
      .then(res => {
        console.log('SuccessRegister', res);
        if (res) {
          setIsOpen(true);
          navigate('/login');
        } else {
          return alert('Ya existe un usuario con este mail');
        }
      })
      .catch(error => {
        console.log('ErrorRegister', error);
        setIsOpenAlert(true);
      });
  };

  const handleOnChange = value => {
    console.log(value);
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
          'Ocurrió un error al cargar la información. Por favor intentá de nuevo.'
        }
        labelButton={'Regresar'}
        isVisibleButonSuport={false}
      />
      <ModalSuccess
        openModal={isOpen}
        closeModal={setIsOpen}
        title={'PERFECTO'}
        description={'El usuario se creo correctamente.'}
        labelButton={'Continuar'}
        pathTo={'/login'}
        isVisibleButonClose={false}
        isVisibleButonNavigate
        isVisibleButonSuport={false}
      />
      <Form>
        {/* //------ Input fullname----------// */}
        <Label
          Color={
            (isValidating && 'black') ||
            (touchedFields.fullname && !errors.fullname && 'green') ||
            (touchedFields.fullname && errors.fullname && 'red')
          }
        >
          Nombre completo
        </Label>
        <BoxInput
          Color={
            (isValidating && 'black') ||
            (isDirty && !touchedFields.fullname && 'blue') ||
            (touchedFields.fullname && !errors.fullname && 'green') ||
            (touchedFields.fullname && errors.fullname && 'red')
          }
        >
          <Input
            autoComplete="off"
            type="text"
            placeholder="Ingrese su nombre completo"
            {...register('fullname', {
              required: messages.required,
              pattern: {
                value: patterns.fullname,
                message: messages.fullname,
              },
            })}
            name="fullname"
          />
        </BoxInput>
        {errors.fullname && touchedFields.fullname && (
          <Validator>{errors.fullname.message}</Validator>
        )}

        {/* //------ Input mail ----------// */}
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
          <IconInput onClick={toggleIconVisiblity} hidden={!touchedFields.mail}>
            {errors.mail && touchedFields.mail ? (
              <Img src={Alert} />
            ) : (
              <Img src={Check} />
            )}
          </IconInput>
        </BoxInput>

        {errors.mail && touchedFields.mail && (
          <Validator>{errors.mail.message} </Validator>
        )}

        {/* //------ Input phone ----------// */}

        <Label
          Color={
            (isValidating && 'black') ||
            (touchedFields.phone && !errors.phone && 'green') ||
            (touchedFields.phone && errors.phone && 'red')
          }
        >
          Numero telefonico
        </Label>
        <PhoneInput
          placeholder="Ingrese su numero telefonico"
          {...register('phone', {})}
          onChange={handleOnChange}
          inputStyle={{
            borderColor: `${themes.light.text}`,
            width: '100%',
            height: '48px',
            borderRadius: '12px',
            paddingLeft: '18%',
            color: `${themes.light.text}`,
          }}
          buttonStyle={{
            borderColor: `${themes.light.text}`,
            height: '48px',
            width: '15%',
            background: 'white',
            borderStartStartRadius: '12px',
            borderEndStartRadius: '12px',
          }}
          value="phone"
        />
        {errors.phone && touchedFields.phone && (
          <Validator>{errors.phone.message}</Validator>
        )}

        {/* //------ Input pass ----------// */}

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
            (touchedFields.password && !errors.password && 'green') ||
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

        <Button
          type="submit"
          disabled={!isValid}
          onClick={handleSubmit(onSubmit)}
        >
          Crear cuenta
        </Button>
      </Form>
    </>
  );
}

// ----- Styles ------ //

const Form = styled.form`
  text-align: center;
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
const Img = styled.img`
  width: 24px;
  height: 24px;
`;

const IconInput = styled.i<Props>`
  padding-right: 10px;
  color: ${props => props.Color};
  &:hover {
    color: ${p => p.theme.text};
    opacity: 0.8;
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

const Input = styled.input<Props>`
  width: 100%;
  font-size: 0.875rem;
  font-weight: normal;
  height: 4px;
  padding: 10px;
  border: transparent;
  outline: none;
  ::placeholder {
    color: ${p => p.theme.text};
  }
  &:active {
    color: ${p => p.theme.text};
  }
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

const Button = styled.button`
  margin-top: 40px;
  width: 100%;
  height: 48px;
  font-size: 18px;
  padding: 10px;
  border-color: transparent;
  background-color: ${p => p.theme.primary};
  border-radius: 12px;
  color: ${p => p.theme.background};
  ::placeholder {
    color: ${p => p.theme.text};
    text-align: center;
  }
  ${props =>
    props.disabled &&
    css`
      background: ${p => p.theme.secondary};
    `}
`;
