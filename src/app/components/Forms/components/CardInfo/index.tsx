import * as React from 'react';
import styled from 'styled-components/macro';

export function CardInfo(props: any) {
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex-center;
  align-items: left;
  position: relative;
`;

const Title = styled.div`
  font-size: 1rem;
  font-weight: bold;
  font-style: normal;
  color: ${p => p.theme.primary};
  font-weight: 700;
  margin-right: 1rem;
  line-height: 2rem;
`;

const Description = styled.div`
  font-size: 0.875rem;
  color: ${p => p.theme.primary};
  font-weight: 400;
  font-style: regular;
  line-height: 1.375rem;
`;
