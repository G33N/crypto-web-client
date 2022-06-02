import React from 'react';
import { Outlet } from 'react-router-dom';
import { Conteiner } from './styles';

const InnerContent = () => {
  return (
    <Conteiner>
      <Outlet />
    </Conteiner>
  );
};

export default InnerContent;
