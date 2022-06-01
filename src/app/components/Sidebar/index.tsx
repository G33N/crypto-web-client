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
import IconClose from '../../assets/icons/IconClose.svg';
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
        <Links to="/home">
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
              <img src={item.icon} alt="" />
            </Avatar>{' '}
            {item.name}
          </LinkButton>
        ))}
      </div>
      <div className="sidebar__lasItem">
        <ButtonLogout onClick={logout}>
          <Avatar>
            <img src={IconClose} alt="" />
          </Avatar>
          Cerrar Sesion
        </ButtonLogout>
      </div>
    </BoxSidebar>
  );
};

export default Sidebar;
