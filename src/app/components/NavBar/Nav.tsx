import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { Button } from '../Button';

export function Nav() {
  return (
    <Wrapper>
      <Item>
        <Link to="/login">
          <Button />1
        </Link>
      </Item>
      <Item>
        <Link to="/register">
          <Button />2
        </Link>
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
