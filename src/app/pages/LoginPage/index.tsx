import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';

export function LoginPage() {
  return (
    <>
      <Helmet>
        <title>LoginPage</title>
        <meta
          name="description"
          content="Omni wallet application Loginpage"
        />
      </Helmet>
      <NavBar />
      <PageWrapper>
      <span>Pagina Login</span>
      </PageWrapper>
    </>
  );
}
