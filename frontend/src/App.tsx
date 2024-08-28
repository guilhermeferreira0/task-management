import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from './components/MainPage';
import { FormPage } from './components/Login';
import { ProtectedRoute } from './components/ProtectedRoute';

function App(): JSX.Element {
  return (
    <>
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
