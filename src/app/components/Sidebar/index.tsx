import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AppwriteService } from 'services/appwrite';
import styled from 'styled-components/macro';
import Home from '../../assets/icons/Home.svg';
import Logo from '../../assets/icons/logo.svg';
import fondoGlobo from '../../assets/images/fondoGlobo.png';
import { navigationItems } from './config';

const Sidebar = () => {
  const navigate = useNavigate();

  const useAuth = () => {
    const user = localStorage.getItem('user');
    if (user) {
      return true;
    } else {
      return false;
    }
  };
  const user = useAuth();
  const location = useLocation();

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
    <BoxSidebar>
      <ImgConteiner>
        <img src={Logo} alt="" />
      </ImgConteiner>
      <div className="sidebar__items">
        {user && (
          <>
            {navigationItems.sidebar.map(item => (
              <LinkButton
                key={item.text}
                to={item.to}
                className={
                  location.pathname.includes(item.to) ? 'sidebar_active' : ''
                }
              >
                <Avatar>
                  <img src={Home} alt="" />
                </Avatar>{' '}
                {item.name}
              </LinkButton>
            ))}
          </>
        )}
        {!user && (
          <Link
            to="/login"
            className={location.pathname === '/login' ? 'sidebar_active' : ''}
          >
            Login
          </Link>
        )}
      </div>
      <div>
        <ImgFondo>
          <img src={fondoGlobo} alt="" />
        </ImgFondo>
        {location.pathname !== '/login' && (
          <ButtonLogout onClick={logout}>
            {' '}
            <Avatar>
              <img src={Home} alt="" />
            </Avatar>
            Cerrar Sesion
          </ButtonLogout>
        )}
      </div>
    </BoxSidebar>
  );
};

export default Sidebar;

const BoxSidebar = styled.div`
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

const LinkButton = styled(Link)`
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

const ButtonLogout = styled.button`
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

const Avatar = styled.div`
  img {
    height: 1.5rem;
    width: 1.5rem;
    margin-right: 15px;
    color: ${p => p.theme.background};
  }
`;

const ImgConteiner = styled.div`
  margin-left: 20px;
  img {
    height: 4rem;
    width: 200px;
  }
`;

const ImgFondo = styled.div`
  bottom: -25;
  left: 0;
  img {
    width: 600px;
    height: 400px;
  }
`;
