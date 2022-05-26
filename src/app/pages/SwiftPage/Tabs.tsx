import React from 'react';
import { Outlet } from 'react-router-dom';
import { StyleConstants } from 'styles/StyleConstants';
import styled from 'styled-components/macro';

import TavNav from './TabNav';

const Tabs = () => {
  return (
    <Conteiner>
      <h1>swift page</h1>

      {/** Tab navigation  */}
      <TavNav />
      {/** Tab inner content */}
      <Outlet />
    </Conteiner>
  );
};

export default Tabs;

const Conteiner = styled.div`
  margin-top: ${StyleConstants.NAV_BAR_HEIGHT};
  padding: 4em;
  background: white;
`;
