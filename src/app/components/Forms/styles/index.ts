import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';

interface Props {
  Color?: string;
  Border?: string;
  successPass?: string;
}

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

export const BoxPass = styled.div`
  margin-top: 10px;
`;

export const Button = styled.button`
  margin-top: 40px;
  width: 100%;
  height: 48px;
  font-size: 18px;
  padding: 10px;
  background-color: ${p => p.theme.primary};
  border-radius: 9px;
  border-color: transparent;
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

export const ButonClose = styled.button`
  position: relative;
  top: 20px;
  right: 20px;
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.3s easy all;
  border-radius: 5px;
  color: ${p => p.theme.primary};
  &:hover {
    background: ${p => p.theme.textSecondary};
  }
`;

export const ButtonRecover = styled(Link)`
  margin-top: 40px;
  width: 189px;
  height: 22px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.003em;
  color: ${p => p.theme.primary};
  border: none;
  text-decoration: none;
  background-color: transparent;
`;

export const Circle = styled.i`
  font-size: 12px;
  color: ${p => p.theme.text};
  padding-right: 15px;
  width: 24px;
  height: 24px;
`;

export const ConteinerModal = styled.div`
  width: 600px;
  min-height: 400px;
  background: #fff;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
`;

export const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    margin-top: 24px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: ${p => p.theme.text};
    float: right;
  }
`;

export const Description = styled.div`
  font-size: 0.875rem;
  color: ${p => p.theme.text};
  font-weight: 400;
  font-style: regular;
  line-height: 1.375rem;
`;

export const DescriptionCardPass = styled.div`
  color: ${p => p.theme.text};
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
`;

export const Form = styled.form`
  text-align: center;
`;

export const HeadModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-weight: 700;
    position: absolute;
    font-size: 24px;
    color: ${p => p.theme.text};
    letter-spacing: 0.0022em;
    line-height: 32px;
    font-style: normal;
    left: 16.67%;
    right: 16.68%;
    top: 20px;
  }
`;

export const Icon = styled.i<Props>`
  padding-right: 10px;
  color: ${props => props.Color};
  &:hover {
    color: ${p => p.theme.text};
    opacity: 0.8;
  }
`;

export const IconCardPass = styled.i`
  font-size: 15px;
  color: #4caf50;
  padding-right: 15px;

  &:active {
    color: #4caf50;
  }
`;

export const IconInput = styled.i<Props>`
  padding-right: 10px;
  color: ${props => props.Color};
  &:hover {
    color: ${p => p.theme.text};
    opacity: 0.8;
  }
`;

export const IconPass = styled.i<Props>`
  padding-right: 10px;
  color: ${props => props.successPass};
  &:hover {
    color: ${p => p.theme.text};
    opacity: 0.8;
  }
`;

export const Img = styled.img`
  width: 24px;
  height: 24px;
`;

export const Img2 = styled.img`
  width: 24px;
  height: 24px;
`;

export const ImgPassRecover = styled.img`
  width: 24px;
  height: 24px;
  top: 38px;
  display: flex;
`;

export const ImgTwo = styled.img`
  width: 12px;
  height: 12px;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 0.875rem;
  font-weight: normal;
  height: 4px;
  padding: 10px;
  border: transparent;
  outline: none;
  ::placeholder {
    color: ${p => p.theme.text};
  }
  &:active {
    color: ${p => p.theme.text};
  }
`;

export const InputModal = styled.input`
  width: 100%;
  height: 48px;
  font-size: 0.875rem;
  color: ${p => p.theme.text};
  font-weight: normal;
  padding: 10px;
  border-radius: 12px;
  border-color: #cdcbcb;
  border: inset 1px;
  ::placeholder {
    color: ${p => p.theme.text};
  }
`;

export const InputPass = styled.input`
  width: 100%;
  font-size: 0.875rem;
  font-weight: normal;
  height: 4px;
  padding: 10px;
  border: transparent;
  outline: none;
  ::placeholder {
    color: ${p => p.theme.text};
  }
  &:active {
    color: ${p => p.theme.text};
  }
`;

export const Label = styled.div<Props>`
  font-style: normal;
  font-weight: 700;
  font-size: 0.875rem;
  width: 90%;
  text-align: left;
  color: ${props => props.Color};
  line-height: 20px;
  margin-bottom: 8px;
  margin-top: 32px;
`;

export const LabelModal = styled.label`
  font-size: 0.875rem;
  color: ${p => p.theme.text};
  font-weight: bold;
  width: 100%;
  line-height: 2;
  text-align: left;
  display: block;
  margin-bottom: 13px;
  margin-top: 20px;
`;

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Row = styled.div`
  display: flex;
  margin-right: -1rem;
  padding: 5px;
`;

export const Title = styled.div`
  font-size: 1rem;
  font-weight: bold;
  font-style: normal;
  color: ${p => p.theme.text};
  font-weight: 700;
  margin-right: 1rem;
  line-height: 2rem;
`;

export const TitleCardPass = styled.div`
  font-size: 12px;
  width: 216px;
  font-weight: 400;
  color: ${p => p.theme.text};
  margin-right: 1rem;
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

export const ValidatorModal = styled.p`
  font-size: 0.6rem;
  color: ${p => p.theme.textSecondary};
  font-weight: bold;
  width: 100%;
  text-align: left;
  display: block;
  margin-bottom: 13px;
  margin-top: 20px;
`;

export const Wrapper = styled.div`
  display: flex-center;
  align-items: left;
  position: relative;
`;
