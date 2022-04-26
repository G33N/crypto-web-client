import * as React from 'react';
import styled from 'styled-components/macro';

export function Logo() {
  return (
    <Wrapper>
      <Title>OMNIcrypto</Title>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: 2rem;
  color: ${p => p.theme.text};
  font-weight: bold;
  margin-right: 1rem;
`;

