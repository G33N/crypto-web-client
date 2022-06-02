import styled, { css } from 'styled-components';
import { StyleConstants } from './StyleConstants';

export const Container = styled.div`
  margin-top: ${StyleConstants.NAV_BAR_HEIGHT};
  padding: 4em;
  flex-direction: column;
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 448px;
`;

export const Button = styled.button`
  margin-top: 40px;
  width: 100%;
  height: 48px;
  font-size: 18px;
  padding: 10px;
  background-color: ${p => p.theme.primary};
  border-color: transparent;
  border-radius: 12px;
  color: ${p => p.theme.background};
  ::placeholder {
    color: ${p => p.theme.textSecondary};
    text-align: center;
  }
  ${props =>
    props.disabled &&
    css`
      background: ${p => p.theme.secondary};
    `}
`;

export const ButtonTwo = styled.button`
  width: 100%;
  height: 56px;
  font-size: 18px;
  background-color: ${p => p.theme.primary};
  border-color: transparent;
  border-radius: 12px;
  margin-bottom: 16px;
  color: ${p => p.theme.background};
  ::placeholder {
    color: ${p => p.theme.textSecondary};
    text-align: center;
  }
  ${props =>
    props.disabled &&
    css`
      background: ${p => p.theme.secondary};
    `}
`;

export const ButtonThree = styled.button`
  width: 100%;
  height: 56px;
  font-size: 18px;
  background-color: ${p => p.theme.background};
  border: 2px solid ${p => p.theme.primary};
  border-radius: 12px;
  margin-bottom: 16px;
  color: ${p => p.theme.primary};
  ::placeholder {
    color: ${p => p.theme.textSecondary};
    text-align: center;
  }
  ${props =>
    props.disabled &&
    css`
      background: ${p => p.theme.secondary};
    `}
`;
