import { useContext } from 'react';
import { Context } from '.';

export function useFilter() {
  return useContext(Context);
}
