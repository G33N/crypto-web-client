import React from 'react';
import styled from 'styled-components';
import Arrow from './assets/Back.png';

export const Modal = ({ children, openModal, closeModal }) => {
  return (
    <>
      {openModal && (
        <Overlay>
          <ConteinerModal>
            <HeadModal>
              <h3>
                {' '}
                <Img src={Arrow} />
              </h3>
            </HeadModal>
            <ButonClose onClick={() => closeModal(false)}>
              {' '}
              <Img src={Arrow} />{' '}
            </ButonClose>
            <h3>Reestablecer contraseña</h3>
            {children}
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
  width: 300px;
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
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${p => p.theme.text};

  h3 {
    font-weight: 700;
    font-size: 24px;
    color: ${p => p.theme.primary};
    letter-spacing: 0.0022em;
    line-height: 32px;
    font-style: normal;
  }
`;

const ButonClose = styled.button`
  position: absolut;
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
  left: 24px;
  top: 38px;
  border-radius: 0px;
`;

const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  p {
    font-size: 18px;
    margin-bottom: 20px;
  }
  img {
    width: 100%;
    vertical-align: top;
    border-radius: 3px;
  }
`;
