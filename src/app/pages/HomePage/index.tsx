import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';


export function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="Omni wallet application homepage" />
      </Helmet>
      <NavBar />
      <PageWrapper>
      <span>My HomePage</span>
      </PageWrapper>
    </>
  );
}
