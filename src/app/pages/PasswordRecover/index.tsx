import React, { useState } from 'react';
import {
  Head,
  ButonBack,
  Description,
  Title,
  Img,
  Body,
  Label,
  Form,
  BoxInput,
  Icon,
  Input,
  Validator,
} from './styles';
import { AppwriteService } from '../../../services/appwrite';

import { useForm } from 'react-hook-form';
import { ModalAlert } from '../../components/ModalAlert';
import { ModalSuccess } from '../../components/ModalSuccess';
import Alert from '../../assets/icons/alert.svg';
import Arrow from '../../assets/icons/Back.svg';
import { Container } from '../../../styles/StyleElements';
import { Button } from 'styles/StyleElements';
import { i18n } from './i18n';

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
  const { t } = i18n;

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
        titleAlert={t('PasswordRecover__tittleAlert')}
        descriptionAlert={t('PasswordRecover__descriptionAlert')}
        labelButton={t('PasswordRecover__labelButtonAlert')}
        isVisibleButonSuport={false}
      />
      <ModalSuccess
        openModal={isOpen}
        closeModal={setIsOpen}
        title={t('PasswordRecover__tittleSuccess')}
        description={t('PasswordRecover__descriptionSuccess')}
        labelButton={t('PasswordRecover__labelButtonSuccess')}
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
                placeholder={t('PasswordRecover__textPlaceholderEmail')}
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
