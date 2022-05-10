import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
        <Title>Iniciar Sesión</Title>

        {/* <form onSubmit={handleSubmit}>          
          <label>
            Username
            <input name="email" type="email" />
          </label>{' '}
          <button type="submit">Login</button>
        </form> */}

        <BoxNavigation>
          <Label> No tenes cuenta ? </Label>
          <Links to="">Crear cuenta</Links>
        </BoxNavigation>
      </Conteiner>
    </>
  );
};

const Conteiner = styled.div`
  margin-top: ${StyleConstants.NAV_BAR_HEIGHT};
  padding: 4em;
  background: white;
  @media (min-width: 480px) {
    padding-left: 20%;
    padding-right: 25%;
  }
  @media (min-width: 720px) {
    padding-left: 30%;
    padding-right: 35%;
  }
  @media (min-width: 1040px) {
    padding-left: 35%;
    padding-right: 40%;
  }
`;
const Text = styled.p`
  font-size: 2rem;
  color: ${p => p.theme.textSecondary};
  font-weight: bold;
  width: 100%;
  text-align: left;
  display: block;
  margin-bottom: 13px;
  margin-top: 20px;
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 32px;
  letter-spacing: 0.0022em;
  color: ${p => p.theme.primary};
  margin-right: 1rem;
`;
const Label = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  text-align: center;
  color: ${p => p.theme.primary};
  margin-bottom: 13px;
  margin-top: 50px;
`;
const BoxNavigation = styled.div`
  text-align: center;
`;
const Links = styled(Link)`
  color: ${p => p.theme.primary};
  text-decoration: none;
  font-weight: 600;
  font-style: normal;
  font-size: 0.875rem;
  line-height: 1.375rem;
  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }
  &:active {
    opacity: 0.4;
  }
`;
