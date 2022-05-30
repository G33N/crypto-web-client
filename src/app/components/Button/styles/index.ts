import styled from 'styled-components/macro';

export const Wrap = styled.div`
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
`;

export const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  color: ${p => p.theme.text};
`;
