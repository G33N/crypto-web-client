import React from 'react';
import MainRoutes from './Routes';
import Sidebar from './components/Sidebar';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <div className="app">
        {/** Sidebar */}
        <Sidebar />

        {/** Inner container */}
        <MainRoutes />
      </div>
    </>
  );
}

export default App;
