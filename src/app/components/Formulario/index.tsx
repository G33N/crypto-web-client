import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { useForm } from 'react-hook-form';
import { CardValidationPass } from '../CardValidationPass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
const eye = <FontAwesomeIcon icon={faEye} />;

const messages = {
  required: 'Este campo es obligatorio',
  fullname: 'El formato introducido no es el correcto',
  mail: 'Debes introducir una dirección de correo electronico correcta',
  phone: 'Debes introducir un número correcto',
  password: 'La contrasena es obligatoria',
  passwordConfirm: 'Las contrasenas no coinciden',
};

const patterns = {
  fullname: /^[A-Za-z]+$/i,
  mail: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  phone: /^[0-9]+$/i,
  password: '',
  passwordConfirm: '',
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

      <Label htmlFor="passsword">Contrasena nueva</Label>
      <Input
        placeholder="Ingrese su contrasena"
        type={passwordShown ? 'text' : 'password'}
        {...register('password', {
          required: messages.required,
        })}
      />
      <i onClick={togglePasswordVisiblity}>{eye}</i>

      {errors.password && (
        <>
          <Validator>{errors.password.message}</Validator>
          <BoxPass>
            <CardValidationPass />
          </BoxPass>
        </>
      )}
      <Label htmlFor="passwordConfirm">Confirmacion de nueva contrasena</Label>
      <Input
        placeholder="Ingrese nuevamente su contrasena"
        type="text"
        {...register('passwordConfirm', {
          required: messages.required,
        })}
      />
      {{ ...register('password') } === { ...register('passwordConfirm') } && (
        <Validator>{errors.passwordConfirm.message}</Validator>
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
  text-align: left;
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
  border: 1;
  bottom: 1px;
  border-radius: 6px;
  ::placeholder {
    color: ${p => p.theme.text};
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
