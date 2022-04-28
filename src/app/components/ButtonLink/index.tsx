import * as React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const ButtonLink = (props: any) => {
  return (
    <Item>
      <LinkButton to={props.path}>{props.label}</LinkButton>
    </Item>
  );
};

const setTransitionTime = time => `all ${time}ease-in-out`;

const LinkButton = styled(Link)`
  text-decoration: none;
  color: ${p => p.theme.background};
  padding: 0.25rem 1rem;

  &:hover {
    color: ${p => p.theme.background};
    opacity: 0.8;
    cursor: pointer;
  }

  &:active {
  }
`;

const Item = styled.a`
  background-color: ${p => p.theme.primary};
  color: ${p => p.theme.background};
  cursor: pointer;
  margin: 1em;
  display: flex;
  padding: 0.25rem 1rem;
  border-radius: 0.75rem;
  align-items: center;

  &:hover {
    color: ${p => p.theme.background};
    background-color: ${p => p.theme.background};
  }

  .icon {
    margin-right: 0.25rem;
  }
`;
