import styled from 'styled-components';
import { StyleResponsive } from '../../../../../../styles/StyleConstants';

export const Box = styled.div`
  background-color: ${p => p.theme.background};
  height: 200px;
  width: 660px;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  transition: 0.4s ease-in-out;
  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
    position: absolute;
    width: 328px;
    height: 140px;
    left: 16px;
    top: 160px;
  }
`;

export const CardContent = styled.div`
  margin: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
    flex-direction: column;
  }
`;

export const Slack = styled.div`
  display: flex;
`;

export const SlackText = styled.div`
  color: ${p => p.theme.background};
`;

export const SlackHead = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #0a0a0a;
  /* identical to box height */
  display: flex;
  align-items: center;
  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
    font-size: 14px;
  }
`;

export const SlackTitle = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: ${p => p.theme.text};
  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
    font-size: 20px;
    line-height: 8px;
  }
`;

export const SlackFoot = styled.div`
  color: ${p => p.theme.text};
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 72px;
  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
    font-size: 36px;
    line-height: 42px;
  }
`;

export const Icon = styled.i`
  padding: 10px;
  color: grey;
  &:hover {
    color: ${p => p.theme.text};
    opacity: 0.8;
  }
`;

export const Img = styled.img`
  width: 24px;
  height: 24px;
`;
export const InputPass = styled.input`
  width: 70%;
  font-size: 48px;
  font-weight: 500;
  height: 50px;
  padding: 0px;
  border: transparent;
  outline: none;

  ::placeholder {
    color: ${p => p.theme.text};
  }
  &:active {
    color: ${p => p.theme.text};
  }
`;

export const BoxInput = styled.div`
  height: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  border: transparent;
  opacity: 0.8;
  border-radius: 12px;
  background-color: transparent;
  p {
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
  }
  ::placeholder {
    color: ${p => p.theme.text};
  }
`;
