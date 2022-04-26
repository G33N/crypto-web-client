import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';

export function RegisterPage() {
  return (
    <>
      <Helmet>
        <title>RegisterPage</title>
        <meta
          name="description"
          content="Omni wallet application registerpage"
        />
      </Helmet>
      <NavBar />
      <PageWrapper>
      <span>Crear mi cuenta</span>
      </PageWrapper>
    </>
  );
}
