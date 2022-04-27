import React from 'react';
import styled from 'styled-components/macro';

export const InputBox = (props: any) => {
  return (
    <Wrapper>
      <Label>{props.label}</Label>
      <Input type={props.type} placeholder={props.placeholder} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.div`
  font-size: 1.25rem;
  color: ${p => p.theme.text};
  font-weight: bold;
  margin-right: 1rem;
  line-height: 2;
  text-align: left;
  display: block;
  margin-bottom: 13px;
  margin-top: 20px;
`;

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  border: 1;
  bottom: 1px;
  border-radius: 6px;
  ::placeholder {
    color: black;
  }
`;
