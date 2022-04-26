import * as React from 'react';
import styled from 'styled-components/macro';
import { ButtonLink } from '../ButtonLink';

export function Nav() {
  return (
    <Wrapper>
      <Item>
        <ButtonLink path="/register" label="Register" />
      </Item>
      <Item>
        <ButtonLink path="/login" label="Login" />
      </Item>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  margin-right: -1rem;
`;

const Item = styled.a`
  color: ${p => p.theme.textSecondary};
  cursor: pointer;
  text-decoration: none;
  display: flex;
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }

  .icon {
    margin-right: 0.25rem;
  }
`;
