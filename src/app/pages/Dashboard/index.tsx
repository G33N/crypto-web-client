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
        <p>SOY EL DASHBOARD</p>
        <p>
          BIENVENIDO {auth.user}!{' '}
          <button
            onClick={() => {
              auth.signout(() => navigate('/'));
            }}
          >
            CERRAR SESION
          </button>
        </p>
      </Conteiner>
    </>
  );
};

const Conteiner = styled.div`
  margin-top: ${StyleConstants.NAV_BAR_HEIGHT};
  padding: 4em;
`;
