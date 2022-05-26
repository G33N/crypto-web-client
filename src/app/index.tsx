import React from 'react';
import { useLocation } from 'react-router-dom';
import MainRoutes from './Routes';
import Sidebar from './components/Sidebar';
import { NavBar } from './components/NavBar';

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/dashboard' &&
        location.pathname !== '/transaction' &&
        location.pathname !== '/tabs' &&
        location.pathname !== '/support' &&
        location.pathname !== '/settings' && <NavBar />}
      <div className="app">
        {location.pathname !== '/register' &&
          location.pathname !== '/login' &&
          location.pathname !== '/accountVerify' &&
          location.pathname !== '/passRecover' &&
          location.pathname !== '/passChange' && <Sidebar />}
        <MainRoutes />
      </div>
    </>
  );
}

export default App;
