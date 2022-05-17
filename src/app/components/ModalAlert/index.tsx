import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import Alert from '../ModalAlert/assets/alert.png';

export const ModalAlert = ({
  openModal,
  closeModal,
  titleAlert,
  descriptionAlert,
  labelButton,
  isVisibleButonSuport,
}) => {
  return (
    <>
      {openModal && (
        <Overlay>
          <ConteinerModal>
            <Contenido>
              <Img src={Alert} />
              <Title>{titleAlert}</Title>
              <Description>{descriptionAlert}</Description>
              <Button onClick={() => closeModal(false)}>{labelButton}</Button>
              <ButtonTwo type="submit">Contactar a soporte</ButtonTwo>
              {isVisibleButonSuport && (
                <ButtonTwo type="submit">Contactar a soporte</ButtonTwo>
              )}
            </Contenido>
          </ConteinerModal>
        </Overlay>
      )}
    </>
  );
};
// ----- Styles ------ //

const Overlay = styled.div`
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

const ConteinerModal = styled.div`
  width: 312px;
  min-height: 400px;
  background: #fff;
  position: relative;
  border-radius: 12px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 16px;
`;

const Contenido = styled.div`
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

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  font-style: normal;
  color: ${p => p.theme.text};
  text-align: center;
  line-height: 28px;
  padding: 10px;
  letter-spacing: 0.0022em;
  margin-bottom: 16px;
`;

const Description = styled.div`
  font-size: 0.875rem;
  color: ${p => p.theme.text};
  font-weight: 400;
  font-style: normal;
  line-height: 20px;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 48px;
`;

const Button = styled.button`
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
const ButtonTwo = styled.button`
  margin-top: 20px;
  width: 100%;
  height: 48px;
  font-size: 18px;
  padding: 10px;
  background-color: ${p => p.theme.background};
  border: 2px solid ${p => p.theme.primary};
  border-radius: 12px;
  margin-bottom: 32px;
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

const Img = styled.img`
  width: 60px;
  height: 60px;
  top: 38px;
  display: flex;
  margin-bottom: 38px;
`;
