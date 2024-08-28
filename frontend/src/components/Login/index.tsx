import React, { useState } from 'react';
import { LoginPage } from './Login';
import { RegisterPage } from './Register';
import backgroundImage from '../../assets/images/montain-bg.jpg';

export function FormPage() {
  const [loginPage, setLoginPage] = useState(false);

  return (
    <section className="p-8 w-full h-svh flex justify-center items-center">
      <div className="absolute -z-20 h-full w-full top-0 right-0">
        <img
          src={backgroundImage}
          alt="montain defalt"
          className="w-full h-full bg-cover"
        />
      </div>
      {loginPage ? (
        <LoginPage setPage={setLoginPage} />
      ) : (
        <RegisterPage setPage={setLoginPage} />
      )}
    </section>
  );
}
