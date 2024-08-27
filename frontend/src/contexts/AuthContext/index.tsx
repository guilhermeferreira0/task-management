import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { UserProps } from '../../types/userProps';
import {
  loginRequest,
  registerRequest,
  userDetailsRequest,
} from '../../api/user';
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
      return true;
    } catch (e) {
      return false;
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

  async function verifyUserToken() {
    try {
      const response = await userDetailsRequest();
      console.log(response);
      return true;
    } catch (e) {
      return false;
    }
  }

  useEffect(() => {
    const response = async () => {
      return await verifyUserToken();
    };

    if (!response) {
      setCookie('');
      setUserLogged({});
    }
  }, []);

  return (
    <Context.Provider
      value={{
        authenticate,
        registerUser,
        verifyUserToken,
      }}
    >
      {children}
    </Context.Provider>
  );
}
