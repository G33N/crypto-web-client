import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { WrapperNav } from './styles';
import { ButtonLink } from '../ButtonLink';

export function Nav() {
  const location = useLocation();

  return (
    <WrapperNav>
      {location.pathname !== '/register' && (
        <ButtonLink path="/register" label="Register" />
      )}
      {location.pathname !== '/login' && (
        <ButtonLink path="/login" label="Login" />
      )}
      {location.pathname === '/home' && (
        <>
          <ButtonLink path="/login" label="Login" />
          <ButtonLink path="/register" label="Register" />
        </>
      )}
    </WrapperNav>
  );
}
