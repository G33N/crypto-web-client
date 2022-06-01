import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppwriteService } from '../../../services/appwrite';
import { useForm } from 'react-hook-form';
import { CardValidationPass } from './components/CardValidationPass';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { ModalAlert } from '../ModalAlert';
import { themes } from '../../../styles/theme/themes';
import PasswordOff from '../../assets/icons/Password off.svg';
import PasswordOn from '../../assets/icons/Password on.svg';
import Alert from '../../assets/icons/alert.svg';
import { ModalSuccess } from '../ModalSuccess';
import { i18n } from './i18n';
import {
  Form,
  Label,
  BoxInput,
  Input,
  Validator,
  IconInput,
  InputPass,
  Img,
  IconPass,
  BoxPass,
  Icon,
  Button,
} from './styles';

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
  const { t } = i18n;
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
          navigate('/accountVerify');
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
        titleAlert={t('formRegister__titleAlert')}
        descriptionAlert={t('formRegister__descriptionAlert')}
        labelButton={t('formRegister__labelButtonAlert')}
        isVisibleButonSuport={false}
      />
      <ModalSuccess
        openModal={isOpen}
        closeModal={setIsOpen}
        title={t('formRegister__tittleSuccess')}
        description={t('formRegister__descriptionSuccess')}
        labelButton={t('formRegister__labelButtonSuccess')}
        pathTo={'/login'}
        isVisibleButonClose={false}
        isVisibleButonNavigate
        isVisibleButonSuport={false}
      />
      <Form>
        {/* //------ Input fullname----------// */}
        <Label
          Color={
            (isValidating && 'grey') ||
            (touchedFields.fullname && !errors.fullname && 'green') ||
            (touchedFields.fullname && errors.fullname && 'red')
          }
        >
          Nombre completo
        </Label>
        <BoxInput
          Color={
            (!isDirty && 'grey') ||
            (isDirty && !touchedFields.fullname && 'blue') ||
            (touchedFields.fullname && !errors.fullname && 'green') ||
            'red'
          }
        >
          <Input
            autoComplete="off"
            type="text"
            placeholder={t('formRegister__textPlaceholderFullname')}
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
            (isValidating && 'grey') ||
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
            placeholder={t('formRegister__textPlaceholderEmail')}
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
          placeholder={t('formRegister__textPlaceholderPhoneNumber')}
          {...register('phone', {})}
          onChange={handleOnChange}
          inputStyle={{
            borderColor: `${themes.light.borderLight}`,
            width: '100%',
            height: '48px',
            borderRadius: '12px',
            paddingLeft: '18%',
            color: `${themes.light.text}`,
          }}
          buttonStyle={{
            borderColor: `${themes.light.borderLight}`,
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
          Contraseña nueva
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
            placeholder={t('formRegister__textPlaceholderPass')}
            type={passwordShown ? 'text' : 'password'}
            {...register('password', {
              required: messages.required,
            })}
          />

          <IconPass
            onClick={togglePasswordVisiblity}
            Color={
              (isValidating && 'grey') ||
              (touchedFields.password && !errors.password && 'green') ||
              (touchedFields.password && errors.password && 'red')
            }
          >
            {passwordShown ? (
              <Img src={PasswordOn} />
            ) : (
              <Img src={PasswordOff} />
            )}
          </IconPass>
        </BoxInput>
        <>
          <BoxPass>
            <CardValidationPass
              valueOfNewPassword={getValues().password?.toString()}
            />

            {/* <CardValidationPass type={errors?.password?.type} /> */}
          </BoxPass>
        </>
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
            (!isDirty && 'grey') ||
            (isDirty && !touchedFields.passConfirm && 'blue') ||
            (touchedFields.passConfirm && !errors.passConfirm && 'green') ||
            'red'
          }
        >
          <InputPass
            placeholder={t('formRegister__textPlaceholderPasConfirm')}
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
              (isValidating && 'grey') ||
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
