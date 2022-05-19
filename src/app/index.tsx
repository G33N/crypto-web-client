import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from 'react-router-dom';
import { GlobalStyle } from 'styles/global-styles';

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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>

      <GlobalStyle />
    </BrowserRouter>
  );
}

// interface AuthContextType {
//   user: any;
//   signin: (user: string, callback: VoidFunction) => void;
//   signout: (callback: VoidFunction) => void;
// }

// let AuthContext = React.createContext<AuthContextType>(null!);

// function AuthProvider({ children }: { children: React.ReactNode }) {
//   let [user, setUser] = React.useState<any>(null);

//   let signin = (newUser: string, callback: VoidFunction) => {
//     return fakeAuthProvider.signin(() => {
//       setUser(newUser);
//       callback();
//     });
//   };

//   let signout = (callback: VoidFunction) => {
//     return fakeAuthProvider.signout(() => {
//       setUser(null);
//       callback();
//     });
//   };

//   let value = { user, signin, signout };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }

// function useAuth() {
//   return React.useContext(AuthContext);
// }

// function AuthStatus() {
//   let auth = useAuth();
//   let navigate = useNavigate();

//   if (!auth.user) {
//     return <p> Loggeate para poder ver la pantalla sigueiente</p>;
//   }

//   return (
//     <p>
//       Welcome {auth.user}!{' '}
//       <button
//         onClick={() => {
//           auth.signout(() => navigate('/'));
//         }}
//       >
//         Sign out
//       </button>
//     </p>
//   );
// }

// function RequireAuth({ children }: { children: JSX.Element }) {
//   let auth = useAuth();
//   let location = useLocation();

//   if (!auth.user) {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   return children;
// }
