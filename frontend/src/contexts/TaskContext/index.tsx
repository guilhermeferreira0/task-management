/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { TaskProps, IFormTaskInput } from '../../types/taskProps';
import {
  deleteTaskRequest,
  getAllTasks,
  registerTaskRequest,
  updateTaskRequest,
} from '../../api/task';
import { TaskContextProps } from './types';
import { useAuth } from '../AuthContext/useAuth';

interface TaskProviderProps {
  children: ReactNode;
}

export const Context = createContext({} as TaskContextProps);

export function TaskProvider({ children }: TaskProviderProps) {
  const [allTasks, setAllTasks] = useState([] as TaskProps[]);
  const { userLogged } = useAuth();

  useEffect(() => {
    const fetchTask = async () => {
      const { data } = await getAllTasks();
      setAllTasks(data);
    };

    if (userLogged) fetchTask();

    return;
  }, []);

  return (
    <Context.Provider
      value={{
        allTasks,
      }}
    >
      {children}
    </Context.Provider>
  );
}
