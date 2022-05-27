import * as React from 'react';
import { Wrapper, PageWrapper } from './styles';
import { Logo } from './Logo';
import { Nav } from './Nav';

export function NavBar() {
  return (
    <Wrapper>
      <PageWrapper>
        <Logo />
        <Nav />
      </PageWrapper>
    </Wrapper>
  );
}
