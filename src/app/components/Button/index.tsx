import * as React from 'react';
import { Wrap, Input } from './styles';

export const Button = (props: any) => {
  return (
    <Wrap>
      <Input type={props.type}>{props.label}</Input>min.pass
    </Wrap>
  );
};
