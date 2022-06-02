import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import InnerContent from './components/InnerContent';
import { Dashboard } from './pages/Dashboard';
import { TransactionPage } from './pages/TransactionPage';
import { SettingsPage } from './pages/SettingsPage';
import { SupportPage } from './pages/SupportPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { SwiftPage } from './pages/SwiftPage';

import ProtectedRoutes from '../Auth/ProtectedRoutes';
import { PermissionDenied } from './pages/PermissionDenied';
import { HomePage } from './pages/HomePage';
import { PasswordCodeRecover } from './pages/PasswordCodeRecover';
import { PasswordChange } from './pages/PasswordChange';
import { PasswordRecover } from './pages/PasswordRecover';
import { AccountVerify } from './pages/AccountVerify';

const MainRoutes = () => (
  <Routes>
    {/** Protected Routes */}
    {/* <Route path="/" element={<ProtectedRoutes />}> */}
    <Route path="/" element={<InnerContent />}>
      <Route path="/" element={<Navigate replace to="dashboard" />} />
      <Route
        path="dashboard"
        element={<Dashboard props={{ userName: 'Test' }} />}
      />
      <Route path="tabs" element={<SwiftPage />} />
      <Route path="transaction" element={<TransactionPage />} />
      <Route path="settings" element={<SettingsPage />} />
      <Route path="support" element={<SupportPage />} />
    </Route>
    <Route path="transaction" element={<TransactionPage />} />
    <Route path="settings" element={<SettingsPage />} />
    <Route path="support" element={<SupportPage />} />
    {/* </Route> */}

    {/** Public Routes */}
    <Route path="/home" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/passCodeRecover" element={<PasswordCodeRecover />} />
    <Route path="/passRecover" element={<PasswordRecover />} />
    <Route path="/passChange" element={<PasswordChange />} />
    <Route path="/accountVerify" element={<AccountVerify />} />

    {/** Permission denied route */}
    <Route path="/denied" element={<PermissionDenied />} />
  </Routes>
);

export default MainRoutes;
