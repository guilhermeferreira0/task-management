import React, { useEffect } from 'react';
import { MenuProvider } from '../../contexts/MenuContext';
import { NavBar } from '../Header';
import { MenuAside } from '../Header/MenuAside';
import { DashboardPage } from '../Dashboard';
import { useNavigate } from 'react-router-dom';
import { getUserLocalStorage } from '../../contexts/AuthContext/util';

export function MainPage(): JSX.Element {
  const navigate = useNavigate();

  useEffect(() => {
    const user = getUserLocalStorage();
    if (!user) navigate('/');
    return;
  }, []);

  return (
    <>
      <MenuProvider>
        <NavBar />
        <MenuAside />

        <main className="absolute top-24 md:left-[35%] lg:left-64 left-0 right-0">
          <DashboardPage />
        </main>
      </MenuProvider>
    </>
  );
}
