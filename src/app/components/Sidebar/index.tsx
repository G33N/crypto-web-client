import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppwriteService } from 'services/appwrite';
import {
  BoxSidebar,
  ImgConteiner,
  LinkButton,
  Avatar,
  ConteinerFondo,
  ButtonLogout,
} from './styles';
import Home from '../../assets/icons/Home.svg';
import Logo from '../../assets/icons/logo.svg';
import { navigationItems } from './config';
import { Links } from 'app/pages/LoginPage/styles';

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
        <Links to="/dashboard">
          <img src={Logo} alt="" />
        </Links>
      </ImgConteiner>
      <div className="sidebar__items">
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
      </div>
      <ConteinerFondo>
        <ButtonLogout onClick={logout}>
          <Avatar>
            <img src={Home} alt="" />
          </Avatar>
          Cerrar Sesion
        </ButtonLogout>
      </ConteinerFondo>
    </BoxSidebar>
  );
};

export default Sidebar;
