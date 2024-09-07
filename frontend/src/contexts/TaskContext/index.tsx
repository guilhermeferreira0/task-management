import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { TaskProps } from '../../types/taskProps';
import { getAllTasks } from '../../api/task';
import { TaskContextProps } from './types';
import { useAuth } from '../AuthContext/useAuth';

interface TaskProviderProps {
  children: ReactNode;
}

export const Context = createContext({} as TaskContextProps);

export function TaskProvider({ children }: TaskProviderProps) {
  const [allTasks, setAllTasks] = useState([] as TaskProps[]);
  const { userLogged, logout } = useAuth();

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const { data } = await getAllTasks();
        setAllTasks(data);
      } catch (e) {
        if (e instanceof Error) logout();
      }
    };

    if (userLogged) fetchTask();

    return;
  }, [setAllTasks]);

  return (
    <Context.Provider
      value={{
        allTasks,
        setAllTasks,
      }}
    >
      {children}
    </Context.Provider>
  );
}
