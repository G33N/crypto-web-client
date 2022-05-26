import * as React from 'react';
import { Wrapper, Title, Description } from '../../styles';

export function CardInfo(props: any) {
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
    </Wrapper>
  );
}
