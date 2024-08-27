import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DashboardPage } from './components/Dashboard';
import { NavBar } from './components/Header';
import { MenuAside } from './components/Header/MenuAside';
import { MenuProvider } from './contexts/MenuContext';

function App(): JSX.Element {
  return (
    <>
      <MenuProvider>
        <NavBar />
        <MenuAside />
      </MenuProvider>
      <main className="absolute top-24 md:left-[25%] left-0 right-0">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
        </Routes>
      </main>
    </>
  );
}
export default App;
