import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DashboardPage } from './components/Dashboard';
import { NavBar } from './components/Header';
import { MenuAside } from './components/Header/MenuAside';

function App(): JSX.Element {
  return (
    <>
      <NavBar />
      <MenuAside />
      <main className="absolute top-24 z-20 md:left-[25%] left-0 right-0">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
        </Routes>
      </main>
    </>
  );
}
export default App;
