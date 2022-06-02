import styled from 'styled-components/macro';
import { device } from '../../../../styles/StyleConstants';

export const Conteiner = styled.div`
  padding-top: 20px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 40px;
  width: 100%;
  height: 100%;
  background-color: ${p => p.theme.backgroundDashboard};

  @media screen and (${device.mobileS}) and (${device.mobileL}) {
    padding: 0px;
  }
`;
