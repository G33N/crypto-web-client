import React from 'react';
import styled from 'styled-components/macro';
import { useForm } from 'react-hook-form';

const messages = {
  required: 'Este campo es obligatorio',
  fullname: 'El formato introducido no es el correcto',
  mail: 'Debes introducir una dirección correcta',
  phone: 'Debes introducir un número correcto',
  password: 'La contrasena es obligatoria',
};

const patterns = {
  fullname: /^[A-Za-z]+$/i,
  mail: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  phone: /^[0-9]+$/i,
  password: '',
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

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="fullname">Nombre completo</Label>
      <Input
        placeholder="Ingrese su nombre completo"
        {...register('name', {
          required: messages.required,
          pattern: {
            value: patterns.fullname,
            message: messages.fullname,
          },
        })}
      />

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

      <Label htmlFor="passsword">Contrasena nueva</Label>
      <Input
        placeholder="Ingrese su contrasena"
        type="text"
        {...register('password', {
          required: messages.required,
        })}
      />

      <div>
        <Button type="submit" />
      </div>
      {/* {submitValue} */}
      <div>
        {errors.name && <p>{errors.name.message}</p>}
        {errors.mail && <p>{errors.mail.message}</p>}
        {errors.password && <p>{errors.password.message}</p>}
      </div>
    </Form>
  );
}

// ----- Styles ------ //

const Form = styled.form`
  text-align: center;
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

const Button = styled.input`
  margin-top: 40px;
  width: 100%;
  height: 70px;
  font-size: 18px;
  padding: 10px;
  background-color: ${p => p.theme.primary};
  border-radius: 6px;
  color: ${p => p.theme.background};
  ::placeholder {
    color: ${p => p.theme.text};
  }
`;
