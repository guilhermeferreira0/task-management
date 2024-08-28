import { useContext } from 'react';
import { Context } from '.';

export function useTask() {
  return useContext(Context);
}
