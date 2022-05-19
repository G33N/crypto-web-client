import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GlobalStyle } from 'styles/global-styles';
import ProtectedRoute from '../Auth/ProtectedRoute';

import { NavBar } from './components/NavBar';
import { HomePage } from './pages/HomePage/Loadable';
import { Dashboard } from './pages/Dashboard';
import { LoginPage } from './pages/LoginPage/Loadable';
import { RegisterPage } from './pages/RegisterPage/Loadable';
import { PasswordCodeRecover } from './pages/PasswordCodeRecover';
import { PasswordRecover } from './pages/PasswordRecover';
import { PasswordChange } from './pages/PasswordChange';
import { AccountVerify } from './pages/AccountVerify';
import { useTranslation } from 'react-i18next';

export default function App() {
  const { i18n } = useTranslation();

  return (
    <BrowserRouter>
      <Helmet
        defaultTitle="Omni Crypto Wallet"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="Omni Crypto Wallet" />
      </Helmet>

      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/passCodeRecover" element={<PasswordCodeRecover />} />
        <Route path="/passRecover" element={<PasswordRecover />} />
        <Route path="/passChange" element={<PasswordChange />} />
        <Route path="/accountVerify" element={<AccountVerify />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}
