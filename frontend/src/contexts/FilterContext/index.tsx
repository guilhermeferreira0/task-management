import React, {
  createContext,
  ReactNode,
  useState,
  useDeferredValue,
} from 'react';
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
  const deferedSearch = useDeferredValue(search);

  return (
    <Context.Provider
      value={{
        deferedSearch,
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
