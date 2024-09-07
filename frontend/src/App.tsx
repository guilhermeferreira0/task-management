import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MainPage } from './components/MainPage';
import { FormPage } from './components/Login';
import { Toaster } from 'sonner';
import 'react-toastify/dist/ReactToastify.css';
import { HomePage } from './components/HomePage';
import { useAuth } from './contexts/AuthContext/useAuth';
import { NotFound } from './components/NotFound';

function App(): JSX.Element {
  const { userLogged } = useAuth();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={userLogged ? <Navigate to="/dashboard" /> : <HomePage />}
        />
        <Route
          path="/login"
          element={userLogged ? <Navigate to="/dashboard" /> : <FormPage />}
        />
        <Route
          path="/dashboard"
          element={userLogged ? <MainPage /> : <Navigate to="/login" />}
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Toaster richColors />
    </>
  );
}
export default App;
