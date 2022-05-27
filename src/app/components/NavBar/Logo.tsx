import * as React from 'react';
import { WrapperLogo, Img } from './styles';
import Omnicrypto from '../../assets/icons/Moniflow.crypto.svg';

export function Logo() {
  return (
    <WrapperLogo>
      <Img src={Omnicrypto} />
    </WrapperLogo>
  );
}
