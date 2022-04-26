import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import styled from 'styled-components/macro';

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
const PageWrapper = styled.div`
   {
    display: flex 1;
    align-items: center;
    justify-content: space-between;
  }
`;
