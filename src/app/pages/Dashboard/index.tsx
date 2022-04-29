import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyleConstants } from 'styles/StyleConstants';
import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';

export const Dashboard = ({ useAuth }) => {
  let auth = useAuth();
  let navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>LoginPage</title>
        <meta name="description" content="Omni wallet application Loginpage" />
      </Helmet>

      <Conteiner>
        <span>RUTA SOLO CON LOGIN</span>
        <Text>SOY EL DASHBOARD</Text>
        <div></div>{' '}
        <p>
          BIENVENIDO {auth.user}!{' '}
          <Button
            onClick={() => {
              auth.signout(() => navigate('/'));
            }}
          >
            CERRAR SESION
          </Button>
        </p>
      </Conteiner>
    </>
  );
};

const Conteiner = styled.div`
  margin-top: ${StyleConstants.NAV_BAR_HEIGHT};
  padding: 4em;
`;
const Text = styled.p`
  font-size: 2rem;
  color: ${p => p.theme.textSecondary};
  font-weight: bold;
  width: 100%;
  text-align: left;
  display: block;
  margin-bottom: 50px;
  margin-top: 20px;
`;
const Button = styled.div`
  background-color: ${p => p.theme.primary};
  color: ${p => p.theme.textSecondary};
  width: 250px;
  height: 60px;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  margin: 1rem;
  margin-top: 60px;
  padding: 1rem;
  border-radius: 0.75rem;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }
`;
