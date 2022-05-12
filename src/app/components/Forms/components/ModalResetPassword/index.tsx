import * as React from 'react';
import styled from 'styled-components';

export const ModalResetPassword = (props: any) => {
  return (
    <Contenido>
      <h1>titulo modal</h1>
      <p>descripcion modal</p>
      <button onClick={props.closed}>x</button>
    </Contenido>
  );
};

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
