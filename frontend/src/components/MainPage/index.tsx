import React, { useEffect } from 'react';
import { MenuProvider } from '../../contexts/MenuContext';
import { NavBar } from '../Header';
import { MenuAside } from '../Header/MenuAside';
import { DashboardPage } from '../Dashboard';
import { useNavigate } from 'react-router-dom';
import { getUserLocalStorage } from '../../contexts/AuthContext/util';
import { TaskProvider } from '../../contexts/TaskContext';
import { FilterProvider } from '../../contexts/FilterContext';
import { FooterPage } from '../Footer';

export function MainPage(): JSX.Element {
  const navigate = useNavigate();

  useEffect(() => {
    const user = getUserLocalStorage();
    if (!user) {
      navigate('/');
    }
    return;
  }, []);

  return (
    <>
      <TaskProvider>
        <MenuProvider>
          <FilterProvider>
            <NavBar />
            <MenuAside />

            <main className="absolute top-24 md:left-[40%] lg:left-64 left-0 right-0">
              <DashboardPage />
              <FooterPage />
            </main>
          </FilterProvider>
        </MenuProvider>
      </TaskProvider>
    </>
  );
}
