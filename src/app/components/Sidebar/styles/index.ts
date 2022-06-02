import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import globo from '../../../assets/images/globopeque.png';
import { btnReset, v } from '../../../../styles/StyleConstants';

interface Props {
  isOpen?: boolean;
}

export const BoxSidebar = styled.div<Props>`
  width: ${({ isOpen }) => (!isOpen ? `auto` : v.sidebarWidth)};
  height: 100vh;
  padding: ${v.lgSpacing};
  position: relative;
  //  width: 250px;
  background-color: black;
  background-image: url(${globo});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100%;
  color: #ebf8fe;
  padding-top: 20px;
  padding-left: 8px;
  padding-right: 8px;

  .sidebar__items {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    width: 239px;
    padding: 15px;
  }
  .sidebar__items a {
    color: #ebf8fe;
    padding: 10px;
    font-size: 20px;
    margin-bottom: 18px;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    border-radius: 0.75rem;
    align-items: center;
    color: ${p => p.theme.background};
    &:hover {
      color: ${p => p.theme.background};
      background-color: ${p => p.theme.primary};
    }
    &:active {
      text-decoration: none !important;
      color: ${p => p.theme.background};
      background-color: ${p => p.theme.secondary};
    }

    .sidebar__lasItem {
      position: absolute;
      bottom: 10px;
    }
  }
`;

export const SLinkContainer = styled.div`
  border-radius: ${v.borderRadius};
  margin: 8px 0;
  color: ${p => p.theme.background};
  &:hover {
    color: ${p => p.theme.background};
    background-color: ${p => p.theme.primary};
  }
  &:active {
    text-decoration: none !important;
    color: ${p => p.theme.background};
    background-color: ${p => p.theme.secondary};
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

export const SLinkIcon = styled.div`
  padding: ${v.smSpacing} ${v.mdSpacing};
  display: flex;
  svg {
    font-size: 20px;
  }
`;

export const SLinkLabel = styled.span`
  display: block;
  flex: 1;
  margin-left: ${v.smSpacing};
`;

export const SSidebarButton = styled.button<Props>`
  ${btnReset};
  position: absolute;
  top: ${v.xxlSpacing};
  right: ${({ isOpen }) => (isOpen ? `-16px` : `-40px`)};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transform: ${({ isOpen }) => (!isOpen ? `rotate(180deg)` : `initial`)};
`;

export const ButtonLogout = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  font-size: 18px;
  text-decoration: none;
  padding: calc(${v.smSpacing} - 2px) 0;
  border-color: transparent;
  color: ${p => p.theme.background};
  background-color: transparent;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
    background-color: ${p => p.theme.primary};
    padding: 10px;
    border-radius: 0.75rem;
  }

  &:active {
  }
`;

export const Avatar = styled.div`
  img {
    height: 1.5rem;
    width: 1.5rem;
    margin-right: 15px;
    color: ${p => p.theme.background};
  }
`;

export const ImgConteiner = styled.div`
  margin-left: 20px;
  img {
    height: 4rem;
    width: 200px;
  }
  // z-position: 1;
`;

export const ConteinerFondo = styled.div`
  background-position: bottom;
`;
