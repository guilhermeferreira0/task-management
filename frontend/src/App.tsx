import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LayoutPage } from './components/layout';
import { NavBar } from './components/Header';
import { MenuAside } from './components/Header/MenuAside';

function App(): JSX.Element {
  return (
    <>
      <NavBar />
      <MenuAside />
      <Routes>
        <Route path="/" element={<LayoutPage />} />
      </Routes>
    </>
  );
}
export default App;
