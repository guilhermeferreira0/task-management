import React, { createContext, ReactNode, useState } from 'react';
import { UserProps } from '../../types/userProps';
import {
  loginRequest,
  registerRequest,
  userDeleteRequest,
  userUpdateRequest,
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
      setUserLogged({ username: user.username, email: user.email });
      setCookie(response.token);
      setUserLocalStorage({ email: user.email, username: user.username });
      return true;
    } catch (e) {
      return false;
    }
  }

  async function registerUser(user: UserProps) {
    try {
      const response = await registerRequest(user);
      setUserLogged({ username: user.username, email: user.email });
      setCookie(response.token);
      setUserLocalStorage({ username: user.username, email: user.email });
      return true;
    } catch (e) {
      return false;
    }
  }

  async function deleteUser() {
    try {
      await userDeleteRequest();
      return true;
    } catch (e) {
      return false;
    }
  }

  async function updateUser(user: UserProps) {
    try {
      await userUpdateRequest(user);
      setUserLogged({ username: user.username, email: user.email });
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

  return (
    <Context.Provider
      value={{
        authenticate,
        registerUser,
        userLogged,
        logout,
        setUserLogged,
        deleteUser,
        updateUser,
      }}
    >
      {children}
    </Context.Provider>
  );
}
