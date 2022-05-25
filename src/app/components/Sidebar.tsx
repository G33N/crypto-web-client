import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AppwriteService } from 'services/appwrite';
import styled from 'styled-components/macro';
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
              <Link
                key={item.text}
                to={item.to}
                className={
                  location.pathname.includes(item.to) ? 'sidebar_active' : ''
                }
              >
                {item.name}
              </Link>
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
  padding-left: 20px;
  height: 100vh;

  .sidebar__items {
    display: flex;
    flex-direction: column;
  }
  .sidebar__items a {
    color: #ebf8fe;
    font-size: 20px;
    margin-bottom: 40px;
    text-decoration: none;
  }
  .sidebar_active {
    text-decoration: underline !important;
  }
`;
