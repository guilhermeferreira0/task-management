/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { TaskProps, IFormTaskInput } from '../../types/taskProps';
import { getAllTasks, registerTaskRequest } from '../../api/task';
import { TaskContextProps } from './types';

interface TaskProviderProps {
  children: ReactNode;
}

export const Context = createContext({} as TaskContextProps);

export function TaskProvider({ children }: TaskProviderProps) {
  const [allTasks, setAllTasks] = useState([] as TaskProps[]);

  async function registerTask(data: IFormTaskInput) {
    try {
      await registerTaskRequest(data);
      return true;
    } catch (e) {
      return false;
    }
  }

  useEffect(() => {
    const fetchTask = async () => {
      const { data } = await getAllTasks();
      setAllTasks(data);
    };
    fetchTask();
  }, []);

  return (
    <Context.Provider
      value={{
        allTasks,
        registerTask,
      }}
    >
      {children}
    </Context.Provider>
  );
}
