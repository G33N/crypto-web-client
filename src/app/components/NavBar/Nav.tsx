import * as React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components/macro';
import { ButtonLink } from '../ButtonLink';

export function Nav() {
  const location = useLocation();
  return (
    <Wrapper>
      {location.pathname !== '/register' && (
        <ButtonLink path="/register" label="Register" />
      )}
      {location.pathname !== '/register' && location.pathname !== '/login' && (
        <h3> | </h3>
      )}
      {location.pathname !== '/login' && (
        <ButtonLink path="/login" label="Login" />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  margin-right: -1rem;

  @media (min-width: 480px) {
    .ButtonLink {display: none;
  }
`;
