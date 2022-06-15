import styled from 'styled-components';
import {
  StyleConstants,
  StyleResponsive,
} from '../../../../../../styles/StyleConstants';

export const InfoCard = styled.div`
  position: absolute;
  width: 660px;
  height: 360px;
  left: 295px;
  top: 360px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
    position: absolute;
    //border: 1px solid blue;
    width: 328px;
    height: 56px;
    margin-left: 36px;
    display: flex;
    flex-direction: row;
    align-items: top;
    left: 20px;
    top: 316px;
  }
`;

export const Card = styled.div`
  width: 128px;
  height: 72px;
  background-color: ${p => p.theme.background};
  border-radius: 1rem;

  box-shadow: ${StyleConstants.cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${StyleConstants.hoverEffect};
  }
  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
    width: 64px;
    height: 64px;
  }
`;

export const LastCard = styled.div`
  width: 128px;
  height: 72px;
  background-color: ${p => p.theme.background};
  border-radius: 1rem;
  box-shadow: ${StyleConstants.cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${StyleConstants.hoverEffect};
  }
  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
    width: 64px;
    height: 64px;
  }
`;

export const Avatar = styled.div`
  text-align: center;

  img {
    height: 32px;
    width: 32px;
    color: ${p => p.theme.background};
  }

  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
    display: flex;
    justify-content: center;
    padding-top: 16px;
  }
`;

export const Title = styled.div`
  margin-top: 11px;
  margin-bottom: 17px;
  text-align: center;
  color: black;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
    width: 64px;
    height: 64px;
    line-height: 40px;
  }
`;
