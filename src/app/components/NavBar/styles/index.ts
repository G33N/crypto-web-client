import styled from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';

export const Img = styled.img`
  width: 265.26px;
  height: 30px;
  left: 24px;
  top: 38px;
  border-radius: 0px;
`;

export const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 960px;
  margin: 0 auto;
  padding: 0 1.5rem;
  box-sizing: content-box;
`;

export const Wrapper = styled.header`
  box-shadow: 0 1px 0 0 ${p => p.theme.borderLight};
  height: ${StyleConstants.NAV_BAR_HEIGHT};
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${p => p.theme.background};
  z-index: 2;

  @supports (backdrop-filter: blur(10px)) {
    backdrop-filter: blur(10px);
    background-color: ${p =>
      p.theme.background.replace(
        /rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,
        'rgba$1,0.75)',
      )};
  }
`;

export const WrapperLogo = styled.div`
  display: flex;
  align-items: center;
`;

export const WrapperNav = styled.nav`
  display: flex;
  margin-right: -1rem;
`;
