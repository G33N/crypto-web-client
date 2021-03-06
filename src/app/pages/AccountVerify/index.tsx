import React, { useState } from 'react';
import { i18n } from './i18n';
import {
  Body,
  Validator,
  Head,
  Title,
  Subtitle,
  TextCounter,
  TextMail,
  TextInfo,
  Label,
  InputNum,
  WrapperCounter,
} from './styles';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import CountDownTimer from './CountDownTimer';
import { AppwriteService } from 'services/appwrite';
import { ModalAlert } from 'app/components/ModalAlert';
import { ModalSuccess } from 'app/components/ModalSuccess';
import { Container, Button } from 'styles/StyleElements';

export const AccountVerify = () => {
  const { t } = i18n;
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
        titleAlert={t('accountVerify__tittleAlert')}
        descriptionAlert={t('accountVerify__descriptionAlert')}
        labelButton={t('accountVerify__labelButtonAlert')}
        isVisibleButonSuport={false}
      />
      <ModalSuccess
        openModal={isOpen}
        closeModal={setIsOpen}
        title={t('accountVerify__tittleSuccess')}
        description={t('accountVerify__descriptionSuccess')}
        labelButton={t('accountVerify__labelButtonSuccess')}
        pathTo={'/dashboard'}
        isVisibleButonClose={false}
        isVisibleButonNavigate
        isVisibleButonSuport={false}
      />
      <Container>
        <Head>
          <Title>{t('accountVerify__title')}</Title>
        </Head>
        <Body>
          <Subtitle>{t('accountVerify__subtitle')}</Subtitle>
          <TextMail>ser*****@gmail.com</TextMail>
          <TextInfo>{t('accountVerify__textInfo')}</TextInfo>
          <Label>{t('accountVerify__textLabel')}</Label>
          <InputNum
            type="email"
            placeholder={t('accountVerify__textPlaceholder')}
            {...register('codigo', {
              required: messages.required,
            })}
          />

          {errors.mail && touchedFields.mail && (
            <Validator>{errors.mail.message}</Validator>
          )}

          <WrapperCounter>
            <TextCounter>{t('accountVerify__textCounter')}</TextCounter>{' '}
            <CountDownTimer minutes={3} seconds={0} />
          </WrapperCounter>
          <Button type="submit" disabled onClick={handleSubmit(onSubmit)}>
            {t('accountVerify__actionButton')}
          </Button>
        </Body>
      </Container>
    </>
  );
};
