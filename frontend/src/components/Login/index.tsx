import React, { useState } from 'react';
import { LoginPage } from './Login';
import { RegisterPage } from './Register';

export function FormPage() {
  const [loginPage, setLoginPage] = useState(false);

  return (
    <section className="p-8 w-full h-svh flex justify-center items-center">
      {loginPage ? (
        <LoginPage setPage={setLoginPage} />
      ) : (
        <RegisterPage setPage={setLoginPage} />
      )}
    </section>
  );
}
