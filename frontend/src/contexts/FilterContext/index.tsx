import React, { createContext, ReactNode, useState } from 'react';
import { FilterContextProps } from './type';
import { ProgressTaskProps } from '../../types/taskProps';

interface FilterProviderProps {
  children: ReactNode;
}

export const Context = createContext({} as FilterContextProps);

export function FilterProvider({ children }: FilterProviderProps) {
  const [search, setSearch] = useState('');
  const [categoryTask, setCategoryTask] = useState<ProgressTaskProps | null>(
    null,
  );

  return (
    <Context.Provider
      value={{
        search,
        setSearch,
        categoryTask,
        setCategoryTask,
      }}
    >
      {children}
    </Context.Provider>
  );
}
