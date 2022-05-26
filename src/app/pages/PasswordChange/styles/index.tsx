import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

interface Props {
  successPass?: string;
  Color?: string;
}

export const Head = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Img = styled.img`
  width: 24px;
  height: 24px;
`;

export const ButonBack = styled(Link)`
  cursor: pointer;
  transition: 0.3s easy all;
  border-radius: 5px;
  color: ${p => p.theme.primary};
  margin-right: 10px;
  &:hover {
    background: ${p => p.theme.textSecondary};
  }
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 24px;
  color: ${p => p.theme.text};
  letter-spacing: 0.0022em;
  line-height: 32px;
  margin-bottom: 24px;
`;

export const Body = styled.div`
  text-align: left;
`;

export const Form = styled.form`
  text-align: center;
`;
export const IconPass = styled.i<Props>`
  padding-right: 10px;
  color: ${props => props.successPass};
  &:hover {
    color: ${p => p.theme.text};
    opacity: 0.8;
  }
`;
export const Icon = styled.i<Props>`
  padding-right: 10px;
  color: ${props => props.successPass};
  &:hover {
    color: ${p => p.theme.text};
    opacity: 0.8;
  }
`;

export const BoxPass = styled.div`
  text-align: left;
  margin-top: 10px;
`;
export const Label = styled.div<Props>`
  font-style: normal;
  font-weight: 700;
  font-size: 0.875rem;
  width: 80%;
  text-align: left;
  color: ${props => props.Color};
  line-height: 20px;
  margin-bottom: 8px;
  margin-top: 32px;
`;

export const BoxInput = styled.div<Props>`
  height: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  border: solid 1px ${props => props.Color};
  opacity: 0.8;
  border-radius: 12px;
  background-color: transparent;

  ::placeholder {
    color: '#787878';
  }
`;

export const Validator = styled.p`
  font-size: 0.6rem;
  color: ${p => p.theme.errorColor};
  font-weight: bold;
  width: 100%;
  text-align: left;
  display: block;
  margin-bottom: 13px;
  margin-top: 20px;
`;

export const InputPass = styled.input`
  width: 100%;
  font-size: 0.875rem;
  font-weight: normal;
  padding-left: 10px;
  border: transparent;
  outline: none;
  ::placeholder {
    color: '#787878';
  }
  &:active {
    color: ${p => p.theme.text};
  }
`;
