import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DashboardPage } from './components/Dashboard';
import { NavBar } from './components/Header';
import { MenuAside } from './components/Header/MenuAside';
import { MenuProvider } from './contexts/MenuContext';
import { FormPage } from './components/Login';

function App(): JSX.Element {
  return (
    <>
      <MenuProvider>
        <NavBar />
        <MenuAside />
      </MenuProvider>
      <main className="absolute top-24 md:left-[35%] lg:left-64 left-0 right-0">
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/" element={<FormPage />} />
        </Routes>
      </main>
    </>
  );
}
export default App;
