import React from 'react';
import styled from 'styled-components';

export const Modal = ({ children, openModal, closeModal }) => {
  return (
    <>
      {openModal && (
        <Overlay>
          <ConteinerModal>
            <HeadModal>
              <h3>Titulo de mi modal</h3>
            </HeadModal>
            <ButonClose onClick={() => closeModal(false)}> X </ButonClose>
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
    font-weight: 500;
    font-size: 16px;
    color: ${p => p.theme.textSecondary};
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
