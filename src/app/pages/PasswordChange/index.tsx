import React, { useState } from 'react';
import { AppwriteService } from '../../../services/appwrite';
import { useNavigate } from 'react-router-dom';
import Arrow from '../../assets/icons/Back.svg';
import { useForm } from 'react-hook-form';
import { CardValidationPass } from '../../components/Forms/components/CardValidationPass';
import PasswordOn from '../../assets/icons/Password on.svg';
import PasswordOff from '../../assets/icons/Password off.svg';
import { ModalAlert } from '../../components/ModalAlert';
import { ModalSuccess } from '../../components/ModalSuccess';
import { Container, Button } from '../../../styles/StyleElements';
import { i18n } from './i18n';
import {
  Head,
  ButonBack,
  Body,
  Form,
  Label,
  Title,
  Img,
  BoxInput,
  IconPass,
  InputPass,
  BoxPass,
  Validator,
  Icon,
} from './styles';

const messages = {
  required: 'Este campo es obligatorio',
  passConfirm: 'Las contraseñas deben ser iguales',
};
const messageConfirmPass = 'Las contrasenas deben ser iguales';

export function PasswordChange() {
  const navigate = useNavigate();
  const { t } = i18n;

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
        titleAlert={t('PasswordChange__tittleAlert')}
        descriptionAlert={t('PasswordChange__descriptionAlert')}
        labelButton={t('PasswordChange__labelButtonAlert')}
        isVisibleButonSuport={false}
      />
      <ModalSuccess
        openModal={isOpen}
        closeModal={setIsOpen}
        title={t('PasswordChange__tittleSuccess')}
        description={t('PasswordChange__tittleSuccess')}
        labelButton={t('PasswordChange__tittleSuccess')}
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
          <Title>Nueva Contraseña</Title>
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
                placeholder={t('PasswordChange__textPlaceholderPass')}
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
                (!isDirty && 'grey') ||
                (isDirty && !touchedFields.passConfirm && 'blue') ||
                (touchedFields.passConfirm && !errors.passConfirm && 'green') ||
                'red'
              }
            >
              <InputPass
                placeholder={t('PasswordChange__textPlaceholderPassConfirm')}
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

            <Button type="submit" disabled={!isValid}>
              Continuar
            </Button>
          </Form>
        </Body>
      </Container>
    </>
  );
}
