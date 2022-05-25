import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AppwriteService } from 'services/appwrite';
import styled from 'styled-components/macro';
import Home from '../assets/icons/Home.svg';
import { navigationItems } from '../config';

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
            {location.pathname !== '/login' && (
              <button onClick={logout}>logout</button>
            )}
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
    </BoxSidebar>
  );
};

export default Sidebar;

const BoxSidebar = styled.div`
  width: 250px;
  background-color: black;
  color: #ebf8fe;
  padding-top: 200px;
  padding-left: 8px;
  padding-right: 8px;

  .sidebar__items {
    display: flex;
    flex-direction: column;
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
    background-color: ${p => p.theme.primary};
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
const Avatar = styled.div`
  img {
    height: 1.5rem;
    width: 1.5rem;
    margin-right: 8px;
    color: ${p => p.theme.background};
  }
`;
