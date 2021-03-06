import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppwriteService } from 'services/appwrite';
import {
  BoxSidebar,
  SSidebarButton,
  ImgConteiner,
  SLinkContainer,
  SLink,
  SLinkLabel,
  SLinkIcon,
  Avatar,
  ButtonLogout,
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import IconClose from '../../assets/icons/IconClose.svg';
import Logo from '../../assets/icons/logo.svg';
import { navigationItems } from './config';
import { Links } from 'app/pages/LoginPage/styles';

const Sidebar = () => {
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(true);

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
          <FontAwesomeIcon icon={faAngleRight} />
        </SSidebarButton>
      </>
      <ImgConteiner>
        {sidebarOpen && (
          <Links to="/home">
            <img src={Logo} alt="" />
          </Links>
        )}
      </ImgConteiner>
      {navigationItems.sidebar.map(item => (
        <SLinkContainer key={item.name}>
          <SLink
            to={item.to}
            style={!sidebarOpen ? { width: `fit-content` } : {}}
          >
            {sidebarOpen && (
              <>
                <SLinkIcon>
                  <img src={item.icon} alt="" />
                </SLinkIcon>

                <SLinkLabel>{item.name}</SLinkLabel>
                {/* if notifications are at 0 or null, do not display */}
              </>
            )}
          </SLink>
        </SLinkContainer>
      ))}

      <div className="sidebar__lasItem">
        {sidebarOpen && (
          <ButtonLogout
            onClick={logout}
            style={!sidebarOpen ? { width: `fit-content` } : {}}
          >
            <Avatar>
              <img src={IconClose} alt="" />
            </Avatar>
            <SLinkLabel> Cerrar Sesion</SLinkLabel>
          </ButtonLogout>
        )}
      </div>
    </BoxSidebar>
  );
};

export default Sidebar;
