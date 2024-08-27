import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { UserProps } from '../../types/userProps';
import {
  loginRequest,
  registerRequest,
  userDetailsRequest,
} from '../../api/user';
import { AuthProps } from './type';
import { setCookie } from '../../services/cookies';
import { setUserLocalStorage } from './util';

interface AuthProviderProps {
  children: ReactNode;
}

export const Context = createContext({} as AuthProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [userLogged, setUserLogged] = useState<null | UserProps>(null);

  async function authenticate(user: UserProps) {
    try {
      const response = await loginRequest(user);
      setUserLogged(user);
      setCookie(response.token);
      setUserLocalStorage({ email: user.email });
      return true;
    } catch (e) {
      return false;
    }
  }

  async function registerUser(user: UserProps) {
    try {
      const response = await registerRequest({
        username: user.username,
        email: user.email,
      });
      setUserLogged(user);
      setCookie(response.token);
      setUserLocalStorage({ username: user.username, email: user.email });
      return true;
    } catch (e) {
      return false;
    }
  }

  function logout() {
    setUserLogged(null);
    setCookie('');
    setUserLocalStorage(null);
  }

  useEffect(() => {
    async function verifyUser() {
      try {
        const res = await userDetailsRequest();
        setUserLogged(res.data);
        setUserLocalStorage(res.data);
      } catch (e) {
        logout();
      }
    }
    verifyUser();

    return;
  }, []);

  return (
    <Context.Provider
      value={{
        authenticate,
        registerUser,
        userLogged,
        logout,
      }}
    >
      {children}
    </Context.Provider>
  );
}
