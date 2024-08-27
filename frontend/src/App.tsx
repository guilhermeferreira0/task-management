import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from './components/MainPage';
import { FormPage } from './components/Login';

function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/dashboard" element={<MainPage />} />
      </Routes>
    </>
  );
}
export default App;
