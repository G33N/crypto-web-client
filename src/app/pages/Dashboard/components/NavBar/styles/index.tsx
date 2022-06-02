import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  StyleConstants,
  StyleResponsive,
  v,
} from '../../../../../../styles/StyleConstants';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  margin-bottom: 3rem;

  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
    background-color: black;
    justify-content: space-evenly;
    padding-bottom: 80px;
  }
`;

export const ContainerButtonNavBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const AvatarButtonClose = styled.button`
  img {
    height: 4rem;
    width: 4rem;
    border-radius: 4rem;
  }
  border-radius: 4rem;

  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
    img {
      height: 2rem;
      width: 2rem;
      border-radius: 2rem;
    }
    border-radius: 2rem;
  }
`;

export const Card = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${p => p.theme.background};
  border-radius: 1rem;
  margin-right: 42px;
  padding: 1rem 1rem 0.3rem 1rem;
  box-shadow: ${StyleConstants.cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${StyleConstants.hoverEffect};
  }
`;

export const Avatar = styled.div`
  img {
    height: 1.5rem;
    width: 1.5rem;
    color: ${p => p.theme.background};
  }
`;

export const Text = styled.div`
  font-weight: 400;
  color: #484258;
  font-size: 24px;

  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
    color: #ffffff;
    font-size: 18px;
  }
`;

export const SLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  padding: calc(${v.smSpacing} - 2px) 0;
`;

export const ImgConteiner = styled.div`
  margin-left: 20px;
  img {
    height: 4rem;
    width: 200px;
  }

  @media screen and (min-width: ${StyleResponsive.mobileS}) and (max-width: ${StyleResponsive.mobileL}) {
    background-color: black;
    padding: 20px;
  }
  // z-position: 1;
`;
