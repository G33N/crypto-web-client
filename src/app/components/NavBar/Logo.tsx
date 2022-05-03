import * as React from 'react';
import styled from 'styled-components/macro';
import Omnicrypto from './assets/Omnicrypto.png';

export function Logo() {
  return (
    <Wrapper>
      <Img src={Omnicrypto} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  width: 90px;
  left: 24px;
  top: 38px;
  border-radius: 0px;
`;
