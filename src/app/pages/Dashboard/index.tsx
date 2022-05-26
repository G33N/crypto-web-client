import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyleConstants } from 'styles/StyleConstants';
import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';
import { AppwriteService } from 'services/appwrite';
import { Container } from 'styles/StyleElements';

export const Dashboard = () => {
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
    <>
      <Helmet>
        <meta name="description" content="Omni wallet application Loginpage" />
      </Helmet>

      <Container>
        <p>RUTA SOLO CON LOGIN</p>
        <Text>SOY EL DASHBOARD</Text>
        <div></div>{' '}
        <p>
          BIENVENIDO ! <Button onClick={closeSession}>CERRAR SESION</Button>
        </p>
      </Container>
    </>
  );
};

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
const Button = styled.button`
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
