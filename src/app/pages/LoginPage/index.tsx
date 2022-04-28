import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { StyleConstants } from 'styles/StyleConstants';
import styled from 'styled-components/macro';

export const LoginPage = ({ useAuth }) => {
  let navigate = useNavigate();

  let auth = useAuth();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let username = formData.get('username') as string;

    auth.signin(username, () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate('/dashboard');
    });
  }

  return (
    <>
      <Helmet>
        <title>LoginPage</title>
        <meta name="description" content="Omni wallet application Loginpage" />
      </Helmet>

      <Conteiner>
        <span>Form Login</span>
        <p>DEBE LOGEARSE PARA VER DASHBOARD</p>

        <form onSubmit={handleSubmit}>
          <label>
            Username: <input name="username" type="text" />
          </label>{' '}
          <button type="submit">Login</button>
        </form>
        <p>ingresar un nombre</p>
      </Conteiner>
    </>
  );
};

const Conteiner = styled.div`
  margin-top: ${StyleConstants.NAV_BAR_HEIGHT};
  padding: 4em;
`;
