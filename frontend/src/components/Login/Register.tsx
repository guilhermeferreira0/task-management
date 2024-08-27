import React from 'react';

interface LoginPageProps {
  setPage: (vl: boolean) => void;
}

export function RegisterPage({ setPage }: LoginPageProps) {
  return (
    <form action="" className="bg-blue-100 rounded-md p-5 flex flex-col gap-4">
      <h2 className="text-xl font-bold text-center">User Registration</h2>
      <div className="flex justify-between items-center gap-5">
        <label htmlFor="username" className="whitespace-nowrap">
          Username:
        </label>
        <input
          type="text"
          name="username"
          id="username"
          className="p-2 rounded-lg w-full"
        />
      </div>
      <div className="flex justify-between items-center gap-12">
        <label htmlFor="email" className="whitespace-nowrap">
          E-mail:
        </label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="email@example.com"
          className="p-2 rounded-lg w-full"
        />
      </div>
      <div className="flex justify-center items-center gap-6 mb-5">
        <label htmlFor="email">Password:</label>
        <input
          type="text"
          name="password"
          id="password"
          placeholder=""
          className="p-2 rounded-lg w-full"
        />
      </div>
      <div className="flex flex-col gap-5">
        <button type="button" className="w-full" onClick={() => setPage(true)}>
          Already have an account? Sign in.
        </button>
        <button
          type="submit"
          className="bg-blue-500 rounded-xl py-2 text-white text-base font-semibold hover:bg-blue-700 transition-all w-full"
        >
          Resgister
        </button>
      </div>
    </form>
  );
}
