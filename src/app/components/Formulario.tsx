import React from 'react';
import styled from 'styled-components/macro';
import { useForm } from 'react-hook-form';
import { usePrettyPrintedState } from './usePrettyPrintedState';

export function Formulario() {
  const [submitValue, setSubmitValue] = usePrettyPrintedState();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
  });
  const onSubmit = data => {
    console.log(JSON.stringify(data));
    setSubmitValue(data);
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="fullname">Ingresa usuario</Label>
        <Input
          placeholder="Bill"
          {...register('fullname', {
            required: 'this is a required',
            maxLength: {
              value: 2,
              message: 'Max length is 2',
            },
          })}
        />
        {errors.firstName && (
          <ErrorAlert>{errors.firstName.message}</ErrorAlert>
        )}

        <Label htmlFor="lastName">Last Name</Label>
        <Input
          placeholder="Luo"
          {...register('lastName', {
            required: 'this is required',
            minLength: {
              value: 2,
              message: 'Min length is 2',
            },
          })}
        />
        {errors.lastName && <ErrorAlert>{errors.lastName.message}</ErrorAlert>}

        <Label htmlFor="email">Email</Label>
        <Input
          placeholder="Ingresa tu email"
          type="text"
          {...register('email', {
            required: 'this is required',
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: 'Invalid email address',
            },
          })}
        />
        {errors.lastName && <ErrorAlert>{errors.lastName.message}</ErrorAlert>}
        <div>
          <Button type="submit" />
        </div>
        {submitValue}
      </Form>
    </Wrapper>
  );
}

// ----- Styles ------ //

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Form = styled.form`
  text-align: center;
`;

const Label = styled.label`
  width: 100%;
  line-height: 2;
  text-align: center;
  display: block;
  margin-bottom: 13px;
  margin-top: 20px;
  color: ${p => p.theme.text};
  font-size: 14px;
  font-weight: 200;
`;

const Input = styled.input`
  width: 100%;
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  border: 1;
  bottom: 1px;
  border-radius: 6px;
  color: ${p => p.theme.text};
  ::placeholder {
    color: ${p => p.theme.text};
  }
`;

const Button = styled.input`
  width: 100%;
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background-color: ${p => p.theme.primary};
  border-radius: 6px;
  color: ${p => p.theme.background};
  ::placeholder {
    color: ${p => p.theme.text};
  }
`;

const ErrorAlert = styled.p`
  color: ${p => p.theme.text};
  ::placeholder {
    color: ${p => p.theme.text};
  }
`;
