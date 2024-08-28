import React, { createContext, ReactNode, useState } from 'react';
import { MenuContextProps } from './types';
import { TaskProps } from '../../types/taskProps';

interface ContextProps {
  children: ReactNode;
}

export const Context = createContext({} as MenuContextProps);

export function MenuProvider({ children }: ContextProps) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [updateTaskModal, setUpdateTaskModal] = useState<TaskProps | null>(
    null,
  );

  return (
    <Context.Provider
      value={{
        menuIsOpen,
        setMenuIsOpen,
        modalIsOpen,
        setModalIsOpen,
        updateTaskModal,
        setUpdateTaskModal,
      }}
    >
      {children}
    </Context.Provider>
  );
}
