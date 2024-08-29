import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from './components/MainPage';
import { FormPage } from './components/Login';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Toast } from './components/Toasts';
import 'react-toastify/dist/ReactToastify.css';

function App(): JSX.Element {
  return (
    <>
      <Toast />
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <MainPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}
export default App;
