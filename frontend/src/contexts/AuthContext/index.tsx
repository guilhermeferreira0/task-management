import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { UserProps } from '../../types/userProps';
import { AuthProps } from './type';
import { removeCookie, setCookie } from '../../services/cookies';
import {
  getUserLocalStorage,
  removeUserLocalStorage,
  setUserLocalStorage,
} from './util';

interface AuthProviderProps {
  children: ReactNode;
}

export const Context = createContext({} as AuthProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [userLogged, setUserLogged] = useState<null | UserProps>(null);

  function setUserContext(user: UserProps, token?: string) {
    setUserLogged({ username: user.username, email: user.email });
    setUserLocalStorage({ email: user.email, username: user.username });
    if (token) setCookie(token);
  }

  function logout() {
    setUserLogged(null);
    removeCookie();
    removeUserLocalStorage();
  }

  useEffect(() => {
    const user = getUserLocalStorage();
    if (!user) return;

    setUserLogged(user);
  }, []);

  return (
    <Context.Provider
      value={{
        userLogged,
        setUserLogged,
        logout,
        setUserContext,
      }}
    >
      {children}
    </Context.Provider>
  );
}
