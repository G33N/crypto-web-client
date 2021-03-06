import { StyleConstants } from 'styles/StyleConstants';
import styled, { css } from 'styled-components/macro';

export const Container = styled.div`
  margin-top: ${StyleConstants.NAV_BAR_HEIGHT};
  text-align: center;

  @media (min-width: 480px) {
    padding-left: 20%;
    padding-right: 25%;
  }
  @media (min-width: 720px) {
    padding-left: 30%;
    padding-right: 35%;
  }
  @media (min-width: 1340px) {
    padding-left: 35%;
    padding-right: 40%;
  }
`;
export const Head = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
`;

export const Title = styled.h3`
  width: 100%;
  height: 32px;
  font-weight: 700;
  font-size: 24px;
  color: ${p => p.theme.text};
  letter-spacing: 0.0022em;
  line-height: 32px;
  margin-bottom: 20px;
`;

export const Body = styled.div`
  text-align: left;
`;

export const Subtitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: ${p => p.theme.text};
  margin-bottom: 16px;
`;

export const TextMail = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: ${p => p.theme.text};
  margin-bottom: 8px;
`;

export const TextInfo = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${p => p.theme.text};
  margin-bottom: 24px;
`;

export const Label = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 0.75rem;
  width: 100%;
  text-align: left;
  line-height: 20px;
  color: ${p => p.theme.text};
  margin-bottom: 8px;
`;

export const InputNum = styled.input`
  width: 100%;
  font-size: 0.875rem;
  font-weight: normal;
  height: 48px;
  padding: 10px;
  border-radius: 12px;
  border: 1px solid ${p => p.theme.text};
  outline: none;
  ::placeholder {
    color: ${p => p.theme.text};
  }
  &:active {
    color: ${p => p.theme.text};
  }
`;

export const Validator = styled.p`
  font-size: 0.6rem;
  color: ${p => p.theme.textSecondary};
  font-weight: bold;
  width: 100%;
  text-align: left;
  display: block;
  margin-bottom: 13px;
`;

export const WrapperCounter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  color: #92c1fd;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 45px;
`;

export const TextCounter = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  padding-right: 5px;
`;

export const Button = styled.button`
  width: 80%;
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
