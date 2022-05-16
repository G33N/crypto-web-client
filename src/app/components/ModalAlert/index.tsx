import React from 'react';
import styled, { css } from 'styled-components';
import Arrow from './assets/Back.png';

export const ModalAlert = ({ openModal, closeModal }) => {
  return (
    <>
      {openModal && (
        <Overlay>
          <ConteinerModal>
            <HeadModal>
              <ButonClose onClick={() => closeModal(false)}>
                {' '}
                <Img src={Arrow} />
              </ButonClose>
              <h3>Esto es un error</h3>
            </HeadModal>

            <Contenido>
              <p>
                Ingresá el correo electrónico con el que estás registrado en la
                aplicación.
              </p>

              <Button type="submit">Continuar</Button>
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
  width: 600px;
  min-height: 400px;
  background: #fff;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
`;

const HeadModal = styled.div`
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

const ButonClose = styled.button`
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

const Img = styled.img`
  width: 24px;
  height: 24px;
  top: 38px;
  display: flex;
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
