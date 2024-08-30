import React, { ReactNode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';
import { MenuProvider } from '../contexts/MenuContext';
import { FilterProvider } from '../contexts/FilterContext';

interface MockTestProps {
  children: ReactNode;
}

export function MockTest({ children }: MockTestProps) {
  return (
    <BrowserRouter>
      <AuthProvider>
        <MenuProvider>
          <FilterProvider>
            <Routes>
              <Route path="/" element={children} />
            </Routes>
          </FilterProvider>
        </MenuProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
