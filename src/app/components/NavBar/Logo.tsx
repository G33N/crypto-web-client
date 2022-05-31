import * as React from 'react';
import { WrapperLogo, Img } from './styles';
import Omnicrypto from '../../assets/icons/Moniflow.crypto.svg';
import { Links } from 'app/pages/LoginPage/styles';

export function Logo() {
  return (
    <WrapperLogo>
      <Links to="/dashboard">
        <Img src={Omnicrypto} />
      </Links>
    </WrapperLogo>
  );
}
