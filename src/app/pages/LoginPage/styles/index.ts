import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

export const Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 32px;
  letter-spacing: 0.0022em;
  color: ${p => p.theme.text};
  margin-right: 1rem;
`;
export const Label = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  text-align: center;
  color: ${p => p.theme.text};
  margin-bottom: 13px;
  margin-top: 50px;
`;
export const BoxNavigation = styled.div`
  text-align: center;
`;
export const Links = styled(Link)`
  color: ${p => p.theme.primary};
  text-decoration: none;
  font-weight: 700;
  font-style: normal;
  font-size: 0.875rem;
  line-height: 1.375rem;
  &:hover {
    text-decoration: none;
    opacity: 0.8;
  }
  &:active {
    opacity: 0.4;
  }
`;
