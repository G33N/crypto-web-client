import { i18n } from './i18n';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppwriteService } from 'services/appwrite';
import React from 'react';
import styled from 'styled-components';
import AvatarImage from '../assets/avatarImage.jpg';

function Navbar(props) {
  const { t } = i18n;
  const navigate = useNavigate();

  const useAuth = () => {
    const user = localStorage.getItem('user');
    if (user) {
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    AppwriteService.logout()
      .then(res => {
        console.log('Success', res);
        localStorage.setItem('auth', '');
        localStorage.removeItem('user');

        setTimeout(() => {
          navigate('/login');
        }, 3000);
      })
      .catch(error => {
        console.log('Error', error);
      });
  };

  return (
    <NavbarContainer>
      <Text>
        {t('navbar__title')}
        <span> {props.userName} </span>
      </Text>
      <AvatarButtonClose onClick={logout}>
        <img src={AvatarImage} alt="" />
      </AvatarButtonClose>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;
const AvatarButtonClose = styled.button`
  img {
    height: 4rem;
    width: 4rem;
    border-radius: 4rem;
  }
`;

const Text = styled.h1`
  span {
    font-weight: 500;
    color: #484258;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-top: 1rem;
  }
`;

export default Navbar;
