import { useContext } from 'react';
import { Context } from './index';

export function useMenu() {
  return useContext(Context);
}
