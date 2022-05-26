import React, { useState } from 'react';
import { AppwriteService } from '../../../services/appwrite';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ModalAlert } from '../../components/ModalAlert';
import PasswordOff from '../../assets/icons/Password off.svg';
import PasswordOn from '../../assets/icons/Password on.svg';
import Alert from '../../assets/icons/alert.svg';
import {
  Form,
  Label,
  BoxInput,
  Input,
  IconInput,
  Validator,
  InputPass,
  Icon,
  Img,
  Button,
  ButtonRecover,
} from './styles';

const messages = {
  required: '* Este campo es obligatorio',
  mail: '* El formato introducido no es el correcto',
  password: '* Las contrasenas no tiene un formato correcto',
};

const patterns = {
  fullname: /^[^-\s][a-zA-Z_\s-]+$/,
  mail: /^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
};

export function FormLogin() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const [iconShown, setIconShown] = useState(false);
  const toggleIconVisiblity = () => {
    setIconShown(iconShown ? false : true);
  };

  const { register, formState, handleSubmit } = useForm({
    mode: 'onChange',
  });
  const { isValid, touchedFields, errors, isValidating, isDirty } = formState;

  const onSubmit = data => {
    const { mail, password } = data;
    AppwriteService.loginUser(mail, password)
      .then(res => {
        console.log('Success', res);
        localStorage.setItem('auth', 'token');
        localStorage.setItem('user', JSON.stringify({ role: 'ADMIN' }));
        setTimeout(() => {
          navigate('/dashboard');
        }, 3000);
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
        openModal={isOpen}
        closeModal={setIsOpen}
        titleAlert={'Usuario y/o contraseña incorrectos'}
        descriptionAlert={
          'El usuario y contraseña que ingresaste no coinciden.  Revisá los datos e intentá de nuevo.'
        }
        labelButton={'Regresar'}
        isVisibleButonSuport={false}
      />
      <Form>
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
            (!isDirty && 'grey') ||
            (isDirty && !touchedFields.mail && 'blue') ||
            (touchedFields.mail && !errors.mail && 'green') ||
            'red'
          }
          Border={
            (!isDirty && '1px') ||
            (isDirty && !touchedFields.mail && '2px') ||
            (touchedFields.mail && !errors.mail && '1px') ||
            '2px'
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
            {errors.mail && touchedFields.mail ? <Img src={Alert} /> : ''}
          </IconInput>
        </BoxInput>

        {errors.mail && touchedFields.mail && (
          <Validator>{errors.mail.message} </Validator>
        )}

        {/* //------ Input pass ----------// */}

        <Label
          Color={
            (isValidating && 'black') ||
            (touchedFields.password && !errors.password && 'green') ||
            (touchedFields.password && errors.password && 'red')
          }
        >
          Contraseña{' '}
        </Label>
        <BoxInput
          Color={
            (!isDirty && 'grey') ||
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

          <Icon
            onClick={togglePasswordVisiblity}
            Color={
              (isValidating && 'red') ||
              (touchedFields.password && !errors.password && 'green') ||
              (touchedFields.password && errors.password && 'red')
            }
          >
            {passwordShown ? (
              <Img src={PasswordOn} />
            ) : (
              <Img src={PasswordOff} />
            )}
          </Icon>
        </BoxInput>

        {errors.password && touchedFields.password && errors.password.type && (
          <Validator>{errors.password.message}</Validator>
        )}

        <Button
          type="submit"
          disabled={!isValid}
          onClick={handleSubmit(onSubmit)}
        >
          Iniciar sesión
        </Button>
      </Form>

      <ButtonRecover to={'/passRecover'}>
        ¿Olvidaste la contraseña?
      </ButtonRecover>
    </>
  );
}
