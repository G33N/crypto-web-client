import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { useForm } from 'react-hook-form';
import { CardValidationPass } from '../CardValidationPass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const messages = {
  required: 'Este campo es obligatorio',
  fullname: 'El formato introducido no es el correcto',
  mail: 'Debes introducir una dirección de correo electronico correcta',
  phone: 'Debes introducir un número correcto, con formato 0000-0000',
  password: 'La contrasena es obligatoria',
};
const messageConfirmPass = 'Las contrasenas deben ser iguales';

const patterns = {
  fullname: /^[A-Za-z]+$/i,
  mail: /^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  phone: /^ \d{4}\-\d{4}\$/,
  password: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
};

export function Formulario() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = data => {
    console.log(JSON.stringify(data));
  };

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <Form>
      <Label htmlFor="fullname">Nombre completo</Label>
      <Input
        placeholder="Ingrese su nombre completo"
        {...register('fullname', {
          required: messages.required,
          pattern: {
            value: patterns.fullname,
            message: messages.fullname,
          },
        })}
      />
      {errors.fullname && <Validator>{errors.fullname.message}</Validator>}

      <Label htmlFor="mail">Correo electronico</Label>
      <Input
        placeholder="Ingrese su correo electronico"
        {...register('mail', {
          required: messages.required,
          pattern: {
            value: patterns.mail,
            message: messages.mail,
          },
        })}
      />
      {errors.mail && <Validator>{errors.mail.message}</Validator>}

      <Label htmlFor="phone">Numero telefonico</Label>
      <Input
        placeholder=" +506 "
        {...register('phone', {
          required: messages.required,
          minLength: {
            value: 9,
            message: messages.phone,
          },
          maxLength: {
            value: 9,
            message: messages.phone,
          },
          pattern: {
            value: patterns.phone,
            message: messages.phone,
          },
        })}
      />
      {errors.phone && <Validator>{errors.phone.message}</Validator>}

      <Label htmlFor="passsword">Contrasena nueva</Label>

      <InputBoxPass>
        <InputPass
          id="pass"
          placeholder="Ingrese su contrasena"
          type={passwordShown ? 'text' : 'password'}
          {...register('password', {
            required: messages.required,
            minLength: {
              value: 8,
              message: messages.password,
            },
          })}
        />

        <Icon onClick={togglePasswordVisiblity}>
          {passwordShown ? (
            <FontAwesomeIcon icon={faEyeSlash} />
          ) : (
            <FontAwesomeIcon icon={faEye} />
          )}
        </Icon>
      </InputBoxPass>

      {errors.password && (
        <>
          <Validator>{errors.password.message}</Validator>
          <BoxPass>
            <CardValidationPass />
          </BoxPass>
        </>
      )}

      <Label htmlFor="passwordConfirm">Confirmacion de nueva contrasena</Label>

      <InputBoxPass>
        <InputPass
          id="passConfirm"
          placeholder="Ingrese nuevamente su contrasena"
          type={passwordShown ? 'text' : 'password'}
          {...register('passwordConfirm', {
            required: messages.required,
          })}
        />

        <Icon onClick={togglePasswordVisiblity}>
          {passwordShown ? (
            <FontAwesomeIcon icon={faEyeSlash} />
          ) : (
            <FontAwesomeIcon icon={faEye} />
          )}
        </Icon>
      </InputBoxPass>

      {document.getElementById('passConfirm') !==
      document.getElementById('pass') ? (
        <Validator>{messageConfirmPass}</Validator>
      ) : (
        ''
      )}

      <Button type="submit" onClick={handleSubmit(onSubmit)}>
        Crear cuenta
      </Button>
      <div></div>
    </Form>
  );
}

// ----- Styles ------ //

const Form = styled.form`
  text-align: center;
`;

const BoxPass = styled.div`
  text-align: left;lack, white;
  margin-top: 10px;
`;

const Label = styled.label`
  font-size: 0.875rem;
  color: ${p => p.theme.primary};
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
  height: 60px;
  font-size: 0.875rem;
  color: ${p => p.theme.primary};
  font-weight: normal;
  padding: 10px;
  border-radius: 6px;
  ::placeholder {
    color: ${p => p.theme.text};
  }
`;

const InputPass = styled.input`
  width: 100%;
  height: 60px;
  font-size: 0.875rem;
  font-weight: normal;
  padding: 10px;
  border: transparent;
  outline: none;
  ::placeholder {
    color: ${p => p.theme.text};
  }
  &:active {
    color: ${p => p.theme.primary};
  }
`;

const InputBoxPass = styled.div`
  display: flex;
  align-items: center;
  color: ${p => p.theme.primary};
  border: inset 2px ${p => p.theme.primary};
  opacity: 0.8;
  border-radius: 6px;
  padding: 6px;
  background-color: transparent;
  ::placeholder {
    color: ${p => p.theme.text};
  }
`;

const Icon = styled.i`
  &:hover {
    color: ${p => p.theme.text};
    opacity: 0.8;
  }
`;

const Button = styled.button`
  margin-top: 40px;
  width: 100%;
  height: 70px;
  font-size: 18px;
  padding: 10px;
  background-color: ${p => p.theme.primary};
  border-radius: 6px;
  color: ${p => p.theme.background};
  ::placeholder {
    color: ${p => p.theme.primary};
    text-align: center;
  }
`;
