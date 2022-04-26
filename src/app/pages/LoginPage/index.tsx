import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import styled from 'styled-components/macro';

export function LoginPage() {
  return (
    <>
      <Helmet>
        <title>LoginPage</title>
        <meta name="description" content="Omni wallet application Loginpage" />
      </Helmet>
      <NavBar />
      <PageWrapper>
        <span>Pagina Login</span>
      </PageWrapper>
    </>
  );
}
const PageWrapper = styled.div`
   {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
