import React, { useState } from 'react';
import { LoginPage } from './Login';
import { RegisterPage } from './Register';

export function FormPage() {
  const [loginPage, setLoginPage] = useState(false);

  return (
    <section className="p-8 max-w-3xl">
      {loginPage ? (
        <LoginPage setPage={setLoginPage} />
      ) : (
        <RegisterPage setPage={setLoginPage} />
      )}
    </section>
  );
}
