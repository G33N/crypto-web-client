import React from 'react';
import { Outlet } from 'react-router-dom';
import { ConteinerTabs } from './styles';

import TavNav from './TabNav';

const Tabs = () => {
  return (
    <ConteinerTabs>
      <h1>swift page</h1>

      {/** Tab navigation  */}
      <TavNav />
      {/** Tab inner content */}
      <Outlet />
    </ConteinerTabs>
  );
};

export default Tabs;
