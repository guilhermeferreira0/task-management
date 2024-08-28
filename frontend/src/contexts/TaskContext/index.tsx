import React, { createContext, ReactNode, useState } from 'react';
import { TaskProps, IFormTaskInput } from '../../types/taskProps';
import { registerTaskRequest } from '../../api/task';
import { TaskContextProps } from './types';

interface TaskProviderProps {
  children: ReactNode;
}

export const Context = createContext({} as TaskContextProps);

export function TaskProvider({ children }: TaskProviderProps) {
  const [allTasks] = useState([] as TaskProps[]);

  async function registerTask(data: IFormTaskInput) {
    const response = await registerTaskRequest(data);
    console.log(response);
  }

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
