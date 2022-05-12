import React from 'react';
import styled, { css } from 'styled-components/macro';

export const Modal = ({ children, open, closed }) => {
  return (
    <>
      {open && (
        <Overlay>
          <ConteinerModal>
            <h1>soy modall</h1>
            <button onClick={() => closed(false)}> cerrar modal X </button>
            {children}
          </ConteinerModal>
        </Overlay>
      )}
    </>
  );
};
// ----- Styles ------ //

const Overlay = styled.div`
  wigth: 100vw;
  height: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ConteinerModal = styled.div`
  width: 500px;
  min-height: 100px;
  background: #fff;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
`;
