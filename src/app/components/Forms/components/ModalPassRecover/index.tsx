import React from 'react';
import styled, { css } from 'styled-components';
import Arrow from './assets/Back.png';
import { useForm } from 'react-hook-form';

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
                <Img src={Arrow} />
              </ButonClose>
              <h3>Restablecer contraseña</h3>
            </HeadModal>

            <Contenido>
              <p>
                Ingresá el correo electrónico con el que estás registrado en la
                aplicación.
              </p>
              <Label htmlFor="mail">Correo electrónico</Label>
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
              {errors.mail && touchedFields.mail && (
                <Validator>{errors.mail.message}</Validator>
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
// ----- Styles ------ //

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ConteinerModal = styled.div`
  width: 600px;
  min-height: 400px;
  background: #fff;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
`;

const HeadModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-weight: 700;
    position: absolute;
    font-size: 24px;
    color: ${p => p.theme.text};
    letter-spacing: 0.0022em;
    line-height: 32px;
    font-style: normal;
    left: 16.67%;
    right: 16.68%;
    top: 20px;
  }
`;

const ButonClose = styled.button`
  position: relative;
  top: 20px;
  right: 20px;
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.3s easy all;
  border-radius: 5px;
  color: ${p => p.theme.primary};
  &:hover {
    background: ${p => p.theme.textSecondary};
  }
`;

const Img = styled.img`
  width: 24px;
  height: 24px;
  top: 38px;
  display: flex;
`;

const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    margin-top: 24px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: ${p => p.theme.text};
    float: right;
  }
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

const Input = styled.input`
  width: 100%;
  height: 48px;
  font-size: 0.875rem;
  color: ${p => p.theme.text};
  font-weight: normal;
  padding: 10px;
  border-radius: 12px;
  border-color: #cdcbcb;
  border: inset 1px;
  ::placeholder {
    color: ${p => p.theme.text};
  }
`;

const Button = styled.button`
  margin-top: 40px;
  width: 100%;
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
