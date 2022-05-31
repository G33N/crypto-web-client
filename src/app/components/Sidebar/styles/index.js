import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

export const BoxSidebar = styled.div`
  width: 250px;
  background-color: black;
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
  }
`;

export const LinkButton = styled(Link)`
  text-decoration: none;
  color: ${p => p.theme.background};
  &:hover {
    color: ${p => p.theme.background};
    opacity: 0.8;
    cursor: pointer;
  }

  &:active {
  }
`;

export const ButtonLogout = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  font-size: 18px;
  text-decoration: none;
  color: ${p => p.theme.background};
  background-color: ${p => p.theme.text};
  &:hover {
    color: ${p => p.theme.primary};
    opacity: 0.8;
    cursor: pointer;
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
`;

export const ImgFondo = styled.div`
  background-repeat: no-repeat;
  background-position: bottom left;
`;

export const ConteinerFondo = styled.div`
  position: bottom;
`;