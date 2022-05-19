import React from 'react';

import { Navigate } from 'react-router-dom';

const useAuth = () => {
  const tokenSession = localStorage.getItem('token');
  if (tokenSession) {
    return true;
  } else {
    return false;
  }
};

const ProtectedRoute = ({ children }) => {
  const auth = useAuth();

  if (!auth) return null;

  return auth ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
