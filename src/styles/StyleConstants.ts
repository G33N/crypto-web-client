import { css } from 'styled-components';

export enum StyleConstants {
  NAV_BAR_HEIGHT = '6rem',
  cardShadow = `rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px`,
  hoverEffect = `rgba(0, 0, 0, 0.56) 0px 22px 70px 4px`,
}

export enum StyleResponsive {
  mobileS = '320px',
  mobileM = '375px',
  mobileL = '425px',
  tablet = '768px',
  laptop = '1024px',
  laptopL = '1440px',
  desktop = '2560px',
}

export const v = {
  sidebarWidth: `300px`,
  smSpacing: `8px`,
  mdSpacing: `16px`,
  lgSpacing: `24px`,
  xlSpacing: `32px`,
  xxlSpacing: `48px`,
  borderRadius: `6px`,
};

export const btnReset = css`
  font-family: inherit;
  outline: none;
  border: none;
  background: none;
  letter-spacing: inherit;
  color: inherit;
  font-size: inherit;
  text-align: inherit;
  padding: 0;
`;
