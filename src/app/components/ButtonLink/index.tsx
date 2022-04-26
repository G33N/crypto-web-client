import * as React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const ButtonLink = (props: any) => {
  return <LinkButton to={props.path}>{props.label}</LinkButton>;
};

const LinkButton = styled(Link)`
  color: ${p => p.theme.primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }
`;
