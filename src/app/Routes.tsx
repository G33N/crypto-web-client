import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import InnerContent from './components/InnerContent';
import { Dashboard } from './pages/Dashboard';
import { TransactionPage } from './pages/TransactionPage';
import { SettingsPage } from './pages/SettingsPage';
import { SupportPage } from './pages/SupportPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';

import Tabs from './pages/SwiftPage/Tabs';
import Tab1 from './pages/SwiftPage/Tab1';
import Tab2 from './pages/SwiftPage/Tab2';
import Tab3 from './pages/SwiftPage/Tab3';

import ProtectedRoutes from '../Auth/ProtectedRoutes';
import PermissionDenied from './components/PermissionDenied';
import { HomePage } from './pages/HomePage';
import { PasswordCodeRecover } from './pages/PasswordCodeRecover';
import { PasswordChange } from './pages/PasswordChange';
import { PasswordRecover } from './pages/PasswordRecover';
import { AccountVerify } from './pages/AccountVerify';

const MainRoutes = () => (
  <Routes>
    {/** Protected Routes */}
    <Route path="/" element={<ProtectedRoutes />}>
      <Route path="/" element={<InnerContent />}>
        <Route path="/" element={<Navigate replace to="dashboard" />} />
        <Route
          path="dashboard"
          element={<Dashboard props={{ userName: 'Test crypto' }} />}
        />
        <Route path="tabs" element={<Tabs />}>
          <Route path="/tabs" element={<Navigate replace to="tab1" />} />
          <Route path="tab1" element={<Tab1 />} />
          <Route path="tab2" element={<Tab2 />} />
          <Route path="tab3" element={<Tab3 />} />
        </Route>
        <Route path="transaction" element={<TransactionPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="support" element={<SupportPage />} />
      </Route>
    </Route>

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
