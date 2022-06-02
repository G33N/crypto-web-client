import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppwriteService } from 'services/appwrite';
import {
  BoxSidebar,
  SSidebarButton,
  ImgConteiner,
  LinkButton,
  SLinkContainer,
  SLink,
  SLinkLabel,
  SLinkIcon,
  Avatar,
  ButtonLogout,
} from './styles';
import IconClose from '../../assets/icons/IconClose.svg';
import Logo from '../../assets/icons/logo.svg';
import { navigationItems } from './config';
import { Links } from 'app/pages/LoginPage/styles';

const Sidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  // const searchClickHandler = () => {
  //   if (!sidebarOpen) {
  //     setSidebarOpen(true);
  //     searchRef.current.focus();
  //   } else {
  //     // search functionality
  //   }
  // };

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
    <BoxSidebar isOpen={sidebarOpen}>
      <>
        <SSidebarButton
          isOpen={sidebarOpen}
          onClick={() => setSidebarOpen(p => !p)}
        >
          <img src={IconClose} alt="" />
        </SSidebarButton>
      </>
      <ImgConteiner>
        <Links to="/home">
          <img src={Logo} alt="" />
        </Links>
      </ImgConteiner>
      {navigationItems.sidebar.map(item => (
        <SLinkContainer key={item.name}>
          <SLink
            to={item.to}
            style={!sidebarOpen ? { width: `fit-content` } : {}}
          >
            <SLinkIcon>{/* <img src={item.icon} alt="" /> */}</SLinkIcon>
            {sidebarOpen && (
              <>
                <SLinkLabel>{item.name}</SLinkLabel>
                {/* if notifications are at 0 or null, do not display */}
              </>
            )}
          </SLink>
        </SLinkContainer>
      ))}

      {/* <div className="sidebar__items">
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
      </div> */}
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
