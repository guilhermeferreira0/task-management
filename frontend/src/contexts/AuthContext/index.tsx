import React, { createContext, ReactNode, useState } from 'react';
import { UserProps } from '../../types/userProps';
import { loginRequest, registerRequest } from '../../api/user';
import { AuthProps } from './type';
import { setCookie } from '../../services/cookies';

interface AuthProviderProps {
  children: ReactNode;
}

export const Context = createContext({} as AuthProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [, setUserLogged] = useState({});

  async function authenticate(user: UserProps) {
    try {
      const response = await loginRequest(user);
      setUserLogged(user);
      setCookie(response.token);
    } catch (e) {
      return;
    }
  }

  async function registerUser(user: UserProps) {
    try {
      const response = await registerRequest(user);
      setUserLogged(user);
      setCookie(response.token);
      return true;
    } catch (e) {
      return false;
    }
  }

  return (
    <Context.Provider
      value={{
        authenticate,
        registerUser,
      }}
    >
      {children}
    </Context.Provider>
  );
}
