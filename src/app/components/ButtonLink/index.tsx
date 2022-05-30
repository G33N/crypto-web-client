import * as React from 'react';
import { Item, LinkButton } from './styles';

export const ButtonLink = (props: any) => {
  return (
    <Item>
      <LinkButton to={props.path}>{props.label}</LinkButton>
    </Item>
  );
};
