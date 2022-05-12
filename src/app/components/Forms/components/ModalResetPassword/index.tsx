import * as React from 'react';
import styled from 'styled-components/macro';

export const ModalResetPassword = (props: any) => {
  return (
    <DivModalStyle>
      <button onClick={props.closed}>x</button>
      Soy un modal
    </DivModalStyle>
  );
};

const DivModalStyle = styled.div`
  position: 'fixed';
  top: '50%';
  left: '50%';
  transform: 'translate(-50%,-50%)';
  backgroundcolor: '#fff';
  padding: '50px';
  zindex: 1000;
`;
