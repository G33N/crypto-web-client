import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppwriteService } from 'services/appwrite';
import styled from 'styled-components/macro';
import { ButtonLink } from '../ButtonLink';

export function Nav() {
  const location = useLocation();

  let navigate = useNavigate();

  const closeSession = () => {
    AppwriteService.logout()
      .then(res => {
        console.log('Success', res);
        localStorage.setItem('', '');
        setTimeout(() => {
          navigate('/home');
        }, 3000);
      })
      .catch(error => {
        console.log('Error', error);
      });
  };

  return (
    <Wrapper>
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
      {/* {location.pathname === '/dashboard' && (
          <Button onClick={closeSession}>Cerrar Sesion</Button>
        )} */}
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  margin-right: -1rem;

  @media (min-width: 480px) {
    .ButtonLink {display: none;
  }
  `;

const Button = styled.button`
  background-color: ${p => p.theme.primary};
  color: ${p => p.theme.background};
  cursor: pointer;
  margin: 1em;
  display: flex;
  padding: 0.25rem 1rem;
  border-radius: 0.75rem;
  align-items: center;

  &:hover {
    color: ${p => p.theme.background};
    background-color: ${p => p.theme.primary};
  }
`;
