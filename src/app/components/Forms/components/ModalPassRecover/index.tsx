import React from 'react';
import Arrow from './assets/Back.svg';
import { useForm } from 'react-hook-form';
import { Button } from 'styles/StyleElements';
import { i18n } from '../../i18n';
import {
  Overlay,
  LabelModal,
  ConteinerModal,
  InputModal,
  HeadModal,
  Contenido,
  ValidatorModal,
  ButonClose,
  ImgPassRecover,
} from '../../styles';

const messages = {
  required: 'Este campo es obligatorio',
  mail: 'Debes introducir una dirección de correo electronico correcta',
  passConfirm: 'Las contrasenas deben ser iguales',
};

const patterns = {
  fullname: /^[^-\s][a-zA-Z_\s-]+$/,
  mail: /^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
};

export const ModalPassRecover = ({ openModal, closeModal }) => {
  const { register, formState, handleSubmit } = useForm({
    mode: 'onChange',
  });
  const { t } = i18n;
  const onSubmit = data => {
    alert(JSON.stringify(data));
    //navegar a dashboard
  };

  const { isValid, touchedFields, errors } = formState;

  return (
    <>
      {openModal && (
        <Overlay>
          <ConteinerModal>
            <HeadModal>
              <ButonClose onClick={() => closeModal(false)}>
                {' '}
                <ImgPassRecover src={Arrow} />
              </ButonClose>
              <h3>Restablecer contraseña</h3>
            </HeadModal>

            <Contenido>
              <p>
                Ingresá el correo electrónico con el que estás registrado en la
                aplicación.
              </p>
              <LabelModal htmlFor="mail">Correo electrónico</LabelModal>
              <InputModal
                type="email"
                placeholder={t('ModalPassRecover__textPlaceholderEmail')}
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
              {errors.mail && touchedFields.mail && (
                <ValidatorModal>{errors.mail.message}</ValidatorModal>
              )}
              <Button
                type="submit"
                disabled={!isValid}
                onClick={handleSubmit(onSubmit)}
              >
                Continuar
              </Button>
            </Contenido>
          </ConteinerModal>
        </Overlay>
      )}
    </>
  );
};
