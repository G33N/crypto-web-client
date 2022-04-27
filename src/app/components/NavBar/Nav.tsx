import * as React from 'react';
import styled from 'styled-components/macro';
import { ButtonLink } from '../ButtonLink';

export function Nav() {
  return (
    <Wrapper>
      <ButtonLink path="/register" label="Register" />

      <h3> | </h3>

      <ButtonLink path="/login" label="Login" />
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  margin-right: -1rem;
`;
