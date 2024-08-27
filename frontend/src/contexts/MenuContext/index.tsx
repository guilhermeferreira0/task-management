import React, { createContext, ReactNode, useState } from 'react';
import { MenuContextProps } from './types';

interface ContextProps {
  children: ReactNode;
}

export const Context = createContext({} as MenuContextProps);

export function MenuProvider({ children }: ContextProps) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <Context.Provider
      value={{
        menuIsOpen,
        setMenuIsOpen,
      }}
    >
      {children}
    </Context.Provider>
  );
}
