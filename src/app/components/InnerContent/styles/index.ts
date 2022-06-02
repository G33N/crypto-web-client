import styled from 'styled-components/macro';
import { StyleResponsive } from '../../../../styles/StyleConstants';

export const Conteiner = styled.div`
  padding-top: 20px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 40px;
  width: 100%;
  height: 100%;
  background-color: ${p => p.theme.backgroundDashboard};

  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
    padding: 0px;
  }
`;
